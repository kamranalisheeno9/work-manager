"use client"
import UserContext from "@/context/UserContext"
import { useContext } from "react"
import Image from "next/image"

export default  function UserProfile(){
    const context=  useContext(UserContext)
    console.log(context.user)
    return(
        <div className=" mt-10 grid grid-cols-12 min-h-screen justify-between ">
         <div className=" col-span-8 m-5">
            <div className="text-center m-3">

            <div className="text-xl" >{context.user?.name}</div>
            <div className="text-sm text-blue-300 cursor-pointer ">  <a href={`mailto:${context.user?.email}`}></a> {context.user?.email}  <a/> </div>
            </div>
            <div className="mt-10">{context.user?.about}</div>
         </div>
         <div className=" col-span-4 p-8 mt-8 grid justify-center "> 
        <img src={context.user?.profileUrl} width="300px" className="rounded-full shadow-lg shadow-slate-500" />
         </div>
        </div>
    )
}