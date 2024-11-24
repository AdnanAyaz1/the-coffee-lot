import Aboutus from "@/sections/Aboutus";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Laurels from "@/sections/Laurels";
import Menu from "@/sections/Menu";
import Navbar from "@/sections/Navbar";
import NewsLetter from "@/sections/NewsLetter";
import OurChef from "@/sections/OurChef";
import ResVideo from "@/sections/ResVideo";

export default function Home() {
  return (
    <div className="flex flex-col bg-black bg-dark-pattern bg-cover bg-center">
      <Navbar />
      <Hero />
      <Aboutus />
      <Menu/>
      <OurChef/>
      <ResVideo/>
      <Laurels/>
      <Gallery/>
      <Contact/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
