import { RestaurantsRepository } from "../repositories/RestaurantsRepository";
import { RestaurantService } from "../services/RestaurantService";
import { Request, Response } from "express";

const restaurantsRepository = new RestaurantsRepository();
const restaurantService = new RestaurantService(restaurantsRepository);

export class RestaurantController{
  static async getRestaurants(req: Request, res: Response){
    try {
      const restaurants = await restaurantService.getRestaurants();
      console.log(restaurants)
      res.status(200).json({ restaurants });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }
}