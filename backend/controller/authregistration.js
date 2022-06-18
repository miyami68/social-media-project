import User from '../models/auth.js';
import { nanoid } from 'nanoid'
import { encrypt,istruepassword } from '../helper/encrypt.js';
//register call back function 
const register=async (req,res,next)=>{
  const  {Name,email,Password,Secret} = req.body;

   if(!Name){
    //    res.send('name is required') ;
    return res.json({
        error:'name is required'
    })
   }

if(!Password|| Password.length<6){
    return res.json({
        error:'please enter password or enter it more than 5 char'
    })
    // res.send('please enter password or enter it more than 5 char') ;
}
if(!Secret){
    // res.send('secret key required') ;
    return res.json({
        error:'secret key required'
    })
    
}

  const userone = await User.findOne({email});

  if(userone){
    return res.json({
        error:'email already exist'
    })
  }
console.log(req.body);
  const hashpassword= await encrypt(Password)
      try{
          console.log('password encrypter');
      }
      catch(err){
          console.log(err +" find out this err");
      }
     
 
  const  user = new User( {
             name:Name,
           email:email,
           password:hashpassword,
           username: nanoid(6),
           secret:Secret.toLowerCase()
   })
   console.log(user);
   try{
        
            await user.save()
            try{
                console.log('saved data');
                return res.json({
                    ok:'true'
                })
            }
            catch(err){
                  console.log(err);
            }
            console.log('user has been registerd');

   }
   catch(err){
            console.log(err);
   }
 
}

const _default = register;
export { _default as default };

