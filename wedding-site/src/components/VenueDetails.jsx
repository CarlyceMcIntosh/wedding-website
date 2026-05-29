export default function VenueDetails() {
  return (
    <section
      id="venue"
      className="section w-full bg-ivory-100 py-20 px-4 scroll-mt-16"
    >
      {/* Section header */}
      <div className="flex flex-col items-center mb-10">
        <h2 className="font-cinzel text-3xl md:text-4xl text-sage-700 tracking-wide">
          Venue
        </h2>
        <div className="w-16 h-px bg-sage-300 mt-4" />
      </div>

      {/* Floating card */}
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-sage-100
                      shadow-[0_16px_48px_rgba(0,0,0,0.10)] flex flex-col md:flex-row">

        {/* Left — Map */}
        <div className="w-full md:w-1/2 h-[240px] md:h-auto md:min-h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.5492918835344!2d-76.5762499!3d40.2304847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8a3becfa23f6d%3A0xc5728b9858972c76!2sWeddings%20on%20Memory%20Lane!5e1!3m2!1sen!2sus!4v1763179833455!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right — Info panel */}
        <div className="w-full md:w-1/2 bg-[#fdf8f2] flex flex-col justify-center items-center
                        text-center px-8 py-10 md:px-10 gap-4">

          <h3 className="font-cinzel text-xl md:text-2xl text-sage-700 tracking-wide leading-snug">
            Weddings on<br />Memory Lane
          </h3>

          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-sage-300" />
            <span className="text-sage-300 text-[7px]">◆</span>
            <div className="w-8 h-px bg-sage-300" />
          </div>

          <p className="font-cormorant text-lg text-sage-600 leading-relaxed">
            78 Memory Ln<br />Hershey, PA
          </p>

          <div className="font-cormorant text-sage-700 space-y-0.5">
            <p className="text-lg font-semibold tracking-wide">
              Saturday, August 15, 2026
            </p>
            <p className="text-base italic text-sage-500">
              4:00 PM Arrival
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-sage-300" />
            <span className="text-sage-300 text-[7px]">◆</span>
            <div className="w-8 h-px bg-sage-300" />
          </div>

          <p className="font-cormorant text-base text-sage-600 leading-relaxed max-w-[240px]">
            Join us in celebrating our wedding in a beautiful countryside setting,
            surrounded by love, friends, and family.
          </p>

          <a
            href="https://maps.google.com/?q=78+Memory+Ln,+Hershey,+PA"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 font-cinzel text-[11px] tracking-widest uppercase
                       text-ivory-50 bg-sage-700 hover:bg-sage-800
                       px-6 py-2.5 transition-colors duration-200"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
