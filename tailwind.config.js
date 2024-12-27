/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'common-bg': "url('/src/Assets/Background.png')",
        title: "url('/src/Assets/Title-image.png')",
      },
    },
  },
  plugins: [],
}
