export default function TravelStay(){
  return(
    <section id="travel-stay" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-center font-cinzel text-4xl text-sage-900">
          Travel &amp; Stay
        </h2>

        {/* Hotel Block */}
        <div className="mt-12 rounded-xl border border-sage-200 bg-ivory-50 p-6 shadow-sm">
          <h3 className="font-cinzel uppercase text-lg tracking-widest text-sage-900">
            Hotel Block
          </h3>
          <p className="mt-2 text-sage-800">
            <strong>The Rosewood Inn</strong> <br />
            456 Garden Lane, Philadelphia, PA <br />
            <a
              href="#"
              target="_blank"
              className="text-sage-700 underline hover:text-sage-900"
            >
              Book your stay here
            </a>{" "}
            by <strong>July 1, 2026</strong> to receive the discounted group rate.
          </p>
        </div>

        {/* Suggestions */}
        <div className="mt-10">
          <h3 className="font-cinzel uppercase text-lg tracking-widest text-sage-900">
            Other Options
          </h3>
          <ul className="mt-3 list-disc pl-6 text-sage-800">
            <li>
              <strong>Greenleaf Suites</strong> – boutique hotel, 10 min from venue
            </li>
            <li>
              <strong>Downtown Marriott</strong> – modern, 15 min from venue
            </li>
            <li>
              <strong>Airbnb</strong> – cozy homes & apartments nearby
            </li>
          </ul>
        </div>

        {/* Nearest Airport */}
        <div className="mt-10">
          <h3 className="font-cinzel uppercase text-lg tracking-widest text-sage-900">
            Getting There
          </h3>
          <p className="mt-2 text-sage-800">
            The nearest airport is <strong>Philadelphia International Airport (PHL)</strong>, about 25 minutes from the venue by car/taxi.
          </p>
        </div>

        {/* Map */}
        <div className="mt-12 h-80 w-full rounded-xl overflow-hidden shadow">
          <iframe
            title="Wedding Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867098045843!2d-122.4194150846819!3d37.77492927975917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5d5a5e1b%3A0x123456789abcdef!2sVenue+Name!5e0!3m2!1sen!2sus!4v1616181543113!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>

  )
}