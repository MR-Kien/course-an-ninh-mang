/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "index.html",
    "node_modules/flowbite-react/**/*.js",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slideup: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slide: "slide 5s linear infinite",
        slideup: "slide-up 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
