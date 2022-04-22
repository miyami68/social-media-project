import mongoose  from "mongoose";
const {Schema} = mongoose;

//user Schema
 const userSchema = new Schema ({

  name: {
     type: String,
     trim:true,
     required:true
  },
 email: {
    type: String,
    trim:true,
    required:true,
    unique:true
 },
 password: {
     type: String,
     required:true,
     max:64,
     min:6
 },
 secret: {
     type: String,
     required:true,
},
 photo:
 {
     type: String
 },

 about:{},

 follwoers: [{type:Schema.ObjectId, ref:'User'}],
 following:[{type:Schema.ObjectId, ref:'User'}],

 

}, {timeStamps:true});


 const  _default =  mongoose.model('User',userSchema);
export { _default as default };


