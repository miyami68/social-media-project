import renderHTML from "react-render-html";
import moment from "moment";
import { Avatar } from "antd";
import PostImage from '../image/postimage.js';
import {  useRouter } from "next/router";
import {
    HeartOutlined,
    HeartFilled,
    CommentOutlined,
    EditOutlined,
    DeleteOutlined,
  } from "@ant-design/icons";
  import { UserContext } from "../../context/authlog";
import { useContext } from "react";
//rendering all posts to frontend
const PostList = ({ datastate }) => {
    const router = useRouter();
    console.log(datastate);
  const  [state,setState]=useContext(UserContext);
  return (
    <>
      {datastate.length>0 &&datastate.map((datastate) => (
          <div key={datastate._id} className="card mb-5">
            <div className="card-header">
              <Avatar size={40}>{datastate.postedBy.name[0]}</Avatar>{" "}
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
                <HeartOutlined className="text-danger pt-2 h5 px-2" />
                <div className="pt-2 pl-3" style={{ marginRight: "1rem" }}>
                  3 likes
                </div>
                <CommentOutlined className="text-danger pt-2 h5 px-2" />
                <div className="pt-2 pl-3">2 comments</div>

                {state && state.user && state.user._id === datastate.postedBy._id && (
                  <>
                    <EditOutlined onClick={()=>{
                      return   router.push(`/user/post/${datastate._id}`)
                    } }   className="text-danger pt-2 h5 px-2 mx-auto" />
                    <DeleteOutlined className="text-danger pt-2 h5 px-2" />
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostList;