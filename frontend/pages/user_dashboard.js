import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/authlog";
import UserRoute from '../privacy/user_dashboard';
import { useRouter } from "next/router";
import  UserForm  from "../component/form/userform";
import axios from "axios";
import {  toast } from 'react-toastify';
import PostList from '../component/card/renderpost.js';

const dashboard = () => {

  //console.log("deepak concept");
  const [state,setState] = useContext(UserContext);
  const router = useRouter();
  
  const [datastate,setDatastate]= useState([]);
  const [Post,newPost]= useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  // const [image,setImage]= useState({});
  // const [loading ,updateloading]=useState(false);
   useEffect(()=>{
      if(state&&state.token) fetechPosts();
   },[state&&state.token])

  const  fetechPosts=async()=>{
    try{
        const {data} = await axios.get("/user_posts");
          console.log(data);
          setDatastate(data);
         console.log("iriti");
        
     

    }
    catch(err){
          console.log(err);
    }

  }
  console.log(datastate);
   const PostSubmit=async(e)=>{
    e.preventDefault();
      try{
        const {data}= await axios.post(`/create_post`,{Post, image});
          newPost("");
          setImage({});
          console.log(data);
          //  console.log(data);
          if(data.error){
                 toast.error(data.error);
          }
         else{
              
               toast.success("successfully created post");
               if(state&&state.token) fetechPosts();
         }
      }
    catch(err){
        console.log(err);
    }
  
   }

 //handle image
    const handleImage = async (e) => {
    
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
      // console.log([...formData]);
      // updateloading(true);
      setUploading(true);
      try {
       
        const {data}  =  await axios.post("/upload_image", formData);
             console.log(data.url,data.public_id);
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

  return (
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
          <PostList 
             datastate={datastate}

          />
            </div>
            <div className="col-md-4">
              <h2>sidebar</h2>
            </div>
          </div>
           
          </div>

      </div>
    </UserRoute>
  );
};

export default dashboard;

