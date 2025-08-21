import { Header } from '@/components/Header';
import { BlogCard } from '@/components/BlogCard';
import { PriceWidget } from '@/components/PriceWidget';
import { blogPosts, categories } from '@/data/blog-posts';
import { TrendingUp, Clock, Star, Users, ArrowRight, Newspaper, Search, Bookmark } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);
  const popularPosts = blogPosts.slice(2, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - News Portal Style */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Featured Article */}
            <div className="lg:col-span-2">
              <div className="relative">
                <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded mb-4">
                  FEATURED
                </span>
                <BlogCard post={featuredPost} size="large" />
              </div>
            </div>

            {/* Sidebar with Price Widget and Quick Links */}
            <div className="space-y-6">
              {/* Price Comparison Widget */}
              <PriceWidget />

              {/* Quick Categories */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Newspaper className="h-5 w-5 mr-2 text-pink-500" />
                  Browse Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center">
                        <span className={`w-3 h-3 rounded-full ${category.color} mr-3`}></span>
                        <span className="font-medium text-gray-700 group-hover:text-pink-600">
                          {category.name}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-pink-500" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-pink-100 text-sm mb-4">
                  Get the latest K-Beauty news and trends delivered to your inbox.
                </p>
                <div className="space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <button className="w-full bg-white text-pink-500 py-2 rounded-lg font-medium text-sm hover:bg-gray-100 transition">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-pink-500" />
                  Latest Articles
                </h2>
                <Link 
                  href="/blog"
                  className="text-pink-500 hover:text-pink-600 font-medium flex items-center"
                >
                  View All <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              {/* Articles Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Trending Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-6 w-6 mr-2 text-orange-500" />
                  Trending Now
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.slice(0, 4).map((post, index) => (
                    <div key={post.id} className="flex space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="font-semibold text-gray-900 hover:text-pink-600 transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 line-clamp-1">{post.excerpt}</p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <Users className="h-3 w-3 mr-1" />
                          <span>2.3k views</span>
                          <span className="mx-2">•</span>
                          <span>{post.author}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-orange-500" />
                  Popular This Week
                </h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={post.id} className="flex space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-sm font-semibold text-gray-600">
                        {index + 1}
                      </span>
                      <div>
                        <Link href={`/blog/${post.slug}`}>
                          <h4 className="font-medium text-sm text-gray-900 hover:text-pink-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{post.author}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ad Space */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 text-center">
                <h3 className="font-bold text-gray-900 mb-2">Advertisement</h3>
                <div className="bg-white rounded-lg p-8 text-gray-400">
                  <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-200 rounded">
                    300 x 250
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a 
                    href="https://kbeautyprice.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                  >
                    <Search className="h-5 w-5 text-pink-500 mr-3" />
                    <span className="font-medium text-gray-700">Compare Prices</span>
                  </a>
                  <Link 
                    href="/brands"
                    className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    <Bookmark className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="font-medium text-gray-700">Browse Brands</span>
                  </Link>
                  <Link 
                    href="/skincare"
                    className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <TrendingUp className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="font-medium text-gray-700">Skincare Guide</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-white border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Explore K-Beauty Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all text-center"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 group-hover:scale-110 transition-transform`}></div>
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-xl font-bold">K-Beauty Today</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your trusted source for Korean beauty news, reviews, and trends.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Content</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/skincare" className="hover:text-white transition">Skincare</Link></li>
                <li><Link href="/makeup" className="hover:text-white transition">Makeup</Link></li>
                <li><Link href="/brands" className="hover:text-white transition">Brands</Link></li>
                <li><Link href="/reviews" className="hover:text-white transition">Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://kbeautyprice.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Price Compare
                  </a>
                </li>
                <li>
                  <a href="https://kbeautydupe.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    Find Dupes
                  </a>
                </li>
                <li><Link href="/ingredients" className="hover:text-white transition">Ingredient Guide</Link></li>
                <li><Link href="/routines" className="hover:text-white transition">Routine Builder</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 K-Beauty Today. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}