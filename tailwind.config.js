/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: {
          primary: '#121212',
          secondary: '#1a1a1a',
        },
        card: {
          primary: '#1e1e1e',
          highlight: '#2a2a2a',
          interactive: '#272727',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
        },
        accent: '#FF4C29',
        icon: '#00FF85',
        divider: '#3a3a3a',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.accent"), 0 0 20px theme("colors.accent")',
        'glow': '0 0 20px rgba(255, 76, 41, 0.6)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(120deg, #101010, #1a1a1a)',
      },
      spacing: {
        '18': '4.5rem',
      },
      fontSize: {
        'xxs': '0.65rem',
      },
    },
  },
  plugins: [],
};