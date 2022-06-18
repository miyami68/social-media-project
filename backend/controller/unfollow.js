import User from '../models/auth.js'
import Post from '../models/post.js'

export const removeFollower =async(req,res,next)=>{
  
  try {
      const user = await User.findByIdAndUpdate(req.body._id,{$pull:{
          followers:req.user._id
      }})
      next();
  } catch (error) {
      console.log(error);
  }


}
export const  userUnFollow=async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.user._id,{$pull:{
            following:req.body._id
        }})
       res.json(user);
    } catch (error) {
        console.log(error);
    }
}