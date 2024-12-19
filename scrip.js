//selecciona el botón y el texto principal
const button = document.getElementById('change-text-btn');
const mainText = document.getElementById('main-text');

//Agregar un evento click al botón
button.addEventListener('click', function(){
    mainText.textContent = "¡El texto ha sido cambiado! Ahora tienes mas contenido dinamico";
});
