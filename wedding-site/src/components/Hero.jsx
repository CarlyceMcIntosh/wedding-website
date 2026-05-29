import { useEffect, useMemo, useRef, useState } from "react";

const images = [
  "/engagement-photos/1.jpg",
  "/engagement-photos/2.jpg",
  "/engagement-photos/3.jpg",
  "/engagement-photos/4.jpg",
  "/engagement-photos/5.jpg",
  "/engagement-photos/6.jpg",
  "/engagement-photos/7.jpg",
  "/engagement-photos/8.jpg",
  "/engagement-photos/9.jpg",
  "/engagement-photos/10.jpg",
  "/engagement-photos/11.jpg",
  "/engagement-photos/12.jpg",
];

/* ---------- Countdown ---------- */
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
    <div className="font-cinzel uppercase text-sage-600 text-center">
      {/* Mobile — smaller text and tighter tracking to stay within narrow screens */}
      <div className="sm:hidden">
        <p className="text-[clamp(15px,4.2vw,19px)] tracking-[0.12em] leading-snug">
          {d} Days &nbsp;•&nbsp; {String(h).padStart(2, "0")} Hours
        </p>
        <p className="text-[clamp(14px,3.8vw,18px)] tracking-[0.1em] leading-snug mt-0.5">
          {String(m).padStart(2, "0")} Minutes &nbsp;•&nbsp; {String(s).padStart(2, "0")} Seconds
        </p>
      </div>
      {/* Desktop */}
      <p className="hidden sm:block text-[clamp(16px,1.6vw,22px)] tracking-[0.22em]">
        {d} Days &nbsp;•&nbsp; {String(h).padStart(2, "0")} Hours &nbsp;•&nbsp;{" "}
        {String(m).padStart(2, "0")} Minutes &nbsp;•&nbsp; {String(s).padStart(2, "0")} Seconds
      </p>
    </div>
  );
}

/* ---------- Polaroid ---------- */
function Polaroid() {
  const [i, setI] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    ref.current = setInterval(() => setI((v) => (v + 1) % images.length), 2000);
    return () => clearInterval(ref.current);
  }, []);

  return (
    <div
      className="transition-transform duration-[1500ms] ease-[cubic-bezier(.25,.1,.25,1)]"
      style={{ transform: "rotate(1.5deg)" }}
    >
      <div
        className="bg-[#fdf8f2] border border-[#e8e0d5] rounded-sm p-[10px] pb-[40px] sm:p-[14px] sm:pb-[56px]"
        style={{ boxShadow: "0 10px 28px rgba(0,0,0,0.16)" }}
      >
        {/* Photo area — smaller on mobile to keep everything on one screen */}
        <div className="relative overflow-hidden rounded-sm w-44 h-[min(15rem,32vh)] sm:w-60 sm:h-[min(22rem,40vh)] md:w-72">
          {images.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          ))}
        </div>

        {/* Bottom strip — "C + A" */}
        <div className="flex items-center justify-center mt-2 sm:mt-3">
          <p className="font-allura text-sage-700 text-2xl sm:text-3xl">
            C + A
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- HERO — Option 3: Flanking Polaroid ---------- */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[calc(100vh-4rem)] bg-ivory-100 flex flex-col items-center justify-start sm:justify-center pt-10 sm:pt-10 pb-24 sm:pb-6"
    >

      {/* MOBILE — Crystal above, polaroid, Andrew below */}
      <div className="sm:hidden w-full flex flex-col items-center gap-2 px-6">
        <p className="font-cinzel italic text-[clamp(26px,7.5vw,38px)] tracking-wide text-sage-700 leading-none">
          Crystal
        </p>
        <Polaroid />
        <p className="font-cinzel italic text-[clamp(26px,7.5vw,38px)] tracking-wide text-sage-700 leading-none">
          Andrew
        </p>
        <div className="mt-2 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-sage-400" />
            <span className="text-sage-400 text-[7px]">◆</span>
            <div className="w-8 h-px bg-sage-400" />
          </div>
          <p className="font-cinzel text-[16px] tracking-[0.22em] text-sage-700 uppercase">
            August 15, 2026
          </p>
          <p className="font-cinzel text-[14px] tracking-[0.24em] text-sage-600 uppercase">
            Hershey, PA
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-sage-400" />
            <span className="text-sage-400 text-[7px]">◆</span>
            <div className="w-8 h-px bg-sage-400" />
          </div>
          <CountdownText target="2026-08-15T16:00:00" />
        </div>
      </div>

      {/* DESKTOP — Crystal | Polaroid | Andrew */}
      <div className="hidden sm:flex flex-col items-center gap-5">
        <div className="flex items-center justify-center gap-8 md:gap-14">
          <h1 className="font-cinzel italic text-[clamp(32px,4.5vw,68px)] tracking-wide text-sage-700">
            Crystal
          </h1>
          <Polaroid />
          <h1 className="font-cinzel italic text-[clamp(32px,4.5vw,68px)] tracking-wide text-sage-700">
            Andrew
          </h1>
        </div>

        {/* Date / location / countdown */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-sage-400" />
            <span className="text-sage-400 text-[8px]">◆</span>
            <div className="w-16 h-px bg-sage-400" />
          </div>
          <p className="font-cinzel text-[clamp(16px,1.6vw,22px)] tracking-[0.28em] text-sage-700 uppercase">
            August 15, 2026
          </p>
          <p className="font-cinzel text-[clamp(14px,1.3vw,18px)] tracking-[0.32em] text-sage-600 uppercase">
            Hershey, PA
          </p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-sage-400" />
            <span className="text-sage-400 text-[8px]">◆</span>
            <div className="w-16 h-px bg-sage-400" />
          </div>
          <CountdownText target="2026-08-15T16:00:00" />
        </div>
      </div>

    </section>
  );
}
