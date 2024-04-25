import mongoose from 'mongoose'

const userschema=new mongoose.Schema({
  username:{
    type:String,
    required:[true,"please provide a username"],
    unique:true

  },
  email:{
    type:String,
    required:[true,"please provide a email"],
    unique:true

  },
  password:{
    type:String,
    required:[true,"please provide a password"],
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  isAdmin:{ 
    type:Boolean,
    default:false
  },

  forgetPasswordToken:String,

  forgetPasswordTokenExpiry:Date,

  verifyToken:String,

  verifyTokenExpiry:Date

})

const User=mongoose.model.users || mongoose.model("users",userschema)
export default User;