import  { useState, useEffect }  from "react";
import axios from 'axios'
import {  toast } from 'react-toastify';
import {Modal} from 'antd';
import Router from 'next/router'
import { ForgotPasswordForm } from "../component/form/updatePassword.js";
import Link from "next/link";
const forgot_password=()=>{
     const [ok,setok]= useState(false);
     const [loading, Setloadstate]= useState(false);
   const  forgot_passwords ={
              
               email:'',
               Password:'',
               Secret:'',
    }


 const loginuser=()=>{
    Router.push('/login')
 }
    const [updatePassword,setNewPassword]=useState(forgot_passwords);
    
    const handleSubmit=(e)=>{
               e.preventDefault();
             Setloadstate(true);
          
               axios.post(`/forgot_password`,
                 updatePassword
            ).then((res)=>{

              console.log(res.data.success);  
              if(res.data.success){
                    
                  setok(true);
              } 
              else{
                  console.log(res.data.error);
                toast.error(res.data.error);
              }      
              Setloadstate(false);

              setNewPassword((prevstate)=>({
                 
                ...prevstate,
              
                email:' ',
                Password:'',
                Secret:' '
            }))
              
       
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
                <h1>Forgot password </h1>
            </div>
            </div>
           
            <div className="row  ">
                <div className="col-md-6 offset-md-3 ">
                      
                       <ForgotPasswordForm 
                        handleSubmit={handleSubmit}
                        loading={loading}
                        updatePassword={updatePassword}
                       setNewPassword={setNewPassword}



                     /> 
                         <Modal
                           title="congratulation "
                           visible={ok}
                           onOk={loginuser}
                           onCancel = {()=>setok(false)}
                           okText="login"
                           cancelText="cancel"
                        >
                         
                          <p>you have sucessfully updated your password</p>

                        </Modal>
                    
                                </div>
                            </div>
                        </div>
    )
    }
    export default forgot_password