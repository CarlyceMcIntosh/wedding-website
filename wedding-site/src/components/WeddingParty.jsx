import { WEDDING_PARTY } from "../data/weddingParty";
import PartyMemberCard from "./PartyMemberCard";

const bridesmaids = WEDDING_PARTY.filter((p) => p.group === "bridesmaids");
const groomsmen   = WEDDING_PARTY.filter((p) => p.group === "groomsmen");

function PartyGroup({ label, members, cols }) {
  return (
    <div className="flex flex-col items-center gap-5 md:gap-6">
      {/* Group label */}
      <span className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white border border-sage-300">
        <span className="w-1.5 h-1.5 rounded-full bg-sage-300 flex-shrink-0" />
        <p className="font-cinzel text-sm tracking-[0.25em] text-sage-700 uppercase">{label}</p>
        <span className="w-1.5 h-1.5 rounded-full bg-sage-300 flex-shrink-0" />
      </span>

      {/* Grid */}
      <div className={`grid grid-cols-2 ${cols} gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 justify-items-center`}>
        {members.map((member) => (
          <PartyMemberCard
            key={member.id}
            name={member.name}
            title={member.title}
            image={member.image}
            variant={member.variant}
            imagePosition={member.imagePosition}
            imageZoom={member.imageZoom}
          />
        ))}
      </div>
    </div>
  );
}

export default function WeddingParty() {
  return (
    <section
      id="wedding-party"
      className="bg-ivory-100 py-14 md:py-24"
      style={{ backgroundImage: "radial-gradient(circle, #f1e3c6 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    >
      <div className="page-container flex flex-col items-center gap-10 md:gap-16">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-sage-300" />
            <span className="text-sage-300 text-[8px]">◆</span>
            <div className="w-16 h-px bg-sage-300" />
          </div>
          <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl text-sage-700 tracking-wide">
            Wedding Party
          </h2>
          <div className="w-16 h-px bg-sage-300" />
        </div>

        {/* Bridesmaids */}
        <PartyGroup
          label="Bridal Party"
          members={bridesmaids}
          cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />

        {/* Ornamental divider */}
        <div className="-my-4 md:-my-8 flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-champagne-300" />
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 text-champagne-400">
            <path d="M9 0 L10.5 7.5 L18 9 L10.5 10.5 L9 18 L7.5 10.5 L0 9 L7.5 7.5 Z" fill="currentColor" opacity="0.7" />
          </svg>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-champagne-300" />
        </div>

        {/* Groomsmen */}
        <PartyGroup
          label="Groomsmen"
          members={groomsmen}
          cols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        />

      </div>
    </section>
  );
}
