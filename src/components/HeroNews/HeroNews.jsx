import React from "react";
import ThumbnailDesktop from "../../assets/images/image-web-3-desktop.jpg";
import ThumbnailMobile from "../../assets/images/image-web-3-mobile.jpg";
import {ReadMoreBtn} from "../index";
export default function HeroNews() {
  return (
    <div className="w-full ">
      <div>
        <div className="hidden md:block object-cover">
          <img src={ThumbnailDesktop} alt="new thumbnail" />
        </div>
        <div className="block md:hidden object-cover">
          <img src={ThumbnailMobile} alt="new thumbnail" />
        </div>
      </div>
      <div className="flex flex-col py-5 px-2.5 md:p-0 lg:flex-row  gap-[20px] lg:gap-[50px]">
        <div>
          <h1 className="text-3xl lg:text-6xl  font-extrabold text-pretty">The Bright Future of Web 3.0?</h1>
        </div>
        <div className="flex flex-col gap-5 lg:py-2.5 lg:pr-5 text-pretty ">
          <p className="text-xl text-[#5D5F79]">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <ReadMoreBtn />
        </div>
      </div>
    </div>
  );
}
