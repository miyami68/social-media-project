 import User from '../models/auth.js'
 import { encrypt } from '../helper/encrypt.js';
 //forgotpassword
 const forgotPassword=async(req,res)=>{
 
   
   const email=req.body.email;
   const secret=req.body.Secret.toLowerCase();
   const Newpassword=req.body.Password;

     console.log(email,secret,Newpassword);

   if(!Newpassword||Newpassword.length<6){
       return res.json({
           error:'password must be more than 5 character'
       })
   }
  if(!secret){
      return res.json({
          error:'secret key is missing '
      })
  }
//find user
  const user =await User.findOne({email,secret});

    console.log(user);
   if (!user) {
    return res.json({
      error: "We cant verify you with those details",
    });
  }
  //updating password
  try {
    const hashed = await encrypt(Newpassword);
    await User.findByIdAndUpdate(user._id, { password: hashed });
    return res.json({
      success: "Congrats, Now you can login with your new password",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      error: "Something wrong. Try again.",
    });
  }
}
export default forgotPassword