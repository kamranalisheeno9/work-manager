import { connectDB } from "@/helper/db";
import { User } from "@/model/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    await connectDB();
    const currentUser = await User.findById(userId);

    console.log("Data Fetched");
    return NextResponse.json(currentUser);
  } catch (error) {
    console.log(error);
    console.log("Failed to fetch Data");
    return NextResponse({
      message: "Failed to fetch",
      succes: false,
    });
  }
}

export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await connectDB();

    await User.deleteOne({
      _id: userId,
    });
    console.log("User Deleted");
    return NextResponse.json({
      message: "User is deleted",
      succes: true,
    });
  } catch (error) {
    console.log("User Failed To Deleted");
    return NextResponse.json({
      message: "Falied To Delete The User",
      succes: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, email, password, profileUrl, about } = await request.json();
  try {
    await connectDB();

    const user = await User.findById(userId);
    user.name = name;
    user.email = email;
    user.password = password;
    user.profileUrl = profileUrl;
    user.about = about;

    const updateUser = await user.save();

    console.log("user update");

    return NextResponse.json(updateUser);
  } catch (error) {
    console.log(error);
    console.log("Failed To Update The User");
    return NextResponse.json({
      message: "User Failed To Update",
      success: false,
    });
  }
}
