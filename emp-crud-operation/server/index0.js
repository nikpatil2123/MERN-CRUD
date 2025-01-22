import dotenv from "dotenv";
import http from "http";

dotenv.config();
const port=process.env.Port
 

const server=http.createServer((req,res)=>{
    if(req.method==='GET'&& req.url==='/harsh')
    {
        res.writeHead(200,{'content-type':'text/plain'})
        res.end("Hello Harsh");
    }
    else
    {
        res.writeHead(404,{'content-type':'text/plain'})
        res.end("Not Found");
    }
});


server.listen(port,()=>{
    console.log(`Server is Running On http://localhost:${port}`)
});