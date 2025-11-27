/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ethiopian-green': '#1A6D42',
        'sunset-gold': '#F4B942',
        'gold-dark': '#E6A932',
        'axum-purple': '#6D1A8C',
        'highland-orange': '#D46B1A',
        'blue-nile': '#1A6D8C',
        'neutral-50': '#FAFAFA',
        'neutral-100': '#F5F5F5',
        'neutral-200': '#E5E5E5',
        'neutral-900': '#1A1A1A',
        'neutral-600': '#4A4A4A',
      },
      fontFamily: {
        'display': ['Clash Display', 'Satoshi', 'system-ui'],
        'body': ['Inter', 'SF Pro Text', 'system-ui'],
        'amharic': ['Abyssinica SIL', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'typewriter': 'typewriter 2s steps(11) forwards',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}