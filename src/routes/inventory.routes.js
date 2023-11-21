import { Router } from "express";
import { methods as inventoryController } from "../controllers/inventory.controller";

const router=Router();

router.get('/show', inventoryController.getInventory)
router.post('/add', inventoryController.addInventory)
router.delete('/delete/:Id', inventoryController.deleteInventory)

export default router;