/* Importar información de la base de datos */
import { Company } from "../database/connectionDB.js"

/* Encontrar a la empresa */
export const getCompany = async (req, res) => {
    const { id } = req.params;

    try {
        const company = await Company.findOne({
            where: {
                id,
                status: 'Activo'
            },
            attributes: {
                exclude: ['password', 'status', 'createdAt', 'updatedAt']
            }
        });
        if(!company) return res.status(404).json({
            message: 'Empresa no encontrada.'
        })
    
        res.status(200).json({
            ok: true,
            company
        })

    } catch (error) {
        res.status(500).json({
            message: error.message})
    }
}

/* Actualizar información de las empresas */
export const updateCompany = async (req, res) => {
    const { id } = req.params;

    try {
        const company = await Company.findByPk(id);
        if(!company) return res.status(404).json({
            message: 'Empresa no encontrada.'
        })
    
        company.set(req.body)
        await company.save();

        res.status(200).json({
            ok: true,
            message: '¡La empresa se ha actualizado exitosamente!'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message})
    }
}


/* Desactivar informacion del usuario */
export const deleteCompany = async (req, res) => {
    const { id } = req.params;

    try {
        const company = await Company.findByPk(id);
        if(!company) return res.status(404).json({
            message: 'Empresa no encontrada.'
        })
    
        company.set(req.body)
        await company.save();

        res.status(200).json({
            ok: true,
            message: '¡La empresa se ha eliminado exitosamente!'
        })

    } catch (error) {
        res.status(500).json({
            message: error.message})
    }
}