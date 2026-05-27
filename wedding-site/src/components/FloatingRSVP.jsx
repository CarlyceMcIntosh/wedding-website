const EXTERNAL_URL = "https://withjoy.com/crystal-andrew";

export default function FloatingRSVP() {
  return (
    <a
      href={EXTERNAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden
                 bg-sage-700 hover:bg-sage-800 text-ivory-50
                 font-cinzel text-sm tracking-widest font-semibold uppercase
                 px-5 py-3 shadow-soft transition-colors duration-200"
    >
      RSVP
    </a>
  );
}
