import  express from 'express';
const router= express.Router();
import register from '../controller/authregistration.js'
import login from '../controller/authlogin.js'
import current_User from '../controller/current_user.js'
import   {requiresignin} from '../middle_ware/current_user.js'
//register route
router.post('/register',register);
//login route
router.post('/login',login);
//current user 
router.get('/current_user',requiresignin,current_User);

const _default = router;
export { _default as default };


