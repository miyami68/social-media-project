import bcrypt from 'bcrypt';
const saltRound=10;

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
    
     
    




    

export const istruepassword= async (password,hashedpassword)=>{
 

      return bcrypt.compare(password,hashedpassword);


}
