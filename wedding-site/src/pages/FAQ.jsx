import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FAQContent from "../components/FAQContent";

export default function FAQ() {
  return (
    <>
      <NavBar />
      <main id="main" className="pt-16">
        <FAQContent />
        <Footer />
      </main>
    </>
  );
}
