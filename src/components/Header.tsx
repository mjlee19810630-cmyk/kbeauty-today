'use client';

import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, Globe } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              K-Beauty Today
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/skincare" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              Skincare
            </Link>
            <Link 
              href="/makeup" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              Makeup
            </Link>
            <Link 
              href="/brands" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              Brands
            </Link>
            <Link 
              href="/reviews" 
              className="text-gray-700 hover:text-pink-500 transition font-medium"
            >
              Reviews
            </Link>
            <Link 
              href="/price-compare" 
              className="text-red-500 font-semibold hover:text-red-600 transition"
            >
              Price Compare
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search K-Beauty products..."
              className="bg-transparent outline-none flex-1 text-sm"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-pink-500 transition">
              <Globe className="h-4 w-4" />
              <span className="text-sm">EN</span>
            </button>

            {/* Favorites */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Heart className="h-5 w-5 text-gray-600" />
            </button>

            {/* Shopping */}
            <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <ShoppingBag className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/skincare" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Skincare
              </Link>
              <Link 
                href="/makeup" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Makeup
              </Link>
              <Link 
                href="/brands" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Brands
              </Link>
              <Link 
                href="/reviews" 
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                Reviews
              </Link>
              <Link 
                href="/price-compare" 
                className="px-4 py-2 text-red-500 font-semibold hover:bg-gray-100 rounded"
              >
                Price Compare
              </Link>
              
              {/* Mobile Search */}
              <div className="mx-4 mt-4 flex items-center bg-gray-100 rounded-full px-4 py-2">
                <Search className="h-4 w-4 text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent outline-none flex-1 text-sm"
                />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}