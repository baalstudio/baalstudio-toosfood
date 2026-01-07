import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Filter, Search, XCircle, ArrowLeft } from 'lucide-react';
import { allProducts as products } from '../data/products';

interface ProductGridProps {
  isLanding?: boolean;
  onProductClick?: (productId: number) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ isLanding = false, onProductClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = useMemo(() => ['همه', ...Array.from(new Set(products.map(p => p.category)))], []);

  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesCategory = selectedCategory === 'همه' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (isLanding) {
        return result.slice(0, 4);
    }
    return result;
  }, [selectedCategory, searchQuery, isLanding]);

  return (
    <section id="products" className={`py-12 scroll-mt-24 ${isLanding ? 'bg-white' : 'py-24 bg-green-50/30'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="mb-12">
          <div className={`text-center md:text-right mb-10 ${isLanding ? 'md:text-center' : ''}`}>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {isLanding ? 'محصولات ' : 'ویترین '}
              <span className="text-toos-green">{isLanding ? 'برگزیده' : 'محصولات'}</span>
            </h2>
            <p className="text-gray-500 text-lg">
              {isLanding ? 'برخی از پرفروش‌ترین محصولات کارخانه توس فود' : 'با استفاده از ابزارهای زیر، محصول مورد نظر خود را بیابید'}
            </p>
          </div>

          {!isLanding && (
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
              {/* Search Input */}
              <div className="relative w-full lg:max-w-md group">
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-toos-green transition-colors">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="جستجوی نام محصول یا ویژگی..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full bg-gray-50 border border-gray-200 text-gray-700 py-3.5 pr-12 pl-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-toos-green/20 focus:border-toos-green transition-all font-medium"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 left-4 flex items-center text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <XCircle size={18} />
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500 font-bold ml-2">
                  <Filter size={16} className="text-toos-green" />
                  <span>دسته بندی:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        selectedCategory === cat
                          ? 'bg-toos-green text-white shadow-lg shadow-green-100'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100 animate-in fade-in slide-in-from-bottom-4"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-toos-green uppercase tracking-wider shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-toos-green transition-colors">{product.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <div className="pt-4 border-t border-gray-50 flex items-center justify-center">
                   <button 
                    onClick={() => onProductClick?.(product.id)}
                    className="text-toos-green font-bold text-sm hover:text-toos-dark flex items-center gap-1 transition-colors"
                   >
                      مشاهده جزئیات
                      <ArrowLeft size={14} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};