import { WEDDING_PARTY } from "../data/weddingParty";
import PartyMemberCard from "./PartyMemberCard";

const bridesmaids = WEDDING_PARTY.filter((p) => p.group === "bridesmaids");
const groomsmen   = WEDDING_PARTY.filter((p) => p.group === "groomsmen");

function PartyGroup({ label, members, cols }) {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Group label */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-16 h-px bg-sage-300" />
        <p className="font-cinzel text-xs tracking-[0.3em] text-sage-400 uppercase">{label}</p>
        <div className="w-16 h-px bg-sage-300" />
      </div>

      {/* Grid */}
      <div className={`grid grid-cols-2 ${cols} gap-x-8 gap-y-12 justify-items-center`}>
        {members.map((member) => (
          <PartyMemberCard
            key={member.id}
            name={member.name}
            title={member.title}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default function WeddingParty() {
  return (
    <section className="bg-ivory-100 py-24">
      <div className="page-container flex flex-col items-center gap-20">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-24 h-px bg-sage-400" />
          <h2 className="font-cinzel text-sm tracking-[0.25em] text-sage-500 uppercase">
            Wedding Party
          </h2>
          <p className="font-serif text-4xl md:text-5xl text-sage-800">
            Those We Love Most
          </p>
          <div className="w-24 h-px bg-sage-400" />
        </div>

        {/* Bridesmaids */}
        <PartyGroup
          label="Bridesmaids"
          members={bridesmaids}
          cols="sm:grid-cols-4"
        />

        {/* Groomsmen */}
        <PartyGroup
          label="Groomsmen"
          members={groomsmen}
          cols="sm:grid-cols-3"
        />

      </div>
    </section>
  );
}
