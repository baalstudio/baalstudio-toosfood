import React, { useEffect } from 'react';
import { 
  User, Calendar, Clock, Share2, ThumbsUp, 
  MessageSquare, ChevronRight, ArrowRight 
} from 'lucide-react';
import { BlogPost } from '../types';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.id]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40"></div>
        
        {/* Navigation Overlays */}
        <div className="absolute top-32 right-4 sm:right-6 lg:right-8 z-20">
           <button 
             onClick={onBack}
             className="flex items-center gap-2 bg-white/20 hover:bg-white backdrop-blur-md text-white hover:text-toos-dark px-4 py-2 rounded-2xl transition-all font-bold border border-white/20"
           >
              <ArrowRight size={20} />
              <span>بازگشت به وبلاگ</span>
           </button>
        </div>

        <div className="absolute bottom-12 right-4 sm:right-6 lg:right-8 left-4 sm:left-6 lg:left-8 z-20">
           <div className="max-w-4xl">
              <span className="bg-toos-green text-white px-6 py-2 rounded-full text-sm font-black mb-6 inline-block shadow-xl">
                 {post.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight drop-shadow-sm">
                 {post.title}
              </h1>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         {/* Meta Information Bar */}
         <div className="flex flex-wrap items-center justify-between gap-8 mb-16 pb-10 border-b border-gray-100">
            <div className="flex items-center gap-10">
               <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-toos-light text-toos-green rounded-2xl flex items-center justify-center">
                     <User size={28} />
                  </div>
                  <div>
                     <p className="text-xs text-gray-400 font-bold mb-1">نویسنده مقاله</p>
                     <p className="font-black text-gray-900 text-lg">{post.author}</p>
                  </div>
               </div>
               
               <div className="hidden sm:flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center">
                     <Calendar size={28} />
                  </div>
                  <div>
                     <p className="text-xs text-gray-400 font-bold mb-1">تاریخ انتشار</p>
                     <p className="font-black text-gray-900 text-lg">{post.date}</p>
                  </div>
               </div>

               <div className="hidden sm:flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-50 text-gray-400 rounded-2xl flex items-center justify-center">
                     <Clock size={28} />
                  </div>
                  <div>
                     <p className="text-xs text-gray-400 font-bold mb-1">زمان مطالعه</p>
                     <p className="font-black text-gray-900 text-lg">{post.readTime}</p>
                  </div>
               </div>
            </div>

            <div className="flex items-center gap-4">
               <button className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-400 hover:text-toos-green hover:border-toos-green transition-all">
                  <Share2 size={20} />
               </button>
               <button className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-200 transition-all font-bold">
                  <ThumbsUp size={20} />
                  <span>۱۲۴</span>
               </button>
            </div>
         </div>

         {/* Article Content */}
         <article className="prose prose-2xl max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-loose prose-li:text-gray-600 font-medium">
            {post.content}
         </article>

         {/* Footer Tags & Actions */}
         <div className="mt-24 pt-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
               <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-black">برچسب‌های مرتبط:</span>
                  <div className="flex flex-wrap gap-2">
                     {['حبوبات توس', 'آشپزی سالم', 'تغذیه', 'محصولات ارگانیک'].map(tag => (
                        <span key={tag} className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-bold text-gray-600 hover:bg-toos-light hover:text-toos-green cursor-pointer transition-colors">
                           #{tag}
                        </span>
                     ))}
                  </div>
               </div>
               
               <button 
                 onClick={onBack}
                 className="bg-toos-dark text-white px-10 py-5 rounded-[2rem] font-black hover:scale-105 transition-all shadow-2xl shadow-gray-900/20 flex items-center gap-3"
               >
                  <span>مشاهده سایر مطالب</span>
                  <ArrowRight size={20} />
               </button>
            </div>
         </div>
      </div>

      {/* Related Section Suggestion */}
      <div className="bg-gray-50 py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
               <h3 className="text-3xl font-black text-gray-900">پیشنهاد مطالعه بیشتر</h3>
               <button onClick={onBack} className="text-toos-green font-black flex items-center gap-2 hover:gap-4 transition-all">
                  مشاهده همه مقالات <ArrowRight size={20} />
               </button>
            </div>
            {/* Simple suggestion card - for visual completeness */}
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm flex items-center gap-8 max-w-2xl">
               <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0">
                  <img src="/img/blog-2.jpg" className="w-full h-full object-cover" alt="Related" />
               </div>
               <div>
                  <span className="text-toos-green text-xs font-black mb-2 block">بیشتر بخوانید</span>
                  <h4 className="text-xl font-black text-gray-900 mb-4">فوت و فن لعاب انداختن قورمه سبزی</h4>
                  <button onClick={onBack} className="text-gray-400 text-sm font-bold hover:text-toos-dark transition-colors">مشاهده مقاله</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
