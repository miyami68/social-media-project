import Post from '../models/post.js'
export const totalPost =async(req,res)=>{
 try{
        const data= await Post.find().estimatedDocumentCount();
        res.json(data);
 }
 catch(err){
     console.log(err);
 }
}