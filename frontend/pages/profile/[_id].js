import { useContext, useEffect, useState } from "react";
import { Avatar, Card } from "antd";
import { UserContext } from "../../context/authlog.js";
import axios from "axios";
import {RollbackOutlined} from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";

const profilePage= () => {
  
    const [state,setState] = useContext(UserContext);
    const [profilepage, setProfilepage] = useState([]);
    const router=useRouter();
   
    useEffect(()=>{
        if(router.query._id)
       
         
          fetchUserProfile();
        
      

    },[router.query._id]);
    const fetchUserProfile=async()=>{
       try {
           const {data}=await axios.get(`/fetch-profile/${router.query._id}`);
            console.log(data);
            setProfilepage(data);

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
      <div className="pt-5 pb-5">
       <Card  hoverable cover={<img src={ImageUrl(profilepage)} alt={profilepage.name} />}>
        
          <Card.Meta
           title={profilepage.name} 
           description={profilepage.about} 

           />
          
          <p className="pt-2 text-muted">
            Joined {moment(profilepage.createdAt).fromNow()}
          </p>

          <div className="d-flex justify-content-between">
            <span className="btn btn-sm">
              {profilepage.followers && profilepage.followers.length} Followers
            </span>

            <span className="btn btn-sm">
              {profilepage.following && profilepage.following.length} Following
            </span>
          </div>
        </Card>
      <Link href="/user_dashboard">
      <a className="d-flex justify-content-center pt-5">
        <RollbackOutlined/>
      
      </a>
       
      </Link>
      </div>
    </div>
  );

};



export default profilePage;