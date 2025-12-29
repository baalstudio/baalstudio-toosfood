import React from 'react';
import { ArrowLeft, ChevronDown, Sparkles, ShieldCheck, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop" 
          alt="Toos Food Production" 
          className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-toos-dark/10 backdrop-brightness-[0.8]"></div>
      </div>

      {/* Floating Particle/Aura Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-toos-green/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-toos-gold/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center pt-32 pb-16">
        
        {/* Top Tagline */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-10 animate-in fade-in slide-in-from-top-8 duration-700">
          <Sparkles className="text-toos-gold" size={16} />
          <span className="text-white font-black text-xs tracking-widest uppercase">توس ۲۴۰۰؛ فراتر از یک نام تجاری</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          طعمی به پاکی <span className="text-toos-gold">طبیعت</span>،<br/>
          تعهدی به <span className="text-toos-green">اصالت</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl font-medium animate-in fade-in duration-1000 delay-300">
          صنایع غذایی توس با ۲۸ سال تجربه، پلی میان مزارع برگزیده و سفره‌های صمیمی شماست. بهترین حبوبات و ادویه‌جات ایران، دستچین شده برای سلامتی خانواده.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-toos-green hover:bg-toos-dark text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-green-900/40 flex items-center gap-3 group hover:scale-105 active:scale-95"
          >
            <span>شروع خرید آنلاین</span>
            <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" />
          </button>
          
          <button 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 group"
          >
            <ShieldCheck size={24} className="text-toos-gold" />
            <span>گواهینامه‌های کیفی</span>
          </button>
        </div>

        {/* Quick Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10 w-full animate-in fade-in duration-1000 delay-700">
           <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-toos-gold">
                <ShieldCheck size={28} />
              </div>
              <span className="text-white/70 text-xs font-bold">۱۰۰٪ طبیعی و پاک‌شده</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-toos-green">
                <Globe size={28} />
              </div>
              <span className="text-white/70 text-xs font-bold">صادراتی به ۳ قاره</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-toos-gold">
                <Sparkles size={28} />
              </div>
              <span className="text-white/70 text-xs font-bold">تازگی تضمین شده</span>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-toos-green">
                <ChevronDown size={28} />
              </div>
              <span className="text-white/70 text-xs font-bold">سفارش مستقیم</span>
           </div>
        </div>
      </div>

      {/* Animated Scroll Down indicator */}
      <button 
        onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors animate-bounce flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em]">بیشتر بخوانید</span>
        <ChevronDown size={32} />
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}} />
    </div>
  );
};