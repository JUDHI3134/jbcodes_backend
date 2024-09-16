const express = require("express")
require("dotenv").config()
const app = express();

const port = process.env.PORT || 8000;

app.get("/",(req,res)=>{
    res.send("Server run Successfully")
})

app.get("/about",(req,res)=>{
    res.send("This is our about page")
})



app.listen(process.env.PORT,()=>{
    console.log(`server running port number ${port}`);
    
})