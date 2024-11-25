import { Navigate, useRoutes } from 'react-router';

import { getCookie } from '@/utils/storage';

import { PublicRoutes } from './public';
import { ProtectedRoutes } from './protected';

const AppRoutes = () => {
  const isAuthenticated = getCookie('access_token') || false;
  const routes = isAuthenticated ? ProtectedRoutes : PublicRoutes;
  const element = useRoutes([
    ...routes,
    {
      path: '*',
      element: <Navigate to={isAuthenticated ? '/' : '/auth/signin'} replace />,
    },
  ]);

  return <>{element}</>;
};

export default AppRoutes;
