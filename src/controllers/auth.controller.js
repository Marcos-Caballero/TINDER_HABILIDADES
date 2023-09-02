/* Para agregar un poco de seguridad */
import bcrypt from 'bcrypt';
/* trayendo la info de la base de datos */
import { User, Company } from '../database/connectionDB.js'


/* Variables para registrar usuarios */
export const registerUser = async (req, res) => {
    const { email, password, first_name, last_name } = req.body;
/*Encriptando la info ingresada  */
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
/* Validar si ya estan registrados */
    try {
        const user = await User.findOne({
            where: { email }
        }) 
        if(user) return res.status(404).json({
            message: 'El usuario ya está registrado.'
        })
        const newUser = await User.create({
            first_name,
            last_name,
            email,
            password: hash,
            rest
            })
        
        return res.status(201).json({
            ok: true,
            user: newUser,
            message: 'El usuario se ha registrado exitosamente.'
        })
        
    } catch (error) {
            res.status(500).json({
            })
        }
    }

/* variables para registrar empresas */
export const registerCompany = async (req, res) => {
    const { email, password, name, nit, adress, phone } = req.body;
/* Para encriptar la info ingresada */
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
/* Validar si ya estan registrados */
    try {
        const company = await Company.findOne({
            where: { email }
        }) 
        if(company) return res.status(404).json({
            message: 'El usuario ya está registrado.'
        })
        const newCompany = await Company.create({
            name,
            nit,
            email,
            password: hash,
            adress,
            phone
            })
        
        return res.status(201).json({
            ok: true,
            user: newCompany,
            message: 'El usuario se ha registrado exitosamente.'
        })
        
    } catch (error) {
            res.status(500).json({
            })
        }
    }

/* Variables para iniciar sesion */
export const loginUser = (req, res) => {
    res.send('register')
}
export const loginCompany = (req, res) => {
    res.send('register')
}