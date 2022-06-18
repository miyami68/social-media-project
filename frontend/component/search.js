import { useState, useContext } from "react";
import { UserContext } from "../context/authlog.js";
import axios from "axios";
import People from "./card/people.js";
import {  toast } from 'react-toastify';
const Search = () => {
  const [state,setState] = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const searchUser = async (e) => {
    e.preventDefault();
    // console.log(`Find "${query}" f rom db`);
    try {
      const { data } = await axios.get(`/search-user/${query}`);
      
      setResult(data);

    } catch (err) {
      console.log(err);
    }
  }
  // const handleFollow =async()=>{
      
  //   console.log("follow");

  // }
  const handleFollow = async( user )=>{
           
    try{
         const {data} = await axios.put("/user-follow",{_id:user._id});

         let auth = JSON.parse(localStorage.getItem('auth'));
         
         auth.user= data;
         localStorage.setItem('auth',JSON.stringify(auth));
        
         setState({...state,user:data});
         
         let filtered = result.filter((p)=>{
             return   p._id!==user._id
         });
          setResult(filtered);
     
       toast.success(`follwing ${user.name}`) ;  
    }
    catch(err){
      console.log(err);
    }

}
const handleUnFollow =async(user)=>{
  try {
    const {data} = await axios.put("/user-unfollow",{_id:user._id});

    let auth = JSON.parse(localStorage.getItem('auth'));
    
    auth.user= data;
    localStorage.setItem('auth',JSON.stringify(auth));
   
    setState({...state,user:data});
    
    let filtered = result.filter((p)=>{
        return   p._id!==user._id
    });
   setResult(filtered);
 
  toast.error(`Unfollowed ${user.name}`) ;  
       
  } catch (error) {
      console.log(error);
  }

}
  return (
    <div className="m-4">
      <form className="form-inline row pb-3 pt-3" onSubmit={searchUser}>
        <div className="col-8">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
              setResult([]);
            }}
            value={query}
            className="form-control"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="col-4">
          <button className="btn btn-outline-primary col-12" type="submit">
            Search
          </button>
        </div>
      </form>

       {result.length!=0&& <People  people={result} handleFollow={handleFollow} handleUnFollow={handleUnFollow} />}
     
    
    </div>
    
  );
};

export default Search;