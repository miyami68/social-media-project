import {  useContext } from "react";
import { Avatar, List } from "antd";
import { useRouter } from "next/router";
import { UserContext } from "../../context/authlog.js";
import Link from "next/link";
const People = ({ people, handleFollow, handleUnFollow }) => {
  const [state,setState] = useContext(UserContext);
 const ImageUrl =(user)=>{
    if(user.image){
      return user.image.url;
    }
    else{
      return "/images/memories.jpg";
    }
 }
  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={ImageUrl(user)}  />}
              title={
                <div className="d-flex justify-content-between">
                      <Link href={`/profile/${ user._id }`}>
                      <a> { user.name }</a>
                      </Link>
                 {user&&user.followers&&user.followers.includes(state.user._id)?<span onClick={()=>{
                    handleUnFollow(user)
                  }} className="text-primary pointer">UnFollow</span>:<span onClick={()=>{
                    handleFollow(user)
                  }} className="text-primary pointer">Follow</span>}
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default People;