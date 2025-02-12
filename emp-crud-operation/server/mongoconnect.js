import dotenv from "dotenv";
import express from 'express';
import bodyparser from 'body-parser' ;             
import mongoose from "mongoose";
import cors from 'cors';
dotenv.config();

import route  from "./routes/userroute.js";

const app=express();
const port=process.env.PORT;
const url=process.env.MONGOURL;
app.use(cors());


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        
        app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })}
        
    )
    .catch((err)=>console.error("Connection Failed",err))

  
    app.use('/api', route);
