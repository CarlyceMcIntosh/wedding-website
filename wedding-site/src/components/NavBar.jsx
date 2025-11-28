import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icons

const NAV_ITEMS = [
  { id: "home", label: "HOME", path: "/" },
  { id: "venue", label: "VENUE", hash: "#venue" },
  { id: "travel", label: "TRAVEL & STAY", hash: "#travel" },
];

export default function NavBar() {
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
        <ul className="hidden md:flex gap-10">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            {item.hash ? (
              <a
                href={item.hash}
                className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-700"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
              </a>
            ) : (
              <Link
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-700"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
              </Link>
            )}
          </li>
          ))}
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
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                {item.hash ? (
                  <a
                    href={item.hash}
                    className="block text-lg font-cinzel tracking-wide text-sage-700 uppercase"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-lg font-cinzel tracking-wide text-sage-700 uppercase"
                    onClick={() => {
                      setOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >

                    {item.label}
                  </Link>
                )}


              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
