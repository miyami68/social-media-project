import cloudinary  from 'cloudinary'

export const UploadPost =async(req,res)=>{
    cloudinary.config({ 
        cloud_name:`${process.env.CLOUD_NAME}`, 
        api_key:`${process.env.CLOUD_KEY}`, 
        api_secret:`${process.env.CLOUD_SECRET}`,
       
      });
    
     
    
  
     try{
            const result = await cloudinary.uploader.upload(req.files.image.path);
            // console.log("ritik");
            // console.log(result.secure_url,result.public_id);
            res.json({
                url:result.secure_url,
                public_id:result.public_id,
            });
     }
     catch(err){
         console.log(err);
         res.sendStatus(400);
     }
  
}