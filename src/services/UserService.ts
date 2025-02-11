import { UserResponseDTO } from "../dtos/UserDTO";
import { UserRepository } from "../repositories/UserRepository";

export class UserService{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this.userRepository = userRepository;
  }

  async getUser(id: string): Promise<UserResponseDTO | null>{
    const user = await this.userRepository.findById(id);
    
    if(!user){
      throw new Error('Usuario não encontrado.');
    }

    return {
      id: user.id,
      name: user.name,
      cpf: user.name,
      email: user.email,
    };
  }
}