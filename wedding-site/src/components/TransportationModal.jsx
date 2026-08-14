import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function TransportationModal() {
  const [open, setOpen] = useState(true);

  const dismiss = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-3 md:p-4 bg-sage-900/60 backdrop-blur-sm"
      onClick={dismiss}
      role="dialog"
      aria-modal="true"
      aria-labelledby="transportation-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-xl max-h-[85dvh] md:max-h-[90vh] overflow-hidden bg-ivory-100 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-3 right-3 md:top-4 md:right-4 z-10 p-1 bg-ivory-100 text-sage-500 hover:text-sage-800 transition"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-4 pt-5 pb-7 md:px-10 md:py-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <div className="w-12 h-px bg-sage-300" />
              <span className="text-sage-300 text-[8px]">◆</span>
              <div className="w-12 h-px bg-sage-300" />
            </div>

            <h2
              id="transportation-modal-title"
              className="font-cinzel font-bold text-xl md:text-3xl text-sage-700 tracking-wide mb-4 md:mb-6 px-6"
            >
              TRANSPORTATION
            </h2>

            <div className="font-cormorant text-[17px] md:text-xl text-sage-600 leading-[1.5] md:leading-relaxed space-y-3 md:space-y-4">
              <p>
                The shuttle will depart from the{" "}
                <span className="font-semibold text-sage-700">Hilton Garden Inn</span> at{" "}
                <span className="font-semibold text-sage-700">3:20pm</span> on{" "}
                <span className="font-semibold text-sage-700">Saturday</span>, will quickly cross the street to pick up guests at the{" "}
                <span className="font-semibold text-sage-700">Homewood Suites</span>, make a very short trip to the{" "}
                <span className="font-semibold text-sage-700">Courtyard by Marriott</span>, and then proceed to the{" "}
                <span className="font-semibold text-sage-700">wedding venue</span>. The shuttle will then make a couple trips back to the hotels at the end of the evening.
              </p>
              <p>
                Be advised that the shuttle will only be making one trip to the wedding at{" "}
                <span className="font-semibold text-sage-700">3:20pm</span>, and will not be stopping at the{" "}
                <span className="font-semibold text-sage-700">Hampton Inn</span>.
              </p>
              <p>
                For anyone who chooses not to use the shuttle, ride shares are available in the area.
              </p>
            </div>

            <button
              type="button"
              onClick={dismiss}
              className="mt-6 md:mt-8 font-cinzel text-sm md:text-base tracking-widest uppercase
                         text-ivory-50 bg-sage-700 hover:bg-sage-800
                         px-10 py-3.5 transition-colors duration-200"
            >
              Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
