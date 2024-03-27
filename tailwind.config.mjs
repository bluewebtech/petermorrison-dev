/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PT Sans"', 'sans-serif'],
      },

      // that is animation class
      animation: {
        'fade-in': 'fadeIn 10s ease-in-out',
      },

      // that is actual animation
      keyframes: () => ({
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}
