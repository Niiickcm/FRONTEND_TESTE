/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "input-dark": "#25273C",
        "bg-dark": "#181824",
      },
      fontFamily: {
        poppins: ["Josefin", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["dark"],
      fontWeight: ["hover"],
    },
  },
  plugins: [],
};
