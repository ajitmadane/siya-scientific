# Siya Scientific – React Website

A full-featured React website for Siya Scientific, a laboratory and scientific products supplier based in Baramati, Pune.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

## 📁 Project Structure

```
siya-scientific/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js          # Sticky navbar with dropdown menus, mobile hamburger
│   │   │   └── Header.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.js          # Footer with links, contact info, hours, socials
│   │   │   └── Footer.module.css
│   │   ├── HeroBanner/
│   │   │   ├── HeroBanner.js      # Reusable hero section
│   │   │   └── HeroBanner.module.css
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.js     # Product card with image, title, description
│   │   │   └── ProductCard.module.css
│   │   └── Contact/               # (Reserved for Contact form component if needed)
│   ├── data/
│   │   ├── products.json          # 23 sample products across 8 categories
│   │   └── categories.json        # 8 product categories
│   ├── pages/
│   │   ├── Home.js + Home.module.css
│   │   ├── Products.js + Products.module.css     # Category filter + search sidebar
│   │   ├── ProductDetail.js + ProductDetail.module.css
│   │   ├── About.js + About.module.css
│   │   ├── Services.js + Services.module.css
│   │   ├── Contact.js + Contact.module.css
│   │   ├── Enquiry.js + Enquiry.module.css
│   │   └── NotFound.js
│   ├── styles/
│   │   └── variables.css          # Global CSS variables, resets, utility classes
│   ├── App.js                     # Router + layout setup
│   └── index.js                   # React entry point
├── package.json
└── README.md
```

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, product categories, featured products, testimonials, blog posts |
| Products | `/products` | All products with category sidebar filter and search |
| Product Detail | `/products/:id` | Full product info, specs table, related products |
| About Us | `/about` | Company story, vision/mission, values, timeline |
| Services | `/services` | Calibration, validation, maintenance services |
| Contact Us | `/contact` | Contact form + office info + map placeholder |
| Enquiry | `/enquiry` | Detailed product enquiry form |

## 🔧 Customisation Guide

### Replace placeholder images
Products use placeholder divs where `image: "/images/products/..."` is specified in `products.json`. Add your images to `public/images/products/` using the filenames in the JSON.

### Update product data
Edit `src/data/products.json` to add, remove, or modify products.

### Update company info
Footer contact details are in `src/components/Footer/Footer.js`. Opening hours in the same file.

### Connect the forms
Contact form: `src/pages/Contact.js` – `handleSubmit` function.  
Enquiry form: `src/pages/Enquiry.js` – `handleSubmit` function.  
Both log to console. Wire to your backend/email service (Nodemailer, EmailJS, Formspree, etc.).

### Add a real Google Map
In `src/pages/Contact.js`, replace the `.mapPlaceholder` div with a `<iframe>` embed from Google Maps.

### Change colours/fonts
All design tokens live in `src/styles/variables.css`. Edit `--clr-primary`, `--clr-accent`, and the font imports in `public/index.html`.

## 🛠️ Dependencies

- `react` + `react-dom` – UI framework
- `react-router-dom` – client-side routing
- `react-helmet-async` – per-page meta titles and descriptions
- `react-icons` – (installed, ready for use)
- CSS Modules – scoped styles per component

## 📱 Responsive Breakpoints

- Desktop: > 1100px
- Tablet: 768px – 1100px
- Mobile: < 768px (hamburger nav active at 900px)
