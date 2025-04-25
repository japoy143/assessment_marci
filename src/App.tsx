import Navigation from "./components/navigation";
import AboutMe from "./sections/about";
import Get_It_Sold_Section from "./sections/get_it_sold_section";
import HeroSection from "./sections/herosection";

function App() {
  return (
    <>
      <main className=" h-screen w-screen">
        <Navigation />
        <HeroSection />
        <AboutMe />
        <Get_It_Sold_Section />
      </main>
    </>
  );
}

export default App;
