/*Trayendo desde express*/
import { Router } from 'express';
import { registerUser, registerCompany } from '../controllers/auth.controller.js';

/* Creando el enrutador */
const router = Router();

/* creacion de usuarios */
router.post('/register', registerUser);
router.post('/register/company', registerCompany);

export default router;