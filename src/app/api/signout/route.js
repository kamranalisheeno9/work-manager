import { NextResponse } from "next/server";

export async function POST(request){
    const response=NextResponse.json({
        message:"Log Out Success",
        success:true
    })
     response.cookies.set("authToken","",{
        expireIn: new Date(0),
    })

    console.log("Signed out APi Worked")
    return response;
}