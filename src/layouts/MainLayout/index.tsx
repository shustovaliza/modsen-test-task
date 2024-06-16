import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';

import { ErrorBoundaryFallback } from '@/components/ErrorBoundaryFallback';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { MainLayoutContainer } from './styled';

export const MainLayout = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <MainLayoutContainer>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </MainLayoutContainer>
    </ErrorBoundary>
  );
};
