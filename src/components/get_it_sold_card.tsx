import React from "react";

export default function Get_It_Sold_Card({
  imgSource,
  imgName,
  textTitle,
  paragraph,
}: {
  imgSource: string;
  imgName: string;
  textTitle: string;
  paragraph: string;
}) {
  return (
    <div className=" bg-black/50 rounded-lg border-2 border-white/50 font-sans">
      <img src={imgSource} alt={imgName} className=" rounded-t-md" />
      <div className=" mt-2 p-4 space-y-2">
        <h1 className=" text-xl">{textTitle}</h1>
        <p className=" text-white/50">{paragraph}</p>
      </div>
    </div>
  );
}
