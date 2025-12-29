import React, { useState } from 'react';
import { Award, ChevronRight, Download, Eye, FileText, ShieldCheck, CheckCircle2, X } from 'lucide-react';

const certificates = [
  { id: 1, title: 'گواهینامه ۱', image: '/img/certificate/1(1).jpg' },
  { id: 2, title: 'گواهینامه ۲', image: '/img/certificate/2.jpg' },
  { id: 3, title: 'گواهینامه ۳', image: '/img/certificate/3.jpg' },
  { id: 4, title: 'گواهینامه ۴', image: '/img/certificate/4.jpg' },
  { id: 5, title: 'گواهینامه ۵', image: '/img/certificate/5.jpg' },
  { id: 6, title: 'گواهینامه ۶', image: '/img/certificate/6.jpg' },
  { id: 7, title: 'گواهینامه ۷', image: '/img/certificate/7.jpg' },
  { id: 8, title: 'گواهینامه ۸', image: '/img/certificate/8(1).jpg' },
  { id: 9, title: 'گواهینامه ۹', image: '/img/certificate/9(1).jpg' },
  { id: 10, title: 'گواهینامه ۱۰', image: '/img/certificate/10 (2).jpg' },
  { id: 11, title: 'گواهینامه ۱۱', image: '/img/certificate/11 (2).jpg' },
  { id: 14, title: 'گواهینامه ۱۴', image: '/img/certificate/14.jpg' },
  { id: 15, title: 'گواهینامه ۱۵', image: '/img/certificate/15.jpg' },
  { id: 16, title: 'گواهینامه ۱۶', image: '/img/certificate/16.jpg' },
  { id: 19, title: 'گواهینامه ۱۹', image: '/img/certificate/19.jpg' },
  { id: 20, title: 'گواهینامه ۲۰', image: '/img/certificate/20.jpg' },
  { id: 21, title: 'گواهینامه ۲۱', image: '/img/certificate/21.jpg' },
  { id: 22, title: 'گواهینامه ۲۲', image: '/img/certificate/22.jpg' },
  { id: 23, title: 'گواهینامه ۲۳', image: '/img/certificate/23.jpg' },
  { id: 24, title: 'گواهینامه ۲۴', image: '/img/certificate/24.jpg' },
  { id: 25, title: 'گواهینامه ۲۵', image: '/img/certificate/25.jpg' },
  { id: 26, title: 'گواهینامه ۲۶', image: '/img/certificate/26.jpg' },
  { id: 27, title: 'گواهینامه ۲۷', image: '/img/certificate/27.jpg' },
  { id: 28, title: 'گواهینامه ۲۸', image: '/img/certificate/28.jpg' },
  { id: 29, title: 'گواهینامه ۲۹', image: '/img/certificate/29.jpg' },
  { id: 30, title: 'گواهینامه ۳۰', image: '/img/certificate/30.jpg' },
  { id: 31, title: 'گواهینامه ۳۱', image: '/img/certificate/31.jpg' },
  { id: 32, title: 'گواهینامه ۳۲', image: '/img/certificate/32.jpg' },
  { id: 33, title: 'گواهینامه ۳۳', image: '/img/certificate/33.jpg' },
  { id: 34, title: 'گواهینامه ۳۴', image: '/img/certificate/34(1).jpg' },
];

export const CertificatesPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-white">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 transition-all duration-500"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div 
            className="relative max-w-5xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Certificate Full View" 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-b from-gray-100 to-white border-b border-gray-100 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
           <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <span className="hover:text-toos-green cursor-pointer">خانه</span>
              <ChevronRight size={14} />
              <span className="text-toos-green font-bold">گواهینامه‌ها و افتخارات</span>
           </nav>
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                  استانداردها و <span className="text-toos-green">گواهینامه‌ها</span>
                </h1>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                  توس فود با بهره‌گیری از بالاترین استانداردهای ملی و بین‌المللی، کیفیت و سلامت محصولات خود را تضمین می‌کند. 
                  در این بخش می‌توانید تمامی مجوزها، سیب سلامت و استانداردهای اخذ شده را مشاهده فرمایید.
                </p>
              </div>
              <div className="flex-shrink-0 bg-green-50 p-6 rounded-[2.5rem] border border-green-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-toos-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                    <ShieldCheck size={24} />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-toos-dark">۱۰۰٪</span>
                    <span className="text-sm text-gray-600">تضمین کیفیت و سلامت</span>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="group relative bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div 
                className="aspect-[3/4] overflow-hidden bg-gray-50 relative cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-toos-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                  <button 
                    onClick={() => setSelectedImage(cert.image)}
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-toos-dark hover:bg-toos-green hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75 shadow-xl"
                  >
                    <Eye size={20} />
                  </button>
                  <a 
                    href={cert.image} 
                    download 
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-toos-dark hover:bg-toos-green hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-150 shadow-xl"
                  >
                    <Download size={20} />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-green-50 text-toos-green rounded-xl mb-4">
                  <Award size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-toos-green transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                  <FileText size={14} />
                  <span>تاییدیه سازمان غذا و دارو</span>
                </div>
              </div>

              {/* Decoration */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-toos-green border border-green-100">
                توس فود
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-20 bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                تعهد ما به <span className="text-toos-green">سلامت</span> شما پایان‌ناپذیر است
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                تمامی محصولات توس فود در محیطی کاملاً بهداشتی و با نظارت دقیق کارشناسان کنترل کیفیت تولید می‌شوند. اخذ این گواهینامه‌ها تنها بخشی از تلاش ما برای جلب اعتماد شماست.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 size={16} className="text-toos-green" />
                  <span className="text-sm">سیب سلامت</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 size={16} className="text-toos-green" />
                  <span className="text-sm">استاندارد ملی</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                  <CheckCircle2 size={16} className="text-toos-green" />
                  <span className="text-sm">گواهی ISO</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-toos-green/20 blur-3xl rounded-full"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem]">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                      <span className="block text-3xl font-black text-toos-green mb-1">۳۰+</span>
                      <span className="text-xs text-gray-400">گواهینامه فعال</span>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                      <span className="block text-3xl font-black text-toos-green mb-1">۱۰۰٪</span>
                      <span className="text-xs text-gray-400">رضایت مشتریان</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Abstract background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-toos-green/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-toos-green/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>
        </div>
      </div>
    </div>
  );
};
