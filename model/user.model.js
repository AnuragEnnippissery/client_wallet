import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        //trim:true
    },
    password:{
        type:String,
        required:true,
    }
    
})
let UserModel = mongoose.model("User",UserSchema)
export default UserModel;