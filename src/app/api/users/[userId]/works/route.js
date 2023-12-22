
// Call = http://localhost:3000/api/users/6576dbfefab3ba8b9182c74f/works

import { connectDB } from "@/helper/db";
import { Work } from "@/model/work";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {userId}=params;
    try {
        await connectDB()
        const works= await Work.find({
            userId:userId
        })

        return NextResponse.json(works)


    } catch (error) {
        console.log("Error is", error)
        return NextResponse.json({
            message:"Failed to fetch",
            success:false
        })
    }
}