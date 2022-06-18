import  { useState, useEffect,useContext }  from "react";
import axios from 'axios';
import {  toast } from 'react-toastify';
import {Modal} from 'antd';
import   ProfileUpdate  from "../../component/form/profileupdate.js";
import { UserContext } from "../../context/authlog.js";
import {Avatar} from 'antd'
import {CameraOutlined} from "@ant-design/icons" 
import {LoadingOutlined} from "@ant-design/icons" 
const profileUpdate=()=>{
     const [ok,setok]= useState(false);
     const [loading, Setloadstate]= useState(false);
     const [state,setState]= useContext(UserContext);
   const  profiledata ={
               Name:"",
               email:"",
               Password:"",
               Secret:"",
               username:"",
               about:"",
                image:{
                url:"",
                public_id:""
              },
    }

    //  const [image,setImage]=useState({});
     const [uploading,setUploading]=useState(false);
   
    const [profile,setProfile]=useState(profiledata);
     useEffect(()=>{
      
       
        if(state&&state.user){
            console.log("this is profile data", state.user);
            setProfile((prev)=>({
               ...prev,
               Name:state.user.name,
               email:state.user.email,
               username:state.user.username,
               image:state.user.image,
            }))
        }
     },[state&&state.user])

     const handleImage = async (e) => {
    
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("image", file);
      setUploading(true);
      try {
     const {data}  =  await axios.post("/upload_image", formData);
     setProfile((prev)=>({
      ...prev,
      image:{
        url: data.url,
        public_id: data.public_id,
      },
   }))
   
    setUploading(false);
         } catch (err) {
        console.log(err);
        setUploading(false);
      }
    };

    const handleSubmit=(e)=>{
               e.preventDefault();
             Setloadstate(true);
           axios.put(`/profile-update`,
                profile
            ).then((res)=>{
              console.log(res.data);  
              if(res.data.error){
                toast.error(res.data.error);
                 
              } 
              else{
             
                  setok(true);
                  const auth= JSON.parse(localStorage.getItem('auth'));
                  auth.user=res.data;
                  localStorage.setItem("auth",JSON.stringify(auth));

                   setState(res.data);
              }      
              Setloadstate(false);
             }).catch((err)=>
               
               { 
                 Setloadstate(false);
                   console.log(err)
                
               }
            )

            
    }
    return (
         <div className="container-fluid">
            <div className="row registerpage ">
            <div className="col   ">
                <h1> Profile </h1>
            </div>
            </div>
           
            <div className="row  ">
                <div className="col-md-6 offset-md-3 ">
                       <label className="d-flex justify-content-center h5 my-4">
                       {profile.image && profile.image.url ? (
                           <Avatar size={30} src={profile.image.url} className="mt-1" />
                         ) : uploading ? (
                           <LoadingOutlined className="mt-2" />
                         ) : (
                           <CameraOutlined className="mt-2" />
                         )}
                         <input onChange={handleImage} type="file" accept="images/*" hidden  />
                       </label>
                       <ProfileUpdate
                      handleSubmit={handleSubmit}
                      loading={loading}
                      profile={profile}
                      setProfile={setProfile}



                     /> 
                         <Modal
                           title="congratulation "
                           visible={ok}
                        //    onOk={loginuser}
                           onCancel= {()=>setok(false)}
                        //    okText="login"
                        //    cancelText="cancel"
                        footer={null}
                        >
                         
                          <p>you have sucessfully updated your profile</p>

                        </Modal>
                     
                                </div>
                            </div>
                        </div>
    )
    }
    export default profileUpdate