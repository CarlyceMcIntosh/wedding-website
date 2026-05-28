import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MiniNav from "../components/MiniNav";
import Footer from "../components/Footer";
import VenueDetails from "../components/VenueDetails";
import FloatingRSVP from "../components/FloatingRSVP";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.hash === "#venue") {
    const section = document.getElementById("venue");
    section?.scrollIntoView({ behavior: "smooth" });
  }
}, [location]);
  return (

    <>
      <NavBar />
      <main id="main" className="pt-16">
        <Hero />
        <VenueDetails/>
        <MiniNav/>
        <Footer/>
      </main>
      <FloatingRSVP />
    </>
  );
}
