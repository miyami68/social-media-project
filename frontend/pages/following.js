import { useContext, useEffect, useState } from "react";
import { Avatar, List } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { UserContext } from "../context/authlog.js";
import axios from "axios";
import {RollbackOutlined} from "@ant-design/icons";
import Link from "next/link";
import { toast } from "react-toastify";
const following = () => {
    const [state,setState] = useContext(UserContext);
    const [people, setPeople] = useState([]);
    useEffect(()=>{
        if(state&&state.token)
        fetchfollowing();
    },[state&&state.token]);

    const fetchfollowing=async()=>{
       try {
           const {data}=await axios.get('/fetch-followings');
          
            setPeople(data);

       } catch (error) {
           console.log(error);
       }
    }
    const handleUnFollow =async(user)=>{
      try {
        const {data} = await axios.put("/user-unfollow",{_id:user._id});

        let auth = JSON.parse(localStorage.getItem('auth'));
        
        auth.user= data;
        localStorage.setItem('auth',JSON.stringify(auth));
       
        setState({...state,user:data});
        
        let filtered = people.filter((p)=>{
            return   p._id!==user._id
        });
       setPeople(filtered);
     
      toast.error(`Unfollowed ${user.name}`) ;  
           
      } catch (error) {
          console.log(error);
      }

    }
 const ImageUrl =(user)=>{
    if(user.image){
      return user.image.url;
    }
    else{
      return "/images/memories.jpg";
    }
 }
  return (
    <div className=" row col-md-6 offset-md-3">
      <List
        itemLayout="horizontal"
        dataSource={people}
        renderItem={(user) => (
          <List.Item >
            <List.Item.Meta
              avatar={<Avatar src={ImageUrl(user)}  />}
              title={
                <div className="d-flex justify-content-between">
                  {user.name} <span onClick={()=>{
                    handleUnFollow(user)
                  }} className="text-primary pointer">Unfollow</span>
                </div>
              }
            />

          </List.Item>

        )}
      />
      <Link href="/user_dashboard">
      <a className="d-flex justify-content-center pt-5">
        <RollbackOutlined/>
      
      </a>
       
      </Link>
    </div>
  );
};

export default following;