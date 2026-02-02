 import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ComingSoon({ title, message }) {
  return (
    <>
      <NavBar />

      <main className="pt-32 pb-32 bg-ivory-100">
        <div className="page-container text-center max-w-2xl mx-auto">

          <h1 className="font-cinzel text-4xl tracking-wide text-sage-700 mb-6">
            {title}
          </h1>

          <div className="w-24 h-px bg-sage-400 mx-auto mb-8" />

          <p className="font-cormorant text-xl text-sage-600 leading-relaxed">
            {message}
          </p>

        </div>
      </main>

      <Footer />
    </>
  );
}
