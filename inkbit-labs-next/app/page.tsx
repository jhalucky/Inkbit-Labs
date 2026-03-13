import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Marquee from "./sections/Marquee";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
