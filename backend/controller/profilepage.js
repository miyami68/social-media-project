import User from "../models/auth.js"
export const profilePage=async(req,res)=>{
 
    const user_id=req.params.query;
    try {
         const data= await User.findById({_id:user_id}).select("-password -secret");
         res.json(data);
    } catch (error) {
        console.log(error);
    }
}