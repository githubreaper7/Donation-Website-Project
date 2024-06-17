import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DonatorRouter } from './routes/Donator.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express(); 
app.use(express.json());
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(cookieParser());
app.use('/auth', DonatorRouter)
// const port = process.env.PORT || 3000;  

mongoose.connect("mongodb://127.0.0.1:27017/donation_website").then(()=>{
  app.listen(process.env.PORT, ()=>{
    console.log('Server running successfully on port:', process.env.PORT); 
})
}).catch((error)=>{
  console.log(error);
})


