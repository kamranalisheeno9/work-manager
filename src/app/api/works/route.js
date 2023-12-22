import { connectDB } from "@/helper/db";
import { Work } from "@/model/work";
import jwt  from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  let works=[]
  try {
    await connectDB()
   works= await Work.find()
  } catch (error) {
    console.log("Error occured", error);
    return NextResponse.json({
      message: "Works Data Fetching Failed",
      success: false,
    });
  }
  return NextResponse.json(works);
}

export async function POST(request,{params}) {

  const authToken=request.cookies.get("authToken")?.value;
  // console.log("auth Token is",authToken)

  const data= jwt.verify(authToken,process.env.JWT_KEY);
  console.log(data)

  const {title,description,status}= await request.json();

  const work= new Work({
    title,
    description,
    userId:data._id,
    status
  })

  if(title=="" || title==null){
    throw new Error("Title is required.")
    return;
  }
  if(description=="" || description==null){
    throw new Error("Description is required.")
    return;
  }
  await connectDB()

  const addWork= await work.save()

  try {
    return NextResponse.json(addWork);
  } catch (error) {
    console.log("Error occured", error);
    return NextResponse.json({
      message: "Works Data Fetching Failed",
      success: false,
    });
  }
}
