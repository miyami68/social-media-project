import  express from 'express';
const router= express.Router();
import register from '../controller/authregistration.js'
import login from '../controller/authlogin.js'
import current_User from '../controller/current_user.js'
import forgotPassword from '../controller/forgotpassword.js'
import   {requiresignin} from '../middle_ware/current_user.js'
import {CreatePost} from  '../controller/createpost.js';
import {UploadPost} from '../controller/uploadpost.js';
import  formidableMiddleware from 'express-formidable';
import {UserPosts} from '../controller/userposts.js';
//register route
router.post('/register',register);
//login route
router.post('/login',login);
//current user 
router.get('/current_user',requiresignin,current_User);
//forgot password 
router.post('/forgot_password',forgotPassword);
//create post


router.post('/create_post',requiresignin,CreatePost);

//posts

 
//post upload to cloudnary
 
router.post('/upload_image',requiresignin,formidableMiddleware({maxFieldsSize:5*1024*1024}),UploadPost);

 //gettig the posts (for render)
router.get('/user_posts',requiresignin,UserPosts);
// module.exports=router;
const _default = router;
export { _default as default };


