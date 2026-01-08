import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design Dribbble colors
        dark: '#231212', // Noir profond pour CTA et texte
        'gray-light': '#f4f4f4', // Fond secondaire
        'purple-pale': '#e3e2f7', // Fond accent newsletter
        white: '#ffffff', // Fond principal
        
        // Couleurs existantes conservées pour compatibilité
        background: '#ffffff', // Changé de #FFF9E6 à blanc
        foreground: '#231212', // Changé pour correspondre au design
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
        sans: ['Poppins', 'sans-serif'], // Poppins comme police par défaut
      },
      spacing: {
        // Système de spacing basé sur 4px
        18: '4.5rem', // 72px
        88: '22rem', // 352px
        112: '28rem', // 448px
        128: '32rem', // 512px
      },
      borderRadius: {
        // Border radius modernes et subtils
        'xl': '0.75rem', // 12px
        '2xl': '1rem', // 16px
        '3xl': '1.5rem', // 24px
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
        'reveal': '600ms',
      },
    },
  },
  plugins: [],
};

export default config;

