import User from '../models/auth.js'
const current_User = async (req, res) => {
    //  console.log(req.user);
      try {
        let user;

          // const ram=req.user._id;
       req&&req.user&&req.user._id&&(user = await User.findById(req.user._id));
        // res.json(user);
       
        res.json({ ok: true });
      } catch (err) {
        console.log(err);
        res.sendStatus(400);
      }
    };

    export default current_User