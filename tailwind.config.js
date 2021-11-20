module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "laptopview": "url(../../public/office_laptop-wallpaper-2560x1080.jpg)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
