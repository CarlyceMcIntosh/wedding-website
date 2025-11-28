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
  <div className="mt-6 text-ivory-50 font-cinzel uppercase drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)] text-center mx-auto">

    {/* MOBILE VERSION (stacked) */}
    <div className="sm:hidden">
      <p className="text-[clamp(20px,5vw,28px)] tracking-[0.18em] leading-tight">
        {d} DAYS • {String(h).padStart(2, '0')} HRS
      </p>
      <p className="text-[clamp(18px,5vw,26px)] tracking-[0.18em] leading-tight mt-1">
        {String(m).padStart(2, '0')} MIN • {String(s).padStart(2, '0')} SEC
      </p>
    </div>

    {/* DESKTOP VERSION (single line) */}
    <p className="hidden sm:block text-[clamp(28px,2vw,42px)] tracking-[0.22em] leading-tight">
      {d} DAYS • {String(h).padStart(2, '0')} HRS • {String(m).padStart(2, '0')} MIN • {String(s).padStart(2, '0')} SEC
    </p>

  </div>
);

}

/* ---------- Polaroid-style Fader Slideshow ---------- */
function Fader({ images, interval = 600, className = "", imageHeight }) {

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
        duration-[1500ms] 
        ease-[cubic-bezier(.25,.1,.25,1)]
      "
      style={{
        transform: `rotate(${tilt * 0.7}deg)`,
      }}
    >
      {/* This wrapper gets its WIDTH from className */}
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
          paddingTop: "14px",
          paddingLeft: "14px",
          paddingRight: "14px",
          paddingBottom: "60px",
        }}
      >
        {/* Inner image area: width 100% of wrapper, fixed height */}
        <div
          className="relative w-full overflow-hidden rounded-sm"
          style={{
            height: imageHeight?.base || "15rem",
          }}
        >
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`
                absolute inset-0 h-full w-full object-cover
                transition-opacity duration-[250ms]
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
  "/images/crystal-andrew-12.jpeg",
  "/images/crystal-andrew-8.jpeg",
  "/images/crystal-andrew-5.jpeg",
  "/images/crystal-andrew-6.jpeg",
  "/images/crystal-andrew-7.jpeg",
  "/images/crystal-andrew-4.jpeg",
  "/images/crystal-andrew-9.jpeg",
  "/images/crystal-andrew-10.jpeg",
  "/images/crystal-andrew-2.jpeg",
  "/images/crystal-andrew-11.jpeg",



];


  return (
 <section
  id="hero"
  className="
    relative
    w-full
    min-h-[100vh] sm:min-h-[92vh]
    flex flex-col items-center
    justify-start sm:justify-center
    pt-0 sm:pt-10
    
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
        {/* Mobile-only full name */}
        {/* MOBILE ONLY - Crystal above, Polaroid center, Andrew below */}
<div className="sm:hidden w-full px-6 mt-0 space-y-0.5">


<p
  className="
    font-cinzel italic text-ivory-50
    text-[clamp(38px,12vw,58px)]
    tracking-[0.03em]
    drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
    text-left mb-2
  "
>
  Crystal
</p>

  <div className="flex justify-center mb-6">
    <Fader
      images={images}
      imageHeight={{
        base: "15rem",
        sm: "22rem",
        md: "28rem",
      }}
      className="w-72 sm:w-80 md:w-96"

    />
  </div>
<p
  className="
    font-cinzel italic text-ivory-50
    text-[clamp(38px,12vw,58px)]
    tracking-[0.03em]
    drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
    text-right mt-2
  "
>
  Andrew
</p>

</div>


{/* Names + Polaroid slideshow */}
{/* DESKTOP ONLY */}
<div
  className="
    hidden sm:flex 
    items-center justify-center 
    gap-8 md:gap-10
  "
>
  {/* Left Name */}
  <h1
    className="
      mt-0 font-cinzel italic
      text-[clamp(40px,8vw,110px)]
      text-ivory-50 tracking-wide
      drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
    "
  >
    Crystal
  </h1>

  {/* Polaroid */}
  <Fader
    images={images}
    imageHeight={{
      base: "15rem",
      sm: "22rem",
      md: "28rem",
    }}
    className="w-72 md:w-80"
  />

  {/* Right Name */}
  <h1
    className="
      mt-0 font-cinzel italic
      text-[clamp(40px,8vw,110px)]
      text-ivory-50 tracking-wide
      drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]
    "
  >
    Andrew
  </h1>
</div>




        {/* Countdown */}
        <div className="mt-2 sm:mt-20 md:mt-28">



          <CountdownText target="2026-08-15T16:00:00" />
        </div>

        {/* Date + Location */}
        <div className="mt-4 flex items-center justify-center gap-4 text-ivory-50/95 drop-shadow-[0_2px_3px_rgba(0,0,0,0.35)]" >
          <span className="hidden sm:block h-px w-12 bg-ivory-50/70" />

          <p className="font-cinzel uppercase text-[clamp(14px,3.2vw,22px)] tracking-[0.15em]">
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
