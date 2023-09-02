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
export const loginUser = async (req, res) => {
    const { email, password, type } = req.body;
    const hash = req.body.password;
    let model;

    type === 'user' ? model = User : model = Company;

    try {
        const account = await model.findOne({
            where: {
                email,
                status: 'activo'
            }
        })
        if(!account) return res.status(400).json({
            message: 'Información errada, intente nuevamente.'
        })
        const validPassword = bcrypt.compareSync(hash, account.password);
        if(!validPassword) return res.status(400).json({
            message: "Contraseña inválida, por favor intente nuevamente."
        })
        res.status(200).json({
            ok: true,
            uuid: account.id,
            message: 'inicio de sesión exitoso.'
        })
        res.send('login')
    }
    catch (error) {
    }
}
export const loginCompany = (req, res) => {
    res.send('login')
}