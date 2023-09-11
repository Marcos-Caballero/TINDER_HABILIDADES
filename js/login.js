document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    try {
        const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contrasena }),
        });

        if (response.ok) {
        const data = await response.json();
          alert(data.mensaje); // Muestra el mensaje de éxito del backend
        } else {
        const data = await response.json();
          alert(data.error); // Muestra el mensaje de error del backend
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
    });
});
