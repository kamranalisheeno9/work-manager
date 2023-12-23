import UserProfile from "./ProfilePage"
export const metadata = {
    title: 'User Profile',
    description: 'This is home page.',
  }
export default async  function profilePage(){
    return(
        <UserProfile />
    )
}