const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main1": "url('/src/Assets/mall-bgg.jpg')",
        "main2": "url('/src/Assets/main-bg2.png')",
        "main3": "url('/src/Assets/mall-bg3.svg')",
      },
      boxShadow: {
        '3xl': '0px 10px 220px 0px rgba(0, 8, 8, 8)',
      },
      fontFamily: {
        'revalia': ['Revalia', 'sans-serif'],
        'advent': ['Advent Pro', 'sans-serif'],
      },
    },
    
  },
  plugins: [],
});
