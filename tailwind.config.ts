import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF9E6',
        foreground: '#212121',
        green: {
          primary: '#406C55',
          light: '#548A74',
          lighter: '#D2EBD3',
          pale: '#E8F2ED',
          mint: '#EEF5F1',
        },
        orange: {
          primary: '#E06E2E',
          light: '#FFD2AE',
          brown: '#AC714C',
          brownMat: '#4C3B2C',
          activeIcon: '#AF693C',
        },
        yellow: {
          cursor: '#FBE769',
          bubble: '#FFF4D6',
          favorite: '#E2B94C',
          beigeLight: '#FFF8E5',
        },
        blue: {
          light: '#E0F2FE',
          primary: '#38BDF8',
          dark: '#0284C7',
        },
        red: {
          primary: '#DC2626',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

