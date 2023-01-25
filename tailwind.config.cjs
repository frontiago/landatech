/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        'poppins': 'Poppins'
      },
      backgroundImage: {
        'approved': "url('../src/assets/approved.svg')",
        'experience': "url('../src/assets/experience-design.svg')",
        'analytics': "url('../src/assets/predictive-analytics.svg')",
        'software': "url('../src/assets/software-developer.svg')",
      },
    },
  },
  plugins: [],
}