import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import UserLogo from '../../public/assets/user-photo.svg';
import RakFullLogo from '../../public/assets/rak-full-logo.svg';
import RakDigital from '../../public/assets/rak-digital.svg';
import NavLinks from '../NavLinks/NavLinks';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <img src={RakFullLogo} alt="Gov Logo" className={styles.logo} />
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={styles.right}>
        <button className={styles.lang}>العربية</button>
        <div className={styles.user}>
          <img src={UserLogo} alt="User Avatar" />
          <span className={styles.username}>Abdullah Al-Aziz</span>
        </div>
        <img src={RakDigital} alt="RAK Digital" className={styles.rakLogo} />
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav>
            <NavLinks onClickLink={() => setMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
