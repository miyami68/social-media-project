import { useContext } from "react";
import { UserContext } from "../context/authlog";
const Home=()=> {
  const [state,setstate]=useContext(UserContext);
  return (
    <div className="container">
      
      <div className="row">
            <div className="col">
            {/* <img src="/images/images.jpg" alt="image" /> */}
             {/* {state.token } */}
             {/* { state.user} */}{
               JSON.stringify(state)
             }
            <h1> home page</h1>  
              
            </div>
 

      </div>
    </div>
  
  )
}

export default Home