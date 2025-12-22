export type ColorSchemeId =
  | 'purple-cyan'
  | 'emerald-gold'
  | 'crimson-amber'
  | 'teal-coral'
  | 'indigo-magenta'
  | 'monochrome-neon'
  | 'orange-blue';

export interface ColorScheme {
  id: ColorSchemeId;
  name: string;
  emoji: string;
  description: string;
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  background: string;
}

export const colorSchemes: Record<ColorSchemeId, ColorScheme> = {
  'purple-cyan': {
    id: 'purple-cyan',
    name: 'Electric Purple & Neon Cyan',
    emoji: '⚡',
    description: 'Futuristic, high-energy, tech-forward',
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7e22ce',
      800: '#6b21a8',
      900: '#581c87',
    },
    accent: {
      50: '#ecfeff',
      100: '#cffafe',
      200: '#a5f3fc',
      300: '#67e8f9',
      400: '#22d3ee',
      500: '#06b6d4',
      600: '#0891b2',
      700: '#0e7490',
      800: '#155e75',
      900: '#164e63',
    },
    background: '#0a0a0f',
  },
  'emerald-gold': {
    id: 'emerald-gold',
    name: 'Emerald Green & Gold',
    emoji: '💎',
    description: 'Premium, sophisticated, growth-oriented',
    primary: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    background: '#111827',
  },
  'crimson-amber': {
    id: 'crimson-amber',
    name: 'Crimson Red & Amber',
    emoji: '🔥',
    description: 'Bold, passionate, high-impact',
    primary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    accent: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    background: '#000000',
  },
  'teal-coral': {
    id: 'teal-coral',
    name: 'Ocean Teal & Coral',
    emoji: '🌊',
    description: 'Fresh, modern, approachable',
    primary: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    accent: {
      50: '#fff1f2',
      100: '#ffe4e6',
      200: '#fecdd3',
      300: '#fda4af',
      400: '#fb7185',
      500: '#ff6b6b',
      600: '#e11d48',
      700: '#be123c',
      800: '#9f1239',
      900: '#881337',
    },
    background: '#1e293b',
  },
  'indigo-magenta': {
    id: 'indigo-magenta',
    name: 'Deep Indigo & Magenta',
    emoji: '🌌',
    description: 'Mysterious, creative, sophisticated',
    primary: {
      50: '#eef2ff',
      100: '#e0e7ff',
      200: '#c7d2fe',
      300: '#a5b4fc',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
    accent: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9f1239',
      900: '#831843',
    },
    background: '#0f172a',
  },
  'monochrome-neon': {
    id: 'monochrome-neon',
    name: 'Black & White',
    emoji: '⚫⚪',
    description: 'Minimalist, modern, pure black and white',
    primary: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    accent: {
      50: '#ffffff',
      100: '#fafafa',
      200: '#f5f5f5',
      300: '#e5e5e5',
      400: '#d4d4d4',
      500: '#ffffff',
      600: '#f5f5f5',
      700: '#e5e5e5',
      800: '#d4d4d4',
      900: '#a3a3a3',
    },
    background: '#000000',
  },
  'orange-blue': {
    id: 'orange-blue',
    name: 'Sunset Orange & Deep Blue',
    emoji: '🌅',
    description: 'Warm, energetic, balanced',
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    accent: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#1e40af',
      600: '#1d4ed8',
      700: '#1e3a8a',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    background: '#0f172a',
  },
};

export const defaultColorScheme: ColorSchemeId = 'monochrome-neon';
