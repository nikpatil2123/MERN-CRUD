import express from 'express';

import dotenv from 'dotenv';
dotenv.config();


import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT=process.env.PORT;

 const __filename=fileURLToPath(import.meta.url);
   const __dirname=path.dirname(__filename);


app.get("/",(req,res)=>{
    res.send("Hi here is ur message")
})


app.use((req,res,next)=>{
    // secret is variable used for accesing value from url of localhost 
    const secretCode= req.query.secret;
    if(secretCode==='1234'){
        req.isAuthorized=true;

    }
    else{
        req.isAuthorized=false;
    }
next()
});


app.get("/harsh",(req,res)=>{
    if(req.isAuthorized){res.sendFile(path.join(__dirname,"view","toggle.html"))}
    else{
        res.send("You are not authorized");
    }
    

})

// middle-ware is show for static & javascript file 

app.use(express.static(path.join(__dirname,"view")));



app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});