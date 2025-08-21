import { Product } from '@/types';

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Advanced Snail 96 Mucin Power Essence',
    brand: 'COSRX',
    price: 25.00,
    originalPrice: 35.00,
    description: 'A lightweight, fast-absorbing essence formulated with 96% snail secretion filtrate to hydrate and repair damaged skin.',
    category: 'skincare',
    subcategory: 'essence',
    images: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop'
    ],
    inStock: true,
    rating: 4.8,
    reviews: 15420,
    ingredients: ['Snail Secretion Filtrate', 'Betaine', 'Butylene Glycol', 'Sodium Hyaluronate'],
    skinType: ['dry', 'normal', 'combination'],
    tags: ['hydrating', 'repairing', 'bestseller', 'sensitive-skin-friendly'],
    affiliateLinks: [
      {
        store: 'YesStyle',
        price: 25.00,
        url: 'https://yesstyle.com/cosrx-essence',
        inStock: true,
        lastUpdated: '2024-12-20'
      },
      {
        store: 'Amazon',
        price: 28.00,
        url: 'https://amazon.com/cosrx-essence',
        inStock: true,
        lastUpdated: '2024-12-20'
      }
    ]
  },
  {
    id: '2',
    name: 'Centella Unscented Serum',
    brand: 'PURITO',
    price: 16.90,
    description: 'A soothing serum enriched with centella asiatica extract to calm irritated skin and reduce redness.',
    category: 'skincare',
    subcategory: 'serum',
    images: [
      'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=400&h=400&fit=crop'
    ],
    inStock: true,
    rating: 4.6,
    reviews: 8932,
    ingredients: ['Centella Asiatica Extract', 'Niacinamide', 'Zinc PCA'],
    skinType: ['sensitive', 'combination', 'oily'],
    tags: ['soothing', 'anti-inflammatory', 'redness-reducing'],
    affiliateLinks: [
      {
        store: 'iHerb',
        price: 16.90,
        url: 'https://iherb.com/purito-serum',
        inStock: true,
        lastUpdated: '2024-12-20'
      }
    ]
  },
  {
    id: '3',
    name: 'Glow Deep Serum',
    brand: 'Beauty of Joseon',
    price: 18.00,
    originalPrice: 22.00,
    description: 'An alpha arbutin and niacinamide serum that helps to brighten skin tone and reduce dark spots.',
    category: 'skincare',
    subcategory: 'serum',
    images: [
      'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=400&fit=crop'
    ],
    inStock: true,
    rating: 4.7,
    reviews: 12456,
    ingredients: ['Alpha Arbutin', 'Niacinamide', 'Vitamin C'],
    skinType: ['all'],
    tags: ['brightening', 'dark-spot-treatment', 'anti-aging'],
    affiliateLinks: [
      {
        store: 'YesStyle',
        price: 18.00,
        url: 'https://yesstyle.com/beauty-of-joseon-serum',
        inStock: true,
        lastUpdated: '2024-12-20'
      }
    ]
  },
  {
    id: '4',
    name: 'Lip Sleeping Mask - Berry',
    brand: 'LANEIGE',
    price: 24.00,
    description: 'An overnight lip treatment that intensely moisturizes and smooths lips while you sleep.',
    category: 'skincare',
    subcategory: 'lip-care',
    images: [
      'https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=400&fit=crop'
    ],
    inStock: true,
    rating: 4.9,
    reviews: 23456,
    skinType: ['all'],
    tags: ['lip-care', 'overnight-treatment', 'moisturizing', 'luxury'],
    affiliateLinks: [
      {
        store: 'Sephora',
        price: 24.00,
        url: 'https://sephora.com/laneige-lip-mask',
        inStock: true,
        lastUpdated: '2024-12-20'
      }
    ]
  },
  {
    id: '5',
    name: 'Juicy Lasting Tint',
    brand: 'Rom&nd',
    price: 8.00,
    description: 'A water-gel type tint that provides vivid color and long-lasting wear without drying out lips.',
    category: 'makeup',
    subcategory: 'lip-tint',
    images: [
      'https://images.unsplash.com/photo-1631214540553-0f7b0c95622f?w=400&h=400&fit=crop'
    ],
    inStock: true,
    rating: 4.5,
    reviews: 9876,
    tags: ['long-lasting', 'vibrant-color', 'hydrating', 'affordable'],
    affiliateLinks: [
      {
        store: 'YesStyle',
        price: 8.00,
        url: 'https://yesstyle.com/romand-tint',
        inStock: true,
        lastUpdated: '2024-12-20'
      }
    ]
  },
  {
    id: '6',
    name: 'Perfect Cover BB Cream',
    brand: 'MISSHA',
    price: 13.00,
    originalPrice: 16.00,
    description: 'A multi-functional BB cream that provides perfect coverage with SPF 42 PA+++ protection.',
    category: 'makeup',
    subcategory: 'base-makeup',
    images: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop'
    ],
    inStock: true,
    rating: 4.4,
    reviews: 15678,
    tags: ['bb-cream', 'spf-protection', 'coverage', 'budget-friendly'],
    affiliateLinks: [
      {
        store: 'Amazon',
        price: 13.00,
        url: 'https://amazon.com/missha-bb-cream',
        inStock: true,
        lastUpdated: '2024-12-20'
      }
    ]
  }
];

export const categories = [
  {
    id: 'skincare',
    name: 'Skincare',
    description: 'Korean skincare products for every step of your routine',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=300&fit=crop',
    subcategories: [
      'cleanser',
      'toner',
      'essence',
      'serum',
      'moisturizer',
      'sunscreen',
      'mask',
      'exfoliant'
    ]
  },
  {
    id: 'makeup',
    name: 'Makeup',
    description: 'K-Beauty makeup for natural, dewy looks',
    image: 'https://images.unsplash.com/photo-1631214540553-0f7b0c95622f?w=500&h=300&fit=crop',
    subcategories: [
      'base-makeup',
      'lip-tint',
      'eyeshadow',
      'mascara',
      'blush',
      'concealer'
    ]
  },
  {
    id: 'brands',
    name: 'Brands',
    description: 'Discover popular Korean beauty brands',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=300&fit=crop'
  },
  {
    id: 'reviews',
    name: 'Reviews',
    description: 'Honest reviews and comparisons',
    image: 'https://images.unsplash.com/photo-1611080541599-8c6dbde6ed28?w=500&h=300&fit=crop'
  }
];