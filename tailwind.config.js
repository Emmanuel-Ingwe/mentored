/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './shared/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      backgroundImage: {
        polygone: 'url("/images/polygon.svg")',
        'gradient-gray':
          'linear-gradient(169deg, rgba(234, 255, 254, 0.30) 0%, rgba(205, 201, 241, 0.30) 97.46%)',
      },
      backgroundSize: {
        '30-40': '30% 38%, cover',
        '100-100': '100% 100%, cover',
      },
      gradientColorStops: ({ theme }) => ({
        primary: '#1319b3',
        'primary-dark': theme('color.primary-dark'),
      }),
      colors: {
        grizzly: {
          50: '#EAFFFE4D',
          100: '#CDC9F14D',
          200: '#CDC9F1',
          300: '#475569',
          400: '#0A243F',
          700: '#9E77ED',
          800: '#1319B3',
        },
        polar: {
          DEFAULT: '#FAFAFA',
          100: '#F1F2F4',
          200: '#E3E6EA',
          300: '#F4EBFF',
          400: '#344054B2',
          500: '#D0D5DD',
          600: '#384853',
          700: '#6B7B8A',
        },
        destructive: {
          DEFAULT: '#B93815',
        },
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        primaryx: {
          DEFAULT: '#353CF7',
          25: '#FAFAFF',
          50: '#F0F0FF',
          100: '#DBDBFF',
          200: '#BEC0FF',
          300: '#9195FF',
          400: '#6469FF',
          500: '#353CF7',
          600: '#1319B3',
          700: '#080D91',
          800: '#00046F',
          900: '#00034D',
        },
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
        warning: {
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
        },
        success: {
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5', // TODO: remove unused colors
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
        },
        blue: {
          50: '#EFF8FF',
          700: '#175CD3',
        },
        indigo: {
          50: '#EEF4FF',
          700: '#3538CD',
        },
        pink: {
          50: '#FDF2FA',
          700: '#C11574',
        },
        'blue-gray': {
          50: '#F8F9FC',
          700: '#363F72',
        },
        linkedin: '#0A66C2',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textColor: ({ theme }) => ({
        primary: '#353CF7',
      }),
      backgroundColor: ({ theme }) => ({
        primary: '#353CF7',
        'primary-dark': theme('color.primary-dark'),
        'primary-100': '#DBDBFF',
        'primary-50': '#F0F0FF',
        'primary-extralight': '#CDC9F1',
        'light-gray': '#F6F6F6',
        'light-gray-50': '#F9FAFB',
      }),
      boxShadow: {
        primary: '1px 15px 23px 0px rgba(229, 229, 229, 0.25)',
        'mentor-card':
          '0px 4px 6px 4px rgba(16, 24, 40, 0.03), 0px -7px 25px 5px rgba(16, 24, 40, 0.08)',
      },
      ringColor: ({ theme }) => ({
        primary: '#353CF7',
      }),
      fontSize: {
        'desktop-lg': '4vw',
        'desktop-md': '1.5vw',
        'desktop-sm': '1vw',
        'desktop-xs': '0.8vw',
      },
      borderColor: ({ theme }) => ({
        primary: '#353CF7',
        'light-gray': '#F6F6F6',
      }),
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
