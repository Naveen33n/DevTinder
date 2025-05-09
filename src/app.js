const express= require("express");
const { adminAuth } = require("./middleware/auth");
const app = express();
const {connectDB}=require("./config/database")
const User =require("./models/user")

app.use(express.json())

app.post("/signup",async(req,res)=>{
 
  
   const user= new User(req.body)

    await user.save()
    res.send("user saved")
  //   console.log(user);
    
})

app.get("/feed",async(req,res)=>{
  const userEmail=req.body.emailId;
  try{
    const user=await User.find({emailId:userEmail})
    res.send(user)
  }catch(err){
    res.status(400).send("error")
  }
  

})

app.get("/allUsers",async(req,res)=>{

  try{
    const user= await  User.find({})
    res.send(user)
  }catch(err){
    res.status(400).send("eroor ")
  }
})
app.get("/findOne",async(req,res)=>{
  const email =req.body.emailId;
  try{
    const user = await User.findOne({emailId:email})
  res.send(user)
  }catch(err){
    res.status(400).send("error")
  }
})

app.delete("/delete",async(req,res)=>{
  const userId=req.body.userId;
  try{
    const user= await User.findByIdAndDelete(userId)
    res.send("user deleted")
  }catch(err){
    res.status(400).send("error sending")
  }
})
app.patch("/update",async(req,res)=>{

  const data=req.body
  const userId=req.body.userId;
  try{
     const user =await User.findByIdAndUpdate({_id:userId},data,{
      returnDocument:"before"
    })
res.send("updated")
console.log(user);

  }catch(err){
    res.status(400).send("error")
  }
})

connectDB().then(()=>{
  console.log("database connected successfully..");
  app.listen(3000,()=>{
  console.log("listening to the port 3000..");
  
})
}).catch((err)=>{
  console.log("error connecting to the database");
  
})

