import User from "../models/auth.js";
export const FetchFollowings =async(req,res)=>{
 try {
      const user= await User.findById({_id:req.user._id});
      const followings= await User.find({_id:user.following}).limit(100);
      res.json(followings);

 } catch (error) {
     console.log(error);
 }
}