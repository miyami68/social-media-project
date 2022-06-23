import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from '../image/postimage.js';
import {  useRouter } from "next/router";
import Link from "next/link";
import {
    HeartOutlined,
    HeartFilled,
    CommentOutlined,
    EditOutlined,
    DeleteOutlined,


  } from "@ant-design/icons";
  import { UserContext } from "../../context/authlog";
import { useContext } from "react";
// import post from "../../../backend/models/post.js";
//rendering all posts to frontend
const Post = ({ datastate,handleDelete,handleLike,handleUnLike,handleComment ,commentnumber,removeComment,kuch}) => {

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
      { datastate&&datastate.postedBy&&
          <div  className="card mb-5">
            <div className="card-header ">
              {/* <Avatar size={40}>{datastate.postedBy.name[0]}</Avatar>{" "} */}
              <Avatar src={ImageUrl(datastate.postedBy)}    />
              <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
                {datastate.postedBy.name}
              </span>
              <span className="pt-2 ml-3" style={{ marginLeft: "1rem" }}>
                {moment(datastate.createdAt).fromNow()}
              </span>
            </div>
            <div className="card-body">{renderHTML(datastate?.content)}</div>
            <div className="card-footer">
               {datastate.image&&  <PostImage
                     url={datastate.image.url}
                 />}
              <div className="d-flex pt-2">
             
              {datastate.likes.includes(state&&state.user&&state.user._id)?(
                kuch&&<HeartFilled onClick={()=>{
                  handleUnLike(datastate._id);
                }} className="text-danger pt-2 h5 px-2" />
               
              ):(
                 kuch&&<HeartOutlined onClick={()=>{
                  handleLike(datastate._id);
                }} className="text-danger pt-2 h5 px-2" />
              )}
                 
               {kuch&& <div className="pt-2 pl-3" style={{ marginRight: "1rem" }}>
                  {datastate.likes.length} likes
                </div>}
               { kuch&&(<CommentOutlined onClick={()=>{ handleComment(datastate) }} className="text-danger pt-2 h5 px-2" />)}
                {kuch&&<div  className="pt-2 pl-3">
                  <Link  href={`post/${datastate._id}`} >
                    <a>
                    {datastate.comments.length} comments
                    </a>
                  </Link>
                </div>}

                {state && state.user && state.user._id === datastate.postedBy._id && (
                  <>
                  {kuch&& <EditOutlined onClick={()=>{
                      return   router.push(`/user-post/${datastate._id}`)
                    } }   className="text-danger pt-2 h5 px-2 mx-auto" />}
                   {kuch&&  <DeleteOutlined onClick={()=>{
                      handleDelete(datastate)
                    }} className="text-danger pt-2 h5 px-2" />}
                  </>
                )}
              </div>

            </div>
            {datastate.comments && datastate.comments.length > 0 && (
              <ol className="list-group" style={{maxHeight:true&&"150px",overflow:true&&"scroll"}}>
                {datastate.comments.slice(0, commentnumber).map((comment,index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                      <div>
                        <Avatar
                          size={20}
                          className="mb-1 mr-3"
                          src={ImageUrl(comment.postedBy)}
                        />
                        &nbsp;{comment.postedBy.name}
                      </div>
                      <i className="text-muted">{comment.text}</i>
                    </div>
                    <span className="badge rounded-pill text-muted">
                      {moment(comment.created).fromNow()}
                     {state&&state.user&&state.user._id==comment.postedBy._id&& <div className="ml-auto mt-1">
                          <DeleteOutlined  onClick={()=>{
                            removeComment(datastate._id,comment)
                          }} className="text-danger pl-2"/>
                      </div>}
                    </span>
                  </li>
                ))}
              </ol>
            )}
          </div>
      }   
    </>
  );
};

export default Post;