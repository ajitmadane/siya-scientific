import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import products from '../data/products.json';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className={styles.notFound}>
        <span style={{ fontSize: '4rem' }}>😔</span>
        <h2>Product not found</h2>
        <button className="btn btn-dark" onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  /* Related products: same category, exclude current */
  const related = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{product.name} | Siya Scientific</title>
        <meta name="description" content={product.shortDescription} />
      </Helmet>

      {/* Breadcrumb header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link to="/">Home</Link> <span>›</span>
            <Link to="/products">Products</Link> <span>›</span>
            <Link to={`/products?cat=${product.categoryId}`}>{product.category}</Link> <span>›</span>
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.layout}>
        <div className="container">
          <div className={styles.grid}>

            {/* Image */}
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>🔬</span>
                    <p>Product Image<br />(Replace with actual image)</p>
                  </div>
                )}
              </div>
              {/* Tags */}
              <div className={styles.tags}>
                {product.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className={styles.detailSection}>
              <span className={styles.categoryBadge}>{product.category}</span>
              <h1 className={styles.productName}>{product.name}</h1>
              <p className={styles.shortDesc}>{product.shortDescription}</p>

              <div className={styles.divider} />

              <h2 className={styles.sectionTitle}>Description</h2>
              <p className={styles.description}>{product.description}</p>

              {/* Specs table */}
              {product.specs && product.specs.length > 0 && (
                <>
                  <h2 className={styles.sectionTitle}>Specifications</h2>
                  <table className={styles.specsTable}>
                    <tbody>
                      {product.specs.map(spec => (
                        <tr key={spec.label}>
                          <td className={styles.specLabel}>{spec.label}</td>
                          <td className={styles.specValue}>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              )}

              {/* Actions */}
              <div className={styles.actions}>
                <Link to="/enquiry" className="btn btn-primary">Request a Quote</Link>
                <Link to="/contact" className="btn btn-dark">Contact Us</Link>
              </div>

              {/* Info boxes */}
              <div className={styles.infoBoxes}>
                <div className={styles.infoBox}>
                  <span>🚚</span>
                  <div>
                    <strong>Timely Delivery</strong>
                    <p>Pan-India supply with prompt dispatch</p>
                  </div>
                </div>
                <div className={styles.infoBox}>
                  <span>✅</span>
                  <div>
                    <strong>Quality Assured</strong>
                    <p>Genuine products from certified brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <section className={styles.related}>
              <h2>Related Products</h2>
              <div className={styles.relatedGrid}>
                {related.map(p => (
                  <Link to={`/products/${p.id}`} key={p.id} className={styles.relatedCard}>
                    <div className={styles.relatedImage}>🔬</div>
                    <div className={styles.relatedInfo}>
                      <span className={styles.relatedCat}>{p.category}</span>
                      <h3 className={styles.relatedName}>{p.name}</h3>
                      <p className={styles.relatedDesc}>{p.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
