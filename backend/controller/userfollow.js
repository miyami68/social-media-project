import User from "../models/auth.js"
export const addFollower = async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.body._id, {
        $addToSet: { followers: req.user._id },
      });
     
  
      next();
    } catch (err) {
      console.log(err);
    }
  };
   
  export const userFollow = async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.user._id,
        {
          $addToSet: { following: req.body._id },
        },
        { new: true }
      ).select("-password -secret");
      res.json(user);
    } catch (err) {
      console.log(err);
    }
  };