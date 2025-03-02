import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
  name: string,
  cpf:string,
  email: string,
  passwordHash: string,
}

const UserSchema = new Schema<IUser>({
  name: {type: String, required: true},
  cpf: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  passwordHash: {type: String, required: true}
});

const UserModel = mongoose.model<IUser>('users', UserSchema);

export default UserModel;