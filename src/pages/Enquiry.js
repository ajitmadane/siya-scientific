import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import categories from '../data/categories.json';
import styles from './Enquiry.module.css';

export default function Enquiry() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', category: '', product: '', quantity: '', notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    /* TODO: wire to backend */
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Enquiry | Siya Scientific</title>
        <meta name="description" content="Send a product enquiry to Siya Scientific. Specify your requirements and we'll provide a prompt quote." />
      </Helmet>

      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Product Enquiry</span>
          <h1>Send an Enquiry</h1>
          <p>Tell us what you need and we'll get back to you with a quote.</p>
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>›</span> <span>Enquiry</span>
          </nav>
        </div>
      </div>

      <section className={styles.enquirySection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Form */}
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successBox}>
                  <span>✅</span>
                  <h3>Enquiry Submitted!</h3>
                  <p>Thank you, <strong>{form.name}</strong>. We have received your enquiry and will respond within 24 hours.</p>
                  <button className="btn btn-dark" onClick={() => setSubmitted(false)}>New Enquiry</button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <h2>Product Enquiry Form</h2>

                  <div className={styles.row}>
                    <label>
                      Full Name *
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={styles.input} />
                    </label>
                    <label>
                      Company / Organisation
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={styles.input} />
                    </label>
                  </div>
                  <div className={styles.row}>
                    <label>
                      Email Address *
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={styles.input} />
                    </label>
                    <label>
                      Phone Number *
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={styles.input} />
                    </label>
                  </div>
                  <label>
                    Product Category
                    <select name="category" value={form.category} onChange={handleChange} className={styles.input}>
                      <option value="">-- Select Category --</option>
                      {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                  </label>
                  <label>
                    Product Name / Description *
                    <input type="text" name="product" value={form.product} onChange={handleChange} required placeholder="Product name or description" className={styles.input} />
                  </label>
                  <label>
                    Quantity Required
                    <input type="text" name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 10 pcs, 5 boxes" className={styles.input} />
                  </label>
                  <label>
                    Additional Notes / Specifications
                    <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} placeholder="Catalogue numbers, certifications needed, delivery timeline, etc." className={styles.textarea} />
                  </label>
                  <button type="submit" className="btn btn-primary">Submit Enquiry →</button>
                </form>
              )}
            </div>

            {/* Side info */}
            <div className={styles.sideInfo}>
              <div className={styles.infoCard}>
                <h3>Quick Response</h3>
                <p>We typically respond to all enquiries within 24 business hours. For urgent requirements, please call or WhatsApp us directly.</p>
              </div>

              <div className={styles.contactQuick}>
                <h3>Direct Contact</h3>
                <a href="tel:+919112159763" className={styles.contactRow}>
                  <span>📞</span> +91-9112159763
                </a>
                <a href="https://wa.me/919112159763" target="_blank" rel="noreferrer" className={styles.contactRow}>
                  <span>💬</span> WhatsApp Us
                </a>
                <a href="mailto:sales@siyascientific.com" className={styles.contactRow}>
                  <span>📧</span> sales@siyascientific.com
                </a>
              </div>

              <div className={styles.categoriesCard}>
                <h3>Browse Categories</h3>
                {categories.map(c => (
                  <Link key={c.id} to={`/products?cat=${c.id}`} className={styles.catLink}>
                    {c.icon} {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
