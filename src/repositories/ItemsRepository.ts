import MenuItemsModel, { IMenuItem } from "../models/MenuItemsModel";

export class ItemsRepository {
  async findAll(restaurant: string): Promise<IMenuItem[] | null>{
    return MenuItemsModel.find({ restaurant: restaurant });
  }
}