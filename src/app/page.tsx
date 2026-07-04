import Hero from "@/components/sections/Hero";
import MenuHighlights from "@/components/sections/MenuHighlights";
import About from "@/components/sections/About";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuHighlights />
      <About />
      <Location />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
