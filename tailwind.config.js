/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        dido: "url('/background-dido.png')",
      },
      colors: {
        "skku-green": "#267433",
        "skku-green-light": "#8DC63F",
        "skku-green-dark": "#114014",
        "skku-gray": "#E7E5E3",
      },
      keyframes: {
        bounce_fade_in: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "50%": { opapcity: 0.5, transform: "translateY(-20px)" },
          "70%": { opapcity: 1, transform: "translateY(0px)" },
        },
      },
      animation: {
        bounce_fade_in: "bounce_fade_in 1.5s ease-in-out",
      },
    },
    fontFamily: {
      SF: ["SF", "SF함박눈TTF"],
    },
  },
  plugins: [],
};
