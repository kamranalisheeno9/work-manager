"use client";
import UserContext from "@/context/UserContext";
import { signOut } from "@/services/signService";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Header() {
  const router = useRouter();
  const context = useContext(UserContext);
  const handleSignOut = async () => {
    try {
      const result = await signOut();
      console.log("Signed Out Successfully");
      // redirect
      context.setUser(undefined);
      router.push("/");

    } catch (error) {
      toast.error("Signout Error");
      console.log(error);
    }
  };
  // console.log(context);
  return (
    <div className=" grid grid-cols-12 justify-between items-center px-4 bg-[#212529]">
      <div className=" col-span-4">
        <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Vercel Logo"
          className="dark:invert"
          width={80}
          height={24}
          priority
          />
          </Link>
      </div>
      <div className="col-span-4">
        {context.user && (
          <>
        <ul className="flex justify-around items-center select-none ">
          <li className="px-4 uppercase hover:text-[#0074bc] transition-all  duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="px-4 uppercase hover:text-[#0074bc] transition-all  duration-200">
            <Link href="/show-works">Show Works</Link>
          </li>
          <li className="px-4 uppercase hover:text-[#0074bc] transition-all  duration-200">
            <Link href="/add-work">Add Work</Link>
          </li>
        </ul>
          </>
        )}
      </div>
      <div className="pr-2 col-span-4">
        {context.user && (
          <>
            <ul className="flex justify-end items-center select-none ">
              <li className="mx-2 px-4 py-1 uppercase   transition-all  duration-200 ">
                <Link href="/profile/user">{context.user.name}</Link>
              </li>
              <li className=" mx-2 px-4 py-1 uppercase hover:bg-[#0074bc] hover:text-black  transition-all  duration-200 border-2 rounded-full border-[#0074bc]">
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          </>
        )}
        {!context.user && (
          <>
            <ul className="flex justify-end items-center select-none ">
              <li className="mx-2 px-4 py-1 uppercase  hover:bg-[#0074bc] hover:text-black transition-all  duration-200 border-2 rounded-full border-[#0074bc]">
                <Link href="/sign-in">Sign In</Link>
              </li>
              <li className=" mx-2 px-4 py-1 uppercase hover:bg-[#0074bc] hover:text-black  transition-all  duration-200 border-2 rounded-full border-[#0074bc]">
                <Link href="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
