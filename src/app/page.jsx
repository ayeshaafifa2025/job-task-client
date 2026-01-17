import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Reservation from "@/components/Reservation";
import SignatureSpecials from "@/components/SignatureSpecials";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About></About>
      <SignatureSpecials></SignatureSpecials>
      <Philosophy></Philosophy>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Reservation></Reservation>
    </main>
  );
}