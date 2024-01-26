import { Router } from "express";
import { methods as userControllers } from "../controllers/users.controller";

const router=Router();

router.get('/show', userControllers.getUsers);
router.post('/add', userControllers.addUsers);
router.post('/profile/:Id', userControllers.updateOneUser);
router.post('/update/:Id', userControllers.updateUsers);
router.delete('/delete/:Id', userControllers.deleteUsers);

export default router;