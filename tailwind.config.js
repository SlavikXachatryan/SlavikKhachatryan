const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary :"#061257",
        second:"#0a65fc",
      },
      fontFamily:{
          mukta:["Mukta Malar", "serif"]
      },
      
        backgroundImage:{
          videoFrameBg: "url('../src/assets/video.jpg')"
        }
      
    },
  },
  plugins: [],
})
