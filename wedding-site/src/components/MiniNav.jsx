import { useNavigate } from "react-router-dom";

const MINI_NAV_ITEMS = [
  { id: "home", label: "HOME", action: "home" },
  { id: "venue", label: "VENUE", action: "venue" },
  { id: "travel", label: "TRAVEL & STAY", path: "/travel-stay" },
  { id: "qa", label: "Q + A", path: "/qa" },
  { id: "rsvp", label: "RSVP", path: "/rsvp" },
];

export default function MiniNav() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.action === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (item.action === "venue") {
      navigate("/?scrollTo=venue");
      return;
    }

    if (item.path) {
      navigate(item.path);
    }
  };

  return (
    <section className="bg-ivory-100 py-24 md:hidden">
      <div className="page-container flex flex-col items-center">

        {/* Divider */}
        <div className="w-24 h-px bg-sage-400 mb-12" />

        {/* Title */}
        <p className="font-cinzel text-sm tracking-[0.25em] text-sage-500 mb-12">
          EXPLORE
        </p>

        {/* Navigation Tabs */}
        <ul className="flex flex-col items-center gap-8">
          {MINI_NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item)}
                className="font-cinzel text-xl tracking-wide text-sage-700 uppercase transition hover:text-sage-900"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom Divider */}
        <div className="w-24 h-px bg-sage-400 mt-12" />
      </div>
    </section>
  );
}
