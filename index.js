/* llamando las dependencias importadas */
import 'dotenv/config';
import app from "./src/app.js";
import { sequelize } from './src/database/connectionDB.js';

/* Levantando el servidor */
const port = 3002 || process.env.PORT;

(async () => {
    try {
        await sequelize.sync( {force: false} );
        app.listen(port, () => console.log(`El servidor esta corriendo en el puerto ${port}`));
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
})();

// Obtener referencias a los elementos necesarios
const userButton = document.getElementById('userButton');
const companyButton = document.getElementById('companyButton');
const registerLink = document.querySelector('[data-action="redirectToRegister"]');

// Agregar eventos de clic a los botones y el enlace
userButton.addEventListener('click', () => {
    // Redirigir a la ruta de registro de usuario
    window.location.href = '/api/auth/register';
});

companyButton.addEventListener('click', () => {
    // Redirigir a la ruta de registro de empresa
    window.location.href = '/api/auth/register/company';
});

registerLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar que el enlace siga la URL
    // Redirigir a la página de registro
    window.location.href = '/ruta-de-registro'; // Reemplaza con la ruta correcta
});
