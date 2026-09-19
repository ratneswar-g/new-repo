/**
 * @file App.tsx
 * @description Main application component providing BrowserRouter, AppShell,
 * route definitions from routeConfig, and scroll restoration.
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { APP_ROUTES } from './routes/routeConfig';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell>
        <Routes>
          {APP_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}
