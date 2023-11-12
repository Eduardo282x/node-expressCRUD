import { Router } from "express";
import { methods as authenticationControllers } from "../controllers/authentication.controller";

const router=Router();

router.get('/', authenticationControllers.getUsers)

export default router;