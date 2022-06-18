
import { encrypt } from "../helper/encrypt.js";
import User from '../models/auth.js';
export const profileUpdate =async(req,res)=>{
    
    
    try{
     
        const data={};
        if(req.body.username){
            data.username=req.body.username;
        }
        if(req.body.Name){
            data.name=req.body.Name;
        }
        if(req.body.about){
            data.about=req.body.about;
        }
        if(req.body.Secret){
            data.secret= req.body.Secret.toLowerCase();
        }
        if(req.body.Password){
            if(req.body.Password.length<6){
             return res.json({
                 error:"password must be more than 5 character"
             })
            
            }
            else{
                data.password= await encrypt(req.body.Password);
            }
           
        }
      if(req.body.image&&req.body.image.url)
      {
          data.image=req.body.image;
      }   
    const userdata = await   User.findByIdAndUpdate(req.user._id,data,{new:true});
     userdata.password=undefined;
     userdata.secret=undefined;
     res.json(userdata);
    }
    catch(err){
        if(err.code==1100){
            return res.json({
                error:"duplicate username"
            })
        }
        console.log(err);
    }
   
}