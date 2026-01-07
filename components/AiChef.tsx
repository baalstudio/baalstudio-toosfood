import React, { useState } from 'react';
import { ChefHat, Sparkles, Loader2, Utensils, Zap, BookOpen, ChevronRight, Share2, Printer, ShoppingCart, Star } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { generateRecipe } from '../services/openrouterService';
import { Product } from '../types';

interface AiChefProps {
  viewMode?: 'preview' | 'full';
  onFullView?: () => void;
  onProductClick?: (productId: number) => void;
  persistedState?: {
    recipe: string;
    matchingProducts: Product[];
    ingredient: string;
  };
  onStateChange?: (state: { recipe: string; matchingProducts: Product[]; ingredient: string }) => void;
}

const ProductCard: React.FC<{ product: Product; onClick?: (id: number) => void }> = ({ product, onClick }) => (
  <div 
    onClick={() => onClick?.(product.id)}
    className="bg-white border border-gray-100 rounded-3xl p-4 hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full"
  >
    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-50">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {!product.isAvailable && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-[10px] font-black">ناموجود</span>
        </div>
      )}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-toos-green bg-toos-light px-2 py-0.5 rounded-full">{product.category}</span>
        <div className="flex items-center gap-1 text-toos-gold">
          <Star size={12} fill="currentColor" />
          <span className="text-[10px] font-bold">{product.rating}</span>
        </div>
      </div>
      <h4 className="font-black text-gray-900 text-sm mb-2 group-hover:text-toos-green transition-colors line-clamp-1">{product.title}</h4>
      <p className="text-gray-500 text-[10px] line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
    </div>
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
      <div className="flex flex-col">
        <span className="text-xs font-black text-gray-900">{product.price.toLocaleString()} تومان</span>
      </div>
      <button className="p-2 bg-toos-light text-toos-green rounded-xl group-hover:bg-toos-green group-hover:text-white transition-all">
        <ShoppingCart size={16} />
      </button>
    </div>
  </div>
);

export const AiChef: React.FC<AiChefProps> = ({ 
  viewMode = 'preview', 
  onFullView, 
  onProductClick,
  persistedState,
  onStateChange
}) => {
  const [selectedIngredient, setSelectedIngredient] = useState<string>(persistedState?.ingredient || '');
  const [recipe, setRecipe] = useState<string>(persistedState?.recipe || '');
  const [loading, setLoading] = useState<boolean>(false);
  const [matchingProducts, setMatchingProducts] = useState<Product[]>(persistedState?.matchingProducts || []);

  const ingredients = ['نخود', 'عدس', 'لوبیا قرمز', 'لپه', 'لوبیا چیتی', 'پسته', 'گردو'];

  const featuredCombos = [
    { title: 'خوراک لوبیا چیتی مخصوص', desc: 'بافتی نرم و سسی غلیظ', icon: <Utensils /> },
    { title: 'کوفته تبریزی با لپه', desc: 'طعم اصیل و نوستالژیک', icon: <Zap /> },
    { title: 'پلو یونانی با عدس', desc: 'ترکیب مدرن و سلامت', icon: <ChefHat /> },
  ];

  const handleGenerate = async () => {
    if (!selectedIngredient) return;
    
    setLoading(true);
    setRecipe('');
    setMatchingProducts([]);
    
    try {
      let currentRecipe = '';
      let currentProducts: Product[] = [];

      const finalRecipe = await generateRecipe(
        selectedIngredient, 
        (text) => {
          currentRecipe = text;
          setRecipe(text);
          onStateChange?.({
            recipe: text,
            matchingProducts: currentProducts,
            ingredient: selectedIngredient
          });
        },
        (products) => {
          currentProducts = products;
          setMatchingProducts(products);
          onStateChange?.({
            recipe: currentRecipe,
            matchingProducts: products,
            ingredient: selectedIngredient
          });
        }
      );
    } catch (err) {
      setRecipe("متاسفانه خطایی در دریافت دستور پخت نیستم. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  const handleIngredientSelect = (item: string) => {
    setSelectedIngredient(item);
    onStateChange?.({
      recipe,
      matchingProducts,
      ingredient: item
    });
  };

  if (viewMode === 'full') {
    return (
      <div className="bg-white min-h-screen scroll-mt-24">
        {/* Full Page Header */}
        <div className="bg-toos-dark pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav className="flex items-center gap-2 text-sm text-green-200 mb-8 opacity-80">
                <span className="hover:text-white cursor-pointer">خانه</span>
                <ChevronRight size={14} />
                <span className="text-toos-gold font-black">آشپز هوشمند</span>
             </nav>
             <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl text-center md:text-right">
                   <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight">
                      دستیار هوشمند <span className="text-toos-gold">آشپزی</span> شما
                   </h1>
                   <p className="text-green-100 text-lg md:text-xl leading-relaxed opacity-90">
                      با استفاده از هوش مصنوعی، بهترین و خلاقانه‌ترین دستورهای پخت را با محصولات توس فود کشف کنید. کافیست ماده اولیه را انتخاب کنید.
                   </p>
                </div>
                <div className="bg-white/10 p-8 rounded-[3rem] backdrop-blur-md border border-white/10 animate-pulse">
                   <ChefHat size={120} className="text-toos-gold" />
                </div>
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-20">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Generation Tool */}
              <div className="lg:col-span-2 space-y-8">
                 <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-gray-100">
                    <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                       <Sparkles className="text-toos-gold" />
                       انتخاب ماده اولیه برای جادو
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 mb-12">
                       {ingredients.map((item) => (
                          <button
                            key={item}
                            onClick={() => handleIngredientSelect(item)}
                            className={`px-8 py-4 rounded-2xl font-black text-lg transition-all flex items-center gap-3 ${
                              selectedIngredient === item
                                ? 'bg-toos-green text-white shadow-xl shadow-green-200 scale-105'
                                : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'
                            }`}
                          >
                            <span className={`w-3 h-3 rounded-full ${selectedIngredient === item ? 'bg-white' : 'bg-gray-300'}`}></span>
                            {item}
                          </button>
                       ))}
                    </div>

                    <button
                      onClick={handleGenerate}
                      disabled={!selectedIngredient || loading}
                      className="w-full bg-toos-dark text-white py-6 rounded-3xl font-black text-2xl flex items-center justify-center gap-4 hover:bg-black transition-all shadow-2xl shadow-gray-200 disabled:bg-gray-300 disabled:cursor-not-allowed group"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={28} />
                          <span>در حال جستجوی دستور پخت...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles size={28} className="group-hover:rotate-12 transition-transform" />
                          <span>تولید دستور پخت اختصاصی</span>
                        </>
                      )}
                    </button>
                 </div>

                 {/* Result Display */}
                 {recipe && (
                    <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-8 duration-500">
                       <div className="bg-gray-50 p-6 flex items-center justify-between border-b border-gray-100">
                          <div className="flex items-center gap-3">
                             <div className="p-3 bg-toos-gold rounded-2xl text-white">
                                <Utensils size={24} />
                             </div>
                             <span className="font-black text-gray-900">پیشنهاد سرآشپز هوشمند</span>
                          </div>
                          <div className="flex items-center gap-2">
                             <button className="p-3 hover:bg-gray-200 rounded-xl transition-colors text-gray-500"><Printer size={20}/></button>
                             <button className="p-3 hover:bg-gray-200 rounded-xl transition-colors text-gray-500"><Share2 size={20}/></button>
                          </div>
                       </div>
                       <div className="p-8 md:p-12">
                          <div className="prose prose-xl max-w-none text-gray-700 leading-loose font-medium">
                             <ReactMarkdown>{recipe}</ReactMarkdown>
                          </div>

                          {matchingProducts.length > 0 && (
                            <div className="mt-12">
                              <div className="flex items-center gap-2 mb-6">
                                <div className="w-1 h-6 bg-toos-green rounded-full"></div>
                                <h3 className="font-black text-gray-900">محصولات مرتبط در فروشگاه توس فود</h3>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {matchingProducts.map((product) => (
                                  <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onClick={onProductClick}
                                  />
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-4">
                             <div className="w-12 h-12 bg-toos-green rounded-full flex items-center justify-center text-white shrink-0">
                                <Zap size={24} />
                             </div>
                             <p className="text-toos-green text-sm font-bold">
                                تمامی مواد اولیه لازم برای این دستور پخت را می‌توانید همین حالا از بخش محصولات سفارش دهید.
                             </p>
                          </div>
                       </div>
                    </div>
                 )}
              </div>

              {/* Right Column: Tips & Features */}
              <div className="space-y-8">
                 <div className="bg-toos-light p-8 rounded-[3rem] border border-green-100">
                    <h4 className="text-xl font-black text-toos-green mb-6 flex items-center gap-2">
                       <BookOpen size={24} />
                       پیشنهادات محبوب
                    </h4>
                    <div className="space-y-4">
                       {featuredCombos.map((combo, i) => (
                          <div key={i} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer flex items-center gap-4 group">
                             <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-toos-gold group-hover:bg-toos-gold group-hover:text-white transition-all">
                                {combo.icon}
                             </div>
                             <div>
                                <p className="font-bold text-gray-900 group-hover:text-toos-green transition-colors">{combo.title}</p>
                                <p className="text-xs text-gray-400 mt-1">{combo.desc}</p>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-gray-900 p-8 rounded-[3rem] text-white">
                    <h4 className="text-xl font-black mb-4">چرا هوش مصنوعی؟</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                       الگوریتم‌های ما با تحلیل هزاران دستور پخت ایرانی و بین‌المللی، دقیق‌ترین زمان‌بندی و بهترین ترکیبات را برای شما استخراج می‌کنند.
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="flex -space-x-3 space-x-reverse">
                          {[1,2,3].map(n => (
                             <div key={n} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-700 flex items-center justify-center overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?u=${n}`} alt="user" />
                             </div>
                          ))}
                       </div>
                       <span className="text-xs font-bold text-toos-gold">+۱۲۰۰ آشپز امروز استفاده کردند</span>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    );
  }

  // Preview Mode
  return (
    <section id="ai-chef" className="py-24 relative overflow-hidden bg-toos-dark text-white scroll-mt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pattern-dots"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <ChefHat size={32} className="text-toos-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6">آشپز هوشمند <span className="text-toos-gold">توس فود</span></h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            نمی‌دانید با حبوبات چه غذایی بپزید؟ ماده اولیه را انتخاب کنید تا هوش مصنوعی ما یک دستور پخت اصیل ایرانی به شما پیشنهاد دهد.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {ingredients.slice(0, 5).map((item) => (
                <button
                  key={item}
                  onClick={() => handleIngredientSelect(item)}
                  className={`px-6 py-3 rounded-2xl font-black transition-all ${
                    selectedIngredient === item
                      ? 'bg-toos-gold text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleGenerate}
              disabled={!selectedIngredient || loading}
              className="mt-4 md:mt-0 bg-toos-green hover:bg-green-600 disabled:bg-gray-600 disabled:cursor-not-allowed px-10 py-4 rounded-2xl font-black flex items-center gap-2 transition-all shadow-xl min-w-[180px] justify-center"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>پیشنهاد بده</span>
                </>
              )}
            </button>
          </div>

          {recipe && (
            <div className="bg-white text-gray-800 p-8 rounded-[2rem] shadow-inner animate-fade-in border-r-8 border-toos-gold">
              <h4 className="font-black text-xl mb-4 text-toos-dark flex items-center gap-2">
                <ChefHat size={24} />
                دستور پخت پیشنهادی:
              </h4>
              <div className="prose prose-sm leading-relaxed font-medium">
                <ReactMarkdown>{recipe}</ReactMarkdown>
              </div>

              {matchingProducts.length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-4 bg-toos-green rounded-full"></div>
                    <h5 className="font-black text-sm text-gray-900">محصولات پیشنهادی</h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {matchingProducts.slice(0, 2).map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onClick={onProductClick}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                 <button onClick={onFullView} className="text-toos-green font-black flex items-center gap-2 hover:gap-4 transition-all">
                    مشاهده در صفحه اختصاصی
                    <ChevronRight className="rotate-180" size={20} />
                 </button>
              </div>
            </div>
          )}
          
          {!recipe && !loading && (
             <div className="text-center py-10">
                <p className="text-gray-400 font-bold mb-6">یک ماده غذایی را از لیست بالا انتخاب کنید</p>
                <button 
                    onClick={onFullView}
                    className="text-toos-gold hover:underline font-black text-sm"
                >
                    ورود به پنل حرفه‌ای آشپز هوشمند
                </button>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};