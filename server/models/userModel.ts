import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String , required:true},
    userName:{type:String,required:true,unique:true},//email
    password:{type:String,required:true},
    age:{type:Number,required:true}
})

const userModel = mongoose.models.user || mongoose.model('user',userSchema)
export default userModel