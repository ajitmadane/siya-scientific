import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/* Simple SVG icons */
const icons = {
  location: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  phone: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  mail: (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  whatsapp: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  facebook: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  ),
};

const QUICK_LINKS = [
  { label: 'Home',       to: '/' },
  { label: 'About Us',   to: '/about' },
  { label: 'Products',   to: '/products' },
  { label: 'Services',   to: '/services' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Enquiry',    to: '/enquiry' },
];

const HOURS = [
  { day: 'Mon – Fri', time: '10:00 AM – 7:00 PM' },
  { day: 'Saturday',  time: '11:00 AM – 3:00 PM' },
  { day: 'Sunday',    time: 'Closed' },
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
              <a href="https://wa.me/919112159763" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="WhatsApp">{icons.whatsapp}</a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">{icons.linkedin}</a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">{icons.facebook}</a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">{icons.twitter}</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4>Quick Links</h4>
            <div className={styles.linkList}>
              {QUICK_LINKS.map(l => (
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
            {HOURS.map(h => (
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
