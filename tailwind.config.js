/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          50: '#F0F0FF',
          100: '#E0E1FF',
          500: '#6366F1',
          600: '#5B5CF6',
          700: '#4F46E5',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          500: '#8B5CF6',
          600: '#7C3AED',
        },
        accent: {
          DEFAULT: '#EC4899',
          500: '#EC4899',
          600: '#DB2777',
        },
        surface: '#1E293B',
        background: '#0F172A',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
    },
  },
  plugins: [],
}