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