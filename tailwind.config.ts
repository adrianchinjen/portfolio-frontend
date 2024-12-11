import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px'
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        'df-dark': '#27272a',
        'df-light': '#f8f7f1',
        transparent: 'transparent',
        current: 'currentColor'
      },
      fontFamily: {
        khand: ['Khand', 'sans-serif'],
        roadrage: ['RoadRage', 'sans-serif'],
        schoolbell: ['SchoolBell', 'sans-serif'],
        kalam: ['Kalam', 'sans-serif'],
        robotocondense: ['RobotoCondense', 'sans-serif']
      },
      minHeight: {
        '93': '92.2vh',
        '91': '89.9vh'
      }
    }
  },
  plugins: []
} satisfies Config;
