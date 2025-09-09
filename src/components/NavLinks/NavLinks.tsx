import React from 'react';
import styles from './NavLinks.module.scss';
import HomeIcon from '../../public/sidebar/home.svg';
import ServiceRequest from '../../public/sidebar/service-request.svg';
import Document from '../../public/sidebar/document.svg';
import Property from '../../public/sidebar/property.svg';
import Business from '../../public/sidebar/business.svg';
import PersonalInfo from '../../public/sidebar/personal-info.svg';

interface NavLinksProps {
  collapsed?: boolean;
  onClickLink?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  collapsed = false,
  onClickLink,
}) => {
  const links = [
    { icon: <img src={HomeIcon} alt="Home" />, label: 'Home', href: '#' },
    {
      icon: <img src={ServiceRequest} alt="Service Requests" />,
      label: 'Service Requests',
      href: '#',
    },
    {
      icon: <img src={Document} alt="Documents" />,
      label: 'Documents',
      href: '#',
    },
    {
      icon: <img src={Property} alt="Properties" />,
      label: 'Properties',
      href: '#',
    },
    {
      icon: <img src={Business} alt="Businesses" />,
      label: 'Businesses',
      href: '#',
    },
    {
      icon: <img src={PersonalInfo} alt="Personal Information" />,
      label: 'Personal Information',
      href: '#',
    },
  ];

  return (
    <ul className={`${styles.navList} ${collapsed ? styles.collapsed : ''}`}>
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} onClick={onClickLink}>
            {link.icon} <span>{link.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
