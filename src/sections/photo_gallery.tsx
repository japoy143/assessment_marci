import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import kitchen from "../assets/kitchen.webp";
import house from "../assets/house.webp";
import keys from "../assets/keys.webp";

const images = [
  {
    original: kitchen,
    thumbnail: kitchen,
  },
  {
    original: house,
    thumbnail: house,
  },
  {
    original: keys,
    thumbnail: keys,
  },
];

export default function PhotoGallery() {
  return (
    <section className=" py-10  space-y-6 px-16 lg:px-40   xl:px-96 w-screen   bg-[#1A1A1D]/50">
      <h1 className=" font-sans text-2xl">Photo Gallery</h1>
      <div className="bg-black/50 border-2 border-white/50  rounded-md  p-4">
        <ImageGallery items={images} />
      </div>
    </section>
  );
}
