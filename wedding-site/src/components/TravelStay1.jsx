export default function TravelAndStay() {
  return (
    <section
      id="travel"
      className="section page-container pt-12 pb-24 text-center flex flex-col items-center">

      {/* Intro Text */}
      <p className="font-cormorant text-base md:text-lg text-sage-700 max-w-3xl leading-relaxed mb-12">
        For your convenience, blocks of rooms have been reserved at the following hotels.
        Please use the linked websites to access discounted rates.{" "}
        <span className="font-semibold text-sage-900 bg-sage-100 px-1 rounded-sm">
          Due to the high hotel demand during the summer season in Hershey, we strongly
          suggest booking accommodations as soon as possible.
        </span>{" "}
        <span className="font-semibold text-sage-900 bg-sage-100 px-1 rounded-sm">
          A booking date of July 1st is recommended.
        </span>{" "}
         (Availability and deadlines may vary by hotel)
      </p>



      {/* Divider */}
      <div className="w-24 h-[2px] bg-sage-300 mb-12 rounded-full" />

      {/* TWO-NIGHT STAY */}
      <h3 className="font-cinzel uppercase tracking-[0.18em] text-lg md:text-xl text-sage-700 mb-6">
        Two-Night Stay Options (August 14–16)
      </h3>
      <p className="font-cormorant text-base md:text-lg text-sage-700 bg-sage-100 font-medium max-w-3xl mx-auto px-4 py-3 rounded-md mb-12">
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

          dates="Aug 14–16, 2026"
          rate="$159 / night"
          link="https://www.hilton.com/en/attend-my-event/mdthagi-lear-f140dc28-afe4-4e87-9b6e-81ea99f69df2/"
        />

        <HotelCard
          name="Homewood Suites by Hilton Harrisburg East – Hershey Area"
          address="3990 TecPort Dr, Harrisburg, PA"
          dates="Aug 14–16, 2026"
          rate="$189 / night"
          link="https://www.hilton.com/en/attend-my-event/mcintoshlearweddingaugust2026/"
        />

        <HotelCard
          name="Courtyard by Marriott Harrisburg Hershey"
          address="725 Eisenhower Blvd, Harrisburg, PA"
          dates="Aug 14–16, 2026"
          rate="$214 / night"
          link="https://www.marriott.com/event-reservations/reservation-link.mi?id=1768407281093&key=GRP&app=resvlink"
        />
      </div>
      <h3 className="font-cinzel uppercase tracking-[0.18em] text-lg md:text-xl text-sage-700 mb-6">
        One-Night Stay Option (August 15–16)
      </h3>
      <p className="font-cormorant text-base md:text-lg text-sage-700 bg-sage-100 font-medium max-w-3xl mx-auto px-4 py-3 rounded-md mb-10">
        This location is approximately 18 minutes from the venue in a different direction
        from the other hotel blocks. Transportation will likely not be available from this hotel.
      </p>





<div className="w-full max-w-md">
  <HotelCard
    name="Hampton Inn & Suites Mount Joy / Lancaster West"
    address="2301 Strickler Rd, Manheim, PA"
    dates="Aug 15–16, 2026"
    rate="$209 / night"
    note="Limited to approximately 20 rooms."
    link="https://group.hamptoninn.com/i6l1gr"
  />
</div>


      {/* Closing Note */}
      <p className="font-cormorant text-base md:text-lg text-sage-600 max-w-3xl leading-relaxed mt-20">
        If you need a one-night stay and the block is full, please contact{" "}
        <span className="font-semibold">Cindy Lear</span> at{" "}
        <a
          href="mailto:dclear84@yahoo.com"
          className="underline underline-offset-2"
        >
          dclear84@yahoo.com
        </a>{" "}
        for assistance with additional room options.
        <br /><br />

      </p>
    </section>
  );
}

function HotelCard({
  name,
  address,
  phone,
  dates,
  rate,
  note,
  link,
}) {
  return (
    <div
      className="
        border border-sage-300
        px-8 py-10
        flex flex-col items-center text-center
      "
    >
      <h4 className="font-cinzel uppercase tracking-widest text-xl text-sage-700 mb-3">
        {name}
      </h4>

      <p className="font-cormorant text-base text-sage-600">
        {address}
      </p>

      <p className="font-cormorant text-base text-sage-600 mb-2">
        {phone}
      </p>

      <p className="font-cormorant italic text-base text-sage-600 mb-3">
        {dates}
      </p>

      {/* RATE — easy to edit later */}
      <p className="font-cormorant text-lg text-sage-700 mb-4">
        <span className="italic">Rate:</span> {rate}
      </p>

      {note && (
        <p className="font-cormorant italic text-sm text-sage-600 mb-6">
          {note}
        </p>
      )}

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-auto
          inline-block
          px-8 py-3
          bg-sage-600
          text-ivory-50
          font-cinzel
          tracking-widest
          text-sm
          uppercase
          hover:bg-sage-700
          transition
        "
      >
        Website
      </a>
    </div>
  );
}

