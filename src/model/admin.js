import mongoose, { Schema } from "mongoose";

const adminSchema= new Schema({
    name:{
        type:String,
        required:[true,"Name is required !!!!"]
    },
    password:{
        type:String,
        required:[true,"Password is required !!!!"]
    }
})


export const Admin = mongoose.models.admin ||  mongoose.model("admin",adminSchema)