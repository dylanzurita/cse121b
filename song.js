document.addEventListener("DOMContentLoaded", function () {
    const jsonContainer = document.getElementById("json-container");

    // Datos JSON
    const data = [
        {
            "songName": "Tengo una chica",
            "artist": "Hombres G",
            "songUrl": "https://www.youtube.com/watch?v=QglzAvLGVFE&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=1"
        },
        {
            "songName": "La carretera",
            "artist": "Hombres G",
            "songUrl": "https://www.youtube.com/watch?v=FonUphKg_TE&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=2"
        },
        {
            "songName": "En la playa",
            "artist" : "Hombres G",
            "songUrl": "https://www.youtube.com/watch?v=FMoYriFQaFM&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=3"
        },
        {
          "songName": "Si no te tengo a ti",
          "artist" : "Hombres G",
          "songUrl": "https://www.youtube.com/watch?v=BSclhmIW5_4&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=4"
        },
        {
          "songName": "Ojala pudiera borrarte",
          "artist" : "Mana",
          "songUrl": "https://www.youtube.com/watch?v=3pkWeWDn25I&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=6"
        },
        {
          "songName": "Mariposas",
          "artist" : "Enanitos verdes",
          "songUrl": "https://www.youtube.com/watch?v=0ITLTAyrP10&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=7"
        },
        {
          "songName": "A 1000km",
          "artist" : "Verde 70",
          "songUrl": "https://www.youtube.com/watch?v=1SJ7f61-3Zc&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=8"
        },
        {
            "songName": "Is it any wonder?",
            "artist" : "Keane",
          "songUrl": "https://www.youtube.com/watch?v=fVe_KVzBFOo&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=9"
        },
        {
          "songName": "Tanto ganas tanto pierdes",
          "artist" : "Verde 70",
          "songUrl": "https://www.youtube.com/watch?v=DbECwfOasIA&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=10"
        },
        {
          "songName": "Sentimettal",
          "artist" : "Moderatto",
          "songUrl": "https://www.youtube.com/watch?v=Y0XYgfzB0vk&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=11"
        },
        {
          "songName": "La bomba loca",
          "artist" : "Gustavo Cordera",
          "songUrl": "https://www.youtube.com/watch?v=LO8PxWiHwJ4&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=12"
        },
        {
          "songName": "Ni para ti ni para nadie",
          "artist" : "Verde 70",
          "songUrl": "https://www.youtube.com/watch?v=E_wimkCpXus&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=13"
        },
        {
          "songName": "Óleo de mujer con sombrero",
          "artist" : "Silvio Rodriguez",
          "songUrl": "https://www.youtube.com/watch?v=ZQwp-qmbwaE&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=14"
        },
        {
          "songName": "Que sí",
          "artist" : "Mon Laferte",
          "songUrl": "https://www.youtube.com/watch?v=GwLRtdSqbTM&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=15"
        },
        {
          "songName": "La chica del gorro azul",
          "artist" : "La oreja de Van gogh",
          "songUrl": "https://www.youtube.com/watch?v=gN7yr5XjB24&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=18"
        },
        {
          "songName": "Todos tenemos un amor",
          "artist" : "La Mosca Tse Tse",
          "songUrl": "https://www.youtube.com/watch?v=SR1VHK7uDYE&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=19"
        },
        {
          "songName": "No puedo estar sin ti",
          "artist" : "Verde 70",
          "songUrl": "https://www.youtube.com/watch?v=x9nABYO51wk&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=20"
        },
        {
          "songName": "Mojada",
          "artist" : "Vilma Palma",
          "songUrl": "https://www.youtube.com/watch?v=9oojjEu14fY&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=21"
        },
        {
          "songName": "Quien fuera",
          "artist" : "Silvio Rodriguez",
          "songUrl": "https://www.youtube.com/watch?v=hUwDnWkVMwU&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=23"
        },
        {
          "songName": "Armistice",
          "artist" : "Phoenix",
          "songUrl": "https://www.youtube.com/watch?v=AabRFS8t1BI&list=PL3wcCKW-YtK7g6OzzP35BzLqLrJpRJBu9&index=17"
        }
    ];

    // Formatear los datos JSON en una cadena legible
    const formattedJSON = JSON.stringify(data, null, 2);

    // Mostrar el JSON formateado en la página
    jsonContainer.textContent = formattedJSON;
});