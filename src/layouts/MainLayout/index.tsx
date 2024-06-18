import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import { ErrorBoundaryFallback } from '@/components/ErrorBoundaryFallback';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';

import { MainLayoutContainer } from './styled';

const MainLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <MainLayoutContainer>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
        <Footer />
      </MainLayoutContainer>
    </ErrorBoundary>
  );
};

export default MainLayout;
