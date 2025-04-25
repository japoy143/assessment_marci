import React from "react";
import marci from "../assets/marci.webp";
import About_Me_Description from "../components/about_me_description";

export default function AboutMe() {
  return (
    <section className=" py-10 px-16 w-screen  bg-[#1A1A1D]/50 flex  justify-center">
      <div className=" flex flex-col md:flex-row ">
        <img src={marci} className=" w-[240px] h-[240px] rounded-full" />
        <About_Me_Description />
      </div>
    </section>
  );
}
