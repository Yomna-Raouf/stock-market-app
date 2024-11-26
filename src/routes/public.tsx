import type { RouteObject } from 'react-router';

import MainLayout from '@/components/Layouts/MainLayout/MainLayout';

import { TickersRoutes } from '@/views/tickers/routes';
import { HomeRoutes } from '@/views/routes';

export const PublicRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomeRoutes />,
      },
      {
        path: 'tickers/*',
        element: <TickersRoutes />,
      },
    ],
  },
];
