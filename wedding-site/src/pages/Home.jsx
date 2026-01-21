import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import EventDetails from "../components/EventDetails";
import Registry from "../components/Registry";
//import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import VenueDetails from "../components/VenueDetails";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const target = params.get("scrollTo");

  if (target === "venue") {
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
        <Footer/>
      </main>
    </>
  );
}
