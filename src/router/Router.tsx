import { MainLayout } from '@/layouts/MainLayout';
import { MainPage } from '@/pages/Main';
import { NotFoundPage } from '@/pages/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      { index: true, Component: MainPage },
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
