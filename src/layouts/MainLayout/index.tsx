import { Header } from '@/components/Header';
import { Outlet } from 'react-router-dom';
import { MainLayoutContainer } from './styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorBoundaryFallback } from '@/components/ErrorBoundaryFallback';
import { Footer } from '@/components/Footer';

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
