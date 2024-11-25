import { Route, Routes } from 'react-router';

import Tickers from '../Tickers';

export const TickersRoutes = () => {
  return (
    <Routes>
      <Route index element={<Tickers />} />
    </Routes>
  );
};
