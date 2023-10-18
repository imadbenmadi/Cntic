/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            bodyBg: "#E9E9E9",
            primaryColor: "#025EBF",
            secondaryColor: "#D1D1D1",
        },
        fontFamily : {
            ubuntu : ["Ubuntu","sans-serif"]
        }
      },
    },
    plugins: [],
  }