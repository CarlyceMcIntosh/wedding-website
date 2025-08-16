import { useState } from "react";

const ITEMS = [
  { id: "story",   label: "OUR STORY" },
  { id: "details", label: "EVENT DETAILS" },
  { id: "registry",label: "REGISTRY" },
  { href: "/rsvp", label: "RSVP" },            // real route
  { id: "travel",  label: "TRAVEL & STAY" },
  { id: "faq",     label: "FAQS" },
];

function goTo(id) {
  const el = id && document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function NavBarRibbon() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-ivory-100/95 backdrop-blur">
      <nav className="page-container">
        <div className="flex items-center justify-between px-2">
          {/* Brand / spacer to help center the menu */}
          <button
            onClick={() => goTo("hero")}
            className="hidden md:inline text-[12px] font-semibold tracking-widest text-sage-800"
          >
            A • C
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-6">
            {ITEMS.map((it) =>
              it.href ? (
                <li key={it.label}>
                  <a href={it.href} className="navlink-ribbon">
                    {it.label}
                  </a>
                </li>
              ) : (
                <li key={it.label}>
                  <button onClick={() => goTo(it.id)} className="navlink-ribbon">
                    {it.label}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* RSVP (outlined) */}
          <a
            href="/rsvp"
            className="hidden md:inline-block rounded-full border border-sage-400 px-4 py-2 text-[12px] font-semibold text-sage-800 hover:bg-sage-50"
          >
            RSVP
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-full border border-sage-300 p-2 text-sage-900"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Bottom sage rule */}
        <div className="h-px w-full bg-sage-200 mt-2" />

        {/* Mobile dropdown */}
        {open && (
          <ul className="md:hidden grid gap-2 border-x border-b border-sage-200 rounded-b-xl bg-ivory-100 px-3 py-3">
            {ITEMS.map((it) =>
              it.href ? (
                <li key={it.label}>
                  <a
                    href={it.href}
                    className="block rounded-lg px-3 py-2 text-sage-800 hover:bg-sage-50"
                    onClick={() => setOpen(false)}
                  >
                    {it.label}
                  </a>
                </li>
              ) : (
                <li key={it.label}>
                  <button
                    onClick={() => { goTo(it.id); setOpen(false); }}
                    className="w-full rounded-lg px-3 py-2 text-left text-sage-800 hover:bg-sage-50"
                  >
                    {it.label}
                  </button>
                </li>
              )
            )}
          </ul>
        )}
      </nav>
    </header>
  );
}
