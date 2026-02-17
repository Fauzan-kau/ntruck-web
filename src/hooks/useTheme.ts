import { useState, useCallback, useEffect } from 'react';
import type { ThemeMode } from '@/types';

const STORAGE_KEY = 'ntruck-theme';

const getSystemTheme = (): ThemeMode =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

const getSavedTheme = (): ThemeMode | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // localStorage not available
  }
  return null;
};

export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    return getSavedTheme() ?? getSystemTheme();
  });

  // Sync data-theme attribute on <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (getSavedTheme()) return; // user has a preference, don't override

    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((mode: ThemeMode) => {
    setThemeState(mode);
  }, []);

  return {
    theme,
    isDark:  theme === 'dark',
    isLight: theme === 'light',
    toggleTheme,
    setTheme,
  } as const;
};
