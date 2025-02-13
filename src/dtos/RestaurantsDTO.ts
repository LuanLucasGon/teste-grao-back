import { IMenuItem } from "../models/MenuItemsModel";

export interface RestaurantDTO {
    name: string,
    category: string,
    address: string,
    phone: string,
    rating: string
    description: string,
    iconUrl: string,
    coverUrl: string,
    menuItem: IMenuItem[],
}