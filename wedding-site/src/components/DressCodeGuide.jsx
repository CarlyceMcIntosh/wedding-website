const DRESS_CODE_IMAGE = "/misc/dress-code.png";

export default function DressCodeGuide() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="font-cormorant text-lg md:text-xl text-sage-600 leading-relaxed text-center max-w-2xl">
        Formal attire — suits, cocktail dresses, and polished evening wear.
        Block heels are preferred for the outdoor venue.
      </p>
      <img
        src={DRESS_CODE_IMAGE}
        alt="Formal dress code guide — suits, cocktail dresses, and polished evening wear"
        className="w-full max-w-2xl rounded-sm"
      />
    </div>
  );
}
