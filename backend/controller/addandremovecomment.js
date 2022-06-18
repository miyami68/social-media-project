import Post from "../models/post.js";

export const addComment =async(req,res)=>{
  try{
    const { postId, comment } = req.body;
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: { comments: { text: comment, postedBy: req.user._id } },
      },
      { new: true }
    )
      .populate("postedBy", "_id name image")
      .populate("comments.postedBy", "_id name image");
       console.log(post);
     res.json(post);
  }
  catch(err){
      console.log(err);
  }
}
export const removeComment =async(req,res)=>{
  try{
    const { postId, comment } = req.body;
    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $pull: { comments: {_id:comment._id } },
      },
      { new: true }
    )
     console.log(post);
     res.json(post);
  }
  catch(err){
      console.log(err);
  }
}