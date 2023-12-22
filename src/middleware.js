import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    // Making Public Api Through IF 
    if(request.nextUrl.pathname === "/api/signin" || request.nextUrl.pathname === "/api/users"){
      return;
  }
const authToken = await request.cookies.get("authToken")?.value;

const pathsNotAccessableToSignedInUer =
  request.nextUrl.pathname === "/sign-up" ||
  request.nextUrl.pathname === "/sign-in";

  if(pathsNotAccessableToSignedInUer){
      if(authToken){
  return NextResponse.redirect(new URL('/profile/user', request.url))
          
      }
  }
  else{
      if(!authToken){
        if(request.nextUrl.pathname.startsWith("/api")){
          return NextResponse.json({
            message:"Can not access secured routes.",
            success:false
          },{
            status:401
          })
        }
          return NextResponse.redirect(new URL('/sign-in', request.url))

      }
      else{
      // verify
      }
    }


// console.log(authToken);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    
    "/api/:path*",
    "/add-work",
    "/profile/:path*",
    "/sign-up",
    "/sign-in",
    "/show-works",
  ],
};
