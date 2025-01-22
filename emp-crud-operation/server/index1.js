import dotenv from "dotenv";
//import http from "http";
import express from 'express';
import path from 'path';                
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
dotenv.config();



const port=process.env.PORT;
const url=process.env.MONGOOSE_URL;
console.log(url);
const app =express();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);


mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{app.listen(port,()=>{
        console.log(`Server is running on http://localhost:${port}`);
    })}
        
    )
    .catch((err)=>console.error("Connection Failed",err))

 app.use(express.static(path.join(__dirname,"view")))

app.get("/",(req,res)=>{
      res.sendFile(path.join(__dirname,"view","toggle.html"))
})

