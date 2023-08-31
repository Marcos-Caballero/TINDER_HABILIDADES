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
})()