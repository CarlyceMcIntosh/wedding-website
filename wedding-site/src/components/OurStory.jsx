export default function OurStory() {
  return (
    <section id="story" className="section">
      <div className="page-container py-20">
        {/* Centered title in the same sage color */}
        <h2 className="text-center font-cinzel uppercase text-sage-600 text-2xl md:text-3xl tracking-[0.18em]">
          Our Story
        </h2>
        <div className="mx-auto mt-3 h-px w-16 bg-champagne-200" />

        {/* Two-column layout: photo (left) + copy (right) */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Photo placeholder */}
          <figure className="overflow-hidden rounded-xl border border-sage-200 bg-ivory-50 shadow-soft h-96 md:h-[28rem]">
            {/* simple shimmer placeholder */}
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-sage-200/50" />
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)]" />
              <div className="absolute bottom-3 right-3 rounded-md bg-ivory-100/80 px-2 py-1 text-[11px] tracking-wide text-sage-700">
                Photo coming soon
              </div>
            </div>
          </figure>

          {/* Copy */}
          <div className="self-center">
            <p className="text-sage-600 leading-relaxed">
              We first crossed paths in 2019 when a mutual friend dragged us to the same coffee shop.
              One conversation turned into a dozen, and a dozen turned into a shared calendar.
            </p>
            <p className="mt-4 text-sage-600  leading-relaxed">
              A few years later, under string lights and a stubbornly starry sky, the question was asked
              and answered. We can’t wait to celebrate the next chapter with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

