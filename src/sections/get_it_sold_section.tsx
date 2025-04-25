import React from "react";
import Get_It_Sold_Card from "../components/get_it_sold_card";
import kitchen from "../assets/kitchen.webp";
import house from "../assets/house.webp";
import keys from "../assets/keys.webp";

export default function Get_It_Sold_Section() {
  return (
    <section className="py-10  space-y-6 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/50 ">
      <h1 className=" font-sans text-2xl">Get It Sold</h1>
      <div className=" grid-cols-1   grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        <Get_It_Sold_Card
          imgSource={kitchen}
          imgName="kitchen"
          textTitle="Top Residential Sales Last 5 Years"
          paragraph="We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
        />

        <Get_It_Sold_Card
          imgSource={house}
          imgName="house"
          textTitle="Don't Just List it..."
          paragraph="Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
        />

        <Get_It_Sold_Card
          imgSource={keys}
          imgName="keys"
          textTitle="Guide to Buyers"
          paragraph="Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
        />
      </div>
    </section>
  );
}
