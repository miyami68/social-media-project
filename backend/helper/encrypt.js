import bcrypt from 'bcrypt';
const saltRound=10;


//password encrypt
export const encrypt = async (password)=>{
   
    
  try {
      
        const hash = await bcrypt.hash(password, saltRound);
        console.log("password hashed");
        return hash;
    } catch (err) {
        console.log(err);

    }

    //  const encyptedpassword=  await bcrypt.hash(password,10,(err,encryptedPassword)=>{
           
    //     try
              
    //     })
       


    }
    
     
    



    // async function checkUser(username, password) {
    //     //... fetch user from a db etc.
    
    //     const match = await bcrypt.compare(password, user.passwordHash);
    
    //     if(match) {
    //         //login
    //     }
    
    //     //...
    // }
    
//password maching 
export const istruepassword= async (password,hashedpassword)=>{
 

    const match = await bcrypt.compare(password, hashedpassword);
    if(match){
        return true;
    }
    return false;

}
