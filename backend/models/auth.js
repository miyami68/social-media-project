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
image: {
    url: String,
    public_id: String,
  },
username:{
    type:String,
    unique:true,
    requiredPaths:true,

},
role:{
    type:String,
    default:"Subscriber",
},
 about:{},

 followers:[{type:String, ref:'User'}],
 following:[{type:String, ref:'User'}],

 

},  { timestamps: true });


 const  _default =  mongoose.model('User',userSchema);
export { _default as default };


