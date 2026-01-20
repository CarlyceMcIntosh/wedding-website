import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TravelAndStay from "../components/TravelStay";

export default function TravelStay() {
  return (
    <>
      <NavBar />
      <main id="main" className="pt-16">
        <TravelAndStay />
        <Footer/>
      </main>
    </>
  );
}
