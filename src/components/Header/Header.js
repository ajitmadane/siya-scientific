import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

/* Chevron icon */
const ChevronIcon = () => (
  <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 1l4 4 4-4" />
  </svg>
);

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Products', to: '/products',
    children: [
      { label: 'Laboratory Glassware',            to: '/products?cat=1' },
      { label: 'Laboratory Plasticware',           to: '/products?cat=2' },
      { label: 'Laboratory Silicaware & Quartzware', to: '/products?cat=3' },
      { label: 'Laboratory Instruments',           to: '/products?cat=4' },
      { label: 'Analytical Instruments',           to: '/products?cat=5' },
      { label: 'Safety Aids',                      to: '/products?cat=6' },
      { label: 'Specialty Segment Chemicals',      to: '/products?cat=7' },
      { label: 'Special Chemicals',                to: '/products?cat=8' },
      { label: 'All Products',                     to: '/products' },
    ],
  },
  {
    label: 'Services', to: '/services',
    children: [
      { label: 'Instrument Calibration & Validation',      to: '/services#calibration' },
      { label: 'Production Area Validation & Monitoring',  to: '/services#validation' },
      { label: 'Instrument Maintenance',                   to: '/services#maintenance' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Close menu on resize */
  useEffect(() => {
    const handle = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <div className={styles.logoMark}>S</div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>Siya Scientific</span>
            <span className={styles.logoTagline}>Scientific Solutions</span>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        {/* Nav */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {NAV_ITEMS.map(item => (
            <div key={item.label} className={styles.navItem}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                onClick={() => !item.children && setMenuOpen(false)}
              >
                {item.label}
                {item.children && <ChevronIcon />}
              </NavLink>

              {item.children && (
                <div className={styles.dropdown}>
                  {item.children.map(child => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className={styles.dropdownLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/enquiry" className={`${styles.navLink} ${styles.headerCta}`} onClick={() => setMenuOpen(false)}>
            Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
