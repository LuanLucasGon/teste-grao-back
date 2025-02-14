import { RestaurantDTO } from "../dtos/RestaurantsDTO";
import { IMenuItem } from "../models/MenuItemsModel";
import { IRestaurant } from "../models/RestaurantModels";
import { ItemsRepository } from "../repositories/ItemsRepository";
import { RestaurantsRepository } from "../repositories/RestaurantsRepository";

export class RestaurantService {
  private restaurantsRepository: RestaurantsRepository;
  private itemsRepository: ItemsRepository;

  constructor(restaurantsRepository: RestaurantsRepository, itemsRepository: ItemsRepository){
    this.restaurantsRepository = restaurantsRepository;
    this.itemsRepository = itemsRepository;
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

  async getMenuItems(restaurantId: string): Promise<IMenuItem[] | null>{
    const items = this.itemsRepository.findAll(restaurantId);

    if (!items) {
      return null;
    }

    return items;
  }
}