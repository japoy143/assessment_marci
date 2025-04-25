export default function MapSection() {
  return (
    <section className=" py-12 w-screen h-[300px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.272693170618!2d-115.95782812439526!3d36.184249372429136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1745585898673!5m2!1sen!2sph"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className=" shadow-md  w-full h-full"
      ></iframe>
    </section>
  );
}
