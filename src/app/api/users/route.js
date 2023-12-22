import { connectDB } from "@/helper/db";
import { User } from "@/model/user";
// import { NextResponse } from "next/server";
// Importing bcrypt
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

// console.log("DB Connected")

// Users Sttic API GET Function

export async function GET(request, { params }) {
  let users = [];
  try {
    
    // DB Connection

     await connectDB();
    // Waiting for users to be fetched
    users = await User.find();
    console.log("Fetched Data");
    // Returning users as response
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse(
      {
        message: "Failed to fetch",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request, { params }) {
  // Destructuring datafrom request Url.
  const { name, email, password, about, profileUrl } = await request.json();

  // Creating object of client's data from request and creating the users.
  const addUser = new User({
    name,
    email,
    password,
    profileUrl,
    about,
  });

  try {
    // Encrypting the password for the security.
    addUser.password = bcrypt.hashSync(
      addUser.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    // console.log(addUser)

    // Saving the user to the database.

    await connectDB()
    const createUser = await addUser.save();

    const response = NextResponse.json(addUser, { status: 201 });
    return response;
  } catch (error) {
    console.log(error);
    const response = NextResponse.json(
      {
        message: "Email address is already assigned, Please use other email address.",
        status: false,
      },
      {
        status: 500,
      }
    );
    return response;
  }
}
