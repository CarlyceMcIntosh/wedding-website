import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import EventDetails from "../components/EventDetails";
import TravelStay from "../components/Travel&Stay";
import Registry from "../components/Registry";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="pt-16">
        <Hero />
        <OurStory />
        <EventDetails/>
        <TravelStay/>
        <Registry/>
        <FAQs/>
        <Footer/>

      </main>
    </>
  );
}
