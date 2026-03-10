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
        foreground: '#231212',
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
        },
        yellow: {
          bubble: '#FFF4D6',
          favorite: '#E2B94C',
          beigeLight: '#FFF8E5',
        },
        blue: {
          light: '#E0F2FE',
          primary: '#38BDF8',
        },
        red: {
          primary: '#DC2626',
          light: '#FEE2E2',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0,0,0,0.03), 0 1px 3px 0 rgba(0,0,0,0.06)',
        'card': '0 1px 3px 0 rgba(0,0,0,0.04), 0 4px 6px -1px rgba(0,0,0,0.05)',
        'card-hover': '0 4px 6px -1px rgba(0,0,0,0.06), 0 10px 15px -3px rgba(0,0,0,0.08)',
        'elevated': '0 10px 25px -5px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04)',
      },
    },
  },
  plugins: [],
};

export default config;
