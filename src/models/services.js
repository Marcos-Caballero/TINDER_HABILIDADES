/* Recibir la instancia de sequelize */
import { DataTypes } from "sequelize";

const Service = (sequelize) => {
    sequelize.define('Service', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        } ,
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_total: {
            type: DataTypes.DECIMAL(10, 2),
            defaultValue: 0
        },
        status: {
            type: DataTypes.ENUM('Creado', 'Asigando', 'En proceso', 'Finalizado'),
            defaultValue: 'Creado'
        },
    }, {
        tableName: 'services',
        timeStamps: false
    })
}

export default Service; 