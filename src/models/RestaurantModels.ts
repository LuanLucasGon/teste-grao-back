  import mongoose, {Document, model, Schema} from "mongoose";
  import { IMenuItem } from "./MenuItemsModel";

  export interface IRestaurant extends Document {
    name: string,
    category: string,
    address: string,
    phone: string,
    rating: string
    description: string,
    iconUrl: string,
    coverUrl: string,
  }

  const RestaurantSchema = new Schema<IRestaurant>({
    name: { type: String, required: true },
    category: { type: String, required: true },
    address:  { type: String, required: true },
    phone: { type: String, required: true },
    rating: { type: String },
    description: { type: String, required: false },
    iconUrl: { type: String, required: false },
    coverUrl: { type: String, required: false },
  });

  const RestaurantModel = mongoose.model<IRestaurant>('restaurants', RestaurantSchema);

  export default RestaurantModel