import express from 'express';
import { Database } from './config/database';
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import restaurantRoute from './routes/restaurantRoute';
import cors from 'cors';

const app = express()

app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json(), authRoutes, userRoutes, restaurantRoute);

Database.connect().then(() => {
  app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
  })
})