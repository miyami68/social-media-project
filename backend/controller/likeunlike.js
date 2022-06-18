import Post from '../models/post.js';

export const like = async(req,res)=>{
         try {
             const data= await Post.findByIdAndUpdate(req.body._id,{$addToSet:{likes:req.user._id}},{new:true})
              res.json(data);               
         } catch (error) {
             console.log(error);
         }
}
export const unlike=async(req,res)=>{
         try {
             const data= await Post.findByIdAndUpdate(req.body._id,{$pull:{likes:req.user._id}},{new:true})
              res.json(data);               
         } catch (error) {
             console.log(error);
         }
}