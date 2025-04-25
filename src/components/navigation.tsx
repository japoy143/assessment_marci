import React from "react";
import HamburgerMenu from "../assets/svgs/hamburger";

export default function Navigation() {
  return (
    <nav className="z-0  px-8 py-4 absolute top-0 border-b-1 border-white/90 flex  justify-between w-screen ">
      <p className=" text-lg ">MARCI METZER</p>
      <div>
        <HamburgerMenu className=" size-6  text-white" />
      </div>
    </nav>
  );
}
