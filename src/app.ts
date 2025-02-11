import express from 'express';
import { Database } from './config/database';

const app = express()

app.use(express.json())

Database.connect().then(() => {
  app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
  })
})