import { LoadingOutlined} from '@ant-design/icons';
 export const AuthForm =({handleSubmit,loading,registation,setRegistation})=>{
    return(
    <>
          <form onSubmit={handleSubmit}>
                      <div  className='form-group p-2' >
                         <small>
                         <label htmlFor="Name" className="text-muted">Enter Name</label>
                         </small>
                         <input  autoComplete="false"    value={registation.Name} onChange={(e)=>{
                             
                                setRegistation((prevState)=>({
                                ...prevState,
                                Name : e.target.value
                                }))
                          
                             
                         }}  className="form-control"type="text" placeholder="Full Name"/>
                      </div>
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="email" className="text-muted">Enter Email</label>
                      </small>
                          
                          <input autoComplete="false" value={registation.email}   onChange={(e)=>{
                                    setRegistation((prevState)=>({
                                        ...prevState,
                                     email:e.target.value
                                    }))
                          }}    className=" form-control" type="email" placeholder="Email" />
                      </div>
                      <div className='form-group p-2'>
                      <small>
                      <label htmlFor="Password" className="text-muted"> Enter Password</label>
                      </small>
                       
                          <input autoComplete="false" value={registation.Password}   onChange={(e)=>{
                              setRegistation((prevState)=>({
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
                        
                            <input autoComplete="false"  value={registation.Secret}   onChange={(e)=>{
                                setRegistation((prevState)=>({
                                    ...prevState,
                                  Secret:e.target.value
                                }))
                            } }  type="text" className="form-control" placeholder="You can use it to reset password"/>
                      </div>


                      <div className='form-group p-2'>
                      <button disabled={!registation.Secret || !registation.Name || !registation.Password || !registation.email} className="btn btn-primary " type="submit">{loading?<LoadingOutlined />:'submit'}</button>
                      </div>
                       
                         </form>
           </>
    )
}