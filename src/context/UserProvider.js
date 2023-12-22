"use client"
import React ,{useEffect, useState} from "react"
import UserContext from "./UserContext"
import { getCurrentUser } from "@/services/signService"
import { toast } from "react-toastify"
 const UserProvider=  ({children})=>{
    const [user, setUser] = useState(undefined)
   
    useEffect(() => {
        async function LoadCurrentUser(){

            try {
                const currentUser = await  getCurrentUser();
                setUser({...currentUser})
                // console.log(currentUser)
            } catch (error) {
                console.log(error)
                // console.log("Error in gettingcurrent user through use effect.")
                setUser(undefined)
                
            }
        }

      LoadCurrentUser()
    }, [])
    
    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
}

 export default UserProvider;