/* Trayendo lo necesario desde express */
import { Router } from "express";
import { createService } from "../controllers/service.controller.js"

/* Creando el enrutador */
const router = Router();

router.post('/:id', createService)

export default router;