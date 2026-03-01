import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Siya Scientific</title>
      </Helmet>
      <div style={{
        minHeight: '80vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '2rem', gap: '1.5rem',
      }}>
        <span style={{ fontSize: '5rem' }}>🔬</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 5vw, 3rem)', color: 'var(--clr-primary)' }}>
          404 – Page Not Found
        </h1>
        <p style={{ color: 'var(--clr-text-muted)', maxWidth: '400px', fontSize: '1rem', lineHeight: 1.7 }}>
          The page you're looking for doesn't exist. It may have been moved or the URL is incorrect.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-dark">Go Home</Link>
          <Link to="/products" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    </>
  );
}
