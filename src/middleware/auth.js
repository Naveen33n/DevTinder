const adminAuth=(req,res,next)=>{

  const token ="xyz";
  const isAdminAuth=token==="xyz";
  if(!isAdminAuth){
 res.status(400).send("error")
  }else{
next()
  }
}
module.exports={adminAuth}