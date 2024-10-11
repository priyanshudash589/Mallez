const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main1": "url('/src/assets/mall-bgg.jpg')",
        "main2": "url('/src/assets/main-bg2.png')",
        "main3": "url('/src/assets/mall-bg3.svg')",
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
