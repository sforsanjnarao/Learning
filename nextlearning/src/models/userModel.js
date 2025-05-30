import mongoose, { Schema } from 'mongoose'
const userSchema =new Schema({
    username:{
        type:String,
        require:[true,'please provide a username'],
        unique:true
    },
    email:{
        type:String,
        require: [true,'please provied a email'],
        unique:true
    },
    password:{
        type:String,
        require: [true,'please provied a password'],
    },
    isVerFied:{
        type:Boolean,
        default:false,
    },
    isVerFied:{
        type:Boolean,
        default:false,
    },
     

})

const UserModel=mongoose.models.users || mongoose.model('user',userSchema)
export default UserModel