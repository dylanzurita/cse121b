// declare and initialize globlar variables
let logo = "images/logo music.png";
const imageElement = document.querySelector("#logo").setAttribute('src', logo);
const songsElement = document.getElementById("song-player");

let songList = [];

//async displaySong function

const displaySong = (songList) => {
    songList.forEach (function (song) {
        const articleElement = document.createElement("article");

        const h3Element = document.createElement("h3");
        h3Element.textContent = song.songName;
        const h4Element = document.createElement("h4");
        h4Element.textContent = song.artist

        const videoElement = document.createElement("video");
        videoElement.setAttribute ('src', song.songUrl);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(h4Element);
        articleElement.appendChild(videoElement);

        songsElement.appendChild(articleElement);
    });
};

/* async getSongs Function using fetch()*/

const getSongs = async() => {
    const response = await fetch("https://dylanzurita.github.io/cse121b/song.html");
    if (response.ok){
        const data = await response.json();
        songList = data;
        const randomSong = data[Math.floor(Math.random() * data.length)];
        displaySong(songList);

    }

};

/* reset Function */

const reset = () => {
    songsElement.innerHTML = " ";
};

// random song


getSongs();