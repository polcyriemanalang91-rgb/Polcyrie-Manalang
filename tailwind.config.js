/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7F2',
          light: '#FDFBF7',
          dark: '#F5EEE4',
        },
        beige: {
          DEFAULT: '#F0E6D8',
          light: '#F7F0E6',
          dark: '#E5D6C2',
        },
        taupe: {
          DEFAULT: '#D6C3AE',
          light: '#E2D4C3',
          dark: '#C2AC94',
        },
        latte: {
          DEFAULT: '#B89B7D',
          light: '#C7AE93',
          dark: '#A68767',
        },
        coffee: {
          DEFAULT: '#80634D',
          light: '#94755C',
          dark: '#6B523E',
        },
        cocoa: {
          DEFAULT: '#49382E',
          light: '#5E493C',
          dark: '#352820',
          muted: '#6F5C50',
        },
        sage: {
          DEFAULT: '#A9B5A0',
          light: '#BDC7B5',
          dark: '#93A188',
          subtle: '#E8ECE5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(73, 56, 46, 0.06), 0 2px 6px -1px rgba(73, 56, 46, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(73, 56, 46, 0.08), 0 4px 12px -2px rgba(73, 56, 46, 0.04)',
        'soft-xl': '0 20px 40px -6px rgba(73, 56, 46, 0.1), 0 8px 16px -4px rgba(73, 56, 46, 0.05)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
