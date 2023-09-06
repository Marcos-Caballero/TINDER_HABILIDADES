/* Trayendo lo necesario desde express */
import { Router } from "express";
/* Trayendo las variables de los controladores */
import { addSkills, deleteUser, getUserById, getUsers, updateUser } from "../controllers/user.controller.js"

/* Creando el enrutador */
const router = Router();

/* Traer y actualizar información de la base de datos */
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/update/:id', updateUser);
router.put('/delete/:id', deleteUser);
router.post('/add/skills/:id', addSkills);


export default router;