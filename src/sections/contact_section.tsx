import contact_image from "../assets/contact_img.png";
import PhoneSvg from "../assets/svgs/phone";
import MapSvg from "../assets/svgs/map";
export default function ContactSection() {
  return (
    <section className=" font-sans py-10 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/80">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className=" order-2 md:order-1">
          <img src={contact_image} alt="contact" />
          <div className=" space-y-2">
            <h1>Marci Metzger - THE RIDGE REALTY GROUP</h1>
            <div className=" flex gap-2">
              <MapSvg className=" size-6" />
              <p className=" text-xs text-white/50 ">
                3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
              </p>
            </div>

            <div className=" flex gap-2">
              <PhoneSvg className=" size-6" />
              <p className=" text-xs text-white/50 ">(206) 919-6886</p>
            </div>

            <h1>Office Hours</h1>
            <p className=" text-sm">
              Open today{" "}
              <span className=" text-white/50">08:00 a:m. - 07:00 p.m.</span>
            </p>
            <p className=" text-sm">Open daily 08:00 a:m. - 07:00 p.m.</p>
            <p className=" text-sm">
              Appointments outside office hours available upon request. Just
              call!
            </p>
          </div>
        </div>
        <div className=" p-4 bg-black/50 rounded-lg border-2 border-white/50 font-sans  order-1 md:order-2">
          <h1>Get in Touch</h1>

          <div className=" flex flex-col w-full space-y-2 ">
            <div className="  w-full">
              <label htmlFor="name" className=" text-sm">
                Name
              </label>
              <input
                className=" border-2 border-white/50 rounded w-full"
                placeholder="  please enter name"
                id="name"
              />
            </div>

            <div className=" w-full">
              <label htmlFor="email" className=" text-sm">
                Email*
              </label>
              <input
                className=" border-2 border-white/50 rounded w-full"
                placeholder="  please enter email"
                id="email"
                type="email"
                required
              />
            </div>

            <div className="flex-1 h-full w-full">
              <label htmlFor="message" className=" text-sm">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder=" please enter provide message"
                className="w-full flex-1 h-[200px] border-2 border-white/50 rounded "
              ></textarea>
            </div>
            <button className=" bg-white/90 text-black py-2 rounded">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
