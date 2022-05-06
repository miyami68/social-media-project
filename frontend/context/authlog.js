import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import Router from 'next/router';
import axios  from 'axios';
const UserContext = createContext();
const  UserProvider =({children})=> {
    
    
     const [state, setstate] = useState({
         user:{},
         token:""
     })
   
   useEffect(()=>{

       setstate(JSON.parse(window.localStorage.getItem('auth'))

   ); 
   },[])
   const token = state&&state.token?state.token:' ';
   axios.defaults.baseURL=process.env.NEXT_PUBLIC_API;
   axios.defaults.headers.common[ 'Authorization']= `Bearer ${token}`;
  

   axios.interceptors.response.use(
    function (response) {
      // Do something before request is sent
      return response;
    },
    function (error) {
      // Do something with request error
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        setstate(null);
        window.localStorage.removeItem("auth");
        Router.push("/login");
      }
    }
  );
  return  (
  
       
       <UserContext.Provider value={[state ,setstate]}>
           {children}
      </UserContext.Provider>

       

  )
}
export {UserProvider,UserContext};