export default function FAQs(){
  return(
    <section id="faq" className="py-20 bg-ivory-50">
  <div className="max-w-4xl mx-auto px-6">
    {/* Title */}
    <div className="text-center">
      <h2 className="font-cinzel text-4xl text-sage-900 tracking-wide">FAQ</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-sage-200" />
    </div>

    <div className="mt-12 space-y-10">
      {/* 1 — Kids policy */}
      <div>
        {/* Question (accent band + left rule + Q badge) */}
        <div className="relative mb-3 rounded-r-xl border-l-4 border-sage-500 bg-gradient-to-r from-sage-100/80 to-transparent pl-12 pr-4 py-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sage-400 bg-white text-[10px] font-semibold tracking-wider text-sage-700">Q</span>
          <h3 className="font-semibold text-sage-900 tracking-wide uppercase text-sm">
            Can I bring my kids?
          </h3>
        </div>
        {/* Answer (lighter tone + A badge) */}
        <div className="relative pl-12">
          <span className="absolute left-3 top-1 text-xs font-semibold text-sage-500/90">A—</span>
          <p className="text-sage-800 leading-relaxed">
            We love your little ones! Children are welcome at the ceremony and reception.
            {/* If adults-only: “We kindly request an adults-only celebration.” */}
          </p>
        </div>
      </div>

      {/* 2 — Plus-one policy */}
      <div>
        <div className="relative mb-3 rounded-r-xl border-l-4 border-sage-500 bg-gradient-to-r from-sage-100/80 to-transparent pl-12 pr-4 py-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sage-400 bg-white text-[10px] font-semibold tracking-wider text-sage-700">Q</span>
          <h3 className="font-semibold text-sage-900 tracking-wide uppercase text-sm">
            Can I bring a plus-one?
          </h3>
        </div>
        <div className="relative pl-12">
          <span className="absolute left-3 top-1 text-xs font-semibold text-sage-500/90">A—</span>
          <p className="text-sage-800 leading-relaxed">
            Please check your invitation. If a guest name is listed, you’re welcome to bring them.
          </p>
        </div>
      </div>

      {/* 3 — Dietary accommodations */}
      <div>
        <div className="relative mb-3 rounded-r-xl border-l-4 border-sage-500 bg-gradient-to-r from-sage-100/80 to-transparent pl-12 pr-4 py-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sage-400 bg-white text-[10px] font-semibold tracking-wider text-sage-700">Q</span>
          <h3 className="font-semibold text-sage-900 tracking-wide uppercase text-sm">
            Do you accommodate dietary restrictions?
          </h3>
        </div>
        <div className="relative pl-12">
          <span className="absolute left-3 top-1 text-xs font-semibold text-sage-500/90">A—</span>
          <p className="text-sage-800 leading-relaxed">
            Absolutely—please include any needs when you RSVP and we’ll be ready.
          </p>
        </div>
      </div>

      {/* 4 — Timeline */}
      <div>
        <div className="relative mb-3 rounded-r-xl border-l-4 border-sage-500 bg-gradient-to-r from-sage-100/80 to-transparent pl-12 pr-4 py-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sage-400 bg-white text-[10px] font-semibold tracking-wider text-sage-700">Q</span>
          <h3 className="font-semibold text-sage-900 tracking-wide uppercase text-sm">
            What time should I arrive?
          </h3>
        </div>
        <div className="relative pl-12">
          <span className="absolute left-3 top-1 text-xs font-semibold text-sage-500/90">A—</span>
          <p className="text-sage-800 leading-relaxed">
            The ceremony begins at 4:00 PM. We recommend arriving 15–20 minutes early to find your seat.
          </p>
        </div>
      </div>

      {/* 5 — Hashtag */}
      <div>
        <div className="relative mb-3 rounded-r-xl border-l-4 border-sage-500 bg-gradient-to-r from-sage-100/80 to-transparent pl-12 pr-4 py-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sage-400 bg-white text-[10px] font-semibold tracking-wider text-sage-700">Q</span>
          <h3 className="font-semibold text-sage-900 tracking-wide uppercase text-sm">
            Do you have a wedding hashtag?
          </h3>
        </div>
        <div className="relative pl-12">
          <span className="absolute left-3 top-1 text-xs font-semibold text-sage-500/90">A—</span>
          <p className="text-sage-800 leading-relaxed">
            Yes—please share with <span className="font-medium">#CrystalAndAndrew2026</span>.
          </p>
        </div>
      </div>

      {/* 6 — Contact */}
      <div>
        <div className="relative mb-3 rounded-r-xl border-l-4 border-sage-500 bg-gradient-to-r from-sage-100/80 to-transparent pl-12 pr-4 py-3">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-sage-400 bg-white text-[10px] font-semibold tracking-wider text-sage-700">Q</span>
          <h3 className="font-semibold text-sage-900 tracking-wide uppercase text-sm">
            Who do I contact with questions?
          </h3>
        </div>
        <div className="relative pl-12">
          <span className="absolute left-3 top-1 text-xs font-semibold text-sage-500/90">A—</span>
          <p className="text-sage-800 leading-relaxed">
            Email us at <a className="underline underline-offset-2 hover:text-sage-900" href="mailto:ourwedding@email.com">ourwedding@email.com</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


  )
}