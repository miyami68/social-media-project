import  { useState, useEffect }  from "react";
import axios from 'axios'
import {  toast } from 'react-toastify';
import {Modal} from 'antd';
import Router from 'next/router'
import { AuthForm } from "../component/form/auth";

const register=()=>{
     const [ok,setok]= useState(false);
     const [loading, Setloadstate]= useState(false);
   const  registations ={
               Name:'',
               email:'',
               Password:'',
               Secret:'',
    }


 const loginuser=()=>{
    Router.push('/login')
 }
    const [registation,setRegistation]=useState(registations);
    
    const handleSubmit=(e)=>{
               e.preventDefault();
             Setloadstate(true);
          
               axios.post(`${process.env.NEXT_PUBLIC_API}/register`,
                registation
            ).then((res)=>{
              console.log(res.data);  
              if(res.data==true){
                   
                  setok(true);
              } 
              else{
                toast.error(res.data);
              }      
              Setloadstate(false);

            setRegistation((prevstate)=>({
                 
                ...prevstate,
                Name:' ',
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
         <div className="container-fluid ">
            <div className="row registerpage ">
            <div className="col">
                <h1>register page</h1>
            </div>
            </div>
           
            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                      
                       <AuthForm  
                      handleSubmit={handleSubmit}
                      loading={loading}
                      registation={registation}
                      setRegistation={setRegistation}



                     /> 
                         <Modal
                           title="congratulation "
                           visible={ok}
                           onOk={loginuser}
                           onCancel = {()=>setok(false)}
                           okText="login"
                           cancelText="cancel"
                        >
                         
                          <p>you have sucessfully registerd</p>

                        </Modal>
                                </div>
                            </div>
                        </div>
    )
    }
    export default register