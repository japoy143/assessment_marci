import React from "react";
import FindYourHomeCard from "../components/find_your_home_card";
import kitchen from "../assets/kitchen.webp";
import house from "../assets/house.webp";
import keys from "../assets/keys.webp";
import { FindYourHouseCardType } from "../type";

const data: FindYourHouseCardType[] = [
  {
    imgSrc: kitchen,
    imgName: "kitchen",
    title: "The Willow Stay",
    paragraph:
      "Where comfort feels like home, and nature greets you at the door. Tucked away in a serene, green landscape, The Willow Stay offers a peaceful retreat from the everyday hustle.",
  },

  {
    imgSrc: house,
    imgName: "kitchen",
    title: "The Willow Stay",
    paragraph:
      "Where comfort feels like home, and nature greets you at the door. Tucked away in a serene, green landscape, The Willow Stay offers a peaceful retreat from the everyday hustle.",
  },

  {
    imgSrc: keys,
    imgName: "kitchen",
    title: "The Willow Stay",
    paragraph:
      "Where comfort feels like home, and nature greets you at the door. Tucked away in a serene, green landscape, The Willow Stay offers a peaceful retreat from the everyday hustle.",
  },
];

export default function Find_Your_Dream_Home() {
  return (
    <section className="py-10  space-y-6 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/50">
      <h1 className=" font-sans text-2xl">Find Your Dream Home</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-2">
        <div className=" order-2 lg:order-1 space-y-2">
          {data.map((item, index) => (
            <FindYourHomeCard
              key={index}
              imageSrc={item.imgSrc}
              imageName={item.imgName}
              title={item.title}
              paragraph={item.paragraph}
            />
          ))}
        </div>
        <form className=" order-1 lg:order-2 bg-black/50 border-2 border-white/50 font-sans  rounded-md  p-4 ">
          <h1 className=" font-sans text-xl">Search Listings</h1>

          <div className=" space-y-2 mt-2">
            <div className=" w-full">
              <label
                htmlFor="location"
                className="block mb-2 text-white text-sm font-medium"
              >
                Location
              </label>
              <div className="relative w-full">
                <select
                  id="location"
                  className="appearance-none w-full bg-gray-200 text-black py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select a location
                  </option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                  <option value="chi">Chicago</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <label
                htmlFor="type"
                className="block mb-2 text-white text-sm font-medium"
              >
                Type
              </label>
              <div className="relative w-full">
                <select
                  id="type"
                  className="appearance-none w-full bg-gray-200 text-black py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select a Type
                  </option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                  <option value="Hotel">Hotel</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" w-full">
              <label
                htmlFor="Sort By"
                className="block mb-2 text-white text-sm font-medium"
              >
                Sort By
              </label>
              <div className="relative w-full">
                <select
                  id="Sort By"
                  className="appearance-none w-full bg-gray-200 text-black py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Sort by
                  </option>
                  <option value="Price">Price</option>
                  <option value="Nearest">Nearest</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="text-white w-full">
                <label
                  htmlFor="bedrooms"
                  className="block mb-2 text-sm font-medium"
                >
                  Bedrooms
                </label>
                <input
                  type="number"
                  id="bedrooms"
                  min="0"
                  className="w-full bg-gray-200 text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={1}
                />
              </div>

              <div className="text-white w-full">
                <label
                  htmlFor="baths"
                  className="block mb-2 text-sm font-medium"
                >
                  Baths
                </label>
                <input
                  type="number"
                  id="baths"
                  min="0"
                  className="w-full bg-gray-200 text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue={1}
                />
              </div>
            </div>

            <div className="flex items-center gap-4  p-4 rounded-md  w-full">
              <div className="flex flex-col w-full">
                <label className="text-white mb-1 text-sm">Max</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-white text-white text-center outline-none w-full"
                  placeholder="Enter max"
                />
              </div>

              <span className="text-white text-2xl">-</span>

              <div className="flex flex-col  w-full">
                <label className="text-white mb-1 text-sm">Min</label>
                <input
                  type="text"
                  className="bg-transparent border-b border-white text-white text-center outline-none w-full"
                  placeholder="Enter min"
                />
              </div>
            </div>
            <button className=" bg-white/90 w-full py-3 rounded-md text-lg text-black">
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
