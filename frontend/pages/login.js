import  { useState,useEffect,useContext}  from "react";
import axios from 'axios'
import {  toast } from 'react-toastify';
import Router from 'next/router'
import { AuthForm } from "../component/form/authlogin";
import Link from "next/link";
import {UserContext,UserProvider} from '../context/authlog';

const login=()=>{
   
  const [state, setstate] = useContext(UserContext);//handeling the context
  
   const [loading, Setloadstate]= useState(false);
   const  logins ={
             
               email:'',
               Password:''
             
    }

 
    const [login,setLogin]=useState(logins);
    
   
    const handleSubmit=(e)=>{
               e.preventDefault();

             Setloadstate(true);
          //post request to backend sever
               axios.post(`/login`,
                login
            ).then((res)=>{

              console.log(res.data);  
              //changing the state of context
              setstate((prev)=>(
                      {
                         ...prev, 
                        token:res.data.token,
                        user:res.data.user
                       
                      }
                  
              ))
          //data set to local storage
                window.localStorage.setItem('auth',JSON.stringify(res.data));
             
              if(res.data.error){
                console.log(res.data);
                toast.error(res.data.error);
                 
              } 
              else{
                Router.push('/');
              }      
              Setloadstate(false);

            setLogin((prevstate)=>({
                 
                ...prevstate,
              
                email:' ',
                Password:''

            }))
              
       
            }).catch((err)=>
               
               { 
                 Setloadstate(false);
                   console.log(err)
                
               }
            )

            
    }
    return (
         <div className="container-fluid  ">
            <div className="row loginpage registerpage ">
            <div className="col">
                <h1>Login</h1>
            </div>
            </div>
           
            <div className="row">
                <div className="col-md-6 offset-md-3 ">
                      
                       <AuthForm  
                       handleSubmit={handleSubmit}
                       loading={loading}
                       login={login}
                       setLogin={setLogin}
                      


                     /> 
                     {/* register link */}
                       <div className="row ">
                        <div className="col ">
                          <div className="">
                            <p>not yet registered ? <Link href={'/register'}><a>register</a></Link></p>
                          </div>
                        </div>
                      </div>
                      {/* forgot password link  */}
                      <div className="row ">
                        <div className="col ">
                          <div >
                             <Link href={'/forgot_password'}><a className="text-danger" >Forgot password</a></Link>
                          </div>
                        </div>
                      </div> 
                                </div>
                            </div>
                        </div>
    )
    }
    export default login