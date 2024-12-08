// registro-script.js

document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto (recarga de la página)

    // Aquí puedes agregar la lógica para manejar el registro, por ejemplo, enviar los datos a un servidor

    // Redirigir al usuario a la página principal
    window.location.href = 'index.html'; // Cambia 'index.html' por la URL de tu página principal si es necesario
});

// Validación de contraseñas
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;

if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden.');
    return;  // Evitar la redirección si las contraseñas no coinciden
}
