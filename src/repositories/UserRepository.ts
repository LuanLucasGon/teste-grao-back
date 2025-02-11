import UserModel, {IUser} from "../models/UserModel";

export class UserRepository{
  async findByCpf(cpf: string): Promise<IUser | null>{
    return UserModel.findOne({ cpf });
  }

  async findById(id: string): Promise<IUser | null>{
    return UserModel.findById(id);
  }

  async create(user: IUser): Promise<IUser | null>{
    const newUser = new UserModel(user);
    return newUser.save();
  }
}