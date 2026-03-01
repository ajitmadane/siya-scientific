import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroBanner.module.css';

const STATS = [
  { num: '500+',  label: 'Products' },
  { num: '200+',  label: 'Clients' },
  { num: '50+',   label: 'Brands' },
  { num: '10+',   label: 'Years' },
];

/**
 * HeroBanner — full-screen hero for the Home page.
 * Accepts optional `title`, `subtitle`, `ctaLabel`, `ctaLink` props.
 */
export default function HeroBanner({
  title    = 'Scientific Solutions for Every Laboratory',
  subtitle = 'Siya Scientific is your trusted partner for laboratory glassware, plasticware, instruments, analytical systems, chemicals, and safety equipment — serving pharmaceutical, research, food, and environmental industries.',
  ctaLabel = 'Explore Products',
  ctaLink  = '/products',
}) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left: Content */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>Siya Scientific</span>

            <h1 className={styles.title}>
              {title.split('Laboratory').join(' ')}
              {title.includes('Laboratory') && (
                <><em> Laboratory</em></>
              )}
            </h1>

            {/* Simpler approach: render title directly */}
            <p className={styles.description}>{subtitle}</p>

            <div className={styles.actions}>
              <Link to={ctaLink} className="btn btn-primary">{ctaLabel} →</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>

            <div className={styles.stats}>
              {STATS.map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.visualPlaceholder}>
                <span className={styles.placeholderIcon}>🔬</span>
                <span>Laboratory Hero Image<br /><small>(Replace with your image)</small></span>
              </div>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeNum}>NABL</span>
              <span className={styles.badgeText}>Certified Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
