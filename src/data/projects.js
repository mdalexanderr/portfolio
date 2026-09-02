import f01 from '../../assets/web/favonia/favonia-01.webp'
import f02 from '../../assets/web/favonia/favonia-02.webp'
import f03 from '../../assets/web/favonia/favonia-03.webp'
import f04 from '../../assets/web/favonia/favonia-04.webp'
import f05 from '../../assets/web/favonia/favonia-05.webp'
import f06 from '../../assets/web/favonia/favonia-06.webp'
import f07 from '../../assets/web/favonia/favonia-07.webp'
import f08 from '../../assets/web/favonia/favonia-08.webp'
import f09 from '../../assets/web/favonia/favonia-09.webp'
import f10 from '../../assets/web/favonia/favonia-10.webp'
import f11 from '../../assets/web/favonia/favonia-11.webp'
import f12 from '../../assets/web/favonia/favonia-12.webp'
import f13 from '../../assets/web/favonia/favonia-13.webp'
import f14 from '../../assets/web/favonia/favonia-14.webp'

import yoututorLogo from '../../assets/web/project-logos/yoututor.png'
import kaziLogo from '../../assets/web/project-logos/kazi.png'
import pccLogo from '../../assets/web/project-logos/pcc.png'
import pdLogo from '../../assets/web/project-logos/pd.png'
import ltgLogo from '../../assets/web/project-logos/ltg.png'
import amalfiLogo from '../../assets/web/project-logos/amalfi.png'

/**
 * Real projects data.
 * Capability lists come from the developer's own project summaries —
 * no fabricated claims. Favonia Hobbies has real screenshots; the other
 * projects are listed with their features until screenshots are supplied.
 */

export const favonia = {
  name: 'Favonia Hobbies',
  category: 'Custom E-commerce',
  years: '2024 — present',
  tagline: 'Malaysia’s Pokémon TCG store — storefront, payments, shipping and a deep admin platform.',
  summary:
    'A complete, custom e-commerce solution built for Favonia Hobbies, Malaysia’s premier online store for Pokémon cards, boosters and TCG singles. The storefront covers the full customer journey from discovery to delivery, while a dedicated admin panel keeps every product, order, member and backup under control.',
  highlights: [
    { k: 'Products', v: '800+ live' },
    { k: 'Selling', v: 'Nationwide MY' },
    { k: 'Admin', v: 'Full platform' },
  ],
  storefrontShots: [
    { src: f01, alt: 'Favonia Hobbies — home page with Pokémon cards hero and categories', label: 'Home page' },
    { src: f02, alt: 'Favonia Hobbies — shop by category and best sellers carousels', label: 'Shop by category' },
    { src: f04, alt: 'Favonia Hobbies — full item catalogue with filters and sorting', label: 'All items · catalogue' },
    { src: f05, alt: 'Favonia Hobbies — single product page with card details and stock', label: 'Product detail' },
    { src: f06, alt: 'Favonia Hobbies — customer reviews and related items', label: 'Reviews & related' },
    { src: f07, alt: 'Favonia Hobbies — TCG singles sets overview', label: 'TCG singles · sets' },
    { src: f08, alt: 'Favonia Hobbies — set page with rarity filters and card grid', label: 'TCG set · Radiant Origins' },
    { src: f09, alt: 'Favonia Hobbies — customer login screen', label: 'Customer login' },
    { src: f03, alt: 'Favonia Hobbies — trust bar, payments, newsletter and footer', label: 'Trust, newsletter & footer' },
  ],
  adminShots: [
    { src: f10, alt: 'Favonia admin — restricted admin login portal', label: 'Admin · secure login' },
    { src: f11, alt: 'Favonia admin — dashboard with stats and recent orders', label: 'Admin · dashboard' },
    { src: f12, alt: 'Favonia admin — manage products with stock and actions', label: 'Admin · manage products' },
    { src: f13, alt: 'Favonia admin — automatic and manual site backups', label: 'Admin · backups' },
    { src: f14, alt: 'Favonia admin — site settings, branding and maintenance mode', label: 'Admin · settings' },
  ],
  storefront: [
    'Custom product catalogue & categories',
    'Search with filters & sorting',
    'Cart, checkout & order tracking',
    'Payment gateway integration',
    'Shipping API — Malaysia-wide',
    'Customer accounts & login',
  ],
  platform: [
    'Admin panel — products, orders & users',
    'Inventory & stock management',
    'Members, tiers & loyalty rewards',
    'Store credit & vouchers',
    'Promotions engine',
    'Automatic nightly backups & one-click restore',
    'Admin settings — branding & maintenance mode',
  ],
}

export const projects = [
  {
    name: 'YouTutor',
    category: 'Course Marketplace',
    initials: 'YT',
    logo: yoututorLogo,
    blurb:
      'A course marketplace where tutors publish, students learn, and payments, referrals and reports stay in sync.',
    features: [
      'Course catalogue & enrolment',
      'Cart and checkout with payments',
      'Teacher dashboard',
      'Student dashboard',
      'Admin dashboard',
      'Referral system',
      'Reports & analytics',
    ],
  },
  {
    name: 'Kazi Technical Systems',
    category: 'Corporate Website',
    initials: 'KT',
    logo: kaziLogo,
    blurb:
      'A corporate presence with a custom admin system and an automated backup process behind the scenes.',
    features: ['Corporate website', 'Custom admin system', 'Automated backup system'],
  },
  {
    name: 'Pinnacle Capital Consultancy',
    category: 'Corporate Website',
    initials: 'PC',
    logo: pccLogo,
    blurb:
      'A consultancy site engineered for performance and safety — database, caching and rate limiting included.',
    features: [
      'Corporate website',
      'Admin panel',
      'Database',
      'Caching',
      'Rate limiting',
      'Docker / Nginx deployment',
    ],
  },
  {
    name: 'Practical Doctrinas PLT',
    category: 'Corporate / B2B',
    initials: 'PD',
    logo: pdLogo,
    logoWide: true,
    blurb:
      'A corporate & B2B platform with a CMS for training programs and consulting services.',
    features: [
      'Corporate / B2B website',
      'CMS',
      'Training programs',
      'Consulting services',
      'Admin panel',
      'PostgreSQL',
      'Docker',
    ],
  },
  {
    name: 'Learn to Grow Academy',
    category: 'Education',
    initials: 'LG',
    logo: ltgLogo,
    blurb:
      'An education website with a CMS for course management, testimonials, enquiries and a media library.',
    features: [
      'Education website',
      'CMS',
      'Course management',
      'Testimonials',
      'Enquiries',
      'Media library',
    ],
  },
  {
    name: 'Amalfi',
    category: 'Restaurant',
    initials: 'AM',
    logo: amalfiLogo,
    blurb:
      'A restaurant website with a menu system and admin, served with Docker, Gunicorn and Nginx.',
    features: ['Restaurant website', 'Menu', 'Admin panel', 'Docker / Gunicorn / Nginx'],
  },
]
