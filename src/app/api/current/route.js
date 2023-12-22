import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { User } from "@/model/user";
import { connectDB } from "@/helper/db";
export async function GET(request){
    
        const authToken= request.cookies.get("authToken")?.value;
        
        // console.log(authToken)
          if(!authToken){
            return NextResponse.json({
              message:"User not logged in."
            })
          }
        const data=  jwt.verify(authToken , process.env.JWT_KEY);
        console.log(data._id)
        await connectDB()
        const currentUser= await User.findById({
            _id:data._id
        }).select("-password")
        console.log(currentUser)
        return NextResponse.json(currentUser)
      } 
      
        
       
    