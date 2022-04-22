import React, { useEffect, useState } from 'react';
import { createContext } from "react";

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
  return  (
  
       
       <UserContext.Provider value={[state ,setstate]}>
           {children}
      </UserContext.Provider>

       

  )
}
export {UserProvider,UserContext};