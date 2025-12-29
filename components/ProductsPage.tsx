import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Product } from '../types';
import { 
  Search, X, ChevronRight, SlidersHorizontal, 
  ArrowUpDown, LayoutGrid, List, Star, Heart, 
  CheckCircle2, AlertCircle, Trash2, ArrowLeft 
} from 'lucide-react';

export const allProducts: Product[] = [
  { id: 1, title: 'آرد برنج توس', category: 'ادویه و خشکبار', image: '/img/product-1.png', description: 'آرد برنج با کیفیت عالی، تهیه شده از بهترین برنج‌های ایرانی، مناسب برای انواع دسر و شیرینی.', price: 45000, rating: 4.8, isAvailable: true, isNew: true },
  { id: 2, title: 'زیره سیاه توس', category: 'ادویه و خشکبار', image: '/img/product-2.png', description: 'زیره سیاه اعلا، با عطر و طعم فوق‌العاده، پاک شده و آماده مصرف.', price: 120000, rating: 4.9, isAvailable: true },
  { id: 3, title: 'زرشک توس', category: 'ادویه و خشکبار', image: '/img/product-3.png', description: 'زرشک درجه یک، با رنگی شفاف و طعمی عالی، دستچین شده برای سفره‌های شما.', price: 180000, rating: 4.7, isAvailable: true },
  { id: 4, title: 'زنجبیل توس', category: 'ادویه و خشکبار', image: '/img/product-4.png', description: 'پودر زنجبیل خالص، با تندی و عطر طبیعی، مناسب برای انواع دمنوش و غذا.', price: 65000, rating: 4.6, isAvailable: true },
  { id: 5, title: 'سماق توس', category: 'ادویه و خشکبار', image: '/img/product-5.png', description: 'پودر سماق قرمز درجه یک، با ترشی طبیعی، مناسب برای انواع کباب و غذاهای ایرانی.', price: 55000, rating: 4.5, isAvailable: true },
  { id: 6, title: 'خلال پسته توس', category: 'ادویه و خشکبار', image: '/img/product-6.png', description: 'خلال پسته سبز و درجه یک، با کیفیت صادراتی، مناسب برای تزیین انواع غذا و دسر.', price: 350000, rating: 5.0, isAvailable: true },
  { id: 7, title: 'خاکشیر توس', category: 'ادویه و خشکبار', image: '/img/product-7.png', description: 'خاکشیر شسته شده و تمیز، بدون خاکه، مناسب برای تهیه انواع شربت‌های سنتی.', price: 85000, rating: 4.8, isAvailable: true },
  { id: 8, title: 'کشمش پلویی توس', category: 'ادویه و خشکبار', image: '/img/product-8.png', description: 'کشمش پلویی آفتابی، پاک شده و بدون دم، با شیرینی طبیعی و ماندگاری بالا.', price: 140000, rating: 4.7, isAvailable: true },
  { id: 9, title: 'پودر سوخاری توس', category: 'پودر سوخاری', image: '/img/product-9.png', description: 'پودر سوخاری با دانه‌بندی استاندارد، برای ترد شدن انواع شنیسل و مرغ سوخاری.', price: 42000, rating: 4.4, isAvailable: true },
  { id: 10, title: 'پودر کتلت توس', category: 'پودر سوخاری', image: '/img/product-10.png', description: 'ترکیب کامل آرد و ادویه‌جات مخصوص برای تهیه یک کتلت ترد و خوشمزه.', price: 38000, rating: 4.6, isAvailable: true },
  { id: 11, title: 'پودر سوخاری اسپایسی توس', category: 'پودر سوخاری', image: '/img/product-11.png', description: 'پودر سوخاری با طعم تند و فلفلی، مناسب برای علاقه‌مندان به غذاهای اسپایسی.', price: 45000, rating: 4.7, isAvailable: true },
  { id: 12, title: 'آرد سوخاری توس', category: 'پودر سوخاری', image: '/img/product-12.png', description: 'آرد سوخاری با کیفیت عالی، مناسب برای پوشش‌دهی انواع غذاهای سرخ‌کردنی.', price: 35000, rating: 4.3, isAvailable: true },
  { id: 13, title: 'لیمو عمانی ده کیلویی توس', category: 'حبوبات', image: '/img/product-13.png', description: 'لیمو عمانی درجه یک در بسته‌بندی اقتصادی ده کیلویی، مناسب برای رستوران‌ها و مراکز تهیه غذا.', price: 950000, rating: 4.8, isAvailable: true },
  { id: 14, title: 'سویا ده کیلویی توس', category: 'حبوبات', image: '/img/product-14.png', description: 'پروتئین سویا با کیفیت عالی در بسته‌بندی ده کیلویی، پاک شده و یکدست.', price: 380000, rating: 4.5, isAvailable: true },
  { id: 15, title: 'جوپرک ده کیلویی توس', category: 'حبوبات', image: '/img/product-15.png', description: 'جو پرک تازه و با کیفیت در بسته‌بندی ده کیلویی، مناسب برای انواع سوپ و آش.', price: 280000, rating: 4.7, isAvailable: true },
  { id: 16, title: 'لوبیاقرمز ده کیلویی توس', category: 'حبوبات', image: '/img/product-16.png', description: 'لوبیا قرمز درجه یک و یکدست در بسته‌بندی ده کیلویی، مناسب برای مصارف عمده.', price: 1100000, rating: 4.9, isAvailable: true },
  { id: 17, title: 'جو پوست کنده ده کیلویی توس', category: 'حبوبات', image: '/img/product-17.png', description: 'جو پوست کنده با کیفیت عالی، پاک شده و آماده طبخ در بسته‌بندی ده کیلویی.', price: 260000, rating: 4.6, isAvailable: true },
  { id: 18, title: 'بلغور گندم ده کیلویی توس', category: 'حبوبات', image: '/img/product-18.png', description: 'بلغور گندم تازه و با کیفیت در بسته‌بندی اقتصادی ده کیلویی.', price: 240000, rating: 4.4, isAvailable: true },
  { id: 19, title: 'بلغور جو ده کیلویی توس', category: 'حبوبات', image: '/img/product-19.png', description: 'بلغور جو با کیفیت عالی، مناسب برای انواع آش و غذاهای سنتی در بسته‌بندی ده کیلویی.', price: 230000, rating: 4.5, isAvailable: true },
  { id: 20, title: 'نشاسته ده کیلویی توس', category: 'حبوبات', image: '/img/product-20.png', description: 'نشاسته گندم با کیفیت عالی، سفید و شفاف در بسته‌بندی ده کیلویی.', price: 320000, rating: 4.7, isAvailable: true },
  { id: 21, title: 'سبزی قرمه سبزی توس', category: 'سبزیجات', image: '/img/product-21.png', description: 'ترکیب سبزیجات قرمه سبزی، شسته شده و خرد شده با رعایت اصول بهداشتی.', price: 58000, rating: 4.9, isAvailable: true },
  { id: 22, title: 'سبزی پلو توس', category: 'سبزیجات', image: '/img/product-22.png', description: 'سبزی پلویی معطر و تازه، آماده برای طبخ یک پلوی ایرانی اصیل.', price: 58000, rating: 4.8, isAvailable: true },
  { id: 23, title: 'سبزی آش توس', category: 'سبزیجات', image: '/img/product-23.png', description: 'سبزی مخصوص آش، با ترکیب استاندارد و کیفیت عالی.', price: 55000, rating: 4.7, isAvailable: true },
  { id: 24, title: 'سبزی کوکو توس', category: 'سبزیجات', image: '/img/product-24.png', description: 'سبزی کوکو تازه و خوش عطر، آماده برای تهیه یک کوکوی ترد و خوشمزه.', price: 58000, rating: 4.8, isAvailable: true },
  { id: 25, title: 'شوید خشک توس', category: 'سبزیجات', image: '/img/product-25.png', description: 'شوید خشک با عطر ماندگار و رنگ سبز طبیعی، بدون هیچ‌گونه ناخالصی.', price: 45000, rating: 4.9, isAvailable: true },
  { id: 26, title: 'نعناع خشک توس', category: 'سبزیجات', image: '/img/product-26.png', description: 'نعناع خشک معطر، تهیه شده از بهترین برگ‌های نعناع، مناسب برای دوغ و ماست.', price: 42000, rating: 4.8, isAvailable: true },
  { id: 27, title: 'جعفری خشک توس', category: 'سبزیجات', image: '/img/product-27.png', description: 'جعفری خشک با کیفیت بالا، مناسب برای انواع سوپ و خوراک.', price: 40000, rating: 4.6, isAvailable: true },
  { id: 28, title: 'مرزه توس', category: 'سبزیجات', image: '/img/product-28.png', description: 'مرزه خشک معطر و با کیفیت، پاک شده و آماده مصرف.', price: 40000, rating: 4.7, isAvailable: true },
];

interface ProductsPageProps {
  onProductClick?: (productId: number) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onProductClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'rating'>('default');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const productsTopRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => ['همه', ...Array.from(new Set(allProducts.map(p => p.category)))], []);

  useEffect(() => {
    if (productsTopRef.current) {
      // Scroll to top of products list when filters change, 
      // but only if we are already scrolled past it
      const rect = productsTopRef.current.getBoundingClientRect();
      if (rect.top < 100) {
        window.scrollTo({
          top: window.scrollY + rect.top - 120, // 120px offset for fixed navbar
          behavior: 'smooth'
        });
      }
    }
  }, [selectedCategory, searchQuery, onlyAvailable]);

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter(p => {
      const matchesSearch = p.title.includes(searchQuery) || p.description.includes(searchQuery);
      const matchesCategory = selectedCategory === 'همه' || p.category === selectedCategory;
      const matchesAvailability = !onlyAvailable || p.isAvailable;
      return matchesSearch && matchesCategory && matchesAvailability;
    });

    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, selectedCategory, onlyAvailable, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('همه');
    setOnlyAvailable(false);
    setSortBy('default');
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'همه' || onlyAvailable;

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-100 to-white border-b border-gray-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-right">
           <nav className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-500 mb-6">
              <span className="hover:text-toos-green cursor-pointer">خانه</span>
              <ChevronRight size={14} />
              <span className="text-toos-green font-bold">فروشگاه محصولات</span>
           </nav>
           <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
             خرید مستقیم از <span className="text-toos-green">کارخانه</span>
           </h1>
           <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
             محصولات تازه و دستچین شده توس فود را با تضمین قیمت و کیفیت درب منزل تحویل بگیرید. 
             ما دانه دانه سلامتی را برای شما بسته‌بندی کرده‌ایم.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0">
             <div className="sticky top-24 space-y-8 bg-gray-50/50 p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
                
                {/* Search Bar */}
                <div>
                  <label className="block text-sm font-black text-gray-900 mb-3 pr-2">جستجوی محصول</label>
                  <div className="relative group">
                    <input 
                      type="text"
                      placeholder="مثلا: پسته، لوبیا..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pr-4 pl-10 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none text-sm transition-all"
                    />
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-toos-green" />
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-sm font-black text-gray-900 mb-3 pr-2">دسته‌بندی‌ها</label>
                  <div className="flex flex-wrap lg:flex-col gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`flex-1 lg:w-full text-right px-4 py-3 rounded-2xl text-sm transition-all flex justify-between items-center ${
                          selectedCategory === cat 
                            ? 'bg-toos-green text-white font-bold shadow-lg shadow-green-100' 
                            : 'bg-white border border-gray-100 text-gray-600 hover:border-toos-green/30'
                        }`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <CheckCircle2 size={16} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability Toggle */}
                <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-gray-100">
                   <span className="text-sm font-bold text-gray-700">فقط کالاهای موجود</span>
                   <button 
                      onClick={() => setOnlyAvailable(!onlyAvailable)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${onlyAvailable ? 'bg-toos-green' : 'bg-gray-200'}`}
                   >
                     <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${onlyAvailable ? '-translate-x-6' : '-translate-x-1'}`} />
                   </button>
                </div>

                {/* Reset Filters */}
                {hasActiveFilters && (
                  <button 
                    onClick={resetFilters}
                    className="w-full py-4 flex items-center justify-center gap-2 text-red-500 hover:bg-red-50 rounded-2xl font-bold text-sm transition-all border border-dashed border-red-200"
                  >
                    <Trash2 size={18} />
                    حذف فیلترها
                  </button>
                )}
             </div>
          </aside>

          {/* Main Listing Area */}
          <main className="flex-1" ref={productsTopRef}>
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-2 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 pr-4">
                   <div className="p-2 bg-toos-light text-toos-green rounded-xl">
                      <SlidersHorizontal size={18} />
                   </div>
                   <span className="text-sm text-gray-500 font-medium">
                     <span className="font-black text-gray-900">{filteredProducts.length}</span> محصول پیدا شد
                   </span>
                </div>

                <div className="flex items-center gap-3">
                   {/* Sort Select */}
                   <div className="relative group">
                      <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as any)}
                        className="bg-gray-50 border border-gray-100 rounded-2xl py-2.5 pr-4 pl-10 text-sm font-bold outline-none focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green appearance-none cursor-pointer min-w-[180px]"
                      >
                        <option value="default">پیش‌فرض (جدیدترین)</option>
                        <option value="rating">محبوب‌ترین‌ها</option>
                      </select>
                      <ArrowUpDown size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                   </div>

                   {/* View Switcher */}
                   <div className="flex items-center bg-gray-100 p-1.5 rounded-2xl">
                      <button 
                        onClick={() => setViewType('grid')}
                        className={`p-2 rounded-xl transition-all ${viewType === 'grid' ? 'bg-white shadow-md text-toos-green' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <LayoutGrid size={20} />
                      </button>
                      <button 
                         onClick={() => setViewType('list')}
                         className={`p-2 rounded-xl transition-all ${viewType === 'list' ? 'bg-white shadow-md text-toos-green' : 'text-gray-400 hover:text-gray-600'}`}
                      >
                        <List size={20} />
                      </button>
                   </div>
                </div>
            </div>

            {/* Active Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
               {selectedCategory !== 'home' && selectedCategory !== 'همه' && (
                  <div className="flex items-center gap-1 bg-toos-light text-toos-green px-3 py-1.5 rounded-full text-xs font-bold border border-green-100">
                    دسته: {selectedCategory}
                    <X size={14} className="cursor-pointer" onClick={() => setSelectedCategory('همه')} />
                  </div>
               )}
               {onlyAvailable && (
                  <div className="flex items-center gap-1 bg-toos-light text-toos-green px-3 py-1.5 rounded-full text-xs font-bold border border-green-100">
                    موجود
                    <X size={14} className="cursor-pointer" onClick={() => setOnlyAvailable(false)} />
                  </div>
               )}
            </div>

            {/* Grid/List Result */}
            <div className={viewType === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8" 
                : "flex flex-col gap-6"
            }>
              {filteredProducts.map(product => (
                <div 
                  key={product.id}
                  className={`bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 group relative ${
                    viewType === 'list' ? 'flex items-center gap-8 p-6' : 'flex flex-col'
                  } ${!product.isAvailable ? 'opacity-80' : ''}`}
                >
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-toos-gold text-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg">جدید</span>
                    )}
                    {!product.isAvailable && (
                      <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-[10px] font-black shadow-lg">ناموجود</span>
                    )}
                  </div>

                  {/* Like Button */}
                  <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:bg-white shadow-md transition-all">
                    <Heart size={20} />
                  </button>

                  {/* Product Image */}
                  <div className={`relative overflow-hidden bg-gray-50 flex items-center justify-center ${
                    viewType === 'list' ? 'w-48 h-48 rounded-3xl' : 'aspect-square'
                  }`}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className={`transition-transform duration-700 group-hover:scale-110 object-contain p-4 ${
                        !product.isAvailable ? 'grayscale' : ''
                      }`}
                    />
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-2xl text-[10px] font-black text-toos-green uppercase shadow-md flex items-center gap-1.5">
                      <Star size={12} className="fill-toos-gold text-toos-gold" />
                      {product.rating}
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className={`p-8 flex flex-col flex-grow ${viewType === 'list' ? 'p-0' : ''}`}>
                    <div className="mb-4">
                      <span className="text-[10px] font-black text-toos-green mb-1 block uppercase tracking-wider">{product.category}</span>
                      <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-toos-green transition-colors leading-tight">{product.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col gap-4">
                       <div className="flex items-center justify-between">
                          {product.isAvailable ? (
                             <div className="flex items-center gap-2 text-toos-green text-xs font-black">
                               <div className="w-2 h-2 bg-toos-green rounded-full animate-pulse"></div>
                               موجود در انبار کارخانه
                             </div>
                          ) : (
                             <div className="flex items-center gap-2 text-red-400 text-xs font-black">
                               <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                               ناموجود
                             </div>
                          )}
                          <div className="flex items-center gap-1 text-gray-400 text-[10px] font-bold">
                            <Star size={12} className="fill-toos-gold text-toos-gold" />
                            {product.rating} امتیاز
                          </div>
                       </div>

                       <button 
                        onClick={() => onProductClick?.(product.id)}
                        className="w-full flex items-center justify-center gap-2 py-4 rounded-[1.25rem] font-black text-sm transition-all bg-toos-green text-white hover:bg-toos-dark shadow-lg shadow-green-100 active:scale-95"
                       >
                          مشاهده جزئیات محصول
                          <ArrowLeft size={18} />
                       </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* No Results */}
              {filteredProducts.length === 0 && (
                <div className="col-span-full py-32 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95">
                  <div className="w-32 h-32 bg-gray-50 rounded-[3rem] flex items-center justify-center mb-8 border border-gray-100 shadow-inner">
                    <Search size={56} className="text-gray-300" />
                  </div>
                  <h3 className="text-3xl font-black text-gray-900 mb-4">هیچ موردی پیدا نشد!</h3>
                  <p className="text-gray-500 max-w-sm mb-10 leading-relaxed font-medium">
                    جستجوی شما نتیجه‌ای نداشت. شاید لازم باشد فیلترها را کمی تغییر دهید یا واژه‌ی دیگری را امتحان کنید.
                  </p>
                  <button 
                    onClick={resetFilters}
                    className="bg-toos-green text-white px-10 py-4 rounded-2xl font-black hover:bg-toos-dark transition-all shadow-2xl shadow-green-200"
                  >
                    نمایش تمام محصولات
                  </button>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};