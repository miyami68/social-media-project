import { LoadingOutlined} from '@ant-design/icons';
 export const AuthForm =({handleSubmit,loading,login,setLogin })=>{
  

    return(
    <>
          <form onSubmit={handleSubmit} className=" justify-content-center ">
                     
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="email" className="text-muted">Enter Email</label>
                      </small>
                          
                          <input autoComplete="false" value={login.email}   onChange={(e)=>{
                                    setLogin((prevState)=>({
                                        ...prevState,
                                     email:e.target.value
                                    }))
                          }}    className=" form-control" type="email" placeholder="Email" />
                      </div>
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="Password" className="text-muted"> Enter Password</label>
                      </small>
                       
                          <input autoComplete="false" value={login.Password}   onChange={(e)=>{
                              setLogin((prevState)=>({
                                   ...prevState,
                                Password:e.target.value
                              }))
                          }}    className="form-control" type="password" placeholder="Password" />
                      </div>
        

                      <div className='form-group p-2'>
                      <button disabled={ !login.Password || !login.email} className="btn btn-primary " type="submit">{loading?<LoadingOutlined />:'submit'}</button>
                      </div>
                       
                         </form>
           </>
    )
}