/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      subtext: ['PT Mono', 'monospace']
    }
  },
  plugins: [],
}