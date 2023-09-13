document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const tipoCuentaSelect = document.getElementById('tipoCuenta'); // Agrega el ID del campo select

    registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const numeroDocumento = document.getElementById('numeroDocumento').value;

      // Obtiene el valor seleccionado en el campo "Eres persona o empresa"
    const tipoCuenta = tipoCuentaSelect.value;

// Define la ruta de acción en función de la opción seleccionada
    let action;
    if (tipoCuenta === 'user') {
        action = '/api/auth/register';
    } else if (tipoCuenta === 'company') {
        action = '/api/auth/register/company';
    }

    try {
        const response = await fetch(action, { // Utiliza la acción calculada
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, contrasena, tipoDocumento, numeroDocumento }),
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

// Función para abrir un modal específico
function openModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.style.display = 'block';
}

// Función para cerrar un modal específico
function closeModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.style.display = 'none';
}
