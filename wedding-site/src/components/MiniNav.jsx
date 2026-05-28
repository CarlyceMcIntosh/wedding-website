import { useNavigate } from "react-router-dom";

const RSVP_URL = "https://withjoy.com/crystal-andrew";
const REGISTRY_URL = "https://withjoy.com/crystal-andrew/registrylinks";

const MINI_NAV_ITEMS = [
  { id: "home",     label: "HOME",          action: "home" },
  { id: "rsvp",     label: "RSVP",          href: RSVP_URL },
  { id: "registry", label: "REGISTRY",      href: REGISTRY_URL },
  { id: "venue",    label: "VENUE",          action: "venue" },
  { id: "travel",   label: "TRAVEL & STAY", path: "/travel-stay" },
  { id: "qa",       label: "Q + A",         path: "/qa" },
];

export default function MiniNav() {
  const navigate = useNavigate();

  const handleClick = (item) => {
    if (item.action === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (item.action === "venue") {
      navigate("/#venue");
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
          {MINI_NAV_ITEMS.map((item) =>
            item.href ? (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.id === "rsvp"
                      ? "font-cinzel text-sm tracking-widest text-ivory-50 bg-sage-700 uppercase px-6 py-2 inline-block"
                      : "font-cinzel text-xl tracking-wide text-sage-700 uppercase transition hover:text-sage-900"
                  }
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item)}
                  className="font-cinzel text-xl tracking-wide text-sage-700 uppercase transition hover:text-sage-900"
                >
                  {item.label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Bottom Divider */}
        <div className="w-24 h-px bg-sage-400 mt-12" />
      </div>
    </section>
  );
}
