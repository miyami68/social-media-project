import Link from 'next/link';
import Router from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/authlog';
// import '../public/css/style.css';

const Navbar=()=>{
  const [CurrentLink,SetCurrentLink]=useState('');
  const [state,setstate] = useContext(UserContext);
  const [authstate,setauthstate]=useState(true);
  const cleanState =()=>{
        
          window.localStorage.removeItem('auth');
          setstate(null);
          Router.push('/login');
       
  }
  useEffect(()=>{
     process.browser&&  SetCurrentLink(window.location.path);
  },[process.browser&&window.location.path])
//   useEffect(()=>{
//             if (authstate) {
//                Router.push('/login');
//             }
//  })
  return(
      <>
        <nav className='nav bg-primary justify-content-end   '  >
        
              <Link href="/"  >
            <a  className={`text-light nav-link  ${CurrentLink==='/'?"active":""}`}  > Memories </a>
            </Link>
              {state!==null?(<>  
                <Link href="/user_dashboard" >
                  <a  className={`text-light nav-link  ${CurrentLink==='/user_dashboard'?"active":""}`} > {state&&state.user&&state.user.name} </a>
               </Link>
               <a onClick={cleanState} className={`text-light nav-link  ${CurrentLink==='/logout'?"active":""}`}  > logout </a>
              </>):(<>
               
                <Link href="/register" >
            <a  className={`text-light nav-link  ${CurrentLink==='/register'?"active":""}`} > register </a>
            </Link>
            <Link href="/login" >
            <a  className={`text-light nav-link  ${CurrentLink==='/login'?"active":""}`} > login </a>
            </Link>

              </>)}
             
           
          

        </nav>
      </>
  )
 
}
export default Navbar