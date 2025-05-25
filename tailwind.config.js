/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F7F4',
          100: '#DCF0E6',
          200: '#B8E0CE',
          300: '#95D1B7',
          400: '#74C69D',
          500: '#52B788',
          600: '#3D966A',
          700: '#2D6A4F',
          800: '#1B4332',
          900: '#081C15',
        },
        secondary: {
          50: '#F7F7F2',
          100: '#E9E9D9',
          200: '#D3D3B4',
          300: '#BDBD8E',
          400: '#A7A76A',
          500: '#8C8C4A',
          600: '#6F6F3B',
          700: '#52522C',
          800: '#35351D',
          900: '#18180E',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#E9ECEF',
          200: '#DEE2E6',
          300: '#CED4DA',
          400: '#ADB5BD',
          500: '#6C757D',
          600: '#495057',
          700: '#343A40',
          800: '#212529',
          900: '#121416',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 8px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 12px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 16px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};