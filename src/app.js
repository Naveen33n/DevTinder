const express= require("express");
const { adminAuth } = require("./middleware/auth");
const app = express();
const {connectDB}=require("./config/database")
const User =require("./models/user")


app.post("/signup",async(req,res)=>{
  const user= new User({
    firstName:"naveen",
    lastName:"kumar",
    age:24,
    gender:"male",
    emailId:"naveen@gmail.com"  })

    await user.save()
    res.send("user saved")
    console.log(user);
    
})



connectDB().then(()=>{
  console.log("database connected successfully..");
  app.listen(3000,()=>{
  console.log("listening to the port 3000..");
  
})
}).catch((err)=>{
  console.log("error connecting to the database");
  
})

