/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'common-bg': "url('/src/assets/Background.png')",
        title: "url('/src/assets/Title-image.png')",
      },
    },
  },
  plugins: [],
}
