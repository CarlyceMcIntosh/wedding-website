export default function Footer() {
  return (
    <footer className="bg-sage-900/25 text-ivory-50">
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8 py-10
                   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start"
      >

        {/* LEFT COLUMN — Wedding Title */}
        <div>
          <h3 className="font-cinzel italic text-[28px] leading-tight">
            The Wedding of Crystal &amp; Andrew
          </h3>
          <p className="font-cormorant mt-4 text-base text-ivory-100/90 leading-relaxed max-w-[46ch]">
            Thank you for joining us on this beautiful journey. We’re so grateful
            to have you by our side as we celebrate our love.
          </p>
        </div>

        {/* MIDDLE COLUMN — Left intentionally empty for aesthetic spacing */}
        <div className="hidden lg:block"></div>

        {/* RIGHT COLUMN — Location */}
        <div>
          <h4 className="font-cinzel uppercase tracking-[0.18em] text-[12px] pb-1 mb-4 border-b border-ivory-200/70 inline-block">
            The Location
          </h4>
          <div className="font-cormorant space-y-5 text-[15px] text-ivory-100">
            <address className="not-italic">
              <div className="font-bold">Weddings on Memory Lane</div>
              <div>78 Memory Ln, Hershey, PA</div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-ivory-200/20">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-3 text-[11px] text-ivory-100/70">
          © {new Date().getFullYear()} Crystal &amp; Andrew
        </div>
      </div>
    </footer>
  );
}
