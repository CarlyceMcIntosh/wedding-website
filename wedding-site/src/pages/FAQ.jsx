import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FAQContent from "../components/FAQContent";
import MiniNav from "../components/MiniNav";
import FloatingRSVP from "../components/FloatingRSVP";

export default function FAQ() {
  return (
    <>
      <NavBar />
      <main id="main" className="pt-16">
        <FAQContent />
        <MiniNav />
        <Footer />
      </main>
      <FloatingRSVP />
    </>
  );
}
