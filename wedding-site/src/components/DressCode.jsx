import { useState } from "react";
import { X } from "lucide-react";
import DressCodeGuide from "./DressCodeGuide";

export default function DressCode() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="dress-code"
      className="section w-full bg-ivory-100 py-8 px-4 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-px bg-sage-300" />
            <span className="text-sage-300 text-[8px]">◆</span>
            <div className="w-16 h-px bg-sage-300" />
          </div>
          <h2 className="font-cinzel text-3xl md:text-4xl text-sage-700 tracking-wide">
            Attire
          </h2>
          <div className="w-16 h-px bg-sage-300 mt-4" />
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-cormorant text-xl md:text-2xl text-sage-600 leading-relaxed max-w-2xl">
            Formal attire — suits, cocktail dresses, and polished evening wear.
          </p>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="font-cinzel text-sm md:text-base tracking-widest uppercase
                       text-ivory-50 bg-sage-700 hover:bg-sage-800
                       px-10 py-3.5 transition-colors duration-200"
          >
            View Dress Code Guide
          </button>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-sage-900/60 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-ivory-100 p-6 md:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-sage-500 hover:text-sage-800 transition"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <h3 className="font-cinzel text-2xl text-sage-700 tracking-wide text-center mb-6">
              Attire
            </h3>
            <DressCodeGuide />
          </div>
        </div>
      )}
    </section>
  );
}
