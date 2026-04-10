import { createBrowserRouter, Navigate } from 'react-router';
import { Paths } from '../../constants';
import { MainPage } from '../../pages/main';
import { FavoritePage } from '../../pages/favorite';
import { NotFoundPage } from '../../pages/not-found/not-found-page';
import { ErrorPage } from '../../pages/error';
import { AppLayout } from '../layouts/app-layout/app-layout';

export const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={Paths.MAIN} replace />,
      },
      {
        path: Paths.MAIN,
        element: <MainPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: Paths.FAVORITE,
        element: <FavoritePage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFoundPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to={Paths.NOT_FOUND} replace />,
  },
]);
