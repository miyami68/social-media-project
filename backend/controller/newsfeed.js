import User from '../models/auth.js';
import Post from '../models/post.js';

export const NewsFeed =async (req,res)=>{
        
    try {
        const user = await User.findById({_id:req.user._id});
         let following = user.following;
        //  console.log(following);
         following.push(req.user._id);
        //  console.log(following);
        const perpage=5;
        const pageno=req.params.page||1;
        console.log(pageno);
         const posts = await Post.find({postedBy:{$in:following}})
         .skip((pageno-1)*perpage)
         .populate("postedBy"," name _id image")
         .populate("comments.postedBy", "_id name image")
         .sort({createdAt:-1}).limit(perpage);
        //  console.log(posts);
         res.json(posts);
    } catch (error) {
        console.log(error);
    }
   
  


}