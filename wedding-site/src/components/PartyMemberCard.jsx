export default function PartyMemberCard({ name, title, image }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Circle photo or placeholder */}
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-champagne-200 flex-shrink-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-champagne-50 flex items-center justify-center">
            <span className="font-cinzel text-xs tracking-widest text-sage-400 uppercase">
              Coming<br />Soon
            </span>
          </div>
        )}
      </div>

      {/* Name + title */}
      <div className="text-center">
        <p className="font-serif text-lg text-sage-800 leading-snug">{name}</p>
        <p className="font-cinzel text-xs tracking-widest text-sage-400 uppercase mt-1">{title}</p>
      </div>
    </div>
  );
}
