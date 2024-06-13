import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { UserRouter } from './routes/user.js';
import cors from 'cors'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use('/auth', UserRouter)
const port = process.env.PORT || 3000;

mongoose.connect("mongodb://127.0.0.1:27017/authentication").then(()=>{
  app.listen(process.env.PORT, ()=>{
    console.log('Server running successfully on port:', process.env.PORT);
})
}).catch((error)=>{
  console.log(error);
})


