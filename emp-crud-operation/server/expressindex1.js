import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const app =express();
app.use(express.json());

dotenv.config();
const port=process.env.Port;


app.use(function num(req,res,next){
const secretcode=req.query.secret;

if(secretcode==='1234')
{
    req.isAuthorized=true;
}
else
{
    req.isAuthorized=false;
}
next();
});

app.get("/",(req,res)=>{
   if (req.isAuthorized)
   {
    res.sendFile(path.join(__dirname,"view","toggle.html"));
   }
   else
   {
    res.send("Unauthorized");
   }
})

//****************************************************************** 
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})