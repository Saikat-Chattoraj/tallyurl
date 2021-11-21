const { urlObjectKeys } = require("next/dist/shared/lib/utils");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // margin: {
    //   xl:"400px"
    // },
    extend: {
      backgroundImage: {
        "laptopview": "url(../../public/office_laptop-wallpaper-2560x1080.jpg)",
        "laptopview-1":"url(../../public/letstry.jpg)",
        "laptopview-2":"url(../../public/trial2.jpg)",
      },
      outline: {
        blacksolid: '2px solid #000000',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
