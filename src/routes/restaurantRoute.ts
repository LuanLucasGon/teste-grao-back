import { Router } from "express";
import { RestaurantController } from "../controllers/RestaurantsController";

const router = Router();

router.get("/restaurants", RestaurantController.getRestaurants);

export default router;