/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero-pattern': "url('/assets/bgheader.png')",
      // 'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  },
  plugins: [],
}
