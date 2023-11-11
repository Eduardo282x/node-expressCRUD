import { Router } from "express";

const router=Router();

router.get('/roles', (req,res) => {
    res.send('roles')
})

export default router;