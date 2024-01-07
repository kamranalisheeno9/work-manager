import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UserProvider from "@/context/UserProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest:"/manifest.json",
  title: 'Work Manager',
  description: 'Generated by create next app',
}
export const viewport = {
  themeColor: "#FFFFFF",
};
// const timeOut=()=>{
//   setTimeout(() => {

//   }, 2000);
// }
export default function RootLayout({ children }) {
  // timeOut()
  return (
    <html lang="en">
      <body className="bg-[#212529] text-[#d5d2d2]  ">
        <UserProvider>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
