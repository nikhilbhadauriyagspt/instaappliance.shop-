/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Slate 900
          light: '#1e293b',
          accent: '#2563eb', // Blue 600
        },
        secondary: {
          DEFAULT: '#2563eb', // Blue 600
          hover: '#1d4ed8',
          light: '#dbeafe',
        },
        accent: {
          DEFAULT: '#f59e0b', // Amber 500
          hover: '#d97706',
        },
        light: '#f8fafc',
        dark: '#020617',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
        logo: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 50px rgba(0, 0, 0, 0.03)',
        'premium': '0 30px 60px -12px rgba(50, 50, 93, 0.12), 0 18px 36px -18px rgba(0, 0, 0, 0.15)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.04)',
      }
    },
  },
  plugins: [],
}
