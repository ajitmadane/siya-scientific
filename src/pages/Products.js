import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard/ProductCard';
import products from '../data/products.json';
import categories from '../data/categories.json';
import styles from './Products.module.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const catParam = Number(searchParams.get('cat')) || 0;
  const searchParam = searchParams.get('search') || '';

  const [search, setSearch] = useState(searchParam);

  /* Sync input when URL changes */
  useEffect(() => {
    setSearch(searchParam);
  }, [searchParam]);

  /* Handle category change */
  const handleCategoryChange = (catId) => {
    const params = {};
    if (catId !== 0) params.cat = catId;
    if (search) params.search = search;
    setSearchParams(params);
  };

  /* Handle search change */
  const handleSearchChange = (value) => {
    setSearch(value);

    const params = {};
    if (catParam !== 0) params.cat = catParam;
    if (value) params.search = value;

    setSearchParams(params);
  };

  /* Filtered products (optimized with useMemo) */
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();

    return products.filter((p) => {
      const matchCat = catParam === 0 || p.categoryId === catParam;

      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [catParam, search]);

  const activeCat = categories.find((c) => c.id === catParam);

  return (
    <>
      <Helmet>
        <title>
          {activeCat
            ? `${activeCat.name} | Siya Scientific`
            : 'Products | Siya Scientific'}
        </title>
        <meta
          name="description"
          content={
            activeCat
              ? `Browse ${activeCat.name} at Siya Scientific. Quality laboratory and scientific products.`
              : 'Browse our comprehensive catalogue of laboratory glassware, plasticware, instruments, analytical systems, chemicals, and safety equipment.'
          }
        />
      </Helmet>

      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Catalogue</span>
          <h1>{activeCat ? activeCat.name : 'All Products'}</h1>
          <p>
            {activeCat
              ? activeCat.description
              : 'Browse our complete range of laboratory and scientific products.'}
          </p>

          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Products</span>
            {activeCat && (
              <>
                <span>›</span>
                <span>{activeCat.name}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      <div className={styles.layout}>
        <div className="container">
          <div className={styles.inner}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Search */}
              <div className={styles.sideCard}>
                <h3>Search Products</h3>
                <input
                  type="search"
                  placeholder="Type product name..."
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={styles.searchInput}
                />
                {search && (
                  <button
                    className={styles.clearBtn}
                    onClick={() => handleSearchChange('')}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className={styles.sideCard}>
                <h3>Categories</h3>
                <ul className={styles.catList}>
                  <li>
                    <button
                      className={`${styles.catBtn} ${
                        catParam === 0 ? styles.active : ''
                      }`}
                      onClick={() => handleCategoryChange(0)}
                    >
                      All Products
                      <span className={styles.catCount}>
                        {products.length}
                      </span>
                    </button>
                  </li>

                  {categories.map((cat) => {
                    const count = products.filter(
                      (p) => p.categoryId === cat.id
                    ).length;

                    return (
                      <li key={cat.id}>
                        <button
                          className={`${styles.catBtn} ${
                            catParam === cat.id ? styles.active : ''
                          }`}
                          onClick={() => handleCategoryChange(cat.id)}
                        >
                          <span>
                            {cat.icon} {cat.name}
                          </span>
                          <span className={styles.catCount}>{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Enquiry */}
              <div className={`${styles.sideCard} ${styles.contactCard}`}>
                <h3>Need a Custom Quote?</h3>
                <p>
                  Can't find what you're looking for? We supply customised and
                  specialty items on request.
                </p>
                <Link
                  to="/enquiry"
                  className={`btn btn-primary ${styles.sideBtn}`}
                >
                  Send Enquiry
                </Link>
              </div>
            </aside>

            {/* Product Grid */}
            <div className={styles.main}>
              <div className={styles.resultsBar}>
                <span className={styles.count}>
                  {filtered.length} product
                  {filtered.length !== 1 ? 's' : ''} found
                </span>
              </div>

              {filtered.length > 0 ? (
                <div className={styles.grid}>
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              ) : (
                <div className={styles.empty}>
                  <span className={styles.emptyIcon}>🔍</span>
                  <h3>No products found</h3>
                  <p>Try adjusting your search or category filter.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
