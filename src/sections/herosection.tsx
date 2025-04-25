import hero_logo from "../assets/svgs/herosection_logo.svg";

export default function HeroSection() {
  return (
    <section className=" h-screen w-screen bg-[url(../../src/assets/hero_bg.webp)] bg-cover">
      <div className=" h-full w-screen  bg-black/20 flex flex-col items-center justify-center">
        <img src={hero_logo} className=" h-[200px]" />

        <div className="flex  flex-col items-center justify-center space-y-6">
          <div>
            <p className=" text-center text-lg">
              MARCI METZGER - THE RIDGE REALTY GROUP
            </p>
            <h3 className=" text-center text-4xl">Pahrump Realtor</h3>
          </div>
          <button className=" font-sans bg-white py-3 w-[260px] text-xl rounded font-medium text-black">
            Call Now
          </button>
        </div>
      </div>
    </section>
  );
}
