import { OurServicesCardType } from "../type";
import HotelSvg from "../assets/svgs/hotel";
import HouseSvg from "../assets/svgs/house";
import ChartSvg from "../assets/svgs/chart";
import OurServicesCard from "../components/our_services_card";

const data: OurServicesCardType[] = [
  {
    icon: <HotelSvg className="size-6" />,
    title: "Real Estate Done Right",
    paragraph:
      "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
  },

  {
    icon: <HouseSvg className="size-6" />,
    title: "Commercial & Residential",
    paragraph:
      "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
  },

  {
    icon: <ChartSvg className="size-6" />,
    title: "Rely on Expertise",
    paragraph:
      "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
  },
];

export default function OurServices() {
  return (
    <section className="py-10  space-y-6 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/50 ">
      <h1 className=" font-sans text-2xl">Our Services</h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
        {data.map((item) => (
          <OurServicesCard
            icon={item.icon}
            title={item.title}
            paragraph={item.paragraph}
          />
        ))}
      </div>
    </section>
  );
}
