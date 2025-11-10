export default function Footer() {
  return (
    <footer className="bg-[#9BAA89] text-ivory-50">
      <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-10 flex flex-col lg:flex-row lg:justify-between lg:items-start">
        
        {/* LEFT */}
        <div className="lg:max-w-md">
          <h3 className="font-cinzel italic text-[28px] leading-tight">
            The Wedding of Andrew &amp; Crystal
          </h3>
          <p className="mt-4 text-base text-ivory-100/90 leading-relaxed max-w-[46ch]">
            Thank you for joining us on this beautiful journey. We’re so grateful
            to have you by our side as we celebrate our love.
          </p>
        </div>

        {/* RIGHT (Contact + Locations side by side with controlled gap) */}
        <div className="mt-10 lg:mt-0 flex gap-12">
          {/* Contact Us */}
          <div>
            <h4 className="font-cinzel uppercase tracking-[0.18em] text-[12px] pb-1 mb-4 border-b border-ivory-200/70 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-2 text-[15px] text-ivory-100">
              <li>
                <a href="mailto:andrewandcrystal@example.com" className="hover:underline">
                  andrewandcrystal@example.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="hover:underline">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-cinzel uppercase tracking-[0.18em] text-[12px] pb-1 mb-4 border-b border-ivory-200/70 inline-block">
              The Locations
            </h4>
            <div className="space-y-5 text-[15px] text-ivory-100">
              <address className="not-italic">
                <div className="font-medium">The Grand Ballroom</div>
                <div>789 Joyful Rd., Any City, ST 12345</div>
              </address>
              <address className="not-italic">
                <div className="font-medium">St. Mary’s Chapel</div>
                <div>456 Celebration Ave., Any City, ST 12345</div>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* bottom line */}
      <div className="border-t border-ivory-200/20">
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-8 py-3 text-[11px] text-ivory-100/70">
          © {new Date().getFullYear()} Andrew &amp; Crystal
        </div>
      </div>
    </footer>
  );
}
