import User from '../models/auth.js';
//searching a user 
export const   SearchUser =async(req,res)=>{
    
const  {query}= req.params;
if(!query) {
    return ;
}
 else{
    try {
        //regix use 
        const people =await User.find({
            $or:[
               {username:{$regex:query , $options:'i'}},
               { name:{$regex:query , $options:'i'}}
            ]
        }).select("-password -secret")
       console.log(people);
       res.json(people);
    } catch (error) {
        console.log(error);
    }
    
 }

}