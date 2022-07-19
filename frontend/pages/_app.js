import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/nav';
import Head from 'next/head';
import 'antd/dist/antd.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {UserProvider} from '../context/authlog';
function Myapp({Component,pagesProps}){
     
     return (
         
        <UserProvider>
       
         <Navbar/>
         <ToastContainer 
            position="top-center"
         />
       <Component {...pagesProps}/>

     </UserProvider>
       
         
       
       
     )

}

export default Myapp
