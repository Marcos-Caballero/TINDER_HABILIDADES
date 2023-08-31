/* Recibir la instancia de sequelize */
import { DataTypes } from "sequelize";

const Company = (sequelize) => {
    sequelize.define('Company', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('Activo', 'Inactivo'),
            defaultValue: 'Activo'
        }
    }, {
        tableName: 'companies'
    })
}

export default Company;