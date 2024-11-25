import { NavLink } from 'react-router';
import styles from './styles.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.logoContainer}>
          Stock Market
        </NavLink>

        <div className={styles.navLinksContainer}>
          <ul>
            <li>
              <NavLink to="/tickers" className={styles.navLink}>
                Tickers
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
