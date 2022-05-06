import { istruepassword } from '../helper/encrypt.js';
import User from '../models/auth.js';
import jwt from 'jsonwebtoken';
// login call back function
const login=async (req,res)=>{
  
    const {email,Password} = await req.body;
     console.log(req.body);
    try{
        // console.log(NAME_TOKEN);
        // console.log(process.env.NAME_TOKEN);
          const user = await User.findOne({
            email
        });
       if (!user) {
        //   console.log("11");
          return res.json({
              error:"not found user"
          })
       }
      const hashpassword = user.password;
     
    const mach = await istruepassword(Password,hashpassword);
    if (!mach) {
     //   console.log("12");
     return res.json({
        error:"password not matched"
    })
    }

    else{
    const token = jwt.sign({
        _id:user._id
    },process.env.NAME_TOKEN,{expiresIn:'7d'})
    user.password=undefined;
     user.secret=undefined;
     console.log(token);
     res.json({user,token});
    }}

 
   catch(err){
   
       console.log(err);
   }

}


const _default = login;
export { _default as default };








