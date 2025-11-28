import { useEffect, useMemo, useRef, useState } from "react";

/* ---------- Countdown (unchanged, still elegant & accurate) ---------- */
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
        mt-3
        font-cinzel uppercase
        text-[clamp(25px,1.6vw,18px)]
        tracking-[0.25em]
        text-ivory-50
        drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
      "
    >
      {d} DAYS • {String(h).padStart(2, '0')} HRS • {String(m).padStart(2, '0')} MIN • {String(s).padStart(2, '0')} SEC
    </p>
  );
}

/* ---------- Polaroid-style Fader Slideshow ---------- */
function Fader({ images, interval = 2950, className = "" }) {
  const [i, setI] = useState(0);
  const [tilt, setTilt] = useState(1);   // tilt direction
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    ref.current = setInterval(() => {
      setI((v) => (v + 1) % images.length);
    }, interval);

    return () => clearInterval(ref.current);
  }, [images.length, interval]);

  // Update tilt direction each slide
  useEffect(() => {
    setTilt((prev) => (prev === 1 ? -1 : 1));
  }, [i]);

  return (
    <div
      className="
        transition-transform 
        duration-[2800ms] 
        ease-[cubic-bezier(.33,1,.68,1)]
      "
      style={{
        transform: `rotate(${tilt * 1.6}deg)`,   // whole polaroid rotates slowly
      }}
    >
      <div
        className={`
          relative
          bg-white
          border border-[#eaeaea]
          rounded-sm
          shadow-[0_10px_24px_rgba(0,0,0,0.22)]
          ${className}
        `}
        style={{
          paddingTop: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingBottom: "42px",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-sm">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`
                absolute inset-0 h-full w-full object-cover
                transition-opacity duration-[900ms]
                ${i === idx ? "opacity-100" : "opacity-0"}
              `}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- HERO SECTION (Full rewrite w/ cinematic polish) ---------- */
export default function Hero() {

const images = [
  "/images/crystal-andrew-1.jpeg",
  "/images/crystal-andrew-2.jpeg",
  "/images/crystal-andrew-3.jpeg",
  "/images/crystal-andrew-4.jpeg",
  "/images/crystal-andrew-5.jpeg",


];


  return (
    <section
      id="hero"
      className="
        relative
        -mt-px pt-1
        min-h-[92vh]
        flex items-center justify-center
        overflow-hidden
      "
    >
      {/* Background Image */}
      {/* <img
        src="/images/hero-bg.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      /> */}

      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-sage-900/25" />

      <div className="relative page-container text-center">
        {/* Names + Polaroid slideshow */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10">

          {/* Left Name */}
          <h1
            className="
              mt-0 font-cinzel italic
 
              text-[clamp(30px,7vw,84px)]
              text-ivory-50 tracking-wide
              drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
            "
          >
            Crystal
          </h1>

          {/* Polaroid Slideshow */}
          <Fader
            images={images}
            className="
              h-56 w-40
              sm:h-72 sm:w-52
              md:h-80 md:w-80
            "
          />

          {/* Right Name */}
          <h1
            className="
              mt-0 font-cinzel italic
              text-[clamp(30px,7vw,84px)]
              text-ivory-50 tracking-wide
              drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
            "
          >
            Andrew
          </h1>
        </div>

        {/* Countdown */}
        <div className="mt-10 md:mt-14">
          <CountdownText target="2026-08-15T16:00:00" />
        </div>

        {/* Date + Location */}
        <div className="mt-10 flex items-center justify-center gap-4 text-ivory-50/95 drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" >
          <span className="hidden sm:block h-px w-12 bg-ivory-50/70" />

          <p className="font-cinzel uppercase text-[clamp(14px,2vw,26px)] tracking-[0.25em]">
            August 15, 2026 <span className="mx-2">|</span> Hershey, PA
          </p>

          <span className="hidden sm:block h-px w-12 bg-ivory-50/70" />
        </div>




        {/* RSVP Button
        <div className="mt-10 flex items-center justify-center">
          <a
            href="/rsvp"
            className="
              inline-block
              rounded-md
              bg-sage-600
              px-7 py-3
              text-[15px] font-semibold text-ivory-50
              shadow-md
              hover:bg-sage-700 transition
            "
          >
            RSVP Now
          </a>
        </div> */}
      </div>

      {/* Subtle fade at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
    </section>
  );
}
