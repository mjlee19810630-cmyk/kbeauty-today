'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Eye } from 'lucide-react';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
  size?: 'small' | 'medium' | 'large';
}

export function BlogCard({ post, size = 'medium' }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      skincare: 'bg-blue-500',
      makeup: 'bg-pink-500',
      brands: 'bg-purple-500',
      reviews: 'bg-green-500',
      trends: 'bg-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (size === 'large') {
    return (
      <article className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
            </div>
          </div>
        </Link>
        
        <div className="p-6">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-pink-600 transition-colors line-clamp-2">
              {post.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>2.3k views</span>
            </div>
          </div>
          
          {post.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className={`inline-block px-2 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/blog/${post.slug}`}>
          <h3 className={`font-semibold mb-2 group-hover:text-pink-600 transition-colors line-clamp-2 ${
            size === 'small' ? 'text-lg' : 'text-xl'
          }`}>
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center">
            <User className="h-3 w-3 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}