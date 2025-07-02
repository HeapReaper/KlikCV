/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/js/app/**/*.{js,ts,jsx,tsx}',
    './resources/views/**/*.edge',
    './inertia/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = {
  content: [
    './resources/js/app/**/*.{js,ts,jsx,tsx}',
    './resources/views/**/*.edge',
    './inertia/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
