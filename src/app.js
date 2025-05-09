const express= require("express");
const { adminAuth } = require("./middleware/auth");
const app = express();



app.get("/admin",adminAuth)

app.get("/admin/getData",(req,res)=>{
  res.send("all data sent")
})

app.get("/admin/delete",(req,res)=>{
  res.send("deleted data")
})



app.get("/getuser",(req,res)=>{
 try{
  throw new Error("jddjsjdj")
  res.send("hello")}catch(err){
    res.status(404).send("error")
  }
})

app.use("/",(err,req,res,next)=>{
if(err){
  res.status(404).send("something went wrong" + err.message)
}
  
})

app.listen(3000,()=>{
  console.log("listening to the port 3000..");
  
})