const audioPlayer = document.getElementById("audioPlayer");
const playRandomButton = document.getElementById("playRandomButton");

const songs = [
    { title: "Canción 1", src: "Armistice.mp3" },
    { title: "Canción 2", src: "isitanywonder.mp3" },
    { title: "Canción 3", src: "gamespplay.mp3" },
    { title: "Canción 4", src: "barbiegirl.mp3" },
    { title: "Canción 5", src: "mambo5.mp3" },
    { title: "Canción 5", src: "Mariposas.mp3" },
    { title: "Canción 5", src: "Mariposas.mp3" },
    { title: "Canción 5", src: "lonoto.mp3" },
    { title: "Canción 5", src: "Tengounachica.mp3" }
];

// Función para reproducir una canción aleatoria
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];

    audioPlayer.src = song.src;
    audioPlayer.play();
}

// Event listener para el botón de reproducir canción aleatoria
playRandomButton.addEventListener("click", playRandomSong);
