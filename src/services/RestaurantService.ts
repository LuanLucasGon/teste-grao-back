import { RestaurantDTO } from "../dtos/RestaurantsDTO";
import { IRestaurant } from "../models/RestaurantModels";
import { RestaurantsRepository } from "../repositories/RestaurantsRepository";

export class RestaurantService {
  private restaurantsRepository: RestaurantsRepository;

  constructor(restaurantsRepository: RestaurantsRepository){
    this.restaurantsRepository = restaurantsRepository;
  }

  async getRestaurants(): Promise<IRestaurant[] | null>{
    const restaurants = this.restaurantsRepository.findAll();

    if (!restaurants) {
      return null;
    }

    return restaurants;
  }

  async getRestaurantById(id: string): Promise<IRestaurant | null>{
    const restaurants = this.restaurantsRepository.findById(id);

    if (!restaurants) {
      return null;
    }

    return restaurants;
  }
}