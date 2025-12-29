import React, { useEffect } from 'react';
import { 
  ArrowRight, Star, ShieldCheck, Truck, 
  Clock, Share2, Heart, CheckCircle2, 
  AlertCircle, ShoppingCart, MessageSquare
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Navigation Header */}
      <div className="bg-gray-50 border-b border-gray-100 pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-toos-green transition-all font-bold mb-6 group"
          >
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            <span>بازگشت به فروشگاه</span>
          </button>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>خانه</span>
            <span className="text-gray-300">/</span>
            <span>محصولات</span>
            <span className="text-gray-300">/</span>
            <span className="text-toos-green font-bold">{product.category}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Product Image Section */}
          <div className="flex-1">
            <div className="sticky top-32 space-y-6">
              <div className="relative aspect-square bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 shadow-inner group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Image Actions */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-gray-400 hover:text-red-500 shadow-lg transition-all active:scale-90">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 bg-white/90 backdrop-blur-md rounded-2xl text-gray-400 hover:text-toos-green shadow-lg transition-all active:scale-90">
                    <Share2 size={20} />
                  </button>
                </div>

                {product.isNew && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-toos-gold text-white px-6 py-2 rounded-full text-xs font-black shadow-xl uppercase tracking-widest">محصول جدید</span>
                  </div>
                )}
              </div>

              {/* Thumbnails Placeholder */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`aspect-square rounded-2xl border-2 transition-all cursor-pointer overflow-hidden ${i === 1 ? 'border-toos-green bg-white' : 'border-transparent bg-gray-50 hover:bg-gray-100'}`}>
                    <img src={product.image} className="w-full h-full object-contain p-2 opacity-60" alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="flex-1 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-toos-green/10 text-toos-green px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 text-toos-gold">
                  <Star size={18} className="fill-current" />
                  <span className="font-black text-lg">{product.rating}</span>
                  <span className="text-gray-400 text-sm font-medium">(۱۲۸ دیدگاه مشتریان)</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                {product.title}
              </h1>

              <p className="text-gray-500 text-xl leading-relaxed mb-10 font-medium">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mb-10">
                {product.isAvailable ? (
                  <div className="flex items-center gap-2 bg-green-50 text-toos-green px-6 py-3 rounded-2xl font-black">
                    <CheckCircle2 size={20} />
                    <span>موجود در انبار کارخانه</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-red-50 text-red-500 px-6 py-3 rounded-2xl font-black">
                    <AlertCircle size={20} />
                    <span>ناموجود در حال حاضر</span>
                  </div>
                )}
                <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-2xl font-black">
                  <ShieldCheck size={20} />
                  <span>تضمین اصالت کالا</span>
                </div>
              </div>
            </div>

            {/* Contact for Order */}
            <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 space-y-8 text-center md:text-right">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900">سفارش و استعلام قیمت</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  جهت دریافت قیمت روز محصولات و ثبت سفارش عمده یا جزئی، لطفاً با واحد فروش تماس بگیرید یا از طریق پشتیبانی آنلاین با ما در ارتباط باشید.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="flex-1 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 bg-toos-green text-white hover:bg-toos-dark transition-all shadow-xl shadow-green-200 active:scale-95"
                >
                  <MessageSquare size={24} />
                  گفتگوی آنلاین
                </button>
                <a 
                  href="tel:0210000000"
                  className="flex-1 py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 bg-white text-toos-dark border border-gray-200 hover:bg-gray-50 transition-all shadow-lg active:scale-95"
                >
                  <Truck size={24} className="text-toos-green" />
                  تماس با واحد فروش
                </a>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-toos-light rounded-2xl flex items-center justify-center text-toos-green">
                  <Truck size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-gray-900 text-sm">ارسال سریع</span>
                  <span className="text-gray-400 text-xs">تحویل ۲۴ ساعته</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-toos-light rounded-2xl flex items-center justify-center text-toos-green">
                  <Clock size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-gray-900 text-sm">تازگی محصول</span>
                  <span className="text-gray-400 text-xs">تولید روز</span>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-center justify-between p-6 bg-toos-dark rounded-3xl text-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <MessageSquare size={24} className="text-toos-gold" />
                </div>
                <div>
                  <h4 className="font-black text-sm">نیاز به مشاوره دارید؟</h4>
                  <p className="text-white/60 text-xs">کارشناسان ما آماده پاسخگویی هستند</p>
                </div>
              </div>
              <button className="bg-white text-toos-dark px-6 py-3 rounded-xl font-black text-sm hover:bg-toos-gold transition-all">
                تماس با ما
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Tabs Placeholder */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="flex gap-12 border-b border-gray-100 mb-12 overflow-x-auto pb-4">
            <button className="text-xl font-black text-toos-green border-b-4 border-toos-green pb-4 whitespace-nowrap">توضیحات تکمیلی</button>
            <button className="text-xl font-black text-gray-400 hover:text-gray-600 pb-4 whitespace-nowrap transition-all">جدول ارزش غذایی</button>
            <button className="text-xl font-black text-gray-400 hover:text-gray-600 pb-4 whitespace-nowrap transition-all">نظرات کاربران</button>
          </div>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium">
            <p className="mb-6">
              این محصول از مزارع برگزیده ایران تهیه شده و در کارخانه توس فود با استفاده از مدرن‌ترین دستگاه‌های بوجاری و سورتینگ لیزری پاکسازی و بسته‌بندی شده است. 
              فرآیند تولید و بسته‌بندی کاملاً مکانیزه و بدون دخالت دست انجام شده تا بالاترین سطح بهداشت و سلامت تضمین گردد.
            </p>
            <ul className="space-y-4 list-disc pr-6">
              <li>صد در صد طبیعی و بدون مواد نگهدارنده</li>
              <li>پاک شده با دستگاه‌های سورتینگ لیزری</li>
              <li>بسته‌بندی مقاوم در برابر رطوبت و نور</li>
              <li>دارای نشان سیب سلامت و استانداردهای ملی</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
