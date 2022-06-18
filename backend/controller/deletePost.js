
import Post from '../models/post.js';
import cloudinary  from 'cloudinary';
export const DeletePost=async(req,res)=>{
    cloudinary.config({ 
        cloud_name:`${process.env.CLOUD_NAME}`, 
        api_key:`${process.env.CLOUD_KEY}`, 
        api_secret:`${process.env.CLOUD_SECRET}`,
       
      });
    
     try{

      const data = await Post.findByIdAndDelete(req.params._id);
      if(data.image&&data.image.public_id){
        const result = await cloudinary.uploader.destroy(data.image.public_id);

      }
     res.json({ok:true})
     }
     catch(err){
         console.log(err);
     }
}