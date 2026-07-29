import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ExplodedHamburger from "@/components/ExplodedHamburguer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExplodedHamburger />
      <About />
      <Menu />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
