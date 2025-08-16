const NAV_ITEMS = [
  { id: "story", label: "OUR STORY" },
  { id: "details", label: "EVENT DETAILS" },
  { id: "registry", label: "REGISTRY" },
  { id: "rsvp", label: "RSVP" },
  { id: "travel", label: "TRAVEL & STAY" },
  { id: "faq", label: "FAQ" },
];

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ivory-100/95 backdrop-blur border-b border-sage-300">
      <nav className="page-container h-16 flex items-center justify-center">
        <ul className="flex gap-12">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="relative font-cinzel text-lg tracking-wide text-sage-600 uppercase transition hover:text-sage-600"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-sage-700 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
