import { Router } from "express";
import { RestaurantController } from "../controllers/RestaurantsController";

const router = Router();

router.get("/restaurants", RestaurantController.getRestaurants);
router.get("/restaurants/:id", RestaurantController.getRestaurantById);
router.get("/restaurants/items/:id", RestaurantController.getRestaurantItems);

export default router;