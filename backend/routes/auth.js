import  express from 'express';
const router= express.Router();
import register from '../controller/authregistration.js'
router.post('/register',register);

const _default = router;
export { _default as default };


