import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

/* Lazy-load pages for code splitting */
const Home        = lazy(() => import('./pages/Home'));
const Products    = lazy(() => import('./pages/Products'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const About       = lazy(() => import('./pages/About'));
const Services    = lazy(() => import('./pages/Services'));
const Contact     = lazy(() => import('./pages/Contact'));
const Enquiry     = lazy(() => import('./pages/Enquiry'));
const NotFound    = lazy(() => import('./pages/NotFound'));

const Loader = () => (
  <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'60vh' }}>
    <div style={{ width:40, height:40, border:'4px solid #dde4ed', borderTopColor:'#003366', borderRadius:'50%', animation:'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
  </div>
);

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: '70vh', paddingTop: 'var(--header-h)' }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/"                    element={<Home />} />
            <Route path="/about"               element={<About />} />
            <Route path="/products"            element={<Products />} />
            <Route path="/products/:id"        element={<ProductDetail />} />
            <Route path="/services"            element={<Services />} />
            <Route path="/contact"             element={<Contact />} />
            <Route path="/enquiry"             element={<Enquiry />} />
            <Route path="*"                    element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
