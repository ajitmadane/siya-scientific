import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

/**
 * ProductCard
 * Props: product { id, name, category, shortDescription, image }
 */
export default function ProductCard({ product }) {
  const { id, name, category, shortDescription, image } = product;

  return (
    <article className={styles.card}>
      {/* Image area */}
      <div className={styles.imageWrap}>
        {image ? (
          <img
            src={image}
            alt={name}
            className={styles.image}
            loading="lazy"
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
        ) : null}
        <div className={styles.imagePlaceholder} style={{ display: image ? 'none' : 'flex' }}>
          <span className={styles.placeholderIcon}>🔬</span>
          <span className={styles.placeholderText}>Product Image<br />(Replace with actual)</span>
        </div>
        <span className={styles.badge}>{category}</span>
      </div>

      {/* Content */}
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{shortDescription}</p>
      </div>

      <div className={styles.footer}>
        <Link to={`/products/${id}`} className={styles.link}>
          View Details →
        </Link>
      </div>
    </article>
  );
}
