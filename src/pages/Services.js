import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'calibration',
    icon: '📏',
    title: 'Instrument Calibration & Validation',
    summary: 'Precision calibration and qualification services for all laboratory instruments.',
    details: [
      'Calibration of analytical balances, pH meters, conductivity meters, thermometers, spectrophotometers, and more',
      'Instrument Qualification (IQ, OQ, PQ) as per regulatory guidelines',
      'NABL traceable calibration certificates',
      'On-site and off-site calibration services',
      'Compliance with GMP, ISO, USP, and cGLP requirements',
    ],
  },
  {
    id: 'validation',
    icon: '🏭',
    title: 'Production Area Validation & Monitoring',
    summary: 'Environmental monitoring and area qualification services for cleanrooms and production areas.',
    details: [
      'Environmental monitoring (air, surface, and personnel)',
      'Cleanroom qualification and certification',
      'HVAC system performance verification',
      'Particle counting, viable monitoring, and pressure differential checks',
      'Documentation and compliance reporting per ISO 14644 and cGMP',
    ],
  },
  {
    id: 'maintenance',
    icon: '🔧',
    title: 'Instrument Maintenance',
    summary: 'Preventive and corrective maintenance programs to maximise uptime and reliability.',
    details: [
      'Annual Maintenance Contracts (AMC) for laboratory instruments',
      'Preventive maintenance (PM) schedules and service reports',
      'Corrective maintenance and spare parts supply',
      'Service coverage for major brands including Shimadzu, Agilent, Waters, Sartorius, Mettler Toledo, and more',
      'Emergency breakdown support',
    ],
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Siya Scientific</title>
        <meta name="description" content="Siya Scientific offers instrument calibration, validation, production area monitoring, and maintenance services for laboratories across India." />
      </Helmet>

      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Technical Services</span>
          <h1>Our Services</h1>
          <p>Comprehensive technical services to keep your laboratory running at peak performance.</p>
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>›</span> <span>Services</span>
          </nav>
        </div>
      </div>

      {/* Services */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.serviceList}>
            {SERVICES.map(svc => (
              <div id={svc.id} key={svc.id} className={styles.serviceCard}>
                <div className={styles.svcLeft}>
                  <span className={styles.svcIcon}>{svc.icon}</span>
                  <h2 className={styles.svcTitle}>{svc.title}</h2>
                  <p className={styles.svcSummary}>{svc.summary}</p>
                  <Link to="/enquiry" className="btn btn-primary" style={{ marginTop: '1rem' }}>Get a Quote</Link>
                </div>
                <div className={styles.svcRight}>
                  <h3>Scope of Services</h3>
                  <ul className={styles.svcList}>
                    {svc.details.map((d, i) => (
                      <li key={i} className={styles.svcItem}>
                        <span className={styles.check}>✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our services */}
      <section className={styles.why}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Advantage</span>
            <h2>Why Choose Our Services?</h2>
            <div className="accent-bar" />
          </div>
          <div className={styles.whyGrid}>
            {[
              { icon: '🎓', title: 'Trained Professionals',    desc: 'Our service engineers are certified and trained by leading instrument manufacturers.' },
              { icon: '📋', title: 'Regulatory Compliance',    desc: 'All services comply with GMP, ISO, NABL, and other applicable regulatory standards.' },
              { icon: '⚡', title: 'Fast Turnaround',          desc: 'We minimise downtime with efficient scheduling and rapid response times.' },
              { icon: '🗃️', title: 'Complete Documentation',   desc: 'Comprehensive service records, certificates, and calibration reports provided.' },
            ].map(w => (
              <div key={w.title} className={styles.whyCard}>
                <span>{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Need a Service Quote?</h2>
              <p>Reach out and our team will prepare a customised service proposal for your laboratory.</p>
            </div>
            <div className={styles.ctaActions}>
              <Link to="/enquiry" className="btn btn-primary">Send Enquiry</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
