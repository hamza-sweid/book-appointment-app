// Sidebar.tsx
import React from 'react';
import styles from './Sidebar.module.scss';
import NavLinks from '../NavLinks/NavLinks';
import Button from '../Button/Button';
import BlackRightArrow from '../../public/assets/black-right-arrow.svg';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ''}`}>
      <button className={styles.collapseBtn} onClick={toggleSidebar}>
        <i
          className={`${styles.arrow} ${isOpen ? styles.left : styles.right}`}
        />
      </button>

      {/* Navigation Links */}
      <NavLinks
        collapsed={!isOpen}
        onClickLink={() => {
          if (window.innerWidth <= 768) toggleSidebar();
        }}
      />

      <hr className="width-90 mt-3" />

      {isOpen && (
        <Button variant="secondary" className="btn-responsive mt-2">
          Government Services
          <img className="pl-2" src={BlackRightArrow} alt="Right Arrow" />
        </Button>
      )}
    </aside>
  );
};

export default Sidebar;
