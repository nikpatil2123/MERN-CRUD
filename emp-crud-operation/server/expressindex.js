const express = require("express");
const path = require("path");
const app=express();
const port = 3000;
 app.use(express.static(__dirname+"/view"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/view/portfolio.html"));
})

app.listen(port,()=>{
    console.log(` server is running on http://localhost:${port}`)
})
