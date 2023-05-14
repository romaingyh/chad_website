/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#42a5f5',
        'secondary': '#7A71FF',
        'tertiary': '#71FFDE',
      },
    },
  },
  plugins: [],
}

