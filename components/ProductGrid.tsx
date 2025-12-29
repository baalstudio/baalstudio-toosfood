import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Filter, Search, XCircle, ArrowLeft } from 'lucide-react';

interface ProductGridProps {
  isLanding?: boolean;
  onProductClick?: (productId: number) => void;
}

const products: Product[] = [
  { id: 1, title: 'آرد برنج توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/35t.png', description: 'آرد برنج با کیفیت عالی، تهیه شده از بهترین برنج‌های ایرانی، مناسب برای انواع دسر و شیرینی.', price: 45000, rating: 4.8, isAvailable: true, isNew: true },
  { id: 2, title: 'زیره سیاه توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/31t.png', description: 'زیره سیاه اعلا، با عطر و طعم فوق‌العاده، پاک شده و آماده مصرف.', price: 120000, rating: 4.9, isAvailable: true },
  { id: 3, title: 'زرشک توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/30t.png', description: 'زرشک درجه یک، با رنگی شفاف و طعمی عالی، دستچین شده برای سفره‌های شما.', price: 180000, rating: 4.7, isAvailable: true },
  { id: 4, title: 'زنجبیل توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/29t.png', description: 'پودر زنجبیل خالص، با تندی و عطر طبیعی، مناسب برای انواع دمنوش و غذا.', price: 65000, rating: 4.6, isAvailable: true },
  { id: 5, title: 'سماق توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/28t.png', description: 'پودر سماق قرمز درجه یک، با ترشی طبیعی، مناسب برای انواع کباب و غذاهای ایرانی.', price: 55000, rating: 4.5, isAvailable: true },
  { id: 6, title: 'خلال پسته توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/27t.png', description: 'خلال پسته سبز و درجه یک، با کیفیت صادراتی، مناسب برای تزیین انواع غذا و دسر.', price: 350000, rating: 5.0, isAvailable: true },
  { id: 7, title: 'خاکشیر توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/26t.png', description: 'خاکشیر شسته شده و تمیز، بدون خاکه، مناسب برای تهیه انواع شربت‌های سنتی.', price: 85000, rating: 4.8, isAvailable: true },
  { id: 8, title: 'کشمش پلویی توس', category: 'ادویه و خشکبار', image: 'https://www.toos-food.com/wp-content/uploads/25t.png', description: 'کشمش پلویی آفتابی، پاک شده و بدون دم، با شیرینی طبیعی و ماندگاری بالا.', price: 140000, rating: 4.7, isAvailable: true },
  { id: 9, title: 'پودر سوخاری توس', category: 'پودر سوخاری', image: 'https://www.toos-food.com/wp-content/uploads/3d-Toos.png', description: 'پودر سوخاری با دانه‌بندی استاندارد، برای ترد شدن انواع شنیسل و مرغ سوخاری.', price: 42000, rating: 4.4, isAvailable: true },
  { id: 10, title: 'پودر کتلت توس', category: 'پودر سوخاری', image: 'https://www.toos-food.com/wp-content/uploads/2.png', description: 'ترکیب کامل آرد و ادویه‌جات مخصوص برای تهیه یک کتلت ترد و خوشمزه.', price: 38000, rating: 4.6, isAvailable: true },
  { id: 11, title: 'پودر سوخاری اسپایسی توس', category: 'پودر سوخاری', image: 'https://www.toos-food.com/wp-content/uploads/5.png', description: 'پودر سوخاری با طعم تند و فلفلی، مناسب برای علاقه‌مندان به غذاهای اسپایسی.', price: 45000, rating: 4.7, isAvailable: true },
  { id: 12, title: 'آرد سوخاری توس', category: 'پودر سوخاری', image: 'https://www.toos-food.com/wp-content/uploads/1.png', description: 'آرد سوخاری با کیفیت عالی، مناسب برای پوشش‌دهی انواع غذاهای سرخ‌کردنی.', price: 35000, rating: 4.3, isAvailable: true },
  { id: 13, title: 'لیمو عمانی ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/14t-1.png', description: 'لیمو عمانی درجه یک در بسته‌بندی اقتصادی ده کیلویی، مناسب برای رستوران‌ها و مراکز تهیه غذا.', price: 950000, rating: 4.8, isAvailable: true },
  { id: 14, title: 'سویا ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/15tpng.png', description: 'پروتئین سویا با کیفیت عالی در بسته‌بندی ده کیلویی، پاک شده و یکدست.', price: 380000, rating: 4.5, isAvailable: true },
  { id: 15, title: 'جوپرک ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/000000.png', description: 'جو پرک تازه و با کیفیت در بسته‌بندی ده کیلویی، مناسب برای انواع سوپ و آش.', price: 280000, rating: 4.7, isAvailable: true },
  { id: 16, title: 'لوبیاقرمز ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/2t-2.png', description: 'لوبیا قرمز درجه یک و یکدست در بسته‌بندی ده کیلویی، مناسب برای مصارف عمده.', price: 1100000, rating: 4.9, isAvailable: true },
  { id: 17, title: 'جو پوست کنده ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/13t-1.png', description: 'جو پوست کنده با کیفیت عالی، پاک شده و آماده طبخ در بسته‌بندی ده کیلویی.', price: 260000, rating: 4.6, isAvailable: true },
  { id: 18, title: 'بلغور گندم ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/12t-1.png', description: 'بلغور گندم تازه و با کیفیت در بسته‌بندی اقتصادی ده کیلویی.', price: 240000, rating: 4.4, isAvailable: true },
  { id: 19, title: 'بلغور جو ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/11tpng.png', description: 'بلغور جو با کیفیت عالی، مناسب برای انواع آش و غذاهای سنتی در بسته‌بندی ده کیلویی.', price: 230000, rating: 4.5, isAvailable: true },
  { id: 20, title: 'نشاسته ده کیلویی توس', category: 'حبوبات', image: 'https://www.toos-food.com/wp-content/uploads/10.png', description: 'نشاسته گندم با کیفیت عالی، سفید و شفاف در بسته‌بندی ده کیلویی.', price: 320000, rating: 4.7, isAvailable: true },
  { id: 21, title: 'سبزی قرمه سبزی توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/14t.png', description: 'ترکیب سبزیجات قرمه سبزی، شسته شده و خرد شده با رعایت اصول بهداشتی.', price: 58000, rating: 4.9, isAvailable: true },
  { id: 22, title: 'سبزی پلو توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/34tpng.png', description: 'سبزی پلویی معطر و تازه، آماده برای طبخ یک پلوی ایرانی اصیل.', price: 58000, rating: 4.8, isAvailable: true },
  { id: 23, title: 'سبزی آش توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/12t.png', description: 'سبزی مخصوص آش، با ترکیب استاندارد و کیفیت عالی.', price: 55000, rating: 4.7, isAvailable: true },
  { id: 24, title: 'سبزی کوکو توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/13t.png', description: 'سبزی کوکو تازه و خوش عطر، آماده برای تهیه یک کوکوی ترد و خوشمزه.', price: 58000, rating: 4.8, isAvailable: true },
  { id: 25, title: 'شوید خشک توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/33t.png', description: 'شوید خشک با عطر ماندگار و رنگ سبز طبیعی، بدون هیچ‌گونه ناخالصی.', price: 45000, rating: 4.9, isAvailable: true },
  { id: 26, title: 'نعناع خشک توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/32t.png', description: 'نعناع خشک معطر، تهیه شده از بهترین برگ‌های نعناع، مناسب برای دوغ و ماست.', price: 42000, rating: 4.8, isAvailable: true },
  { id: 27, title: 'جعفری خشک توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/16t.png', description: 'جعفری خشک با کیفیت بالا، مناسب برای انواع سوپ و خوراک.', price: 40000, rating: 4.6, isAvailable: true },
  { id: 28, title: 'مرزه توس', category: 'سبزیجات', image: 'https://www.toos-food.com/wp-content/uploads/17t.png', description: 'مرزه خشک معطر و با کیفیت، پاک شده و آماده مصرف.', price: 40000, rating: 4.7, isAvailable: true },
];

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