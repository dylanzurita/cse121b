let logo = "images/logo music.png";
const imageElement = document.querySelector("#logo").setAttribute('src', logo);


const audioPlayer = document.getElementById("audioPlayer");
const playRandomButton = document.getElementById("playRandomButton");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");


const songs = [
    { title: "Armistice", artist: "Phoenix" ,src: "Armistice.mp3" },
    { title: "Is it any Wonder?",artist: "Keane" , src: "isitanywonder.mp3" },
    { title: "Games People play", artist: "Inner circle" ,src: "gamespplay.mp3" },
    { title: "Barbie Girl", artist: "Aqua" ,src: "barbiegirl.mp3" },
    { title: "Mambo Number 5", artist: "Lou Bega" ,src: "mambo5.mp3" },
    { title: "Mariposas", artist: "Enanitos verdes" ,src: "Mariposas.mp3" },
    { title: "A 1000km", artist: "Verde 70" ,src: "a1000km.mp3" },
    { title: "Lo noto", artist: "Hombres G" ,src: "lonoto.mp3" },
    { title: "Tengo una chica",artist: "Hombres G" , src: "Tengounachica.mp3" }
];

// Función para reproducir una canción aleatoria
function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];

    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.src = song.src;
    audioPlayer.play();
}
function finishProgram () {
    window.location.href="finish.html";
}

// Event listener para el botón de reproducir canción aleatoria
playRandomButton.addEventListener("click", playRandomSong);