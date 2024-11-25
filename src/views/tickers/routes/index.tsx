import { Route, Routes } from 'react-router';

import Tikers from '../Tikers';

export const TickersRoutes = () => {
  return (
    <Routes>
      <Route index element={<Tikers />} />
    </Routes>
  );
};
