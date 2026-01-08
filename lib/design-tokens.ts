export const colors = {
  // Design Dribbble colors
  dark: '#231212', // Noir profond pour CTA et texte
  grayLight: '#f4f4f4', // Fond secondaire
  purplePale: '#e3e2f7', // Fond accent newsletter
  white: '#ffffff', // Fond principal
  
  // Couleurs existantes
  background: '#ffffff', // Changé de #FFF9E6 à blanc
  foreground: '#231212', // Changé pour correspondre au design
  green: {
    primary: '#406C55',
    light: '#548A74',
    lighter: '#D2EBD3',
    paleGreen: '#E8F2ED',
    mintGreen: '#EEF5F1',
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
} as const;

export const typography = {
  fontFamily: {
    poppins: ['Poppins', 'sans-serif'],
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
    sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
    base: ['1rem', { lineHeight: '1.5rem' }], // 16px
    lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
    xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
    '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
    '5xl': ['3rem', { lineHeight: '1' }], // 48px
    '6xl': ['3.75rem', { lineHeight: '1' }], // 60px
  },
} as const;

export const spacing = {
  // Système basé sur 4px
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
  '4xl': '6rem', // 96px
} as const;

export const shadows = {
  subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
  card: '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
  cardHover: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
  elevated: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

export const easings = {
  easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOutExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
} as const;

export const durations = {
  fast: '200ms',
  normal: '300ms',
  slow: '400ms',
  reveal: '600ms',
} as const;

// Design Dribbble - Mode Sombre (inversé)
export const darkModeColors = {
  background: '#231212',
  foreground: '#ffffff',
  dark: '#ffffff',
  grayLight: '#2a1f1f',
  purplePale: '#3d3550',
  white: '#231212',
} as const;

// CTA Colors - Mode Clair
export const ctaColors = {
  light: {
    primary: {
      bg: '#231212',
      text: '#ffffff',
    },
    secondary: {
      bg: '#ffffff',
      text: '#231212',
      border: '#231212',
    },
  },
  // CTA Colors - Mode Sombre (inversé)
  dark: {
    primary: {
      bg: '#ffffff',
      text: '#231212',
    },
    secondary: {
      bg: '#231212',
      text: '#ffffff',
      border: '#ffffff',
    },
  },
} as const;

