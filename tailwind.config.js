module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          'gradient-from': 'hsl(249, 99%, 64%)',
          'gradient-to': 'hsl(278, 94%, 30%)',
          'error': 'hsl(0, 100%, 66%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'light-gray-violet': 'hsl(270, 3%, 87%)',
          'dark-gray-violet': 'hsl(279, 6%, 55%)',
          'very-dark-violet': 'hsl(278, 68%, 11%)',
        },
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        body: '18px',
      },
    },
  },
  plugins: [],
};
