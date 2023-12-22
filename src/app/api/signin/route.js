import { User } from "@/model/user"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { connectDB } from "@/helper/db"
export async function POST(request){

    // Get Email and password from client.
    
    const {email,password}= await request.json()

    try {

        await connectDB()

        // 1. Match Email and find user 


   const user= await User.findOne({
        email:email
    })
    // console.log("User is",user)
    // Check whether user is found or not
    if(user==null){
        // Throw error
        throw new Error("User not found")
    }
// 2. Match Password throgh bcrypt compareSync function


   const matchPassword= bcrypt.compareSync(password,user.password)
    if(!matchPassword){
        throw new Error("Password not matched")
    }

// 3. Make JWT Token

    const token= jwt.sign({
        _id:user._id
    },process.env.JWT_KEY)

    // console.log(token)
// 4. Send JWT through cookies


    // Create response for cookie
    const response=NextResponse.json({
        message:"Login in Successfully",
        success:true,
        user:user
    })
    response.cookies.set("authToken",token,{
        expireIn:"1d",
        httpOnly:false
    })

    return response;


        
    } catch (error) {
        return NextResponse.json({
            message:error.message,
            success:false
        },{
            status:500
        })
    }


}