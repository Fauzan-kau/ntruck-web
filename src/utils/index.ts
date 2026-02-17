/**
 * nTruck – Utility Functions
 */

/** Combine class names, filtering falsy values */
export const cx = (...classes: (string | undefined | null | false)[]): string =>
  classes.filter(Boolean).join(' ');

/** Format large numbers with Indian number formatting */
export const formatIndianNumber = (num: number): string =>
  new Intl.NumberFormat('en-IN').format(num);

/** Scroll to an element by id */
export const scrollToElement = (id: string): void => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/** Debounce a function */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

/** Check if running on mobile */
export const isMobile = (): boolean =>
  typeof window !== 'undefined' && window.innerWidth < 768;

/** Generate an ID */
export const generateId = (prefix = 'id'): string =>
  `${prefix}-${Math.random().toString(36).slice(2, 9)}`;

/** Clamp a number between min and max */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/** Capitalize first letter */
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

/** Truncate a string */
export const truncate = (str: string, maxLength: number): string =>
  str.length > maxLength ? `${str.slice(0, maxLength)}…` : str;

/** Wait for a given number of ms (use in async contexts) */
export const sleep = (ms: number): Promise<void> =>
  new Promise(resolve => setTimeout(resolve, ms));

/** Environment helpers */
export const isDev  = import.meta.env.DEV as boolean;
export const isProd = import.meta.env.PROD as boolean;
export const siteUrl = (import.meta.env['VITE_SITE_URL'] as string | undefined) ?? 'https://ntruck.in';
export const apiUrl  = (import.meta.env['VITE_API_URL'] as string | undefined) ?? '';

export const env = { isDev, isProd, siteUrl, apiUrl } as const;
