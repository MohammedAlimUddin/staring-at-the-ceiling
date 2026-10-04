/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#fbfbfb',
          dark: '#0e1013'
        },
        surface: {
          light: '#ffffff',
          dark: '#14171c'
        },
        subtle: {
          light: '#f0f2f5',
          dark: '#1c2026'
        },
        border: {
          light: '#e2e6eb',
          dark: '#242a33'
        },
        accent: {
          light: '#2563eb',
          dark: '#60a5fa'
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
        serif: [
          '"Newsreader"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif'
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
