import  Post from '../models/post.js'
//finding out usersposts from database
export const UserPosts = async (req,res)=>{
  
     
   try{
        
      const  posts= await Post.find().populate("postedBy","name _id image").sort({createdAt:-1});
      //{postedBy: req.user._id}
      console.log(posts);
       res.json(posts);


   }catch(err){
       console.log(err);
   }



}
