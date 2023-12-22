import { httpAxios } from "@/helper/httpHelper";

export async function signUp(user){
   const result= await httpAxios.post("/api/users",user).then((response)=>response.data);
    return result;
}



export async function signIn(user){
    const result= await httpAxios.post("/api/signin",user).then((response)=>response.data);
    return result;

}
export async function signOut(){
    const result= await httpAxios.post("/api/signout").then((response)=>response.data);
    return result;

}
export async function getCurrentUser(){
    const result= await httpAxios.get("/api/current").then((response)=>response.data);
    return result;

}