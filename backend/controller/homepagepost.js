import Post from '../models/post.js'
export const homePage= async(req,res)=>
  {
           
      try {
        const data=await Post.find()
        .populate("postedBy" ,"_id image name")
        .populate("comments.postedBy","_id image name ")
        .sort({createdAt:-1})
        .limit(12);
        res.json(data);
        
      } catch (error) {
        console.log(error);
      }

}
