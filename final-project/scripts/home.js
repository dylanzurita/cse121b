let logo = "images/logo music.png";
const imageElement = document.querySelector("#logo").setAttribute('src', logo);
const forms = document.getElementById('forms');
const message = document.getElementById('message');
const gobutton = document.getElementById('go');

forms.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const selectedGenres = Array.from(forms.querySelectorAll('input[type=checkbox]:checked')).map(input => input.value);
    message.style.display = 'block';

    console.log(`The genres you selected ${selectedGenres}`);
});

gobutton.addEventListener ('click', function() {
    window.location.href = "song-comment.html";
});