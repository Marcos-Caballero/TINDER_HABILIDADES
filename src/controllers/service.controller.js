/* Trayendo la informacion de la base de datos */
import { Company, Service} from "../database/connectionDB.js"
/* Variable para crear servicios */
export const createService = async (req, res) => {

    const { id } = req.params;
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

    }
}