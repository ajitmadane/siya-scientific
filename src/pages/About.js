import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './About.module.css';

const TEAM_VALUES = [
  { icon: '🎯', title: 'Quality Commitment',    desc: 'Every product we supply is sourced from certified brands and meets stringent quality standards, including NABL certification where applicable.' },
  { icon: '⏱️', title: 'Timely Delivery',       desc: 'We understand the critical nature of laboratory operations. Our logistics ensure prompt delivery across India without compromise on product integrity.' },
  { icon: '🤝', title: 'Client-Centric Service', desc: 'Our trained professionals provide technical guidance, helping clients select the right products and solutions for their specific applications.' },
  { icon: '🌱', title: 'Sustainability',         desc: 'We promote environmentally responsible products including non-toxic disinfectants and recyclable packaging wherever possible.' },
];

const MILESTONES = [
  { year: '2010', event: 'Founded in Baramati, Pune with a vision to serve local laboratory needs.' },
  { year: '2014', event: 'Expanded product catalogue to include analytical instruments and specialty chemicals.' },
  { year: '2017', event: 'Established partnerships with leading global scientific brands.' },
  { year: '2020', event: 'Launched online enquiry platform and expanded services pan-India.' },
  { year: '2021', event: 'Introduced specialty segment chemicals and safety aids division.' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Siya Scientific</title>
        <meta name="description" content="Learn about Siya Scientific – our vision, mission, team, and commitment to quality scientific products and services in India." />
      </Helmet>

      {/* Hero */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Our Story</span>
          <h1>About Siya Scientific</h1>
          <p>A trusted name in laboratory supplies and scientific solutions since 2010.</p>
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>›</span> <span>About Us</span>
          </nav>
        </div>
      </div>

      {/* About intro */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introImage}>
              <div className={styles.imagePlaceholder}>
                <span>🏢</span>
                <p>Company Image<br />(Replace with actual)</p>
              </div>
              <div className={styles.experienceBadge}>
                <span className={styles.badgeNum}>10+</span>
                <span className={styles.badgeText}>Years of Excellence</span>
              </div>
            </div>
            <div className={styles.introContent}>
              <span className="section-label">Who We Are</span>
              <h2>Your Scientific Partner in Pune & Beyond</h2>
              <div className="accent-bar" style={{ margin: '0 0 1.5rem' }} />
              <p>
                Siya Scientific, based in MIDC Baramati, Pune, is a leading supplier of laboratory and scientific products serving pharmaceutical companies, research institutions, food testing labs, environmental agencies, and educational institutions across India.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We are committed to providing quality products from certified brands at competitive prices. With a team of trained professionals, we offer not just products but complete scientific solutions — from selection guidance to after-sales support.
              </p>
              <div className={styles.introStats}>
                {[
                  { num: '500+', label: 'Products' },
                  { num: '200+', label: 'Happy Clients' },
                  { num: '50+',  label: 'Brands' },
                  { num: '15+',  label: 'Associations' },
                ].map(s => (
                  <div key={s.label} className={styles.statItem}>
                    <span className={styles.statNum}>{s.num}</span>
                    <span className={styles.statLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className={styles.vmSection}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <span className={styles.vmIcon}>🌍</span>
              <h3>Our Vision</h3>
              <p>To achieve societal & environmental well being in all aspects through excellence in education, research and development of man, material, and machine.</p>
            </div>
            <div className={styles.vmCard}>
              <span className={styles.vmIcon}>🚀</span>
              <h3>Our Mission</h3>
              <p>To be a resource for all scientific needs of each and every laboratory to execute their regular needs for product & process development.</p>
            </div>
            <div className={styles.vmCard}>
              <span className={styles.vmIcon}>💎</span>
              <h3>Our Values</h3>
              <p>Integrity, quality, customer focus, and continuous improvement drive everything we do — from sourcing products to serving our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Siya Scientific</span>
            <h2>What Sets Us Apart</h2>
            <div className="accent-bar" />
          </div>
          <div className={styles.valuesGrid}>
            {TEAM_VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">History</span>
            <h2>Our Journey</h2>
            <div className="accent-bar" />
          </div>
          <div className={styles.timelineList}>
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineContent}>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2>Ready to Work with Us?</h2>
            <p>Get in touch to discuss your laboratory requirements.</p>
            <div className={styles.ctaActions}>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/products" className="btn btn-outline">Browse Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
