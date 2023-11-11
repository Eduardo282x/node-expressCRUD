import { Router } from "express";
import { methods as userControllers } from "../controllers/users.controller";

const router=Router();

router.get('/', userControllers.getUsers)

export default router;