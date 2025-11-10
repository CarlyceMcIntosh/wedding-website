import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { id: "story",   label: "OUR STORY" },
  { id: "details", label: "EVENT DETAILS" },
  { id: "registry",label: "REGISTRY" },
  { id: "rsvp",    label: "RSVP" },            // route
  { id: "travel",  label: "TRAVEL & STAY" },
  { id: "faq",     label: "FAQ" },
];

function goTo(id) {
  // Try to find the section on the current page and scroll to it
  const el = id && document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function NavBar() {
  const { pathname } = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ivory-100/95 backdrop-blur border-b border-sage-300">
      <nav className="page-container h-16 flex items-center justify-center">
        <ul className="flex gap-12">
          {NAV_ITEMS.map((item) => {
            // Special case: RSVP goes to its own page
            if (item.id === "rsvp") {
              return (
                <li key={item.id}>
                  <Link
                    to="/rsvp"
                    className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-600"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
                  </Link>
                </li>
              );
            }

            // All other items: smooth-scroll if we're already on Home (/)
            if (pathname === "/") {
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goTo(item.id)}
                    className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-600"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
                  </button>
                </li>
              );
            }

            // If we're NOT on Home (e.g., on /rsvp), link back to Home with a hash.
            // The section will be found and scrolled after navigation thanks to default anchor behavior.
            return (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-600"
                >
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

