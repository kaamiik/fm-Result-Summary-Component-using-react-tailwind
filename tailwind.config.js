/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['"Hanken Grotesk"', 'serif'],
    },
    fontSize: {
      xs: '0.75rem',
      base: '1rem',
      lg: '1.125rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '5xl': ['3.5rem', '1'],
      '7xl': ['4.5rem', '1'],
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      'very-light-blue': 'hsl(220, 100%, 96%)',
      'light-blue': 'hsl(241, 100%, 89%)',
      'dark-navy': 'hsl(223, 30%, 27%)',
      red: 'hsl(0, 100%, 67%)',
      green: 'hsl(166, 100%, 37%)',
      blue: 'hsl(234, 85%, 45%)',
      yellow: 'hsl(40, 100%, 56%)',
    },
    screens: {
      sm: '37.5em',
      md: '46em',
    },
    extend: {
      backgroundImage: {
        'gradient-1':
          'linear-gradient(180deg, hsl(252, 100%, 63%) 0%, hsl(241,81%,54%) 100%)',
        'gradient-2':
          'linear-gradient(180deg, hsl(256, 71%, 46%) 0%, hsla(241,71%,46%, 0%) 100%)',
      },
      dropShadow: {
        '3xl': '0 30px 60px rgba(61, 108, 236, 15%)',
      },
    },
  },
  plugins: [],
};
