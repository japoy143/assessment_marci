import React from "react";
import kitchen from "../assets/kitchen.webp";

export default function FindYourHomeCard({
  imageSrc,
  imageName,
  title,
  paragraph,
}: {
  imageSrc: string;
  imageName: string;
  title: string;
  paragraph: string;
}) {
  return (
    <div className=" bg-black/50 border-2 border-white/50  rounded-md    flex  text-justify">
      <img
        src={imageSrc}
        alt={imageName}
        className="w-[80px] md:w-[150px] object-cover  rounded-bl-md rounded-tl-md"
      />
      <div className=" p-4">
        <h1 className=" font-sans text-base">{title}</h1>
        <p className=" text-xs text-white/50 font-sans">{paragraph}</p>
      </div>
    </div>
  );
}
