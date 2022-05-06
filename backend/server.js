import express, { Router } from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import   route from './routes/auth.js';
import {readdirSync} from 'fs';
// import  routepost from './routes/post.js'
dotenv.config();

const app=express();


mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to mongodb atalas so , are you ready now")).catch((err)=>{
    console.log(err);
})
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }
app.use(express.json({
    limit:"5mb"
}))
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions));
readdirSync('./routes').map((r)=> app.use('/api',route));
// app.use('/api',routepost);
app.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`));