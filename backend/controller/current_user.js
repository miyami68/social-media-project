import User from '../models/auth.js'
const current_User = async (req, res) => {
      try {
        const user = await User.findById(req.user._id);
        // res.json(user);
        res.json({ ok: true });
      } catch (err) {
        console.log(err);
        res.sendStatus(400);
      }
    };

    export default current_User