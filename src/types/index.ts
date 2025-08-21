export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'skincare' | 'makeup' | 'haircare' | 'bodycare';
  subcategory?: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  ingredients?: string[];
  skinType?: ('all' | 'dry' | 'oily' | 'combination' | 'sensitive' | 'normal')[];
  tags?: string[];
  affiliateLinks?: AffiliateLink[];
}

export interface AffiliateLink {
  store: string;
  price: number;
  url: string;
  inStock: boolean;
  lastUpdated: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
}