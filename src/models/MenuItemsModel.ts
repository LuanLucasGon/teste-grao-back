import mongoose, {Document, Schema, Types} from "mongoose";

export interface IMenuItem extends Document {
  restaurant: Types.ObjectId;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  available: boolean;
}

const IMenuItem = new Schema<IMenuItem>({
  restaurant: { type: Schema.Types.ObjectId, ref: 'restaurants', required: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: String, required: true },
  imageUrl: { type: String, required: false },
  category: { type: String, required: true },
  available: { type: Boolean, default: true }
});

const MenuItemsModel = mongoose.model<IMenuItem>('items', IMenuItem);

export default MenuItemsModel