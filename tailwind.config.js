/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kat-primary': '#44624A',
        'kat-secondary': '#F1EBE1',
        'kat-accent': '#FF9D00',
        'kat-mono-1': '#8BA888',
        'kat-mono-2': '#C0CFB2',
      },
    },
  },
  plugins: [],
}

export default config
