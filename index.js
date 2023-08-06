const express=require("express");
const app=express();
const PORT=8000;

app.get("",(req,res)=>{
    res.send("Hello Pritesh")
})

app.listen(PORT,()=>{
    console.log(`Port Number start at location : ${PORT}`);
})