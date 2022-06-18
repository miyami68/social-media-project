import User from '../models/auth.js'

export const findPeople = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      // user.following
      let following = user.following;
      following.push(user._id);
      const people = await User.find({ _id: { $nin: following } }).select("-password -secret").limit(10);
      res.json(people);
    } catch (err) {
      console.log(err);
    }
  };