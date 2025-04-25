import React, { useState } from "react";
import HamburgerMenu from "../assets/svgs/hamburger";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="z-0  px-8 py-4 absolute top-0 border-b-1 border-white/90 flex  justify-between w-screen ">
      <p className=" text-lg ">MARCI METZER</p>
      <div
        className=" cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <HamburgerMenu className=" size-6  text-white" />
      </div>
      {isMenuOpen && (
        <div className="  py-10 space-y-2 absolute h-[400px] w-[300px] bg-white top-14 right-0 text-left px-10 flex flex-col">
          <a href="/" className=" text-black no-underline hover:border-b   ">
            HOME
          </a>
          <a
            href="/"
            className=" text-black/50 hover:text-black  no-underline  hover:border-b   "
          >
            LISTINGS
          </a>
          <a
            href="/"
            className=" text-black/50 hover:text-black  no-underline  hover:border-b   "
          >
            LET'S MOVE
          </a>
          <a
            href="/"
            className=" text-black/50 hover:text-black  no-underline  hover:border-b   "
          >
            ABOUT US
          </a>
        </div>
      )}
    </nav>
  );
}
