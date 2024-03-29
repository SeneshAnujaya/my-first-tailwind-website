/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        mainGreen: '#00CC99',
       brightRedLight: '#00A37A',
      lightGreen: '#ADFFEB',
      darkBlue: 'hsl(228,39%, 23%)',
      darkGrayishBlue: 'hsl(227,12%, 61%)',
      veryDarkBlue: 'hsl(233, 12%, 13%)',
      veryPaleRed: 'hsl(13, 100%, 96%)',
      veryLightGray: 'hsl(0, 0%, 98%)',
    },
  },
  },
  plugins: [],
}

