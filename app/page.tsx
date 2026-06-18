import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import ESGImpact from "@/components/ESGImpact";
import Team from "@/components/Team";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-zinc-900 overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Platforms />
      <ESGImpact />
      <Team />
      <News />
      <Footer />
    </main>
  );
}
