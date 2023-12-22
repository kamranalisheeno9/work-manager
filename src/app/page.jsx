import MainBanner from "@/components/MainBanner"
import { connectDB } from "@/helper/db";
import HomeBanner2 from "@/components/HomeBanner2"
export const metadata = {
  title: 'Work Management',
  description: 'This is home page.',
}

export default async function Home() {
await connectDB();
// console.log("DB Connected")


  return (
    <>
    <MainBanner />
    <HomeBanner2 />
    </>
  )
}
