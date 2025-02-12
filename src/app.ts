import express from 'express';
import { Database } from './config/database';
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app = express()

app.use(express.json(), authRoutes, userRoutes);

Database.connect().then(() => {
  app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
  })
})