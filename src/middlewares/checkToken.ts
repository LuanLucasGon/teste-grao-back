import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";

dotenv.config();

export function checkToken(req: Request, res: Response, next: NextFunction){
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Acesso negado!" });

  try {
    const secret = process.env.SECRET || "";
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(400).json({ msg: "O Token é inválido!" });
  }
}