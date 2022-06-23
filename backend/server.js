import express, { Router } from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import   route from './routes/auth.js';
import {readdirSync} from 'fs'; 
import { createServer } from "http";
import { Server } from "socket.io";
import { Socket } from 'dgram';
dotenv.config();
const app=express();
const httpServer = createServer(app);
const io = new Server(httpServer, { 
    cors:{
        origin:[process.env.CLIENT_URL],
         methods:["GET","POST"],
        allowedHeaders:["content-type"],
    },

 });

mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("connected to mongodb atalas so , are you ready now")).catch((err)=>{
    console.log(err);
})
const corsOptions = {
    origin: [process.env.CLIENT_URL],
    optionsSuccessStatus: 200
  }
app.use(express.json({
    limit:"5mb"
}))
app.use(express.urlencoded({extended:true}));
app.use(cors(corsOptions));

readdirSync('./routes').map((r)=> app.use('/api',route));

io.on("connect",(socket)=>{
       socket.on("new-post",(post)=>{
           socket.broadcast.emit("new-post",post);
       })
}) 
httpServer.listen(process.env.PORT,()=>console.log(`server is running on port ${process.env.PORT}`));