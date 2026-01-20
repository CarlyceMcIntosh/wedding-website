import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import EventDetails from "../components/EventDetails";
import Registry from "../components/Registry";
//import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import VenueDetails from "../components/VenueDetails";
import TravelAndStay from "../components/TravelStay";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="pt-16">
        <Hero />
        <VenueDetails/>
        <TravelAndStay/>
        <Footer/>
      </main>
    </>
  );
}
