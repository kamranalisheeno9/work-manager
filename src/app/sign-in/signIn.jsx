"use client";
import { useContext, useState } from "react";
import SignInSvg from "../../assets/signin.svg";
import Image from "next/image";
import { toast } from "react-toastify";
import { signIn } from "@/services/signService";
import { useRouter } from "next/navigation";
import UserContext from "@/context/UserContext";

export default  function SignInPage() {
  const context= useContext(UserContext)
  const router=useRouter()
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleClear = () => {
    setUser({
      email:"",
      password:""
    })
  }
  const handleSignIn=async (event)=>{
    event.preventDefault();

    if (user.email.trim() === "" || user.email === null) {
      toast.warning("Email is required", {
        position: "bottom-right",
        theme: "dark",
      })
      return;
    
    }
      else if (user.password.trim() === "" || user.password === null) {
        toast.warning("Password is required", {
          position: "bottom-right",
          theme: "dark",
        })
      return;
      }
    

      setLoading(true)
      try {
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      const signedUser=  await signIn(user)
      toast.success("User Signed In",{
        position:"bottom-right",
        theme:"dark"
      })

      // console.log(signedUser.user)
      context.setUser(signedUser.user)
      // Set User in context APi through promise result.

      
      // Redirect
       
      router.push("/profile/user")
        handleClear()
        
      } catch (error) {
        setTimeout(() => {
          setLoading(false)
        }, 3000);
        console.log(error)
        toast.warning(error.response.data.message, {
          position: "bottom-right",
          theme: "dark",
        })
      
      }




    }


  return (
    <div className=" min-h-[90vh] grid grid-cols-12 ">
      <div className="col-span-5 col-start-3 self-center ">
        <div className="  p-4   ">
          <div className=" text-center mt-4 text-3xl font-semibold text-[#0074bc] uppercase">
            Sign In Here...
          </div>

          <form className="my-6" action="#!" onSubmit={handleSignIn}>
           
            {/* Email */}

            <div className="mt-6">
              <label
                htmlFor="user_email"
                className="block mb-2 select-none text-md font-medium uppercase ps-2 "
              >
                Email
              </label>
              <input
                placeholder="Email"
                className="block w-full rounded-lg mt-2 placeholder:text-gray-700 bg-slate-50  text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
                type="email"
                name="user_email"
                id="user_email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
            </div>
            {/* Password */}

            <div className="mt-6">
              <label
                htmlFor="user_password"
                className="block mb-2 select-none text-md font-medium uppercase ps-2 "
              >
                Password
              </label>
              <input
                placeholder="Password"
                className="block w-full rounded-lg mt-2 placeholder:text-gray-700 bg-slate-50  text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
                type="password"
                name="user_password"
                id="user_password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                value={user.password}
              />
            </div>
           
            <div className=" flex justify-center mt-6">
              <button
                disabled={loading ? true : false}
                type="submit"
                className=" text-white bg-[#2f3c67] px-4 py-2 rounded transition-all duration-200 hover:bg-[#3b4c83] "
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
              <button
                type="button"
                className=" text-white bg-[#b62525] px-4 py-2 rounded ms-4 transition-all duration-200 hover:bg-[#cb3636]"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
            {/* {JSON.stringify(user)} */}
          </form>
        </div>
      </div>
      <div className="col-span-4 col-start-9 bg-[#1e2640] flex items-center justify-center my-6 rounded-l-full">
        <Image src={SignInSvg} style={{ width: "260px" }} alt="Sign Up Image" />
      </div>
    </div>
  );
}
