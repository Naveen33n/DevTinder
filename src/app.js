const express= require("express");
const app = express();



app.use("/test",(req,res)=>{
  res.send("test ..")
})

app.post("/user",(req,res)=>{
  res.send('data saved')
})

app.get("/user",(req,res)=>{
  res.send({firstName:"naveen",
    lastName:"kumar"
  })
})
app.listen(3000,()=>{
  console.log("listening to the port 3000..");
  
})