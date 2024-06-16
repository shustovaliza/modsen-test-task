import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { ArtworkPage } from '@/pages/Artwork';
import { FavoritesPage } from '@/pages/Favorites';
import { MainPage } from '@/pages/Main';
import { NotFoundPage } from '@/pages/NotFound';

const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      { index: true, Component: MainPage },
      { path: '/favorites', Component: FavoritesPage },
      { path: '/artwork/:id', Component: ArtworkPage },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
