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
import UserPostforEdit from '../controller/userpostforedit.js';
import CanEditAndDelete from '../middle_ware/canupdateanddelete.js';
import {UpdatePost} from '../controller/updatepost.js';
import {DeletePost} from '../controller/deletePost.js';
import { findPeople } from '../controller/findpeople.js';
import {profileUpdate} from '../controller/profile.js';
import {addFollower, userFollow} from '../controller/userfollow.js';
import {NewsFeed} from '../controller/newsfeed.js';
import {FetchFollowings} from "../controller/fetchfollowings.js";
import {removeFollower, userUnFollow} from "../controller/unfollow.js";
import {like,unlike} from '../controller/likeunlike.js';
import {totalPost} from '../controller/totalpost.js';
import {addComment,removeComment} from '../controller/addandremovecomment.js';
import {SearchUser} from '../controller/searchuser.js';
import {profilePage} from '../controller/profilepage.js';
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
//edit post call
router.get('/user-post/:_id',requiresignin,UserPostforEdit);
//updatepost
router.put('/update-post/:_id',requiresignin,CanEditAndDelete,UpdatePost);
// module.exports=router;
//delete post 
router.delete('/delete-post/:_id',requiresignin,CanEditAndDelete,DeletePost);
//profile update  

router.put('/profile-update',requiresignin,profileUpdate);
//follow people
router.get('/find-people',requiresignin,findPeople);
//user follow 
router.put('/user-follow',requiresignin,addFollower,userFollow);
//user follow 
router.put ('/user-unfollow',requiresignin,removeFollower,userUnFollow);
//News Feed
router.get('/news-feed/:page',requiresignin,NewsFeed);
//fetch following
router.get('/fetch-followings',requiresignin,FetchFollowings);
//handle like
router.put('/post-like',requiresignin,like);
//handle unlike
router.put('/post-unlike',requiresignin,unlike);
//add comment
router.put('/add-comment',requiresignin,addComment);
//remove comment
router.put('/remove-comment',requiresignin,removeComment);
//remove comment
router.put('/remove-comment',requiresignin,removeComment);

//total posts
router.get("/total-post",totalPost);
//serach user 
router.get('/search-user/:query',SearchUser);
//serach profile
router.get('/fetch-profile/:query',profilePage);
const _default = router;
export { _default as default };


