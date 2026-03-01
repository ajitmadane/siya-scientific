import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ProductCard from '../components/ProductCard/ProductCard';
import products from '../data/products.json';
import categories from '../data/categories.json';
import styles from './Home.module.css';

/* Testimonials data */
const TESTIMONIALS = [
  {
    text: 'Siya Scientific team is having set of customised laboratory solutions according to affordability of the client and on time delivery even in short period of notice.',
    name: 'Mr. Mahesh Salunke',
    company: 'Aishwarya Bakery',
  },
  {
    text: 'Siya Scientific offers all technical solutions in choosing & selecting the specific instrument, any preservative & in developing the best products to meet our & our client\'s satisfaction.',
    name: 'Mr. Anil Jagtap',
    company: 'Green Care Agro',
  },
  {
    text: 'Siya Scientific supports our research activities through their genuine source of resources for instruments and their consumables, indigenous as well as overseas.',
    name: 'Mr. Harish Kolekar',
    company: 'Research Institute',
  },
];

const WHY_US = [
  {
    icon: '🎯',
    title: 'Why Choose Us',
    text: 'Siya Scientific is committed towards quality products and services, timely delivery and performance with the strong and motivated team of trained professionals.',
  },
  {
    icon: '🌍',
    title: 'Our Vision',
    text: 'To achieve societal & environmental well being in all aspects through excellence in education, research and development of man, material, and machine.',
  },
  {
    icon: '🚀',
    title: 'Our Mission',
    text: 'To be resource for all scientific needs of each and every laboratories to execute their regular needs for product & process development.',
  },
];

/* Blog posts */
const POSTS = [
  {
    title: 'Huwa-San is an Ecological Broad Spectrum, Non-Toxic Disinfectant',
    date: '8th Apr 2021',
    excerpt: 'Huwa-San developed by using an advanced German technology, based on hydrogen peroxide stabilised with colloidal silver.',
    link: '/products/20',
  },
  {
    title: 'Whirl-Pak® sample bags are strong, sterile, and leakproof',
    date: '10th Mar 2021',
    excerpt: 'Made of polyethylene, they are designed to carry solids or liquids to a laboratory for testing.',
    link: '/products/21',
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Siya Scientific – Scientific Solutions for Every Laboratory</title>
        <meta name="description" content="Siya Scientific supplies laboratory glassware, plasticware, instruments, analytical systems, chemicals, and safety equipment for pharmaceutical, research, and industrial labs." />
      </Helmet>

      {/* Hero */}
      <HeroBanner
        title="Scientific Solutions for Every Laboratory"
        subtitle="Siya Scientific is your trusted partner for laboratory glassware, plasticware, instruments, analytical systems, chemicals, and safety equipment — serving pharmaceutical, research, food, and environmental industries."
      />

      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Our Product Categories</h2>
            <div className="accent-bar" />
          </div>
          <div className={styles.catGrid}>
            {categories.map(cat => (
              <Link to={`/products?cat=${cat.id}`} key={cat.id} className={styles.catCard}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3 className={styles.catName}>{cat.name}</h3>
                <p className={styles.catDesc}>{cat.description}</p>
                <span className={styles.catLink}>Browse →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className={styles.featured}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured</span>
            <h2>Popular Products</h2>
            <p>A curated selection from our comprehensive catalogue.</p>
            <div className="accent-bar" />
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className={styles.viewAll}>
            <Link to="/products" className="btn btn-dark">View All Products →</Link>
          </div>
        </div>
      </section>

      {/* Why Us / Vision / Mission */}
      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.whyGrid}>
            {WHY_US.map(item => (
              <div key={item.title} className={styles.whyCard}>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to="/about" className={styles.whyLink}>Read More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Client Voices</span>
            <h2>What Our Clients Say</h2>
            <div className="accent-bar" />
          </div>
          <div className={styles.testGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testCard}>
                <span className={styles.quote}>"</span>
                <p className={styles.testText}>{t.text}</p>
                <div className={styles.testAuthor}>
                  <div className={styles.testAvatar}>{t.name.charAt(0)}</div>
                  <div>
                    <div className={styles.testName}>{t.name}</div>
                    <div className={styles.testCompany}>{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className={styles.posts}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">News & Updates</span>
            <h2>Recent Posts</h2>
            <div className="accent-bar" />
          </div>
          <div className={styles.postGrid}>
            {POSTS.map((post, i) => (
              <Link to={post.link} key={i} className={styles.postCard}>
                <div className={styles.postImage}>📰</div>
                <div className={styles.postBody}>
                  <span className={styles.postDate}>{post.date}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <span className={styles.postCta}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2>Ready to Source Your Lab Supplies?</h2>
              <p>Contact us today and our team will help you find exactly what you need.</p>
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
