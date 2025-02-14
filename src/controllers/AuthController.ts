import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { AuthService } from "../services/AuthService";
import { RegisterDTO, LoginDTO } from "../dtos/AuthDTO";

const userRepository = new UserRepository();
const authService = new AuthService(userRepository);

export class AuthController{
  static async register(req: Request, res: Response){
    try {
      const data: RegisterDTO = req.body;
      const newUser = await authService.register(data);
      res.status(201).json({ msg: "Usuário criado com sucesso!", user: newUser });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }

  static async login(req: Request, res: Response){
    try {
      const data: LoginDTO = req.body;
      const { token, name } = await authService.login(data);
      res.status(201).json({ msg: "Autenticação realizada com sucesso!", token, name });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }
}