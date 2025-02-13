import RestaurantModel, { IRestaurant } from "../models/RestaurantModels";

export class RestaurantsRepository {
  async findAll(): Promise<IRestaurant[] | null>{
    return RestaurantModel.find();
  }
}