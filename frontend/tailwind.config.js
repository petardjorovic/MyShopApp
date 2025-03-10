/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#003F62",
        mainYellow: "#EDA415",
        mainRed: "#C33131",
        blackTextColor: "#292D32",
        whiteTextColor: "#FFFFFF",
        blueTextColor: "1B5A7D",
        lightBlue: "#E2F4FF",
        lightGreen: "#30BD57",
      },
      aspectRatio: {
        1: "1", // omoguci aspect ratio 1:1
      },
      animation: {
        rotate: "l2 1s infinite linear", // dodajte animaciju rotacije
      },
      keyframes: {
        l2: {
          "100%": { transform: "rotate(360deg)" }, // kljucni frame za rotaciju
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
