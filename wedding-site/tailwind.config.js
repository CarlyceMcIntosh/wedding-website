/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // tweak if you want; these feel close to your reference
        sage: {
          50:  "#f5f7f3",
          100: "#e7eee1",
          200: "#cfe0c2",
          300: "#b4caa4",
          400: "#95b083",
          500: "#7a8f6a", // primary sage
          600: "#6a7e5e",
          700: "#56664c",
          800: "#42503b",
          900: "#31402d",
        },
        champagne: {
          50:  "#fbf6ea",
          100: "#f7edd6",
          200: "#f1e3c6", // main champagne bg/accent
          300: "#e7d3a8",
          400: "#d7be80",
          500: "#c9a867",
          600: "#ad8850",
          700: "#8b6a3f",
          800: "#6d5133",
          900: "#57412b",
        },
        ivory: {
          50:  "#fffdf8",
          100: "#fff9f1", // main page bg
          200: "#fff3e0",
        },
      },
      fontFamily: {
        serif: ["\"Playfair Display\"", "ui-serif", "Georgia", "serif"], 
        script: ["\"Great Vibes\"", "cursive"],                          
        sans:  ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        cinzel: ["Cinzel", "serif"],   
        luxurious: ['"Luxurious Script"', 'cursive'],
        //cormorant: ['"Cormorant Garamond"', 'serif'],
        cormorant: ["Cormorant", "serif"],
        greatvibes: ["Great Vibes", "cursive"],
        parisienne: ["Parisienne", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        allura: ["Allura", "cursive"],
        alexbrush: ["Alex Brush", "cursive"],
 

      },
      boxShadow: {
        soft: "0 8px 30px rgba(31, 41, 55, 0.08)",
      },
    },
  },
  plugins: [],
};
