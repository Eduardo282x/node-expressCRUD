import { Router } from "express";
import { methods as reserveController } from "../controllers/reserve.controller";

const router=Router();

router.post('/show', reserveController.getReserve)
router.post('/add', reserveController.addReserve)
router.delete('/delete/:Id', reserveController.deleteReserve)

export default router;