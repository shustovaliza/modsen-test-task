import { MainLayout } from '@/layouts/MainLayout';
import { MainPage } from '@/pages/main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      { index: true, Component: MainPage },
      {
        path: '*',
        element: <div>Not found</div>,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routerSchema} />;
};
