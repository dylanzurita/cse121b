/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.getElementById("temples");

let templeList = [];

/* async displayTemples Function */

const displayTemples = (templeList) => {
    templeList.forEach (function (temple) {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imageElement = document.createElement("img");
        imageElement.setAttribute ('src', temple.imageUrl);
        imageElement.setAttribute ('alt', temple.location);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imageElement);

        templesElement.appendChild(articleElement);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
    }

};

/* reset Function */

const reset = () => {
    templesElement.innerHTML = " ";
};

/* sortBy Function */

const sortBy = (temples) => {
    reset ();
    const filter = document.getElementById('sortBy').value;

    switch (filter) {
        case "utah":
            const utahTemples = temples.filter ((temple) => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            const nonUtahTemples = temples.filter((temple) => !temple.location.includes("Utah"));
            displayTemples(nonUtahTemples);
            break;
        case "older":
            const older = temples.filter ((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(older);
            break;

        case "all":
            displayTemples(temples);
            break;

    }
};



/* Event Listener */

document.querySelector("#sortBy").addEventListener ("change" , () => { sortBy(templeList) });
getTemples();
