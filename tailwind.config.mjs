/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#f0f2f5',
          dark: '#191c22'
        },
        surface: {
          light: '#f8f9fb',
          dark: '#21252d'
        },
        subtle: {
          light: '#e4e7ec',
          dark: '#2a303a'
        },
        border: {
          light: '#d8dce2',
          dark: '#333a46'
        },
        accent: {
          light: '#2754c5',
          dark: '#5e8cf2'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
