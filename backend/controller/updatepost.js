
import Post from '../models/post.js'
export const UpdatePost= async(req,res)=>{
    
    if(!req.body){
       res.json("nothing exist  in post" );
    }
    const content=req.body.Post;
    const image=req.body.image;
  
  
   try{

     const data = await Post.findByIdAndUpdate(req.params._id,{content,image},{
         new:true,
     });
    if(!data){
        return res.json({
            error:"not found"
        })
    }
    else{
        return res.json({
            success:"you have successfully updated your post"
        })
    }
   }
   catch(err){
   console.log(err);
   }
 

}