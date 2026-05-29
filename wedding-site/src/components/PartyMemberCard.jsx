export default function PartyMemberCard({ name, title, image, variant, imagePosition = "center top" }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Double-ring circle */}
      <div className="p-[3px] rounded-full bg-gradient-to-br from-champagne-300 via-champagne-100 to-sage-200 flex-shrink-0">
        <div className="p-[3px] rounded-full bg-ivory-100">
          <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: imagePosition }}
              />
            ) : variant === "mystery" ? (
              <div className="w-full h-full bg-champagne-50 flex items-center justify-center">
                <span className="font-serif text-4xl text-sage-300 select-none">?</span>
              </div>
            ) : (
              <div className="w-full h-full bg-champagne-50 flex items-center justify-center">
                <span className="font-cinzel text-xs tracking-widest text-sage-400 uppercase">
                  Coming<br />Soon
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Name + title */}
      <div className="text-center w-full sm:max-w-[10rem] md:max-w-[12rem]">
        <p className="font-serif text-lg sm:text-xl text-sage-800 leading-snug">{name}</p>
        {title && (
          <span className="inline-flex items-center gap-1 sm:gap-1.5 mt-2 px-2 sm:px-3 py-1 rounded-full bg-white border border-sage-200">
            <span className="w-1 h-1 rounded-full bg-sage-300 flex-shrink-0" />
            <p className="font-cinzel text-[0.7rem] tracking-normal sm:text-xs sm:tracking-wider text-sage-700 uppercase leading-relaxed">{title}</p>
            <span className="w-1 h-1 rounded-full bg-sage-300 flex-shrink-0" />
          </span>
        )}
      </div>
    </div>
  );
}
