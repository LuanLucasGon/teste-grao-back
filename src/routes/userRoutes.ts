import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { checkToken } from "../middlewares/checkToken";

const router = Router();

router.get("/user/:id", checkToken, UserController.getUser);

export default router;