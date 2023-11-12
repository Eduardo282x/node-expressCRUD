import { Router } from "express";
import { methods as rolesControllers } from "../controllers/roles.controller";

const router=Router();

router.get('/', rolesControllers.getRoles)


export default router;