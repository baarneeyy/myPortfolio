/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#16198A",
          "secondary": "#3D593B",
          "accent": "#1619",
          "neutral": "#D4BDAC",
          "base-100": "#FFF1DB",
          "info": "#08D9D9",
          "success": "#3AAB56",
          "warning": "#E26F1C",
          "error": "#A03E2B",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

