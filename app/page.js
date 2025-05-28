import MainArea from "@/components/main-area";
import CTA from "@/components/cta";
import HeroArea from "@/components/hero-area";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
   <div className="max-w-7xl mx-auto ">
    <Navbar />
    <HeroArea />
    <MainArea />
    <CTA />
    <Footer />
   </div>
  );
}
