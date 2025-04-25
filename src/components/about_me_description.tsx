import React from "react";

export default function About_Me_Description() {
  return (
    <div className=" text-white px-0 md:px-8 py-10 max-w-4xl mx-auto font-sans text-justify">
      <h1 className="text-2xl md:text-3xl font-bold uppercase">
        Marci Metzger
      </h1>
      <h2 className="text-lg md:text-xl font-semibold mt-1 text-gray-200">
        Realtor for nearly 3 decades!
      </h2>
      <p className="text-sm md:text-base text-gray-400 mt-1">
        Contact: <span className="">208-819-6896</span>
      </p>

      {/* Timeline container */}
      <div className="relative mt-8 pl-6 border-l-2 border-gray-600 space-y-8">
        {/* Timeline Item */}
        <div className="relative">
          <div className="absolute top-1 left-0 w-3 h-3 bg-gray-400 rounded-full -translate-x-1/2 border-2 border-black"></div>
          <p className="ml-4 text-gray-200 leading-relaxed">
            With nearly 30 years of experience in the real estate industry,
            Marci has built a career grounded in trust, dedication, and results.
            Over the decades, she has guided countless clients through buying,
            selling, and investing in properties with confidence and clarity.
            Known for her deep understanding of the local market, strong
            negotiation skills, and a personalized approach to every
            transaction, Marci consistently delivers outstanding service
            tailored to each client’s unique needs and goals.
          </p>
        </div>

        {/* Timeline Item */}
        <div className="relative">
          <div className="absolute top-1 left-0 w-3 h-3 bg-gray-400 rounded-full -translate-x-1/2 border-2 border-black"></div>
          <p className="ml-4 text-gray-200 leading-relaxed">
            What sets her apart is not just her longevity, but her passion for
            helping people make some of life’s biggest decisions with ease.
            Whether working with first-time buyers, seasoned investors, or
            families searching for their forever home, Marci brings
            professionalism, patience, and insight to every step of the journey.
            After nearly three decades, this is just a sample description.
          </p>
        </div>
      </div>
    </div>
  );
}
