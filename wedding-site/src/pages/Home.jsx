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
        <VenueDetails/>
        <WeddingParty />
        <MiniNav/>
        <Footer/>
      </main>
      <FloatingRSVP />
    </>
  );
}
