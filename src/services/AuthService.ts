import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { UserRepository } from '../repositories/UserRepository';
import { LoginDTO, RegisterDTO } from '../dtos/AuthDTO';
import { UserResponseDTO } from '../dtos/UserDTO';

dotenv.config();

export class AuthService{
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository){
    this.userRepository = userRepository;
  }

  async register(data: RegisterDTO): Promise<UserResponseDTO>{
    const {name, cpf, email, password, confirmPassword} = data;

    if(password != confirmPassword){
      throw new Error('A senhas não coincidem');
    }

    let userExists = await this.userRepository.findByCpf(cpf);
    if(userExists){
      throw new Error('CPF já cadastado, ustilize outro');
    }

    userExists = await this.userRepository.findByEmail(email);
    if(userExists){
      throw new Error('Email já cadastado, ustilize outro');
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await this.userRepository.create({name, cpf, email, passwordHash}); 

    return {
      id: newUser.id,
      name: newUser.name,
      cpf: newUser.cpf,
      email: newUser.email,
    };
  }

  async login(data: LoginDTO): Promise<{token: string, name: string}>{
    const {email, password} = data;

    const user = await this.userRepository.findByEmail(email);
    if(!user){
      throw new Error('Usuario não encontrado');
    }

    const checkPassword = await bcrypt.compare(password, user.passwordHash);
    if (!checkPassword) {
      throw new Error("Senha inválida");
    }

    const secret = process.env.SECRET || "";
    const token = jwt.sign({ id: user._id }, secret);
    const name = user.name;

    return {token, name};
  }
}