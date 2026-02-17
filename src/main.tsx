import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

// Global styles (variables & mixins are injected via vite.config preprocessorOptions)
import './styles/global.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found. Check index.html.');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
