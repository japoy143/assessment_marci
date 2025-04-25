import React from "react";

export default function OurServicesCard({
  icon,
  title,
  paragraph,
}: {
  icon: React.JSX.Element;
  title: string;
  paragraph: string;
}) {
  return (
    <div className=" p-4 bg-black/50 rounded-lg border-2 border-white/50 font-sans ">
      <div>{icon}</div>
      <div className="mt-1 ">
        <h1>{title}</h1>
        <p className="text-justify text-sm text-white/50">{paragraph}</p>
      </div>
    </div>
  );
}
