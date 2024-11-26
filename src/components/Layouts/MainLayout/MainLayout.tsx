import { Outlet } from 'react-router';

import Navbar from '@/components/Navbar/Navbar';

import styles from './styles.module.css';

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
      <p className={styles.developerName}>Yomna Raouf</p>
    </div>
  );
};

export default MainLayout;
