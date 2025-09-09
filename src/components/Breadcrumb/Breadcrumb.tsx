import React from 'react';
import styles from './Breadcrumb.module.scss';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <a href={item.href}>{item.label}</a>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className={styles.separator}>›</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
