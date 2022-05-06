import Post from '../models/post.js'
// import User from '../models/auth.js'


export const CreatePost=async(req,res)=>{

   const content= req.body.Post;
   const image = req.body.image;

   console.log(req.body.Post,req.body.image);

   console.log(content,image);
    if(content.length==0){
        return  res.json({
            error:'content is required'
        })
    }
    else{
        try{
           
             const post=  new Post({
                 image:image,
                 content:content,
                 postedBy:req.user._id,


             })
          

       const value=  await post.save();
        console.log( value , "successfully created post");
        
        res.json(post);
         
        }
        catch(e){
            
            console.log(e);
            res.sendStatus(400);
        }
    }
}