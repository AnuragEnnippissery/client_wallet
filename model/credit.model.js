import mongoose from "mongoose";

let CreditSchema =new mongoose.Schema({
    
    
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // links to the User model
        required: true,
    },
    date:{
        type:Date,
        default: Date.now
    },
    trans_type:{
        type:String,
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
})

let CreditModel=new mongoose.model("Credit",CreditSchema);
export default CreditModel;