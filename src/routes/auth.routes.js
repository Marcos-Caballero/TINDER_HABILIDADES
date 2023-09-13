/* Trayendo lo necesario desde express */
import { Router } from 'express';
/* trayendo las variables de los controladores */
import { registerUser, registerCompany } from '../controllers/auth.controller.js';

/* Creando el enrutador */
const router = Router();

/* creacion de usuarios */
router.post('/register/user', registerUser);     
router.post('/register/company', registerCompany);

export default router;