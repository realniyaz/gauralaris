import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Overview from "@/app/components/Overview";
import Highlights from "@/app/components/Highlights";
import Price from "@/app/components/Price";
import Amenities from "@/app/components/Amenities";
import FloorPlan from "@/app/components/FloorPlan";
import Location from "@/app/components/Location";
import Footer from "@/app/components/Footer";
import FloatingActions from "@/app/components/FloatingActions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0b231e]">
      <Navbar />
      <Hero />
      <Overview />
      <Highlights />
      <Price />
      <Amenities />
      <FloorPlan />
      <Location />
      <Footer />
      <FloatingActions />
    </main>
  );
}