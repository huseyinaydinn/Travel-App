/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#101828",
        secondary: "#667085",
        third: "#42A7C3",
        accent: {
          DEFAULT: "#41b8d9",
          hover: "#3293ad",
        },
        body: "#dedede",
      },
    },
  },
  plugins: [],
};
