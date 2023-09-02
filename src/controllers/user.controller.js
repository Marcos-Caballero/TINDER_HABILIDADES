/* Importar información de la base de datos */
import { User } from "../database/connectionDB.js"
/* Encontrar los usuarios de la base */
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                status: 'Activo'
            },
            attributes: {
                exclude: ['password', 'status', 'createdAt', 'updatedAt']
            }
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json ({
            message: error.message})
    }
}
/* Actualizar informacion adicional del usuario */
export const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findByPk(id);
        if(!user) return res.status(404).json({
            message: 'Usuario no encontrado.'
        })
    
        user.set(req.body)
        await user.save();

        res.status(200).json({
            ok: true,
            message: '¡El perfil se ha actualizado exitosamente!'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message})
    }
}
/* Encontrar al usuario segun su ID */
export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findOne({
            where: {
                id,
                status: 'Activo'
            },
            attributes: {
                exclude: ['password', 'status', 'createdAt', 'updatedAt']
            }
        });
        if(!user) return res.status(404).json({
            message: 'Usuario no encontrado.'
        })
    
        res.status(200).json({
            ok: true,
            user
        })

    } catch (error) {
        res.status(500).json({
            message: error.message})
    }
}