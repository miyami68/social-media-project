import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../component/nav';
import Head from 'next/head';
import 'antd/dist/antd.css'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Myapp({Component,pagesProbs}){
    
     return (
         <div>
         <Head>
          <link rel="stylesheet" href="/css/style.css" />
         </Head>
         <Navbar/>
         <ToastContainer 
            position="top-center"
         />
         
         <Component{...pagesProbs}/>
         
         </div>
     )

}
export default Myapp
