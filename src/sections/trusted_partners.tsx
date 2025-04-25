import React from "react";

import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";

const images = [logo1, logo2, logo3, logo4];

export default function TrustedPartners() {
  return (
    <section className=" py-10 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/80 ">
      <h1 className=" tracking-widest font-sans text-center text-3xl">
        Trusted Partners
      </h1>
      <div className=" flex mt-10 items-center justify-between ">
        {images.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={item}
            className="h-[40px]  md:h-[80px]"
          />
        ))}
      </div>
    </section>
  );
}
