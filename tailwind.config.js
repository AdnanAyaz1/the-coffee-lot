/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        golden: 'var(--color-golden)', // Custom color for golden
        black: 'var(--color-black)',   // Custom color for black
        gray: 'var(--color-gray)',     // Custom color for gray
        crimson: 'var(--color-crimson)', // Custom color for crimson
        grey: 'var(--color-grey)',     // Custom color for grey
        white: 'var(--color-white)',   
      },
      fontFamily: {
        base: ['var(--font-base)', 'serif'],  // Custom base font (Cormorant Upright)
        alt: ['var(--font-alt)', 'sans-serif'], // Custom alternate font (Open Sans)
      },
      backgroundImage: {
        'dark-pattern': "url('/assets/bg.png')", // Add your image here
      },
    },
  },
  plugins: [],
};
