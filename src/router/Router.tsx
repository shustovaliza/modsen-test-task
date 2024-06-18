import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';

const MainPage = lazy(() => import('@/pages/Main'));
const ArtworkPage = lazy(() => import('@/pages/Artwork'));
const FavoritesPage = lazy(() => import('@/pages/Favorites'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

const routerSchema = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    children: [
      { index: true, element: <MainPage /> },
      { path: '/favorites', element: <FavoritesPage /> },
      { path: '/artwork/:id', element: <ArtworkPage /> },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
