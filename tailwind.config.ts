import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        'df-dark': '#0d2f3f',
        'df-light': '#f8f7f1',
        'df-yellow': '#edb33c',
        'df-teal': '#286f6c',
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
        '91': '89.9vh',
        '93': '92.2vh'
      },
      aspectRatio: {
        square: '1 / 1'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.clip-bottom': {
          'clip-path': 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'
        }
      });
    })
  ]
} satisfies Config;
