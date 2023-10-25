// Obtener el formulario y el mensaje
const formularioGeneros = document.getElementById('formularioGeneros');
const mensaje = document.getElementById('mensaje');

// Agregar un manejador de eventos para el envío del formulario
formularioGeneros.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los géneros seleccionados
    const generosSeleccionados = Array.from(formularioGeneros.querySelectorAll('input[type=checkbox]:checked')).map(input => input.value);

    // Mostrar el mensaje
    mensaje.style.display = 'block';

    // Puedes hacer algo con los géneros seleccionados, por ejemplo, enviarlos a un servidor o mostrarlos en el mensaje.
    // En este ejemplo, simplemente se muestran en la consola.
    console.log('Géneros seleccionados:', generosSeleccionados);
});