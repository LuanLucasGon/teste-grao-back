import MenuItemsModel, { IMenuItem } from "../models/MenuItemsModel";

export class ItemsRepository {
  async findAll(restaurant: string): Promise<IMenuItem[] | null>{
    return MenuItemsModel.find({ restaurant: restaurant });
  }

  async findByRegex(searchRegex: RegExp) {
    return await MenuItemsModel.find({ $or: [{ name: searchRegex }, { description: searchRegex }] }).populate('restaurant');
}
}