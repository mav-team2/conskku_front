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
    },
    fontFamily: {
      SF: ["SF", "SF함박눈TTF"],
    },
  },
  plugins: [],
};
