'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, ShoppingBag, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const discount = product.originalPrice 
    ? calculateDiscount(product.originalPrice, product.price)
    : 0;

  const lowestPrice = product.affiliateLinks && product.affiliateLinks.length > 0
    ? Math.min(...product.affiliateLinks.map(link => link.price))
    : product.price;

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
          -{discount}%
        </div>
      )}

      {/* Favorite Button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
      >
        <Heart 
          className={`h-4 w-4 transition-colors ${
            isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'
          }`} 
        />
      </button>

      {/* Product Image */}
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gray-50">
          {!imageError ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <ShoppingBag className="h-16 w-16" />
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1 font-medium">
          {product.brand}
        </p>

        {/* Product Name */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[48px] hover:text-pink-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600 ml-1 font-medium">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-400 ml-2">
            ({product.reviews.toLocaleString()} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(lowestPrice)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          {product.affiliateLinks && product.affiliateLinks.length > 1 && (
            <span className="text-xs text-green-600 font-medium">
              {product.affiliateLinks.length} stores
            </span>
          )}
        </div>

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-pink-50 text-pink-600 text-xs rounded-full"
              >
                {tag.replace('-', ' ')}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          {/* Compare Prices Button */}
          <Link
            href={`/price-compare/${product.id}`}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-full font-medium hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Compare Prices</span>
          </Link>

          {/* Quick Buy - Best Price */}
          {product.affiliateLinks && product.affiliateLinks.length > 0 && (
            <a
              href={product.affiliateLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white border-2 border-gray-200 text-gray-700 py-2 px-4 rounded-full font-medium hover:border-pink-300 hover:text-pink-600 transition-all flex items-center justify-center space-x-2"
            >
              <span>Buy at {product.affiliateLinks[0].store}</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="mt-3 text-center">
            <span className="text-sm text-red-500 font-medium">Out of Stock</span>
          </div>
        )}
      </div>
    </div>
  );
}