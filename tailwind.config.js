/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: "1rem", 
        screens: {
          sm: "576px",
          md: "750px",
          lg: "970px",
          xl: "1170px",
          "2xl": "1350px", 
        },
      },
      screens: {
        sm: "576px",
        md: "769px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        primary: "#f0f0f0",
        gray: "#777777"
      },
      backgroundImage: {
        banner: "url('/images/banner.png')",
      }
    },
  },
  plugins: [],
};
