import mongoose, {Document, Schema, Types} from "mongoose";

export interface IMenuItem extends Document {
  restaurant: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  available: boolean;
}

// Schema do Mongoose para o Item de Menu
const IMenuItem = new Schema<IMenuItem>({
  restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false },
  category: { type: String, required: true },
  available: { type: Boolean, default: true }
});

const MenuItemsModel = mongoose.model<IMenuItem>('menuItem', IMenuItem);

export default MenuItemsModel