import Link from 'next/link';

const Navbar=()=>{
  return(
      <>
        <nav className='nav bg-dark justify-content-end   '  >
            <Link href="/"  >
            <a  className='text-light nav-link ' > home </a>
            </Link>
            <Link href="/register" >
            <a  className='text-light nav-link'> register </a>
            </Link>
            <Link href="/login" >
            <a  className='text-light nav-link'> login </a>
            </Link>
        </nav>
      </>
  )
 
}
export default Navbar