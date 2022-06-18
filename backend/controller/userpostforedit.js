// import Post from '../models/post'
import  Post from '../models/post.js'
const UserPostforEdit =async(req,res)=>{
    try{
        const _id=  req.params._id;
        const data = await Post.findById(_id).populate("postedBy" , "_id name image" ).populate(
          "comments.postedBy","_id name image"
        );
          // console.log(data.postedBy.name);
           res.json(data);
         
    }
    catch(err){
      console.log(err); 
    }
    

}

export default UserPostforEdit