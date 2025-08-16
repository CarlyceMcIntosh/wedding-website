import { useEffect, useRef, useState } from "react";

/**
 * Auto-playing, swipeable carousel.
 * - If images[] is empty, renders animated placeholders that still slide.
 */
export default function PhotoCarousel({
  images = [],
  interval = 3500,
  className = "",
  imgClassName = "h-80 sm:h-96 md:h-[28rem] w-full object-cover",
}) {
  // If no images provided, create 4 placeholder slides
  const slides = images.length ? images : [null, null, null, null];

  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const trackRef = useRef(null);

  // Auto-advance (respect reduced motion)
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || isHover || slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval, isHover]);

  // Simple swipe
  const startX = useRef(0);
  const deltaX = useRef(0);
  const dragging = useRef(false);

  const onDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    deltaX.current = 0;
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    deltaX.current = x - startX.current;
  };
  const onUp = () => {
    if (!dragging.current) return;
    dragging.current = false;
    if (deltaX.current > 50) setIndex((i) => (i - 1 + slides.length) % slides.length);
    else if (deltaX.current < -50) setIndex((i) => (i + 1) % slides.length);
    deltaX.current = 0;
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-sage-200 bg-ivory-50 shadow-soft ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      aria-roledescription="carousel"
    >
      {/* Track */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {slides.map((src, i) => (
          <div key={i} className="w-full shrink-0">
            {src ? (
              <img
                src={src}
                alt=""
                className={imgClassName}
                loading={i === 0 ? "eager" : "lazy"}
                draggable={false}
              />
            ) : (
              // Placeholder slide (animated gradient)
              <div className={`${imgClassName} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-sage-200/50" />
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)]" />
                <div className="absolute bottom-3 right-3 rounded-md bg-ivory-100/80 px-2 py-1 text-[11px] tracking-wide text-sage-700">
                  Photo coming soon
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      {slides.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={[
                "pointer-events-auto h-2.5 w-2.5 rounded-full border border-sage-500/70",
                i === index ? "bg-sage-600" : "bg-ivory-50/70",
              ].join(" ")}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* Tailwind keyframes (put once in your global CSS if not already) */
/* @layer utilities { @keyframes shimmer { 100% { transform: translateX(100%); } } } */
