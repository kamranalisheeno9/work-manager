"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" relative bottom-0 right-0 grid grid-cols-12  justify-between items-center px-4 py-16  bg-[#212529]  border-t-2 border-[#0074bc3c]">
      <div className="col-span-10 text-center  w-8/12  m-auto">
        <div className="text-3xl uppercase text-[#0074bc] font-mono">
          Work Manager
        </div>
        <p className="px-4">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga et minus
          tempora consequatur itaque, tempore perspiciatis sapiente quo.
        </p>
      </div>
      <div className="col-span-2 ">
        <ul className=" select-none text-center ">
          <li className="px-4 py-2   hover:text-[#0074bc] transition-all  duration-100">
            <Link className=" group flex items-center " href="#">
              <FaFacebook className="mx-2" />
           <div className="group-hover:mx-4 transition-all duration-300">
              Facebook
            </div> 
            </Link>
          </li>
          <li className="px-4 py-2  hover:text-[#0074bc] transition-all  duration-100">
            <Link className=" group flex items-center" href="#">
              <FaGithub className="mx-2" />
              <div className="group-hover:mx-4 transition-all duration-300">
              GitHub
            </div> 
            </Link>
          </li>
          <li className=" px-4 py-2  hover:text-[#0074bc] transition-all  duration-100">
            <Link className="group flex items-center" href="#">
              <FaTwitter className="mx-2" />
              <div className="group-hover:mx-4 transition-all duration-300">
              Twitter
            </div> 
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
