/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px"
      },
      fontFamily:{
        bodyFont:['montserrat','sans-serif'],
      titleFont:['roboto','sans-serif']
      },
      colors:{
        bodyColor: "#191919",
        textColor: "rgba(255,255,255,0.85)",
        designColor:"#b86122",
        titleRoundBg:"linear-gradient(135deg,rgba(120,204,109,0.15) 0%,rgba(120,204,109,0.01) 100%)"
      },
      animation:{
        "spin-slow": "spin 15s linear infinite",
        "reverse-spin": "spin 15s linear infinite"
      },
      keyframes:{
        "reverse-spin":{
          from: {
            transfrom: "rotate(360deg)"
          },
          to:{
            transfrom: "rotate(0deg)"
          }
        }
      },
      boxShadow: {
        greenShadow: "0px 0px 188px -14px rgba(237, 255, 32, 1)",
        textShadow: "11px 0px 13px -15px rgba(0, 0, 0, 1)",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

