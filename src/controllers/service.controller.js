/* Trayendo la informacion de la base de datos */
import { Company, Service,  } from "../database/connectionDB.js"
/* Variable para crear servicios */
export const createService = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body

    try {
        const service = await Service.create({
            name,
            description,
            company_id:  id
        })

        return res.status(201).json({
            ok: true,
            service
        })
    }catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const addUserService = async (req, res) => {
    const service_id = Number(req.params.service_id);
    const user_id = req.params.user_id;
    const { status } = req.body;

    try {
        const user = await User.findByPk(user_id)
        const service = await Service.findByPk(service_id)

        if(!service) return res.status(404).json({
            message: 'No se encontró el servicio.'
        })
        if(!user) return res.status(404).json({
            message: 'No se encontró el usuario.'
        })
        service.status = status;
        service.price_total = service.duration * user.fee;
        service.user_id = user_id;

        await service.save();
        
        return res.status(200).json({ 
            ok: true,
            service
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getServicesByCompany = async (req, res) => {
    const { id } = req.params;
    try {
        const services = await Service.findAll({
            where: {
                company_id: id
            },
            include: {
                model: User,
            }
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json ({
            message: error.message})
    }
}

export const getServicesByUser = async (req, res) => {
    const { id } = req.params;
    try {
        const services = await Service.findAll({
            where: {
                user_id: id
            },
            include: {
                model: Company,
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