import React from "react";
import link1 from "../assets/svgs/links1.svg";
import link2 from "../assets/svgs/links2.svg";
import link3 from "../assets/svgs/links3.svg";
import link4 from "../assets/svgs/links4.svg";

const social_links = [link1, link2, link3, link4];

export default function SocialLinks() {
  return (
    <section className="py-10  space-y-6 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/50 ">
      <h1 className=" font-sans text-2xl text-center tracking-widest">
        Social Links
      </h1>
      <div className=" mt-4 flex  gap-22  justify-center">
        {social_links.map((item, index) => (
          <img key={index} src={item} alt={item} className=" h-[40px]" />
        ))}
      </div>
    </section>
  );
}
