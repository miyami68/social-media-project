import { istruepassword } from '../helper/encrypt.js';
import User from '../models/auth.js';
import jwt from 'jsonwebtoken';
// login call back function
const login=async (req,res)=>{
  
    const {email,Password} = await req.body;
    // console.log(req.body);
    try{
        // console.log(NAME_TOKEN);
        // console.log(process.env.NAME_TOKEN);
        const user = await User.findOne({
            email
        });
       if (!user) {
           res.send('wrong email');
       }
      const hashpassword = user.password;
     
    const mach = await istruepassword(Password,hashpassword);
    if (!mach) {
        res.send('password did not match ')
    }
    const token = jwt.sign({
        _id:user._id
    },process.env.NAME_TOKEN,{expiresIn:'10000000'})
    user.password=undefined;
     user.secret=undefined;
    res.json({user,token});
    }

 
   catch(err){
       console.log(err);
   }

}


const _default = login;
export { _default as default };








