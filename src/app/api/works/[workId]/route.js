import { connectDB } from "@/helper/db";
import { Work } from "@/model/work";
import { NextResponse } from "next/server";

export async function GET(request,{params}) {
  const {workId}= params;
    try {
      await connectDB()
      const currentWork=await Work.findById(workId)
    return NextResponse.json(currentWork);
  } catch (error) {
    console.log("Error occured", error);
    return NextResponse.json({
      message: "Works Data Fetching Failed",
      success: false,
    });
  }
}
export async function DELETE(request,{params}) {
  const {workId}= params;
    try {
      await connectDB()

      const work=await Work.deleteOne({
        _id:workId
      })
    return NextResponse.json({
      message:`${workId} deleted`,
      success:true
    });
  } catch (error) {
    console.log("Error occured", error);
    return NextResponse.json({
      message: "Works Data Fetching Failed",
      success: false,
    });
  }
}


export async function PUT(request,{params}){
  const {workId}=params;
  const {title,description,date,status}= await request.json();
console.log(title)
console.log(description)
console.log(date)
  try {
    await connectDB()

  const work= await Work.findById(workId)
  work.title=title;
  work.description=description;
  work.status=status; 
  const updateWork= await work.save()

  console.log("Work Updated")
  return NextResponse.json(updateWork)
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message:"Failed To Update",
      success:false
    })
    
  }
}