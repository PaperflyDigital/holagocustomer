/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#2C2C2C',
        error: '#FF404B',
        offWhite: '#F6F7F9',
        blue: '#156CD7'
      },
    },
  },
  daisyui: {
    base: false,
    utilities: false,
    components: false,
  },
  plugins: [require('daisyui'),],
};
