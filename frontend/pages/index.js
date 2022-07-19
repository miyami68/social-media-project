import Homepage from "../component/image/homepageimg.js";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/authlog";
import axios from "axios";
import Post from "../component/card/post.js";
import Modal from "antd/lib/modal/Modal";
import {  toast } from 'react-toastify';
import Comment from "../component/form/comment";
import io from 'socket.io-client';
const socket = io(process.env.NEXT_PUBLIC_SERVER_URL_BACKEND,{
  reconnection:true,
});
const Home=(data)=> {
  // console.log(data, "again");
  const [state,setstate]=useContext(UserContext);
  const [posts,setPosts]= useState([]);
  const [comment,setComment]=useState("");
  const [kuch , setKuch]=useState(false);
  const [post,setpost]=useState({});
  const [visible,setvisible]=useState(false);
  const [updatation,setUpdation]=useState([]);
 
  useEffect(()=>{  

     makingpost();
     checkState();
     socket.on("new-post",(newpost)=>{
      setUpdation([newpost,...posts]);
      
     })
    
  },[state,state&&state.token])
    const makingpost=async()=>{
        try {
          const {data}= await axios.get('/homepage-post');
          setPosts(data);
        } catch (error) {
          console.log(error);
        }
      }
    
      const handleComment=(post)=>{

        setpost(post);
        setvisible(true);
  
    }
    //add comment
    const addComment=async(e)=>{
       e.preventDefault();
       try {
          const {data}= await axios.put("/add-comment",{
          
            postId:post._id,
            comment:comment,
  
          })
          // console.log(post);
          setComment("");
          setvisible(false);
          setpost({});
          makingpost();
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
           makingpost();
            console.log(data);
         } catch (error) {
           console.log(error);
         }
  
  
    }
      const  handleLike =async(_id)=>{
          try {
             const {data}= await axios.put('/post-like',{_id});
             console.log(data);
              makingpost();
          } catch (error) {
            console.log(error);
          }
        }

  
    const handleUnLike=async(_id)=>{
      try {
        const {data}= await axios.put('/post-unlike',{_id});
        console.log(data);
        makingpost();
      } catch (error) {
        console.log(error);
      }
 }
 const handleDelete=async(datastate)=>{
     
  const answer = window.confirm("are you sure?");
  if(!answer){
    return
  }
  else{ 
    const data =await axios.delete(`/delete-post/${datastate._id}`);
     makingpost();
    toast.error("post deleted" );
   
   
  }
}
    const checkState=()=>{
        state&&state.user&&state.token?setKuch(true):setKuch(false);
    }
   return (
       <>
      
          <Homepage 
            url="/images/auth.jpg">
             MEMORIES
          </Homepage>
          <div className="container py-5 ">
            <div className="row">
            {(updatation.length>0?updatation:posts).map((post)=>(
            <div className="col-md-4">
            <Post  key={post._id} 

            datastate={post}
            handleLike={handleLike}
            handleDelete={handleDelete}
            handleUnLike={handleUnLike}
            handleComment={handleComment}
            removeComment={removeComment}
            addComment={addComment}
            commentnumber={10}
            kuch={kuch}

            >
                 
            </Post>
            </div>
            ))}
           </div>
        
       </div>
          
       <Modal title="comment" visible={visible}  onCancel={()=>{ setvisible(false)}} footer={null}>
        
        <Comment
            addComment={addComment}
            setComment={setComment}
            comment={comment}

        />
       </Modal>
       </>  
  )
}


// export async function getServerSideProps() {
//   const {data}= await axios.get('/homepage-post');
//     console.log(data," ye hai");
//   return {
//     props: {
//       abc: {data},
//     }, 
//   }
// }

export default Home;