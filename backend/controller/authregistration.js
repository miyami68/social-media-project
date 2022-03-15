import User from '../models/auth.js';
import { encrypt,istruepassword } from '../helper/encrypt.js';

const register=async (req,res,next)=>{
  const  {Name,email,Password,Secret} = req.body;

   if(!Name){
       res.send('name is required') ;
   }

if(!Password|| Password.length<6){
    res.send('please enter password or enter it more than 6 char') ;
}
if(!Secret){
    res.send('secret key required') ;
    
}

const userone = await User.findOne({email});

  if(userone){
      res.send('email is already exist')
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
           secret:Secret
   })
   try{
        
            await user.save()
            try{
                console.log('saved data');
                res.send(true)
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

