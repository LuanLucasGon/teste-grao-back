import { ItemsRepository } from "../repositories/ItemsRepository";
import { RestaurantsRepository } from "../repositories/RestaurantsRepository";
import { RestaurantService } from "../services/RestaurantService";
import { Request, Response } from "express";

const restaurantsRepository = new RestaurantsRepository();
const itemsRepository = new ItemsRepository();
const restaurantService = new RestaurantService(restaurantsRepository, itemsRepository);

export class RestaurantController{
  static async getRestaurants(req: Request, res: Response){
    try {
      const restaurants = await restaurantService.getRestaurants();
      res.status(200).json({ restaurants });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }

  static async getRestaurantById(req: Request, res: Response){
    try {
      const id = req.params.id;
      const restaurants = await restaurantService.getRestaurantById(id);
      res.status(200).json({ restaurants });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }

  static async getRestaurantItems(req: Request, res: Response){
    try {
      const id = req.params.id;
      const items = await restaurantService.getMenuItems(id);
      res.status(200).json({ items });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }

  static async searchRestaurants(req: Request, res: Response){
    try {
      const query = req.params.query as string;

      const restaurants = await restaurantService.searchRestaurant(query);

      res.status(200).json({ restaurants }); 
  } catch (error) {
      console.error("Erro na pesquisa:", error);

      if (!res.headersSent) { 
          res.status(500).json({ msg: "Erro interno no servidor" });
      }
  }
}
}