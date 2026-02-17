/**
 * nTruck Design System – Spacing Tokens (4px base grid)
 */

export const spacing = {
  0:    '0',
  px:   '1px',
  0.5:  '0.125rem',  // 2px
  1:    '0.25rem',   // 4px
  1.5:  '0.375rem',  // 6px
  2:    '0.5rem',    // 8px
  2.5:  '0.625rem',  // 10px
  3:    '0.75rem',   // 12px
  3.5:  '0.875rem',  // 14px
  4:    '1rem',      // 16px
  5:    '1.25rem',   // 20px
  6:    '1.5rem',    // 24px
  7:    '1.75rem',   // 28px
  8:    '2rem',      // 32px
  9:    '2.25rem',   // 36px
  10:   '2.5rem',    // 40px
  11:   '2.75rem',   // 44px
  12:   '3rem',      // 48px
  14:   '3.5rem',    // 56px
  16:   '4rem',      // 64px
  20:   '5rem',      // 80px
  24:   '6rem',      // 96px
  28:   '7rem',      // 112px
  32:   '8rem',      // 128px
  36:   '9rem',      // 144px
  40:   '10rem',     // 160px
  48:   '12rem',     // 192px
  56:   '14rem',     // 224px
  64:   '16rem',     // 256px
} as const;

export const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1600px',
} as const;

export const borderRadius = {
  none: '0',
  sm:   '0.25rem',   // 4px
  base: '0.375rem',  // 6px
  md:   '0.5rem',    // 8px
  lg:   '0.75rem',   // 12px
  xl:   '1rem',      // 16px
  '2xl':'1.5rem',    // 24px
  '3xl':'2rem',      // 32px
  full: '9999px',
} as const;

export const shadows = {
  sm:  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base:'0 1px 3px 0 rgb(0 0 0 / 0.10), 0 1px 2px -1px rgb(0 0 0 / 0.10)',
  md:  '0 4px 6px -1px rgb(0 0 0 / 0.10), 0 2px 4px -2px rgb(0 0 0 / 0.10)',
  lg:  '0 10px 15px -3px rgb(0 0 0 / 0.10), 0 4px 6px -4px rgb(0 0 0 / 0.10)',
  xl:  '0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.10)',
  '2xl':'0 25px 50px -12px rgb(0 0 0 / 0.25)',
  glow: '0 0 30px rgba(27, 42, 107, 0.3)',
  orangeGlow: '0 0 30px rgba(255, 107, 0, 0.25)',
} as const;
