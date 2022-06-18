import {  useRouter } from "next/router";
  import { UserContext } from "../../context/authlog";
import { useContext } from "react";
import Post from '../card/post.js'
//rendering all posts to frontend
const PostList = ({ datastate,handleDelete,handleLike,handleUnLike,handleComment,removeComment }) => {

  const ImageUrl =(user)=>{
    if(user.image){
      return user.image.url;
    }
    else{
      return "/images/memories.jpg";
    }
 }

    const router = useRouter();
    // console.log(datastate);
  const  [state,setState]=useContext(UserContext);
  return (
    <>
      {datastate.length>0 &&datastate.map((datastate) => (
          <Post
          key={datastate._id}
           datastate=  {datastate}
           handleDelete={handleDelete}
           handleComment={handleComment}
           handleLike={handleLike}
           handleUnLike={handleUnLike}
           commentnumber={10}
           removeComment={removeComment}
           kuch={true}
          />
        ))}
    </>
  );
};

export default PostList;