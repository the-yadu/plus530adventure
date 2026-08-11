/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#FBF4E6',
        foreground: '#31291E',
        cream: {
          50: '#FBF4E6',
        },
        orange: {
          50: '#fef4f2',
          100: '#fde7e3',
          200: '#fbd3cc',
          300: '#f7b2a5',
          400: '#f18572',
          500: '#eb6752',
          600: '#e55039', // Primary Brand Orange requested by user
          700: '#cf3c25', // Hover Brand Orange
          800: '#a9321d',
          900: '#8c2d1c',
        },
      },
    },
  },
  plugins: [],
};
