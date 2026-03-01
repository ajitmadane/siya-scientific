import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/* Simple SVG icons (same as yours — unchanged) */
const icons = { /* KEEP YOUR EXISTING ICONS OBJECT HERE — NO CHANGE */ };

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Enquiry', to: '/enquiry' },
];

const HOURS = [
  { day: 'Mon – Fri', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '11:00 AM – 3:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>

          {/* Brand */}
          <div className={styles.col}>
            <div className={styles.footerLogo}>
              <div className={styles.logoMark}>S</div>
              <span className={styles.logoText}>Siya Scientific</span>
            </div>
            <p className={styles.tagline}>
              Committed to quality products and services, timely delivery, and performance backed by a strong team of trained professionals.
            </p>

            <div className={styles.socials}>
              <a href="https://wa.me/919112159763" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">{icons.whatsapp}</a>

              {/* Replace # with real links OR keep example links */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">{icons.linkedin}</a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">{icons.facebook}</a>

              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">{icons.twitter}</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <div className={styles.linkList}>
              {QUICK_LINKS.map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact Us</h4>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>{icons.location}</span>
              <span>A-39, MIDC, Baramati,<br />Dist: Pune – 413133, MH, India</span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>{icons.phone}</span>
              <a href="tel:+919112159763">+91-9112159763</a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>{icons.mail}</span>
              <a href="mailto:sales@siyascientific.com">sales@siyascientific.com</a>
            </div>
          </div>

          {/* Hours */}
          <div className={styles.col}>
            <h4>Opening Hours</h4>
            {HOURS.map((h) => (
              <div key={h.day} className={styles.hourRow}>
                <span className={styles.hourDay}>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span>© {year} Siya Scientific. All rights reserved.</span>

          <div className={styles.bottomLinks}>
            {/* Use Link instead of invalid href="#" */}
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
