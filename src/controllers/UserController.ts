import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { UserService } from "../services/UserService";

const userRepository = new UserRepository();
const userService = new UserService(userRepository);

export class UserController{
  static async getUser(req: Request, res: Response){
    try {
      const id = req.params.id;
      const user = await userService.getUser(id);
      res.status(201).json({ msg: "Usuário encontrado", user: user });
    } catch (error) {
      res.status(500).json({msg: (error as Error).message});
    }
  }
}