/* Iniciar sequelize */
import { Sequelize } from "sequelize";
/* Importando los modelos */
import userModel from '../models/users.js';
import companyModel from '../models/companies.js';
import skillModel from '../models/skills.js';
import serviceModel from '../models/services.js';

/* Conexión a la base de datos */
const sequelize = new Sequelize(
    process.env.POSTGRES_URL
)

/*Llamando las instancias de cada modelo sequelize*/
userModel(sequelize);
companyModel(sequelize);
skillModel(sequelize);
serviceModel(sequelize);

/* Guardando los modelos*/
const { User, Company, Skill, Service } = sequelize.models;

/* Esbleciendo las relaciones entre tablas */
/* usuarios a habilidades y viceversa */
User.belongsToMany(Skill, { through: 'users_skills' });
Skill.belongsToMany(User, { through: 'users_skills' });
/* Empresas a servicios y viceversa */
Company.hasMany(Service, {
    foreignKey: 'company_id',
    sourceKey: 'id'
});
Service.belongsTo(Company, {
    foreignKey: 'company_id',
    targetKey: 'id'
});
/* Usuarios a servicios y viceversa */
User.hasMany(Service, {
    foreignKey: 'user_id',
    sourceKey: 'id'
});
Service.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
});

/* Guardando conexión a DB y modelos para exportarlo y usarlo en otro lugar */
export {
    sequelize,
    User,
    Company,
    Skill,
    Service
}

