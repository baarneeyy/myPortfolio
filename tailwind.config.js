/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Robot Slab Variable'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#16198A",
          "primary-content": "#FFF1DB",
          "secondary": "#3D593B",
          "secondary-content": "#D4BDAC",
          "accent": "#1619",
          "accent-content": "#d0e0cf",
          "neutral": "#D4BDAC",
          "neutral-content": "#100d0b",
          "base-100": "#FFF1DB",
          "base-200": "#ded2be",
          "base-300": "#beb3a2",
          "base-content": "#161411",
          "info": "#08D9D9",
          "info-content": "#001111",
          "success": "#3AAB56",
          "success-content": "#010b02",
          "warning": "#E26F1C",
          "warning-content": "#120400",
          "error": "#A03E2B",
          "error-content": "#efd8d2",
        },
      },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

