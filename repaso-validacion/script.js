// 1. Seleccionar los elementos del DOM que necesitamos
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

// 2. Escuchar el evento 'submit' del formulario
form.addEventListener('submit', (event) => {
    // Esta línea es muy importante
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const nameError = document.getElementById('name-error');
    // Aquí irá nuestra lógica de validación
    console.log('Formulario enviado...');
    if (nameValue === "") {
        // 1. Mostrar mensaje de error
        nameError.textContent = 'El nombre es obligatorio.';
        nameError.classList.add('visible');

        // 2. Añadir clase de estilo al input
        nameInput.classList.add('invalid');
    }
});