import mongoose,{Schema} from "mongoose";


const workSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    },
    userId:{
        type:mongoose.ObjectId,
        required:true
    }

})


export const Work= mongoose.models.Works || mongoose.model("Works", workSchema)