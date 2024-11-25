import type { RouteObject } from 'react-router';

import MainLayout from '@/components/Layouts/MainLayout/MainLayout';

import { TickersRoutes } from '@/views/tickers/routes';

export const PublicRoutes: RouteObject[] = [
  {
    path: '/*',
    element: <MainLayout />,
    children: [
      {
        path: 'tickers/*',
        element: <TickersRoutes />,
      },
    ],
  },
];
