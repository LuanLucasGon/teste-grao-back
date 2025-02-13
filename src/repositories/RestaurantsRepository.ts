import RestaurantModel, { IRestaurant } from "../models/RestaurantModels";

export class RestaurantsRepository {
  async findAll(): Promise<IRestaurant[] | null>{
    return RestaurantModel.find();
  }

  async findById(id: string): Promise<IRestaurant | null>{
    return RestaurantModel.findById(id);
  }
}