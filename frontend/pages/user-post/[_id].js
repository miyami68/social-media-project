import UserRoute from "../../privacy/user_dashboard";
import axios from "axios";
import  UserForm  from "../../component/form/userform";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {  toast } from 'react-toastify';
const EditPost=()=>{
    const [Post,newPost]= useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const router=useRouter();
    const [EditPost,SetEditPost]=useState({});
    // console.log(router.query._id);
    const _id = router.query._id;
     useEffect(()=>{

      
       if(_id){
       
           findPostforEdit();

       }

     },[_id])

     const findPostforEdit= async()=>
     { 
      
         const {data}=await axios.get(`/user-post/${_id}`);
         SetEditPost(data);
         setImage(data.image);
         newPost(data.content);
           
     }
     const PostSubmit=async(e)=>{
        e.preventDefault();
        console.log("post submitted",image,Post);
          try{
             const {data}= await axios.put(`/update-post/${_id}`,{Post, image});
              newPost("");
              setImage({});
              console.log(data);
              // console.log(data);
              //  console.log(data);
              if(data.error){
                     toast.error(data.error);
              }
             else{
                  
                   toast.success(data.success);
                     router.push('/user_dashboard');
             }
          }
        catch(err){
            console.log(err);
        }
      
       }
       const handleImage = async (e) => {
    
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append("image", file);
        // console.log([...formData]);
        // updateloading(true);
        setUploading(true);
        try {
         
          const {data}  =  await axios.post("/upload_image", formData);
              //  console.log(data.url,data.public_id);
      //  setImage({
      //        url: data.url,
      //        public_id:data.public_id,
      //      })
      setImage({
        url: data.url,
        public_id: data.public_id,
      });
      setUploading(false);
          //  updateloading(false);  
        } catch (err) {
          console.log(err);
          // updateloading(false);
          setUploading(false);
        }
      };
    return(
        <UserRoute>
     
      <div className="container-fluid  ">
            <div className="row loginpage registerpage ">
            <div clauseContextssName="col">
                <h1>Newsfeed</h1>
            </div>
            </div>
          

          <div className="container">

          <div className="row py-3">
          <div className="col-md-8 ">
             <UserForm
                  Post={Post}
                  newPost={newPost}
                  PostSubmit={PostSubmit}
                  handleImage={handleImage}
                  image={image}
                  uploading={uploading}
             />
         
            </div>
           
          </div>
           
          </div>

      </div>
    </UserRoute>
    )
    
 

}

export default EditPost