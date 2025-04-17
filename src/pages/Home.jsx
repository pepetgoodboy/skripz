import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import AboutSection from "../components/section/AboutSection";
import ClientSection from "../components/section/ClientSection";
import ContactSection from "../components/section/ContactSection";
import HeroSection from "../components/section/HeroSection";
import PacketSection from "../components/section/PacketSection";
import ServiceSection from "../components/section/ServiceSection";
import { Element } from "react-scroll";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Element name="beranda">
        <HeroSection />
      </Element>
      <Element name="tentang">
        <AboutSection />
      </Element>
      <Element name="layanan">
        <ServiceSection />
      </Element>
      <ClientSection />
      <Element name="paket">
        <PacketSection />
      </Element>
      <Element name="kontak">
        <ContactSection />
      </Element>
      <Footer />
    </>
  );
}
