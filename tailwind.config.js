/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/src/assets/background.svg')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 8px 0px 0px rgba(0, 0, 0, 0.15)",
        formBtn: "0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset",
      },
    },
  },
  plugins: [],
};
