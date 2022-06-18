import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/authlog";
import UserRoute from '../privacy/user_dashboard';
import { useRouter } from "next/router";
import  UserForm  from "../component/form/userform";
import axios from "axios";
import {  toast } from 'react-toastify';
import PostList from '../component/card/renderpost.js';
import People from "../component/card/people";
import Link from "next/link";
import Modal from "antd/lib/modal/Modal";
import Comment from "../component/form/comment";
import { Pagination } from 'antd';
import Search from "../component/search";

const dashboard = () => {

  //console.log("deepak concept");
  const [state,setState] = useContext(UserContext);
  const router = useRouter();
  
  const [datastate,setDatastate]= useState([]);
  const [Post,newPost]= useState("");
  const [image, setImage] = useState({});
  const [uploading, setUploading] = useState(false);
  const [people,setPeople]=useState([]);
  const [comment,setComment]=useState("");
  const [visible,setVisible]=useState(false);
  const [currentPost,setCurrentPost]=useState({});
  const [total ,setTotal]=useState(0);
  const [page ,setPage]=useState(1);
  
  // const [image,setImage]= useState({});
  // const [loading ,updateloading]=useState(false);
   useEffect(()=>{

      if(state&&state.token)
      { 
        followPeople();
        NewsFeed();
       
      } 
   },[state&&state.token,page])
  
   useEffect(()=>{
     try { 
       axios.get('/total-post').then(({data})=>{
           setTotal(data);
       })
     } catch (error) {
       console.log(error);
     }
   },[page])
  const  NewsFeed=async()=>{

    try{ 
          const {data} = await axios.get(`/news-feed/${page}`);
           setDatastate(data);

       }
        catch(err){
          console.log(err);
    }
   }
  const handleLike =async(_id)=>{
    try {
       const {data}= await axios.put('/post-like',{_id});
       console.log(data);
                 NewsFeed();
    } catch (error) {
      console.log(error);
    }
  }
  const handleUnLike=async(_id)=>{
       try {
         const {data}= await axios.put('/post-unlike',{_id});
         console.log(data);
         NewsFeed();
       } catch (error) {
         console.log(error);
       }
  }
  const followPeople=async()=>{
    try {
    
      const {data} = await axios.get("/find-people");
      console.log(data);
      setPeople(data);
    }
     catch (error) {
      console.log(error);
    }
      
  }
  const handleFollow = async( user )=>{
           
      try{
           const {data} = await axios.put("/user-follow",{_id:user._id});

           let auth = JSON.parse(localStorage.getItem('auth'));
           
           auth.user= data;
           localStorage.setItem('auth',JSON.stringify(auth));
          
           setState({...state,user:data});
           
           let filtered = people.filter((p)=>{
               return   p._id!==user._id
           });
          setPeople(filtered);
          NewsFeed();
         toast.success(`follwing ${user.name}`) ;  
      }
      catch(err){
        console.log(err);
      }

  }

   const PostSubmit=async(e)=>{
    e.preventDefault();

      try{
        const {data}= await axios.post(`/create_post`,{Post, image});
          newPost("");
          setImage({});
        
          if(data.error){
                 toast.error(data.error);
          }
         else{
               setPage(1);
               toast.success("successfully created post");
               if(state&&state.token) NewsFeed();
         }
        // setPage(1);
      }
    catch(err){
        console.log(err);
    }
  
   }
 const handleDelete=async(datastate)=>{
     
    const answer = window.confirm("are you sure?");
    if(!answer){
      return
    }
    else{ 
      const data =await axios.delete(`/delete-post/${datastate._id}`);
      NewsFeed();
      toast.error("post deleted" );
     
     
    }
 }
 //handle image
    const handleImage = async (e) => {
    
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
    
      setUploading(true);
      try {
       
        const {data}  =  await axios.post("/upload_image", formData);
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
  //handle comment
  const handleComment=(post)=>{

      setCurrentPost(post);
      setVisible(true);

  }
  //add comment
  const addComment=async(e)=>{
     e.preventDefault();
     try {
        const {data}= await axios.put("/add-comment",{
        
          postId:currentPost._id,
          comment:comment,

        })
        // console.log(post);
        setComment("");
        setVisible(false);
        setCurrentPost({});
        NewsFeed();
     } catch (error) {
       console.log(error);
     }
  }
  const removeComment=async(postId,comment)=>{
    const answer= window.confirm("are you sure ?");
    if(!answer)return 
       try {
          const {data}= await axios.put('/remove-comment',{
            postId:postId,
            comment:comment
          })
         NewsFeed();
          console.log(data);
       } catch (error) {
         console.log(error);
       }


  }
  return (
    <UserRoute>
     
      <div className="container-fluid  ">
            <div className="row loginpage registerpage ">
            <div clauseContextssName="col">
                <h1>Newsfeed</h1>
            </div>
            </div>
          

          <div className="container  ">

          <div className="row py-3 ">
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
             handleDelete={handleDelete}
             handleLike={handleLike}
             handleUnLike={handleUnLike}
             handleComment={handleComment}
             removeComment={removeComment}
          />
            </div>
            <div className="col-md-4">
            {state&&state.user&&state.user.following&&
              <Link href={`/following`}>
               <a className="h3">{state.user.following.length} following </a>
              </Link>
            }
            <Search/>
            <People
             people=  {people}
             handleFollow={handleFollow}
            />
           
            </div>

          </div>
           
          </div>
         <Modal title="comment" visible={visible}  onCancel={()=>{ setVisible(false)}} footer={null}>
        
         <Comment
             addComment={addComment}
             setComment={setComment}
             comment={comment}

         />
        </Modal>
      
      <Pagination className="pb-3" defaultCurrent={1} current={page} total={(total/5)*10}  onChange={(value)=>setPage(value) }/>
      </div>
    </UserRoute>
  );
};

export default dashboard;

