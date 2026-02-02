export default function Footer() {
  return (
    <footer className="bg-sage-900/25 text-ivory-50 shrink">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-10
                   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start"
      >

        {/* LEFT COLUMN — Wedding Title */}
        <div>
          <h3 className="font-cinzel italic text-[30px] leading-snug">

            The Wedding of Crystal &amp; Andrew
          </h3>
          <p className="
            font-cormorant
            mt-4
            text-lg
            text-ivory-50/95
            leading-relaxed
            max-w-[48ch]
          ">

            Thank you for joining us on this beautiful journey. We’re so grateful
            to have you by our side as we celebrate our love.
          </p>
        </div>

        {/* MIDDLE COLUMN — Left intentionally empty for aesthetic spacing */}
        <div className="hidden lg:block"></div>

        {/* RIGHT COLUMN — Location */}
        <div>
        <h4 className="
          font-cinzel
          uppercase
          tracking-[0.2em]
          text-sm
          pb-2
          mb-5
          border-b border-ivory-200/70
          inline-block
        ">            The Location
          </h4>
          <div className="font-cormorant space-y-4 text-lg text-ivory-50">

            <address className="not-italic">
              <div className="font-semibold text-ivory-50">
                Weddings on Memory Lane
              </div>
              <div>78 Memory Ln, Hershey, PA</div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-ivory-200/20">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-4 text-xs text-ivory-50/80
">
          © {new Date().getFullYear()} Crystal &amp; Andrew
        </div>
      </div>
    </footer>
  );
}
