/* Recibir la instancia de sequelize */
import { DataTypes } from "sequelize";

const Skill = (sequelize) => {
    sequelize.define('Skill', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'skills',
        timeStamps: false
    })
}

export default Skill;