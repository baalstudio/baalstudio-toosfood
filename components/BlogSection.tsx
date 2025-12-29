import React, { useState, useMemo } from 'react';
import { 
  Clock, User, ArrowLeft, X, ChefHat, CheckCircle2, 
  Search, Filter, ChevronRight, BookOpen, Share2, 
  ThumbsUp, MessageSquare, Calendar 
} from 'lucide-react';
import { BlogPost } from '../types';

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: 'رازهای پخت فلافل ترد و بازاری در خانه',
    excerpt: 'در این مقاله یاد می‌گیرید چطور با استفاده از نخود کرمانشاهی توس فود، فلافلی درست کنید که بیرون آن ترد و درون آن کاملا پوک باشد.',
    image: '/img/blog-1.jpg',
    date: '۲۰ آبان ۱۴۰۳',
    readTime: '۱۰ دقیقه',
    category: 'آموزش آشپزی',
    author: 'دکتر محمد ابوعطی',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          فلافل یکی از محبوب‌ترین غذاهای خیابانی در خاورمیانه است. راز اصلی یک فلافل ترد، استفاده از نخود باکیفیت و خیس خورده (نه پخته) است.
        </p>
        
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
          <h4 className="text-xl font-bold text-toos-dark mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} />
            مواد لازم
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>نخود توس فود: ۲ پیمانه</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>پیاز: ۱ عدد بزرگ</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>سیر: ۴ حبه</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>جعفری: ۵۰ گرم</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>سیب‌زمینی کوچک: ۱ عدد</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>ادویه فلافل: ۱ قاشق غذاخوری</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-toos-dark mb-4 flex items-center gap-2">
            <ChefHat size={20} />
            طرز تهیه
          </h4>
          <ol className="space-y-4 text-gray-700 list-decimal list-inside marker:text-toos-green marker:font-bold">
            <li className="pl-2">نخودها را حتماً از ۲۴ ساعت قبل خیس کنید و چندین بار آب آن را عوض کنید تا نفخ آن گرفته شود و نرم شوند.</li>
            <li className="pl-2">نخود خیس خورده را همراه با پیاز، سیر، سیب‌زمینی و جعفری دو بار چرخ کنید تا مایه‌ای یکدست حاصل شود.</li>
            <li className="pl-2">ادویه‌ها، نمک، فلفل و کمی بیکینگ پودر را به مایه اضافه کنید و خوب ورز دهید.</li>
            <li className="pl-2">به مایه حدود یک ساعت در یخچال استراحت دهید تا مزه‌ها به خورد هم بروند.</li>
            <li className="pl-2">روغن را در ظرف گود داغ کنید. با قالب فلافل از مواد بردارید و در روغن شناور سرخ کنید تا طلایی شوند.</li>
          </ol>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-xl border-r-4 border-yellow-400">
          <span className="font-bold text-yellow-700 block mb-1">نکته طلایی:</span>
          <p className="text-sm text-yellow-800">برای پوک شدن فلافل، اضافه کردن مقدار کمی آب گازدار یا بیکینگ پودر به مایه قبل از سرخ کردن معجزه می‌کند.</p>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: 'فوت و فن لعاب انداختن قورمه سبزی',
    excerpt: 'آیا قورمه سبزی شما آب و دانه جدا می‌شود؟ با انتخاب لوبیا قرمز مناسب و تکنیک‌های پخت آرام، به خورشتی جاافتاده برسید.',
    image: '/img/blog-2.jpg',
    date: '۱۵ آبان ۱۴۰۳',
    readTime: '۱۲ دقیقه',
    category: 'نکات طلایی',
    author: 'مهندس محمدباقر ستاری',
    content: (
      <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          قورمه سبزی نماد آشپزی ایرانی است. مهم‌ترین چالش در پخت این خورش، جا افتادن و روغن انداختن آن است.
        </p>
        
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
           <h4 className="text-xl font-bold text-toos-dark mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} />
            مواد کلیدی
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>لوبیا قرمز توس فود: ۱ پیمانه</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>سبزی قورمه: ۱ کیلوگرم</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>گوشت گوسفندی: ۴۰۰ گرم</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>لیمو عمانی: ۴ عدد</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold text-toos-dark mb-4 flex items-center gap-2">
            <ChefHat size={20} />
            مراحل پخت اصولی
          </h4>
          <ol className="space-y-4 text-gray-700 list-decimal list-inside marker:text-toos-green marker:font-bold">
            <li className="pl-2">سبزی را باید ریز خرد کنید و با روغن فراوان تفت دهید تا رنگ آن تیره شود (اما نسوزد). این راز روغن انداختن خورش است.</li>
            <li className="pl-2">گوشت و پیاز را تفت دهید و زردچوبه و فلفل سیاه اضافه کنید.</li>
            <li className="pl-2">لوبیا قرمز را که از قبل خیس کرده‌اید اضافه کنید. (برخی لوبیا را جدا می‌پزند که باعث شفافیت خورش می‌شود).</li>
            <li className="pl-2">آب جوش اضافه کنید و اجازه دهید ۳ تا ۴ ساعت با حرارت بسیار ملایم بپزد.</li>
            <li className="pl-2">لیمو عمانی‌ها را سوراخ کرده و در یک ساعت آخر پخت اضافه کنید تا خورش تلخ نشود.</li>
          </ol>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'طرز تهیه عدس پلو مجلسی با گوشت قلقلی',
    excerpt: 'دستور پخت قدم به قدم عدس پلو با عدس سبز کانادایی. چگونه عدس‌ها له نشوند و برنجی دانه دانه داشته باشیم؟',
    image: '/img/blog-3.jpg',
    date: '۰۸ آبان ۱۴۰۳',
    readTime: '۱۵ دقیقه',
    category: 'غذاهای سنتی',
    author: 'دکتر محمد ابوعطی',
    content: (
       <div className="space-y-6">
        <p className="text-gray-600 leading-relaxed">
          عدس پلو یکی از مغذی‌ترین غذاهای ایرانی است. استفاده از عدس مرغوب که حین پخت وا نرود، مهمترین نکته این غذاست.
        </p>
        
        <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
           <h4 className="text-xl font-bold text-toos-dark mb-4 flex items-center gap-2">
            <CheckCircle2 size={20} />
            مواد لازم برای ۴ نفر
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>عدس سبز توس فود: ۱.۵ پیمانه</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>برنج ایرانی: ۳ پیمانه</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>گوشت چرخ‌کرده: ۳۰۰ گرم</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>کشمش پلویی و خرما: به دلخواه</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-toos-green rounded-full"></span>زعفران دم‌کرده: ۲ قاشق غذاخوری</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'خواص شگفت‌انگیز لوبیا چیتی برای سلامتی',
    excerpt: 'لوبیا چیتی منبع غنی پروتئین و فیبر است. در این مقاله به بررسی تاثیرات آن بر کاهش کلسترول و سلامت قلب می‌پردازیم.',
    image: '/img/blog-4.jpg',
    date: '۰۵ آبان ۱۴۰۳',
    readTime: '۸ دقیقه',
    category: 'سلامت و تغذیه',
    author: 'دکتر محمد ابوعطی',
    content: (
        <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">لوبیا چیتی یکی از پرطرفدارترین حبوبات در ایران است که علاوه بر طعم عالی، خواص درمانی بی‌شماری دارد.</p>
            <h4 className="text-xl font-bold text-toos-dark">منابع مغذی در هر ۱۰۰ گرم:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>پروتئین: ۲۱ گرم</li>
                <li>فیبر: ۱۵ گرم</li>
                <li>آهن: ۵ میلی‌گرم</li>
                <li>پتاسیم: ۱.۳ گرم</li>
            </ul>
        </div>
    )
  },
  {
    id: 5,
    title: 'استانداردهای نوین بسته‌بندی در توس فود',
    excerpt: 'چرا بسته‌بندی‌های ما تا ۶ ماه تازگی محصول را حفظ می‌کنند؟ آشنایی با تکنولوژی مپ (MAP) در خط تولید.',
    image: '/img/product-1.png',
    date: '۰۱ آبان ۱۴۰۳',
    readTime: '۵ دقیقه',
    category: 'اخبار کارخانه',
    author: 'مهندس محمدباقر ستاری',
    content: (<div className="text-gray-600">گزارشی از خطوط تولید هوشمند توس فود و استفاده از گازهای اتمسفر اصلاح شده برای ماندگاری بیشتر حبوبات...</div>)
  },
  {
    id: 6,
    title: 'آموزش پخت آش شله قلمکار اصیل',
    excerpt: 'آش شله قلمکار به دلیل داشتن انواع حبوبات و گوشت، یکی از مقوی‌ترین غذاهای سنتی است که پخت آن صبر و حوصله می‌طلبد.',
    image: '/img/blog-6.jpg',
    date: '۲۸ مهر ۱۴۰۳',
    readTime: '۲۰ دقیقه',
    category: 'غذاهای سنتی',
    author: 'دکتر محمد ابوعطی',
    content: (<div className="text-gray-600">دستور پخت کامل آش شله قلمکار با استفاده از تمامی حبوبات توس فود...</div>)
  }
];

interface BlogSectionProps {
  viewMode?: 'preview' | 'full';
  onViewAll?: () => void;
  onPostClick?: (postId: number) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ viewMode = 'preview', onViewAll, onPostClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('همه');

  const categories = useMemo(() => ['همه', ...Array.from(new Set(blogPostsData.map(p => p.category)))], []);

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter(post => {
      const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
      const matchesCategory = activeCategory === 'همه' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredPost = useMemo(() => blogPostsData[0], []);

  const handlePostClick = (post: BlogPost) => {
    if (onPostClick) {
      onPostClick(post.id);
    }
  };

  if (viewMode === 'full') {
    return (
      <div className="bg-white min-h-screen">
        {/* Full Page Header */}
        <div className="bg-gray-50 border-b border-gray-100 pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span className="hover:text-toos-green cursor-pointer">خانه</span>
                <ChevronRight size={14} />
                <span className="text-toos-green font-black">مجله و آموزش</span>
             </nav>
             <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                مجله سلامت و <span className="text-toos-green">آشپزی</span>
             </h1>
             <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
               جدیدترین آموزش‌های آشپزی، نکات تغذیه‌ای و اخبار کارخانه توس فود را در اینجا دنبال کنید.
             </p>
          </div>
        </div>

        {/* Featured Post (Only if no active filters) */}
        {searchQuery === '' && activeCategory === 'همه' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 hover:shadow-green-900/10 transition-shadow">
               <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
               </div>
               <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                  <span className="bg-toos-gold text-white px-4 py-1 rounded-full text-xs font-black mb-6 inline-block w-fit">برگزیده هفته</span>
                  <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight hover:text-toos-green cursor-pointer transition-colors" onClick={() => handlePostClick(featuredPost)}>
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-500 text-lg mb-8 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center gap-3">
                       <div className="w-12 h-12 bg-toos-green rounded-full flex items-center justify-center text-white">
                          <User size={24} />
                       </div>
                       <div>
                          <p className="text-sm font-bold text-gray-900">{featuredPost.author}</p>
                          <p className="text-xs text-gray-400">{featuredPost.date}</p>
                       </div>
                    </div>
                    <button onClick={() => handlePostClick(featuredPost)} className="bg-toos-green text-white px-8 py-3 rounded-2xl font-bold hover:bg-toos-dark transition-all flex items-center gap-2">
                       مطالعه کامل
                       <BookOpen size={18} />
                    </button>
                  </div>
               </div>
            </div>
          </div>
        )}

        {/* Filters & Search Toolbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
           <div className="bg-gray-50 p-4 rounded-[2rem] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Category Chips */}
              <div className="flex flex-wrap gap-2">
                 {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                        activeCategory === cat 
                          ? 'bg-toos-green text-white shadow-lg' 
                          : 'bg-white text-gray-600 hover:bg-gray-200 border border-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                 ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-80 group">
                 <input 
                  type="text" 
                  placeholder="جستجو در مقالات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-2xl py-3 pr-4 pl-12 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none text-sm transition-all"
                 />
                 <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-toos-green" />
              </div>
           </div>
        </div>

        {/* Blog Grid Results */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
           {filteredPosts.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {filteredPosts.map(post => (
                 <article key={post.id} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-green-100 hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => handlePostClick(post)}>
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-2xl text-xs font-black text-toos-green shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-toos-green transition-colors leading-tight cursor-pointer" onClick={() => handlePostClick(post)}>
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                        <div className="flex items-center gap-2">
                           <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                              <User size={16} />
                           </div>
                           <span className="text-xs font-bold text-gray-600">{post.author}</span>
                        </div>
                        <button 
                          onClick={() => handlePostClick(post)}
                          className="text-toos-green font-black text-sm flex items-center gap-1 hover:gap-2 transition-all"
                        >
                           ادامه مطلب
                           <ArrowLeft size={16} />
                        </button>
                      </div>
                    </div>
                 </article>
               ))}
             </div>
           ) : (
             <div className="py-32 text-center">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-200">
                   <Search size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">نتیجه‌ای یافت نشد</h3>
                <p className="text-gray-500 mt-2">لطفاً واژه‌ی دیگری را جستجو کنید یا دسته‌بندی را تغییر دهید.</p>
                <button onClick={() => { setSearchQuery(''); setActiveCategory('همه'); }} className="mt-8 text-toos-green font-bold underline">نمایش همه مطالب</button>
             </div>
           )}
        </div>
      </div>
    );
  }

  // Preview Mode (Home Page)
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="relative">
             <div className="absolute -top-12 -right-12 w-24 h-24 bg-toos-green/5 rounded-full blur-2xl"></div>
             <span className="bg-toos-green/10 text-toos-green px-6 py-2 rounded-full text-sm font-black mb-4 inline-block tracking-widest uppercase">Toos Food Magazine</span>
             <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
               مجله سلامت و <span className="text-toos-green relative inline-block">
                 آشپزی
                 <span className="absolute bottom-2 left-0 w-full h-3 bg-toos-green/20 -z-10 rounded-full"></span>
               </span>
             </h2>
          </div>
          <button 
            onClick={onViewAll}
            className="group flex items-center gap-3 text-toos-dark font-black text-lg hover:text-toos-green transition-all bg-gray-50 px-8 py-4 rounded-2xl hover:bg-green-50"
          >
            مشاهده همه مقالات
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:translate-x-2 transition-transform shadow-sm">
              <ArrowLeft size={20} />
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPostsData.slice(0, 3).map((post) => (
            <article 
              key={post.id} 
              className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:border-green-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => handlePostClick(post)}>
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-2xl text-xs font-black text-toos-green shadow-sm">
                  {post.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg"><Calendar size={12} className="text-toos-green" /> {post.date}</span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-lg"><Clock size={12} className="text-toos-green" /> {post.readTime}</span>
                </div>
                
                <h3 
                  className="text-2xl font-black text-gray-900 mb-4 group-hover:text-toos-green transition-colors leading-tight cursor-pointer line-clamp-2"
                  onClick={() => handlePostClick(post)}
                >
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-toos-green/10 rounded-xl flex items-center justify-center text-toos-green font-bold">
                       {post.author[0]}
                    </div>
                    <div>
                       <p className="text-xs font-black text-gray-900">{post.author}</p>
                       <p className="text-[10px] text-gray-400">نویسنده</p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handlePostClick(post)}
                    className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-toos-dark hover:bg-toos-green hover:text-white transition-all hover:rotate-12 group/btn"
                  >
                    <ArrowLeft size={20} className="group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};