import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_SECTIONS = [
  {
    title: "The Wedding", 
    items: [
      {
        question: "Where will the ceremony and reception take place?",
        answer:"Both the ceremony and reception will be held at the same location.",
      },
      {
        question: "What time should I arrive?",
        answer:"Please plan to arrive 30 minutes before the ceremony to allow time for parking and seating. The ceremony will begin promptly.",
      },
      {
        question: "What is the dress code?",
        answer: "Formal attire - Long dresses with heels, Suits and dress shoes. Please note that the wedding will be predominately outdoors, so we recommend dressing accordingly (block heels, etc)."
      }, 
    ]
  },
  {
    title: "Guests & Invitations", 
    items: [
      {
        question:"Are children welcome", 
        answer:"While we love your little ones, this will be an adults-only celebration unless explicitly stated on your invitation that your child is invited. Thank you for understanding.",
        
      },
      {
        question: "Can I bring a plus one?",
        answer: "Due to limited capacity, plus ones are only included if specifically listed on your invitation.",
      },
      {
        question: "How do I RSVP?",
        answer: "Please RSVP via the RSVP tab on our website by June 1st. If you have any questions or issues, feel free to email us at learmcwedding@gmail.com",
      }, 


    ]
  },
  {
    title: "Travel & Accommodations",
    items: [
      {
        question: "Is parking available?",
        answer: "Yes, on-site parking will be available.",
      },
      {
        question: "Are hotel accommodations available?",
        answer:"Yes! Hotel accommodations and room blocks are listed above on the website. Rooms are first come, first served, and the booking deadline is July 1st.",
      },
    ],
  },

{
    title: "Registry & Gifts",
    items: [
      {
        question: "Where are you registered?",
        answer:
          "Your presence is truly the greatest gift! For those who wish to give something additional, our registry and honeymoon fund are linked on the website.",
      },
    ],
  },

  {
    title: "Etiquette",
    items: [
      {
        question: "Can I take photos during the ceremony?",
        answer:
          "We kindly ask that guests enjoy an unplugged ceremony and refrain from taking photos or videos so everyone can be fully present.",
      },
    ],
  },

];
export default function FAQ() {
  const [openMap, setOpenMap] = useState({});

  const toggle = (sectionIndex, itemIndex) => {
    setOpenMap((prev) => ({
      ...prev,
      [sectionIndex]:
        prev[sectionIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <section className="section page-container pt-20 pb-24 text-center flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-cinzel text-sage-600 tracking-wide mb-16">
        Frequently Asked Questions
      </h2>

      <div className="w-full max-w-3xl text-left space-y-16">
        {FAQ_SECTIONS.map((section, sectionIndex) => (
          <div key={section.title}>
            {/* Section title */}
            <h3 className="font-cinzel text-xl md:text-2xl text-sage-600 tracking-wide mb-6">
              {section.title}
            </h3>

            <div className="border-t border-sage-200">
              {section.items.map((faq, itemIndex) => {
                const isOpen =
                  openMap[sectionIndex] === itemIndex;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-sage-200"
                  >
                    <button
                      onClick={() =>
                        toggle(sectionIndex, itemIndex)
                      }
                      className="
                        w-full
                        flex items-center justify-between
                        py-6
                        font-cormorant text-xl md:text-2xl
                        text-sage-700
                        transition
                        hover:text-sage-800
                      "
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`
                          h-5 w-5 transition-transform duration-500
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </button>

                    <div
                      className={`
                        overflow-hidden transition-all duration-500
                        ${isOpen ? "max-h-40" : "max-h-0"}
                      `}
                    >
                      <p className="pb-6 pr-8 font-cormorant text-lg text-sage-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="w-24 h-[2px] bg-sage-300 mt-20 rounded-full"></div>
    </section>
  );
}



