/* Iniciar sequelize */
import { Sequelize } from "sequelize";
/* Conexión a la base de datos */
const sequelize = new sequelize(
    process.env.POSTGRES_URL
)
/* Guardando lo anterior para exportarlo y usarlo en otro lugar */
export {
    sequelize
}

