import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Plain-text countdown (bigger + Cinzel) ---------- */
function CountdownText({ target }) {
  const targetMs = useMemo(() => new Date(target).getTime(), [target]);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, targetMs - now);
  const s = Math.floor(diff / 1000) % 60;
  const m = Math.floor(diff / 60000) % 60;
  const h = Math.floor(diff / 3600000) % 24;
  const d = Math.floor(diff / 86400000);

  return (
    <p
      className="
        mt-3                             /* was mt-2 */
        font-cinzel uppercase           /* match hero fonts */
        text-[clamp(12px,1.6vw,18px)]   /* bigger */
        tracking-[0.25em]
        text-sage-900/90
      "
    >
      {d} DAYS • {String(h).padStart(2, "0")} HRS • {String(m).padStart(2, "0")} MIN • {String(s).padStart(2, "0")} SEC
    </p>
  );
}

/* ---------- Center tile slider (same as before) ---------- */
function Fader({ images, interval = 4000, className = "" }) {
  const [i, setI] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    ref.current = setInterval(() => setI((v) => (v + 1) % images.length), interval);
    return () => clearInterval(ref.current);
  }, [images.length, interval]);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl bg-sage-200/40 ${className}`}
      aria-label="Engagement photos slideshow"
    >
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === idx ? "opacity-100" : "opacity-0"}`}
          draggable={false}
          loading={idx === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 bg-sage-900/10" />
    </div>
  );
}

export default function Hero() {
  const images = ["/images/slider-1.jpg", "/images/slider-2.jpg", "/images/slider-3.jpg"];

  return (
    <section id="hero" className="relative -mt-px pt-1 min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* bg image optional */}
      <img src="/images/hero-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-sage-900/20" />

      <div className="relative page-container text-center">
        {/* Names + bigger slider gap */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10">
          <h1 className="mt-0 font-cinzel italic skew-x-6 uppercase text-[clamp(30px,7vw,84px)] text-ivory-50 tracking-wide">
            Andrew
          </h1>

          {/* taller/wider slider to match your plan */}
          <Fader images={images} className="h-36 w-56 sm:h-44 sm:w-72 md:h-56 md:w-96" />

          <h1 className="mt-0 font-cinzel italic skew-x-6 uppercase text-[clamp(30px,7vw,84px)] text-ivory-50 tracking-wide">
            Crystal
          </h1>
        </div>

        {/* Date & location — bigger and lower to clear the slider */}
        <div className="mt-10 /* was mt-6 */ flex items-center justify-center gap-4 text-ivory-50/95">
          <span className="hidden sm:block h-px w-12 bg-ivory-50/70" />
          <p className="font-cinzel uppercase text-[clamp(12px,1.8vw,20px)] tracking-[0.25em]">
            August 15, 2026 <span className="mx-2">|</span> Hershey, PA
          </p>
          <span className="hidden sm:block h-px w-12 bg-ivory-50/70" />
        </div>

        {/* Larger countdown under date (no boxes) */}
        <CountdownText target="2026-08-15T16:00:00" />

        {/* CTA — moved down, square button, no 'Learn More' */}
        <div className="mt-10 /* was mt-8 */ flex items-center justify-center">
          <a
            href="/rsvp"
            className="
              inline-block
              rounded-md          /* square-ish (change to rounded-none for perfect square corners) */
              bg-sage-600
              px-7 py-3           /* slightly bigger button */
              text-[15px] font-semibold text-ivory-50
              shadow-soft hover:bg-sage-700
            "
          >
            RSVP Now
          </a>
        </div>
      </div>

      {/* Subtle bottom vignette for depth (optional) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
}
