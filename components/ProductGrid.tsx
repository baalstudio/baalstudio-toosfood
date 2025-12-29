import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { ChevronDown, Filter, Search, XCircle, ArrowLeft } from 'lucide-react';

interface ProductGridProps {
  isLanding?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    title: 'نخود کرمانشاه',
    category: 'حبوبات',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=800&auto=format&fit=crop',
    description: 'نخود درجه یک، درشت و زودپز، پاک شده با دستگاه‌های لیزری.',
    price: 85000,
    rating: 4.8,
    isAvailable: true,
  },
  {
    id: 2,
    title: 'عدس سبز کانادایی',
    category: 'حبوبات',
    image: 'https://images.unsplash.com/photo-1599320878393-242d5442566c?q=80&w=800&auto=format&fit=crop',
    description: 'عدس ریز و خوش‌پخت، سرشار از آهن، مناسب برای انواع سوپ و خوراک.',
    price: 92000,
    rating: 4.5,
    isAvailable: true,
  },
  {
    id: 3,
    title: 'لوبیا قرمز',
    category: 'حبوبات',
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=800&auto=format&fit=crop',
    description: 'لوبیا قرمز مجلسی، یکدست و بدون شکستگی، بسته‌بندی ۹۰۰ گرمی.',
    price: 110000,
    rating: 4.9,
    isAvailable: true,
  },
  {
    id: 4,
    title: 'لپه آذرشهر',
    category: 'حبوبات',
    image: 'https://images.unsplash.com/photo-1515543904379-3d757afe9c6c?q=80&w=800&auto=format&fit=crop',
    description: 'لپه ریز زرد طلایی، خوش عطر و طعم برای قیمه اصیل ایرانی.',
    price: 88000,
    rating: 4.7,
    isAvailable: true,
  },
  {
    id: 5,
    title: 'لوبیا چیتی',
    category: 'حبوبات',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=800&auto=format&fit=crop',
    description: 'لوبیا چیتی تازه، بافت نرم و لعاب‌دار، انتخابی عالی برای خوراک.',
    price: 125000,
    rating: 4.6,
    isAvailable: true,
  },
  {
    id: 6,
    title: 'سویا دانه ریز',
    category: 'غلات',
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?q=80&w=800&auto=format&fit=crop',
    description: 'پروتئین گیاهی سویا، بافت گوشتی مناسب، جایگزین سالم پروتئین حیوانی.',
    price: 45000,
    rating: 4.2,
    isAvailable: true,
  },
  {
    id: 7,
    title: 'گردو مغز سفید',
    category: 'خشکبار',
    image: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=800&auto=format&fit=crop',
    description: 'مغز گردوی درجه یک ایرانی، چرب و خوش‌خوراک، دستچین شده.',
    price: 480000,
    rating: 5.0,
    isAvailable: true,
  },
  {
    id: 8,
    title: 'پسته اکبری',
    category: 'خشکبار',
    image: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?q=80&w=800&auto=format&fit=crop',
    description: 'پسته اکبری اعلا، خندان و کشیده، با نمک دریایی تفت داده شده.',
    price: 750000,
    rating: 4.9,
    isAvailable: true,
  },
];

export const ProductGrid: React.FC<ProductGridProps> = ({ isLanding = false }) => {
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
              <div className="relative h-52 overflow-hidden bg-gray-200">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                   <span className="text-toos-green font-black text-sm">
                      {product.price.toLocaleString()} تومان
                   </span>
                   <button className="text-toos-dark font-bold text-xs hover:text-toos-gold flex items-center gap-1 transition-colors">
                      ثبت سفارش
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