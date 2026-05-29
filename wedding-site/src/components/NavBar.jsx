import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const RSVP_URL = "https://withjoy.com/crystal-andrew";
const REGISTRY_URL = "https://withjoy.com/crystal-andrew/registrylinks";

const NAV_ITEMS = [
  { id: "home",     label: "HOME",          path: "/" },
  { id: "rsvp",     label: "RSVP",          href: RSVP_URL },
  { id: "registry", label: "REGISTRY",      href: REGISTRY_URL },
  { id: "venue",    label: "VENUE" },
  { id: "travel",   label: "TRAVEL & STAY", path: "/travel-stay" },
  { id: "qa",       label: "Q + A",         path: "/qa" },
];

export default function NavBar() {
  const navigate = useNavigate();

const handleVenueClick = (e) => {
  e.preventDefault();
  navigate("/#venue");
};

const handleWeddingPartyClick = (e) => {
  e.preventDefault();
  navigate("/#wedding-party");
};


  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ivory-100/95 backdrop-blur border-b border-ivory-100/95">
      {/* Desktop: 3-column grid — left links | C & A center | right links + RSVP */}
      <nav className="page-container h-16 hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center">

        {/* Left links */}
        <ul className="flex gap-8 items-center justify-start">
          {[
            { id: "home", label: "HOME", path: "/" },
            { id: "venue", label: "VENUE" },
            { id: "travel", label: "TRAVEL & STAY", path: "/travel-stay" },
          ].map((item) =>
            item.id === "venue" ? (
              <li key={item.id}>
                <button
                  onClick={handleVenueClick}
                  className="font-cinzel text-lg tracking-[0.18em] text-sage-600 uppercase transition hover:text-sage-800"
                >
                  {item.label}
                </button>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-cinzel text-lg tracking-[0.18em] text-sage-600 uppercase transition hover:text-sage-800"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Center monogram */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-cinzel text-2xl tracking-wide text-sage-700 text-center px-8"
        >
          C & A
        </Link>

        {/* Right links + RSVP */}
        <ul className="flex gap-8 items-center justify-end">
          {[
            { id: "registry", label: "REGISTRY", href: REGISTRY_URL },
            { id: "qa",       label: "Q + A",    path: "/qa" },
            { id: "rsvp",     label: "RSVP",     href: RSVP_URL },
          ].map((item) =>
            item.href ? (
              <li key={item.id}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    item.id === "rsvp"
                      ? "font-cinzel text-sm tracking-widest text-ivory-50 bg-sage-700 hover:bg-sage-800 uppercase px-4 py-2 transition-colors duration-200"
                      : "font-cinzel text-lg tracking-[0.18em] text-sage-600 uppercase transition hover:text-sage-800"
                  }
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="font-cinzel text-lg tracking-[0.18em] text-sage-600 uppercase transition hover:text-sage-800"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile nav: logo left, hamburger right */}
      <nav className="page-container h-16 flex md:hidden items-center justify-between">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-cinzel text-2xl tracking-wide text-sage-700"
        >
          C & A
        </Link>

        <button
          className="text-sage-700 outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-ivory-100 border-b border-sage-200">
          <ul className="flex flex-col items-center py-8 space-y-6">
            {[
              { id: "home",         label: "HOME",           path: "/" },
              { id: "venue",        label: "VENUE",          action: "venue" },
              { id: "weddingparty", label: "WEDDING PARTY",  action: "weddingparty" },
              { id: "travel",       label: "TRAVEL & STAY",  path: "/travel-stay" },
              { id: "registry", label: "REGISTRY",      href: REGISTRY_URL },
              { id: "qa",       label: "Q + A",         path: "/qa" },
              { id: "rsvp",     label: "RSVP",          href: RSVP_URL },
            ].map((item) => {
              const linkClass = "font-cinzel text-lg tracking-[0.2em] text-sage-700 uppercase transition hover:text-sage-500";
              if (item.action === "venue") {
                return (
                  <li key={item.id}>
                    <button onClick={(e) => { setOpen(false); handleVenueClick(e); }} className={linkClass}>
                      {item.label}
                    </button>
                  </li>
                );
              }
              if (item.action === "weddingparty") {
                return (
                  <li key={item.id}>
                    <button onClick={(e) => { setOpen(false); handleWeddingPartyClick(e); }} className={linkClass}>
                      {item.label}
                    </button>
                  </li>
                );
              }
              if (item.href) {
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className={
                        item.id === "rsvp"
                          ? "font-cinzel text-sm tracking-widest text-ivory-50 bg-sage-700 hover:bg-sage-800 uppercase px-6 py-2 transition-colors duration-200"
                          : linkClass
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={linkClass}
                    onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
