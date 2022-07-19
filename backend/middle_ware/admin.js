import User from '../models/auth.js';
export const isAdmin = async (req, res, next) => {
    try {
      const user = await User.findById(req.user._id);
      if (user.role !== "Admin") {
        return res.status(400).send("Unauthorized");
      } else {
        next();
      }
    } catch (err) {
      console.log(err);
    }
  };