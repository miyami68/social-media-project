
const Comment =({addComment,comment,setComment})=>{
    return(
        <div>
        
             <form  onSubmit={addComment}>
        <input type="text" className="form-control" placeholder="comment.." value={comment} onChange={(e)=>{
          setComment(e.target.value)
        }} />
        <button className="btn btn-primary btn-sm btn-block mt-3">submit</button>
        </form>
        </div>
    )
}
export default Comment