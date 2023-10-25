// // declare and initialize globlar variables
// let logo = "images/logo music.png";
// const imageElement = document.querySelector("#logo").setAttribute('src', logo);
// const songsElement = document.getElementById("song-player");

// let songList = [];

// //async displaySong function

// const displaySong = (songList) => {
//     songList.forEach (function (song) {
//         const articleElement = document.createElement("article");

//         const h3Element = document.createElement("h3");
//         h3Element.textContent = song.songName;
//         const h4Element = document.createElement("h4");
//         h4Element.textContent = song.artist

//         const videoElement = document.createElement("video");
//         videoElement.setAttribute ('src', song.songUrl);

//         articleElement.appendChild(h3Element);
//         articleElement.appendChild(h4Element);
//         articleElement.appendChild(videoElement);

//         songsElement.appendChild(articleElement);
//     });
// };

// /* async getSongs Function using fetch()*/

// const getSongs = async() => {
//     const response = await fetch("https://dylanzurita.github.io/cse121b/song.html");
//     if (response.ok){
//         const data = await response.json();
//         songList = data;
//         displaySong(songList);

//     }

// };
// getSongs();
// /* reset Function */

// const reset = () => {
//     songsElement.innerHTML = " ";
// };

document.addEventListener("DOMContentLoaded", function () {
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    const videoContainer = document.getElementById("video-container");
    const playButton = document.getElementById("play-button");

    function playRandomSong() {
        // URL of your JSON file containing songs
        const jsonUrl = "URL_TO_YOUR_JSON_FILE.json";

        // Fetch the JSON data
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((songs) => {
                const randomIndex = Math.floor(Math.random() * songs.length);
                const randomSong = songs[randomIndex];

                songTitle.textContent = randomSong.songName;
                songArtist.textContent = randomSong.artist;

                // Create an iframe to embed the YouTube video
                const videoIframe = document.createElement("iframe");
                videoIframe.src = randomSong.songUrl;
                videoIframe.width = "560"; // Set the width and height as needed
                videoIframe.height = "315";

                videoContainer.innerHTML = ""; // Clear the previous video
                videoContainer.appendChild(videoIframe);
            })
            .catch((error) => {
                console.error("Error fetching JSON data:", error);
            });
    }

    playButton.addEventListener("click", playRandomSong);

    // Initial display
    playRandomSong();
});








