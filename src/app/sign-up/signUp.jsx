"use client";
import { useState } from "react";
import SignUpSvg from "../../assets/signup.svg";
import Image from "next/image";
import { signUp } from "@/services/signService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



export default function SignUpPage() {
  const router=useRouter()
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileUrl: "https://i.stack.imgur.com/l60Hf.png",
  });
  const handleClear = () => {
    setUser({
      name: "",
      email: "",
      password: "",
      about: "",
      profileUrl: "https://i.stack.imgur.com/l60Hf.png",
    });
  };

  const handleUserSignUp = async (event) => {
    event.preventDefault();

    if (user.name.trim() === "" || user.name === null) {
      toast.warning("Name is required", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    } else if (user.email.trim() === "" || user.email === null) {
      toast.warning("Email is required", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    } else if (user.password.trim() === "" || user.password === null) {
      toast.warning("Password is required", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    } else if (user.about.trim() === "" || user.about === null) {
      toast.warning("About is required", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // console.log(user);
    try {
      const createdUser = await signUp(user);
      toast.success("Signed up", {
        position: "bottom-right",
        theme: "dark",
      });

      handleClear();
      router.push("/sign-in")


      console.log("Current user is",createdUser)
    } catch (error) {
      const errorMessage=error.response.data.message;
      toast.error(errorMessage, {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <div className=" min-h-[90vh] grid grid-cols-12 ">
      <div className="col-span-5 col-start-3 self-center ">
        <div className="  p-4   ">
          <div className=" text-center mt-4 text-3xl font-semibold text-[#0074bc] uppercase">
            Sign Up Here...
          </div>

          <form className="my-6" action="#!" onSubmit={handleUserSignUp}>
            {/* Username */}

            <div className="mt-6">
              <label
                htmlFor="user_name"
                className="block mb-2 select-none text-md font-medium uppercase ps-2 "
              >
                Name
              </label>
              <input
                placeholder="Username"
                className="block w-full rounded-lg mt-2 placeholder:text-gray-700 bg-slate-50  text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
                type="text"
                name="user_name"
                id="user_name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                value={user.name}
              />
            </div>
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
            {/* About */}

            <div className="mt-6">
              <label
                htmlFor="user_about"
                className="block mb-2 select-none text-md font-medium uppercase ps-2 "
              >
                About
              </label>
              <textarea
                placeholder="About"
                className="block w-full rounded-lg mt-2 placeholder:text-gray-700 bg-slate-50  text-gray-900 text-md   p-2 outline-none transition duration-150 focus:outline-[#0074bc]  "
                type="text"
                name="user_about"
                id="user_about"
                onChange={(e) => setUser({ ...user, about: e.target.value })}
                value={user.about}
                rows={3}
              />
            </div>

            <div className=" flex justify-center mt-6">
              <button
                disabled={loading ? true : false}
                type="submit"
                className=" text-white bg-[#2f3c67] px-4 py-2 rounded transition-all duration-200 hover:bg-[#3b4c83] "
              >
                {loading ? "Signing Up..." : "Sign Up"}
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
        <Image src={SignUpSvg} style={{ width: "280px" }} alt="Sign Up Image" />
      </div>
    </div>
  );
}
