/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A94FF',
        border: '#0D5CB6',
        price: '#FF424E',
        bgPrice: '#FFF0F1',
        service: '#00AB56'
      },
      padding:{
        primary: '100px',
      },
      margin:{
        primary: '100px',
      },
      fontSize: {
        normal: '12px',
        title: '23px'
      }
    },
  },
  plugins: [],
}
