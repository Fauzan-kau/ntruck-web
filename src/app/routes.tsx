import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { MainLayout } from '@/components/layout/MainLayout';

/**
 * Lazy-loaded page components for code splitting.
 * Each page is a separate chunk in the build.
 */
const HomePage        = React.lazy(() => import('@/features/home'));
const DriversPage     = React.lazy(() => import('@/features/drivers'));
const VendorsPage     = React.lazy(() => import('@/features/vendors'));
const ContactPage     = React.lazy(() => import('@/features/contact'));
const ComingSoonPage  = React.lazy(() => import('@/features/coming-soon'));

const PageLoader: React.FC = () => (
  <div
    style={{
      height: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Spin size="large" />
  </div>
);

export const AppRoutes: React.FC = () => (
  <MainLayout>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"             element={<HomePage />}         />
        <Route path="/drivers"      element={<DriversPage />}      />
        <Route path="/vendors"      element={<VendorsPage />}      />
        <Route path="/contact"      element={<ContactPage />}      />

        <Route path="/careers"  element={<ComingSoonPage />} />
        <Route path="/blog"     element={<ComingSoonPage />} />
        <Route path="/press"    element={<ComingSoonPage />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div style={{ textAlign: 'center', padding: '10rem 2rem' }}>
              <h2>Page Not Found</h2>
              <a href="/">← Back to Home</a>
            </div>
          }
        />
      </Routes>
    </Suspense>
  </MainLayout>
);
