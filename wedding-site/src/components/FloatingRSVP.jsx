import { isRsvpOpen, REGISTRY_URL, RSVP_URL } from "../utils/rsvpDeadline";

export default function FloatingRSVP() {
  const open = isRsvpOpen();

  return (
    <a
      href={open ? RSVP_URL : REGISTRY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden
                 bg-sage-700 hover:bg-sage-800 text-ivory-50
                 font-cinzel text-sm tracking-widest font-semibold uppercase
                 px-5 py-3 shadow-soft transition-colors duration-200"
    >
      {open ? "RSVP" : "Registry"}
    </a>
  );
}
