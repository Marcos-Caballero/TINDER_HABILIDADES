import { Router } from "express";
import { getCompany, updateCompany, deleteCompany } from "../controllers/company.controller.js";

const router = Router();

router.get('/:id', getCompany);
router.get('/update/:id', updateCompany);
router.get('/delete/:id', deleteCompany);

export default router;