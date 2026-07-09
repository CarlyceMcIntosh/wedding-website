export default function TravelAndStay() {
  return (
    <section
      id="travel"
      className="section page-container pt-12 pb-8 text-center flex flex-col items-center">

      {/* Intro Text */}
      <p className="font-cormorant text-lg md:text-xl text-sage-700 max-w-3xl leading-relaxed mb-14">
        The wedding block deadline has closed. Feel free to book at any of the following hotels for regular pricing.
      </p>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-sage-300 mb-12 rounded-full" />

      {/* TWO-NIGHT STAY */}
      <h3 className="font-cinzel uppercase tracking-[0.18em] text-xl md:text-2xl text-sage-700 mb-8">
        Two-Night Stay Options (August 14–16)
      </h3>
      <p className="font-cormorant text-lg md:text-xl text-sage-700 bg-sage-100 font-medium max-w-3xl mx-auto px-6 py-4 rounded-md mb-14">
        These hotels are located in the same area (approximately 25 minutes from the venue).
        We are hoping to organize transportation from this area to the wedding venue.
      </p>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          w-full
          max-w-6xl
          mb-12
        "
      >
        <HotelCard
          name="Hilton Garden Inn Harrisburg East"
          address="3943 TecPort Dr, Harrisburg, PA"
        />

        <HotelCard
          name="Homewood Suites by Hilton Harrisburg East – Hershey Area"
          address="3990 TecPort Dr, Harrisburg, PA"
        />

        <HotelCard
          name="Courtyard by Marriott Harrisburg Hershey"
          address="725 Eisenhower Blvd, Harrisburg, PA"
        />
      </div>

      <h3 className="font-cinzel uppercase tracking-[0.18em] text-lg md:text-xl text-sage-700 mb-6">
        One-Night Stay Option
      </h3>
      <p className="font-cormorant text-lg md:text-xl text-sage-700 bg-sage-100 font-medium max-w-3xl mx-auto px-6 py-4 rounded-md mb-14">
        This location is approximately 18 minutes from the venue in a different direction
        from the other hotel blocks. Transportation will likely not be available from this hotel.
      </p>

      <div className="w-full max-w-md">
        <HotelCard
          name="Hampton Inn & Suites Mount Joy / Lancaster West"
          address="2301 Strickler Rd, Manheim, PA"
        />
      </div>

      <p className="font-cormorant text-lg md:text-xl text-sage-600 max-w-3xl leading-relaxed mt-24 text-center">
        If you prefer a one-night stay in the Harrisburg East area (west of the venue), or if the one-night room block becomes full, please contact{" "}
        <span className="font-semibold">Cindy Lear</span> at{" "}
        <a
          href="mailto:dclear84@yahoo.com"
          className="underline underline-offset-2"
        >
          dclear84@yahoo.com
        </a>{" "}
        for assistance with additional accommodation options.
      </p>

    </section>
  );
}

function HotelCard({ name, address }) {
  return (
    <div
      className="
        border border-sage-300
        px-8 py-10
        flex flex-col items-center text-center
      "
    >
      <h4 className="font-cinzel uppercase tracking-widest text-2xl text-sage-700 mb-4">
        {name}
      </h4>

      <p className="font-cormorant text-lg text-sage-600">
        {address}
      </p>
    </div>
  );
}
