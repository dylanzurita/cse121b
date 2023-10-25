document.addEventListener("DOMContentLoaded", function () {
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    const videoElement = document.getElementById("video-element");
    const playButton = document.getElementById("play-button");
    
    
    const songs = [
    {
        "songName": "Tengo una chica",
        "artist": "Hombres G",
        "songPath": "documentos/songs/Tengo una chica.mp4"
    },
    {
        "songName": "La carretera",
        "artist": "Hombres G",
        "songPath": "documentos/songs/La carretera.mp4"
    },
    {
        "songName": "En la playa",
        "artist" : "Hombres G",
        "songPath": "documentos/songs/En la playa.mp4"
    },
    {
        "songName": "Si no te tengo a ti",
        "artist" : "Hombres G",
        "songPath": "documentos/songs/Si no te tengo a ti.mp4"
    },
    {
        "songName": "Ojala pudiera borrarte",
        "artist" : "Mana",
        "songPath": "documentos/songs/Ojala Pudiera Borrarte..mp4"
    },
    {
        "songName": "Mariposas",
        "artist" : "Enanitos verdes",
        "songPath": "documentos/songs/Mariposas.mp4"
    },
    {
        "songName": "A 1000km",
        "artist" : "Verde 70",
        "songPath": "documentos/songs/a1000km.mp4"
    },
    {
        "songName": "Is it any wonder?",
        "artist" : "Keane",
        "songPath": "documentos/songs/IsItAnyWonder.mp4"
    },
    {
        "songName": "Tanto ganas tanto pierdes",
        "artist" : "Verde 70",
        "songPath": "documentos/songs/TANTOGANASTANTOPIERDES.mp4"
    },
    {
        "songName": "Sentimettal",
        "artist" : "Moderatto",
        "songPath": "documentos/songs/Sentimettal.mp4"
    },
    {
        "songName": "Babie girl",
        "artist" : "Aqua",
        "songPath": "documentos/songs/BarbieGirl.mp4"
    },
    {
        "songName": "Mambo No 5",
        "artist" : "Lou Bega",
        "songPath": "documentos/songs/MamboNo5.mp4"
    },
    {
        "songName": "Games people play",
        "artist" : "Inner Circle",
        "songPath": "documentos/songs/GamesPeoplePlay.mp4"
    },
    {
        "songName": "Lo Noto",
        "artist" : "Hombres G",
        "songPath": "documentos/songs/LoNoto.mp4"
    },
    {
        "songName": "Armistice",
        "artist" : "Phoenix",
        "songPath": "documentos/songs/Armistice.mp4"
    }
];

  

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const randomSong = songs[randomIndex];

    songTitle.textContent = randomSong.songName;
    songArtist.textContent = randomSong.artist;

    // Set the source of the video element to the local file
    videoElement.src = randomSong.songPath;

    // Play the selected song
    videoElement.play();
    }

    playButton.addEventListener("click", playRandomSong);

    // Initial display
    playRandomSong();
});