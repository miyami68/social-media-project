import Post from '../models/post.js'
const CanUpdateAndDelete = async(req,res,next)=>{
    try{
      const data= await Post.findById(req.params._id);
      if(data.postedBy._id!=req.user._id){
          res.status(400).send("unotherized");
      }
      else{
          next();
      }
    }
    catch(err){
        console.log(err);
    }
}
export default  CanUpdateAndDelete;