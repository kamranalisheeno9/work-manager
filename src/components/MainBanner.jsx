import Image from "next/image";
import BannerImg from "../assets/banner.jpg";
import MainBannerLogo from "../assets/mainlogo.svg";
export default function MainBanner() {
  return (
    <div className="relative">
      <div className="">
        <div className="  h-[600px]  items-center  absolute grid grid-cols-12   z-50">
            <div className=" col-span-6 text-start  text-white  px-36  ">
                <div className=" text-6xl uppercase ">Work</div>
                <div className=" text-8xl ">Manager</div>
                </div>
            <div className=" col-span-6 select-none flex justify-end  text-white  ">
            <Image
          src={MainBannerLogo}
          alt="Main Banner Logo"
          className="dark:invert   "
          style={{ width: "400px",padding:"20px",borderRadius:"20px", boxShadow:" 0 0 1px 2px #0a71b2", }}
          
        />
                </div>
        </div>
        <Image
          src={BannerImg}
          alt="Main Banner Image"
          className="dark:invert"
          style={{ width: "100%", height: "600px", objectFit: "cover" }}
        />
      </div>
      <div className="  w-[100%] h-[600px] backdrop-blur-md   absolute top-0 z-0 "></div>
    </div>
  );
}
