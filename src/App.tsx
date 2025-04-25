import Navigation from "./components/navigation";
import AboutMe from "./sections/about";
import ContactSection from "./sections/contact_section";
import Find_Your_Dream_Home from "./sections/find_your_dream_home";
import Footer from "./sections/footer";
import Get_It_Sold_Section from "./sections/get_it_sold_section";
import HeroSection from "./sections/herosection";
import MapSection from "./sections/mapsection";
import OurServices from "./sections/our_services";
import PhotoGallery from "./sections/photo_gallery";
import SocialLinks from "./sections/social_links";
import TrustedPartners from "./sections/trusted_partners";

function App() {
  return (
    <>
      <main className=" h-screen w-screen">
        <Navigation />
        <HeroSection />
        <AboutMe />
        <Get_It_Sold_Section />
        <Find_Your_Dream_Home />
        <TrustedPartners />
        <PhotoGallery />
        <OurServices />
        <SocialLinks />
        <ContactSection />
        <MapSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
