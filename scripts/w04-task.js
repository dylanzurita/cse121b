/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Dylan Zurita",
    photo: "images/myImage.jpg",
    favoriteFoods:
    [
        "bbq ribs",
        "ceviche",
        "lasagna",
        "pancakes"
    ],
    hobbies : 
    [
        "play volleyball",
        "play ping pong",
        "cook",
        "camping"
    ],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push (
    {
        place: 'Mexico, Cancun',
        length: '6 months',
    
    },
    {    
        place: 'Ecuador, Quito',
        length: '20 years'
    }
);


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

const imageElement = document.querySelector("#photo");

imageElement.setAttribute ('src', myProfile.photo);
imageElement.setAttribute ('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent= food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let liH = document.createElement('li');
    liH.textContent= hobby;
    document.querySelector('#hobbies').appendChild(liH);
    
});

/* Places Lived DataList */

const dlElement = document.getElementById('places-lived');

        myProfile.placesLived.forEach(placeInfo => {
            const dtElement = document.createElement('dt');
            dtElement.textContent = placeInfo.place;

            const ddElement = document.createElement('dd');
            ddElement.textContent = placeInfo.length;

            dlElement.appendChild(dtElement);
            dlElement.appendChild(ddElement);
        });



// myProfile.placesLived.forEach(placesInf => {
//     let dt = document.createElement('dt');
//     dt.textContent = placesInf.place;
//     document.getElementById('places-lived').appendChild(dt); 

//     let dd = document.createElement('dd');
//     dt.textContent = placesInf.length;
//     document.getElementById('places-lived').appendChild(dd); 
// });

