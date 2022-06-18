import { LoadingOutlined} from '@ant-design/icons';
 const ProfileUpdate =({handleSubmit,loading,profile,setProfile })=>{
    return(
    <>
          <form onSubmit={handleSubmit} className=" justify-content-center ">
          <div className='form-group p-2'>
                      <small>
                      
                      <label htmlFor="email" className="text-muted">UserName</label>
                      </small>
                          
                          <input autoComplete="false" value={profile.username}   onChange={(e)=>{
                                    setProfile((prevState)=>({
                                        ...prevState,
                                      username:e.target.value
                                    }))
                          }}    className=" form-control" type="username" placeholder="username" />
                      </div>
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="about" className="text-muted">About</label>
                      </small>
                          
                          <input autoComplete="false"  value={profile.about}   onChange={(e)=>{
                                    setProfile((prevState)=>({
                                        ...prevState,
                                     about:e.target.value
                                    }))
                          }}    className=" form-control" type="about" placeholder="About" />
                      </div>
                      <div  className='form-group p-2 ' >
                         <small>

                         <label htmlFor="Name" className="text-muted"> Name</label>
                         </small>
                         <input  autoComplete="false"    value={profile.Name} onChange={(e)=>{
                             
                                setProfile((prevState)=>({
                                ...prevState,
                                Name : e.target.value

                                
                                }))
                          
                             
                         }}  className="form-control"type="text" placeholder="Full Name"/>
                      </div>
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="email" className="text-muted"> Email</label>
                      </small>
                          
                          <input autoComplete="false" value={profile.email}   onChange={(e)=>{
                                    setProfile((prevState)=>({
                                        ...prevState,
                                     email:e.target.value
                                    }))
                          }}    className=" form-control" type="email" placeholder="Email" />
                      </div>
                     
                    
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="Password" className="text-muted">  Password</label>
                      </small>
                       
                          <input autoComplete="false" value={profile.Password}   onChange={(e)=>{
                              setProfile((prevState)=>({
                                   ...prevState,
                                Password:e.target.value
                              }))
                          }}    className="form-control" type="password" placeholder="Password" />
                      </div>
                     
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="options" className="text-muted p-2">Choose a option to reset password in future</label>
                      </small>
                        <div>
                        <select name="" id="" className="text-muted p-2 m-2">
                              <option  > what is your faviourate colour?</option>
                              <option >what is your faviourater place?</option>
                              <option >who is your best friend?</option>

                          </select>
                        </div>
                        
                            <input autoComplete="false"  value={profile.Secret}   onChange={(e)=>{
                                setProfile((prevState)=>({
                                    ...prevState,
                                  Secret:e.target.value
                                }))
                            } }  type="text" className="form-control" placeholder="You can use it to reset password"/>
                      </div>


                      <div className='form-group p-2'>
                      <button  className="btn btn-primary " type="submit">{loading?<LoadingOutlined />:'submit'}</button>
                      </div>
                       
                         </form>
           </>
    )
}
export default ProfileUpdate