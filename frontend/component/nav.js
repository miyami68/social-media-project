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
   },
   [process.browser&&window.location.path])

  return(
      <>
         <nav className='nav bg-primary justify-content-between   '  >
        
            <Link href="/"  >
            <a  className={`text-light nav-link  ${CurrentLink==='/'?"active":""}`}  > Memories </a>
            </Link>
              {state!==null?(
            <>  

              <div className="dropdown">
               <a className="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
               {state&&state.user&&state.user.name}
              </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
            <Link href="/user_dashboard" >
            <a  className={`text-dark nav-link  ${CurrentLink==='/user_dashboard'?"active":""}`} > dashboard </a>
            </Link>
             </li>
             <li>
            <Link href="/profile/update" >
            <a  className={`text-dark nav-link  ${CurrentLink==='/profile/update'?"active":""}`} >profile</a>
            </Link>
            </li>
            {state.user.role==="Admin"&&(
              <li>
                <Link href='/profile/admin'>
                    <a className={`nav-link dropdown-item ${
                      CurrentLink==="/admin/index" &&"active"
                    }`}>
                     Admin
                    </a>
                </Link>
              </li>
            )

            }
            <li>
            <a onClick={cleanState} className={`text-dark nav-link  ${CurrentLink==='/logout'?"active":""}`}  > logout </a>
            </li>
          </ul>
           </div>
          </>)
          :(<>
               
           <Link href="/register" >
            <a  className={`text-light nav-link  ${CurrentLink==='/register'?"active":""}`} > register </a>
            </Link>
            <Link href="/login" >
            <a  className={`text-light nav-link  ${CurrentLink==='/login'?"active":""}`} > login </a>
            </Link>

          </>
          )}
        </nav>
      </>
  )
 
}
export default Navbar