/* Trayendo lo necesario desde express */
import { Router } from "express";
/* Trayendo las variables de los controladores */
import { createService, addUserService, getServicesByCompany, getServicesByUser, updateService } from "../controllers/service.controller.js"

/* Creando el enrutador */
const router = Router();
/* rutas para crear los servicios */
router.post('/:id', createService);
router.put('/update/:id', updateService);
router.post('/add/user_id/service/service_id', addUserService );
router.get('/company/:id', getServicesByCompany );
router.get('/user/:id', getServicesByUser );


export default router;