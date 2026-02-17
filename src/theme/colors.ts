/**
 * nTruck Design System – Color Tokens
 * Sourced from official NTRUCK brand assets.
 *
 * Brand palette:
 *   Dark Blue  #002369  – primary logo / trust / authority
 *   Brand Green #96D228 – secondary / CTA / energy
 *   Light Blue  #007EFF – accent / info / digital
 */

export const colors = {
  // ── Primary: NTRUCK Dark Blue ─────────────────────────────
  primary: {
    50:  '#E6EAF4',
    100: '#BFC9E3',
    200: '#8FA3CF',
    300: '#5F7EBB',
    400: '#2E5DAA',
    500: '#002369', // brand primary – logo dark blue
    600: '#001E5A',
    700: '#001848',
    800: '#001236',
    900: '#000C24',
  },

  // ── Secondary: NTRUCK Brand Green ────────────────────────
  secondary: {
    50:  '#F4FBDF',
    100: '#E4F5B0',
    200: '#D3EE7E',
    300: '#C2E84C',
    400: '#B2E22A',
    500: '#96D228', // brand secondary – green accent
    600: '#7DB821',
    700: '#639D19',
    800: '#4A8212',
    900: '#316708',
  },

  // ── Tertiary: NTRUCK Light Blue ───────────────────────────
  accent: {
    50:  '#E5F3FF',
    100: '#B8DEFF',
    200: '#8AC9FF',
    300: '#5CB4FF',
    400: '#2E9FFF',
    500: '#007EFF', // brand accent – light blue
    600: '#0066CC',
    700: '#004F99',
    800: '#003766',
    900: '#002033',
  },

  // ── Semantic ──────────────────────────────────────────────
  success: '#22C55E',
  warning: '#F59E0B',
  error:   '#EF4444',
  info:    '#007EFF', // uses brand light blue for info

  // ── Neutrals ──────────────────────────────────────────────
  neutral: {
    0:   '#FFFFFF',
    50:  '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },

  // ── Dark mode surfaces ─────────────────────────────────────
  dark: {
    bg:       '#040D1E',
    surface1: '#071533',
    surface2: '#0A1C44',
    surface3: '#0D2355',
    border:   '#1A3570',
  },

  // ── Gradients (CSS strings) ────────────────────────────────
  gradients: {
    hero:        'linear-gradient(135deg, #040D1E 0%, #002369 50%, #001848 100%)',
    primaryCta:  'linear-gradient(135deg, #002369 0%, #007EFF 100%)',
    secondaryCta:'linear-gradient(135deg, #96D228 0%, #C2E82A 100%)',
    card:        'linear-gradient(135deg, rgba(0,35,105,0.08) 0%, rgba(150,210,40,0.05) 100%)',
    overlay:     'linear-gradient(180deg, transparent 0%, #040D1E 100%)',
  },
} as const;

export type ColorToken = typeof colors;
