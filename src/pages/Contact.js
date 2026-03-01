import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    /* TODO: wire up to a real backend / email service */
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Siya Scientific</title>
        <meta name="description" content="Contact Siya Scientific in Baramati, Pune. Phone: +91-9112159763. Email: sales@siyascientific.com." />
      </Helmet>

      {/* Page header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>We're here to help. Reach out through any channel below.</p>
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>›</span> <span>Contact Us</span>
          </nav>
        </div>
      </div>

      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.grid}>

            {/* Contact info */}
            <div className={styles.infoCol}>
              <h2>Our Office</h2>
              <p className={styles.subtext}>Visit us or reach out via phone, email, or WhatsApp — we respond promptly.</p>

              <div className={styles.infoList}>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>Siya Scientific<br />A-39, MIDC, Baramati,<br />Dist: Pune – 413133, MH, India</p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+919112159763">+91-9112159763</a></p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href="https://wa.me/919112159763" target="_blank" rel="noreferrer">+91-9112159763</a></p>
                  </div>
                </div>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📧</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:sales@siyascientific.com">sales@siyascientific.com</a></p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className={styles.hours}>
                <h3>Opening Hours</h3>
                {[
                  { day: 'Monday – Friday', time: '10:00 AM – 7:00 PM' },
                  { day: 'Saturday',        time: '11:00 AM – 3:00 PM' },
                  { day: 'Sunday',          time: 'Closed' },
                ].map(h => (
                  <div key={h.day} className={styles.hourRow}>
                    <span>{h.day}</span>
                    <span className={styles.hourTime}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className={styles.formCol}>
              {submitted ? (
                <div className={styles.successBox}>
                  <span>✅</span>
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We will get back to you within 1 business day.</p>
                  <button className="btn btn-dark" onClick={() => setSubmitted(false)}>Send Another</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2>Send Us a Message</h2>
                  <p className={styles.formSubtext}>Fill out the form and our team will reach out shortly.</p>

                  <div className={styles.formRow}>
                    <label>
                      Full Name *
                      <input
                        type="text" name="name" value={form.name}
                        onChange={handleChange} required placeholder="Your full name"
                        className={styles.input}
                      />
                    </label>
                    <label>
                      Email Address *
                      <input
                        type="email" name="email" value={form.email}
                        onChange={handleChange} required placeholder="you@example.com"
                        className={styles.input}
                      />
                    </label>
                  </div>
                  <label>
                    Phone Number
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      className={styles.input}
                    />
                  </label>
                  <label>
                    Message *
                    <textarea
                      name="message" value={form.message}
                      onChange={handleChange} required placeholder="How can we help you?"
                      rows={5} className={styles.textarea}
                    />
                  </label>
                  <button type="submit" className="btn btn-primary">Send Message →</button>
                </form>
              )}
            </div>
          </div>

          {/* Map placeholder */}
          <div className={styles.mapBox}>
            <div className={styles.mapPlaceholder}>
              <span>🗺️</span>
              <p>Embed Google Map here<br /><small>Siya Scientific, A-39 MIDC Baramati, Pune 413133</small></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
