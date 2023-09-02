/* Trayendo lo necesario desde express */
import { Router } from "express";
import {getUsers, updateUser } from "../controllers/user.controller.js"

/* Creando el enrutador */
const router = Router();

/* Traer los usuarios de la base de datos */
router.get('/', getUsers);
router.put('/update/:id', updateUser);


export default router;