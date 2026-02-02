// RSVP.jsx
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RSVP() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <NavBar />

      <main
        id="main"
        className="
          flex-grow
          pt-16   /* match navbar height (h-16) */
          text-center
          flex flex-col
          items-center
          justify-center
          w-full
        "
      >
        {/* reduce extra top padding here */}
        <h2 className="font-cinzel text-4xl md:text-5xl text-sage-700 tracking-wide mb-1">
          RSVP
        </h2>

        <p className="font-cormorant text-xl md:text-2xl text-sage-600 max-w-xl leading-relaxed mb-12">
          Our RSVP details are currently being finalized.
          <br />
          We can’t wait to celebrate with you!
        </p>

        <div className="w-24 h-[2px] bg-sage-300 rounded-full mb-10" />

        <p className="font-cormorant text-lg md:text-xl text-sage-600 italic">
          Please check back soon for updates.
        </p>
      </main>

      <Footer />
    </div>
  );
}
