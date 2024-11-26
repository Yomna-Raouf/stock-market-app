import { Route, Routes } from 'react-router';
import Home from '../home/Home';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};
