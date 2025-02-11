import UserModel, {IUser} from "../models/UserModel";

export class UserRepository{
  async findByCpf(cpf: string): Promise<IUser | null>{
    return UserModel.findOne({ cpf });
  }

  async findByEmail(email: string): Promise<IUser | null>{
    return UserModel.findOne({ email });
  }

  async findById(id: string): Promise<IUser | null>{
    return UserModel.findById(id);
  }

  async create(user: any): Promise<IUser>{
    const newUser = new UserModel(user);
    return newUser.save();
  }
}