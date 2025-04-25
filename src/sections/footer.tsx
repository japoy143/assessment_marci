import React from "react";
import link1 from "../assets/svgs/links1.svg";
import link2 from "../assets/svgs/links2.svg";
import link3 from "../assets/svgs/links3.svg";
import link4 from "../assets/svgs/links4.svg";

const social_links = [link1, link2, link3, link4];

export default function Footer() {
  return (
    <footer className=" py-6 px-4 bg-[#1A1A1D]/80 font-sans ">
      <div className=" py-2 w-full border-b border-white"></div>
      <div className=" px-2 py-4 flex  justify-between">
        <div className=" flex gap-1">
          {social_links.map((item, index) => (
            <img key={index} className=" h-[24px]" src={item} alt={item} />
          ))}
        </div>
        <div className="w-[200px] md:w-[600px] text-right">
          <p className=" text-white/50 text-[8px] md:text-sm">
            Copyright © 2025 Marci METZGER Homes - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
