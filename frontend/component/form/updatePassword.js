import { LoadingOutlined} from '@ant-design/icons';
 export const ForgotPasswordForm =({handleSubmit,loading,updatePassword,setNewPassword})=>{
    return(
    <>
          <form onSubmit={handleSubmit} className=" justify-content-center ">
                     
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="email" className="text-muted">Enter Email</label>
                      </small>
                          
                          <input autoComplete="false" value={updatePassword.email}   onChange={(e)=>{
                                    setNewPassword((prevState)=>({
                                        ...prevState,
                                     email:e.target.value
                                    }))
                          }}    className=" form-control" type="email" placeholder="Email" />
                      </div>
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="Password" className="text-muted"> Enter New Password</label>
                      </small>
                       
                          <input autoComplete="false" value={updatePassword.Password}   onChange={(e)=>{
                              setNewPassword((prevState)=>({
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
                        
                            <input autoComplete="false"  value={updatePassword.Secret}   onChange={(e)=>{
                                setNewPassword((prevState)=>({
                                    ...prevState,
                                  Secret:e.target.value
                                }))
                            } }  type="text" className="form-control" placeholder="You can use it to reset password"/>
                      </div>


                      <div className='form-group p-2'>
                      <button disabled={!updatePassword.Secret  || !updatePassword.Password || !updatePassword.email} className="btn btn-primary " type="submit">{loading?<LoadingOutlined />:'submit'}</button>
                      </div>
                       
                         </form>
           </>
    )
}