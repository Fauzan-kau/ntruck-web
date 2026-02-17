import React, { createContext, useContext, type ReactNode } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from '@/hooks/useTheme';
import { lightTheme, darkTheme } from '@/theme/antd-theme';
import type { ThemeMode } from '@/types';

interface ThemeContextValue {
  theme:       ThemeMode;
  isDark:      boolean;
  isLight:     boolean;
  toggleTheme: () => void;
  setTheme:    (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useThemeContext = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used within ThemeProvider');
  return ctx;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeValues = useTheme();

  const antdThemeConfig = themeValues.isDark
    ? { ...darkTheme,  algorithm: antdTheme.darkAlgorithm }
    : { ...lightTheme, algorithm: antdTheme.defaultAlgorithm };

  return (
    <ThemeContext.Provider value={themeValues}>
      <ConfigProvider theme={antdThemeConfig}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
