module.exports = {
  // purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  // darkMode: 'class',
  theme: {
    typography: (theme) => ({}),
    extend: {
      fontFamily:{
        // Light
        'nikin-light': 'Nikin Light',
        'nikin-light-italic': 'Nikin Light Italic',
        // Regular
        'nikin': 'Nikin',
        'nikin-italic': 'Nikin Italic',
        // Medium
        'nikin-medium': 'Nikin Medium',
        'nikin-medium-italic': 'Nikin Medium Italic',
        // Bold
        'nikin-bold': 'Nikin Bold',
        'nikin-bold-italic': 'Nikin Bold Italic',
        // Black
        'nikin-black': 'Nikin Black',
        'nikin-black-italic': 'Nikin Black Italic',
        // Heavy
        'nikin-heavy': 'Nikin Heavy',
        'nikin-heavy-italic': 'Nikin Heavy Italic'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
