import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

export function checkToken(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ msg: "Acesso negado!" });
    return;
  }

  const secret = process.env.SECRET;
  if (!secret) {
    console.error("Erro: SECRET não definido no ambiente.");
    res.status(500).json({ msg: "Erro interno no servidor." });
    return;
  }

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).json({ msg: "O Token é inválido!", error: (error as Error).message });
  }
}