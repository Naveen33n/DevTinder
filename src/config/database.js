const mongoose=require("mongoose")

const connectDB = async()=>{
 await mongoose.connect("mongodb+srv://aravindnatarajan0027:YW5TlMZLFDP8Exvn@node.f5cgjra.mongodb.net/devTinder")
}


module.exports={connectDB}
