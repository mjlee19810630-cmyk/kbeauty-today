'use client';

import { ExternalLink, TrendingDown, Star } from 'lucide-react';
import { Product } from '@/types';

interface PriceWidgetProps {
  products?: Product[];
}

export function PriceWidget({}: PriceWidgetProps) {
  // Sample data - in real app this would come from API
  const sampleDeals = [
    {
      name: 'COSRX Snail Essence',
      brand: 'COSRX',
      currentPrice: 23.99,
      originalPrice: 35.00,
      discount: 31,
      rating: 4.8
    },
    {
      name: 'Beauty of Joseon Glow Serum',
      brand: 'Beauty of Joseon', 
      currentPrice: 17.50,
      originalPrice: 22.00,
      discount: 20,
      rating: 4.7
    },
    {
      name: 'PURITO Centella Serum',
      brand: 'PURITO',
      currentPrice: 16.90,
      originalPrice: 19.90,
      discount: 15,
      rating: 4.6
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900">🔥 Today&apos;s Best Deals</h3>
        <a 
          href="https://kbeautyprice.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-pink-500 hover:text-pink-600 font-medium flex items-center"
        >
          View All <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>

      <div className="space-y-3">
        {sampleDeals.map((deal, index) => (
          <div key={index} className="group border border-gray-100 rounded-lg p-3 hover:border-pink-200 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-sm text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1">
                  {deal.name}
                </h4>
                <p className="text-xs text-gray-500 mb-1">{deal.brand}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-bold text-green-600">${deal.currentPrice}</span>
                  <span className="text-xs text-gray-400 line-through">${deal.originalPrice}</span>
                  <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5 rounded font-medium">
                    -{deal.discount}%
                  </span>
                </div>
              </div>
              
              <div className="text-right ml-3">
                <div className="flex items-center mb-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-gray-600 ml-1">{deal.rating}</span>
                </div>
                <a 
                  href={`https://kbeautyprice.com/product/${deal.name.toLowerCase().replace(/\s+/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-600 transition-colors"
                >
                  Compare
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-gray-100">
        <a 
          href="https://kbeautyprice.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2"
        >
          <TrendingDown className="h-4 w-4" />
          <span>Find More Deals</span>
        </a>
      </div>

      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">
          Prices updated every hour • Compare 20+ stores
        </p>
      </div>
    </div>
  );
}