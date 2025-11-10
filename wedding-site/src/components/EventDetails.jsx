// Helper: framed image with vertical stripes like your inspo
function StripedImage({ src, alt, stripeSide = "right" }) {
  // stripeSide: "left" | "right"
  return (
    <div className="relative h-64 md:h-72">
      {/* stripes panel */}
      <div
        className={
          "absolute inset-y-0 w-16 md:w-20 " +
          (stripeSide === "left" ? "left-0" : "right-0")
        }
        style={{
          // soft sage stripes (tweak these two vars to match your palette)
          ["--stripe"]: "#77886E",
          ["--stripeAlpha"]: "0.20",
          background:
            "repeating-linear-gradient(90deg, color-mix(in oklab, var(--stripe) var(--stripeAlpha), transparent), color-mix(in oklab, var(--stripe) var(--stripeAlpha), transparent) 12px, transparent 12px, transparent 24px)",
          borderRadius: "0.75rem",
        }}
      />
      {/* photo with rounded/arched vibe */}
      <img
        src={src}
        alt={alt}
        className={
          "absolute inset-0 h-full w-full object-cover rounded-[1.25rem] " +
          (stripeSide === "left" ? "pl-4 md:pl-6" : "pr-4 md:pr-6")
        }
        style={{
          // small inward padding to reveal the stripe panel edge
          clipPath:
            "path('M0,24 Q0,0 24,0 Lcalc(100% - 24px),0 Q100%,0 100%,24 L100%,100% L0,100% Z')",
        }}
      />
    </div>
  );
}

export default function EventDetailsCompact() {
  return (
    <section id="event-details" className="py-16 bg-ivory-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* The Timeline (image RIGHT) */}
        <div className="grid items-center gap-8 md:grid-cols-2 mb-16">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="font-cinzel text-3xl md:text-4xl text-sage-900 italic">
              The Timeline
            </h2>
            <p className="mt-4 text-sage-800 max-w-md">
              We're delighted to have you join us on our special day. To help you plan your
              time and make the most of the celebration, here’s a glimpse of the day's
              schedule. We look forward to sharing these unforgettable moments with you.
            </p>
            <ul className="mt-6 space-y-2 text-sage-700 text-sm">
              <li>Bus Pick-Up — 4:00 PM</li>
              <li>Cocktail Hour — 5:00 PM</li>
              <li>Wedding Ceremony — 6:00 PM</li>
              <li>Dinner Reception — 7:00 PM</li>
              <li>Dancing &amp; Drinks — 8:30 PM</li>
              <li>Bus Drop-Off — 12:00 AM</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <StripedImage
              src="/images/timeline.jpg"
              alt="Wedding timeline"
              stripeSide="right"
            />
          </div>
        </div>

        {/* The Reception (image LEFT) */}
        <div className="grid items-center gap-8 md:grid-cols-2 mb-16">
          <div className="order-2 md:order-2 text-center md:text-left">
            <h2 className="font-cinzel text-3xl md:text-4xl text-sage-900 italic">
              The Reception
            </h2>
            <p className="mt-2 text-sage-800">
              7:00 PM <br />
              The Garden Hall <br />
              789 Maple Street, Portland, Maine
            </p>
            <p className="mt-4 text-sage-800">
              Celebrate with us after the ceremony for an evening of delicious food,
              heartfelt toasts, and dancing the night away!
            </p>
          </div>
          <div className="order-1 md:order-1">
            <StripedImage
              src="/images/reception.jpg"
              alt="Reception dinner setup"
              stripeSide="left"
            />
          </div>
        </div>

        {/* The Transportation (image RIGHT) */}
        <div className="grid items-center gap-8 md:grid-cols-2 mb-16">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="font-cinzel text-3xl md:text-4xl text-sage-900 italic">
              The Transportation
            </h2>
            <p className="mt-2 text-sage-800">
              Pick-Up: The Portland Inn at 4:00 PM <br />
              Drop-Off: The Portland Inn at 12:00 AM
            </p>
            <p className="mt-4 text-sage-800">
              Complimentary shuttle services will be provided to and from the venue.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <StripedImage
              src="/images/transportation.jpg"
              alt="Wedding transportation"
              stripeSide="right"
            />
          </div>
        </div>

        {/* The Dress Code (image LEFT) */}
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-2 text-center md:text-left">
            <h2 className="font-cinzel text-3xl md:text-4xl text-sage-900 italic">
              The Dress Code
            </h2>
            <p className="mt-4 text-sage-800">
              Formal attire requested. We encourage you to dress in your favorite elegant
              outfits and be ready to dance the night away!
            </p>
            <p className="mt-4 text-sage-800">
              Dress comfortably for an evening of celebration.
            </p>
            <div className="mt-6">
              <h4 className="font-cinzel uppercase text-xs tracking-widest text-sage-900">
                Color Palette
              </h4>
              <div className="mt-2 flex gap-3 justify-center md:justify-start">
                <span className="h-6 w-6 rounded-full bg-[#6b7b5a]" />
                <span className="h-6 w-6 rounded-full bg-[#d2c9b5]" />
                <span className="h-6 w-6 rounded-full bg-[#e5dfd3]" />
                <span className="h-6 w-6 rounded-full bg-[#e2d4ad]" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-1">
            <StripedImage
              src="/images/dresscode.jpg"
              alt="Dress code inspiration"
              stripeSide="left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
