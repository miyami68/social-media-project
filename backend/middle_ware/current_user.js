import jwt from "jsonwebtoken";

export const requiresignin= (req,res,next)=>{
   

  let tokenname;
  if(req&&req.headers&&req.headers.authorization){
    tokenname = req.headers.authorization;
  }
   else{
     res.sendStatus(404);
   }  

  //  console.log(tokenname);
    if(tokenname){
      
      const token = tokenname.split(' ')[1];
 const xyz=process.env.NAME_TOKEN;
  console.log(token,process.env.NAME_TOKEN);
      try{
        jwt.verify(token,xyz,function (err,user){
          if(!err){
            req.user=user;
            next()
          }
           
          
        })
      }
       catch(err){
         console.log(" you are not a varify user ");
         res.sendStatus(401);
       }
    }
    else{
      res.sendStatus(401);
    }

}

