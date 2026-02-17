import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { AppRoutes } from './routes';

/**
 * Root application component.
 *
 * Architecture:
 * BrowserRouter  – client-side routing
 * ThemeProvider  – Ant Design ConfigProvider + dark/light mode
 * AppRoutes      – lazy-loaded page routes + MainLayout
 */
const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
