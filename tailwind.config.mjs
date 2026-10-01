/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080C0B',
        surface: '#0E1614',
        surface2: '#131F1C',
        line: '#1C2A26',
        cyan: { DEFAULT: '#22D3EE' },
        emerald: { DEFAULT: '#34D399' },
        ink: '#E8F2EF',
        muted: '#8AA39C',
        faint: '#4A5D58',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};