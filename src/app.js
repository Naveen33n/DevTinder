const express= require("express");
const app = express();


app.use("/user",(req,res)=>{
  res.send("hello world")
})
app.use("/",(req,res)=>{
  res.send("hi hi")
})
app.listen(3000,()=>{
  console.log("listening to the port 3000..");
  
})