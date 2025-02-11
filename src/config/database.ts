import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db_url = process.env.DB_URL as string;

export class Database {
  static async connect(){
    try {
      await mongoose.connect(db_url);
      console.log('Conectado ao banco de dados');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados');
      process.exit(1);
    }
  }
}