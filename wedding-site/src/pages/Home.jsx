import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MiniNav from "../components/MiniNav";
import Footer from "../components/Footer";
import VenueDetails from "../components/VenueDetails";
import WeddingParty from "../components/WeddingParty";
import FloatingRSVP from "../components/FloatingRSVP";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const section = document.getElementById(location.hash.slice(1));
    section?.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);
  return (

    <>
      <NavBar />
      <main id="main" className="pt-16">
        <Hero />

        {/* Bible verse strip */}
        <div className="w-full bg-sage-900/10 py-4 md:py-4 px-6 flex flex-col items-center text-center">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-sage-400" />
            <span className="text-sage-400 text-[8px]">◆</span>
            <div className="w-12 h-px bg-sage-400" />
          </div>
          <p className="font-cormorant italic text-[clamp(21px,2.8vw,30px)] text-sage-700 leading-relaxed max-w-2xl">
            "And so they are no longer two but one flesh. Therefore, what God has joined together, let no one separate."
          </p>
          <p className="font-cinzel text-[13px] tracking-[0.22em] text-sage-500 uppercase mt-3">
            Matthew 19:6
          </p>
          <div className="flex items-center gap-4 mt-5">
            <div className="w-12 h-px bg-sage-400" />
            <span className="text-sage-400 text-[8px]">◆</span>
            <div className="w-12 h-px bg-sage-400" />
          </div>
        </div>

        <VenueDetails/>
        <WeddingParty />
        <MiniNav/>
        <Footer/>
      </main>
      <FloatingRSVP />
    </>
  );
}
