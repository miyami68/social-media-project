import dynamic from 'next/dynamic';
import {Avatar} from 'antd'
const ReactQuill= dynamic(()=>import("react-quill"),{ssr:false});
// import ReactQuill from 'react-quill'
import {CameraOutlined} from "@ant-design/icons" 
import {LoadingOutlined} from "@ant-design/icons" 
import 'react-quill/dist/quill.snow.css'
 const UserForm =({Post,newPost,PostSubmit,handleImage,image,uploading})=>{




 return (
     <div>
          <div className="card">
      <div className="card-body pb-3">
        <form className="form-group">
          <ReactQuill
              theme='snow'
            value={Post}
            onChange={(e) => newPost(e)}
            className="form-control"
            placeholder="Write something..."
          />
        </form>
      </div>

      <div className="card-footer d-flex justify-content-between text-muted">
        <button disabled={!Post} onClick={PostSubmit} className="btn btn-primary btn-sm mt-1">
          Post
        </button>
        <label>
        {image && image.url ? (
            <Avatar size={30} src={image.url} className="mt-1" />
          ) : uploading ? (
            <LoadingOutlined className="mt-2" />
          ) : (
            <CameraOutlined className="mt-2" />
          )}
          <input onChange={handleImage} type="file" accept="images/*" hidden  />
        </label>
      </div>
    </div>
     </div>
 )



}
export default UserForm 