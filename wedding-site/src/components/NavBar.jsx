import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const EXTERNAL_URL = "https://withjoy.com/crystal-andrew";

const NAV_ITEMS = [
  { id: "home",     label: "HOME",          path: "/" },
  { id: "rsvp",     label: "RSVP",          href: EXTERNAL_URL },
  { id: "registry", label: "REGISTRY",      href: EXTERNAL_URL },
  { id: "venue",    label: "VENUE" },
  { id: "travel",   label: "TRAVEL & STAY", path: "/travel-stay" },
  { id: "qa",       label: "Q + A",         path: "/qa" },
];

export default function NavBar() {
  const navigate = useNavigate();

const handleVenueClick = (e) => {
  e.preventDefault();
  navigate("/?scrollTo=venue");
};


  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ivory-100/95 backdrop-blur border-b border-ivory-100/95">
      <nav className="page-container h-16 flex items-center justify-between">

        {/* Logo or Site Title */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-cinzel text-2xl tracking-wide text-sage-700"
        >
          C & A
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => {
            if (item.id === "venue") {
              return (
                <li key={item.id}>
                  <button
                    onClick={handleVenueClick}
                    className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-700"
                  >
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
                    className={
                      item.id === "rsvp"
                        ? "font-cinzel text-sm tracking-widest text-ivory-50 bg-sage-700 hover:bg-sage-800 uppercase px-4 py-2 transition-colors duration-200"
                        : "relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-700"
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
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-700"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
                </Link>
              </li>
            );
          })}
        </ul>



        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sage-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-ivory-100 border-b border-sage-300">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {NAV_ITEMS.map((item) => {
              if (item.id === "venue") {
                return (
                  <li key={item.id}>
                    <button
                      onClick={(e) => { setOpen(false); handleVenueClick(e); }}
                      className="block text-lg font-cinzel tracking-wide text-sage-700 uppercase"
                    >
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
                          ? "inline-block font-cinzel text-sm tracking-widest text-ivory-50 bg-sage-700 uppercase px-4 py-2"
                          : "block text-lg font-cinzel tracking-wide text-sage-700 uppercase"
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
                    className="block text-lg font-cinzel tracking-wide text-sage-700 uppercase"
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
