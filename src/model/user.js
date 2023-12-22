import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Use different email."],
    index:true,
   
},
  profileUrl: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
},
});



export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
