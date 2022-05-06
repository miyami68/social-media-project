import mongoose  from "mongoose";
const {Schema} = mongoose;
import User from './auth.js';
//user Schema
 const postSchema = new Schema ({

    content: {
        type: {},
        required: true,
      },
      postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },

      image: {
        url: String,
        public_id: String,
      },
      likes: [{ type:Schema.Types.ObjectId, ref: "user" }],
      comments: [
        {
          text: String,
          created: { type: Date, default: Date.now },
          postedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
          },
        },
      ],

 

}, {timeStamps:true});


 const  _default =  mongoose.model('Post',postSchema);
export { _default as default };

