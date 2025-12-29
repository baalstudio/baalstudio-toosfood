import React from 'react';
import { 
  Phone, Mail, MapPin, Instagram, Send, 
  Linkedin, Facebook, Twitter, Globe, 
  ArrowLeft, CheckCircle2, ShieldCheck, 
  Leaf, Award, Printer
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (page: string, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent, page: string, sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    }
  };

  return (
    <footer className="relative bg-neutral-950 text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-toos-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-toos-gold/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section: Newsletter & Brand Badge */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-20 border-b border-white/10 mb-20">
          <div className="max-w-lg text-center lg:text-right">
            <h3 className="text-2xl md:text-3xl font-black mb-4">با عضویت در <span className="text-toos-gold">خبرنامه</span> از تخفیف‌ها مطلع شوید</h3>
            <p className="text-gray-400 text-sm font-medium">جدیدترین مقالات سلامت، دستور پخت‌های اختصاصی و کدهای تخفیف دوره‌ای توس ۲۴۰۰.</p>
          </div>
          <div className="w-full lg:w-auto">
            <form className="relative flex flex-col sm:flex-row gap-3 w-full sm:min-w-[450px]" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="آدرس ایمیل خود را وارد کنید..." 
                className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:ring-2 focus:ring-toos-green/50 focus:border-toos-green transition-all text-right"
              />
              <button className="bg-toos-green hover:bg-toos-dark text-white px-8 py-4 rounded-2xl font-black transition-all shadow-xl shadow-green-900/20 active:scale-95">
                تایید ایمیل
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity Column */}
          <div className="space-y-8">
            <Logo className="h-16 w-auto" />
            <p className="text-gray-400 leading-loose text-sm font-medium text-justify">
              صنایع غذایی توس ۲۴۰۰، میراث‌دار اصالت و کیفیت در تولید حبوبات و ادویه‌جات ایرانی است. ما با بهره‌گیری از تکنولوژی‌های روز دنیا، پلی میان مزارع سبز و سفره‌های پربرکت شما هستیم.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={20} />, href: '#', color: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600' },
                { icon: <Linkedin size={20} />, href: '#', color: 'hover:bg-[#0077b5]' },
                { icon: <Twitter size={20} />, href: '#', color: 'hover:bg-sky-500' },
                { icon: <Facebook size={20} />, href: '#', color: 'hover:bg-blue-600' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-transparent hover:scale-110 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-toos-gold rounded-full"></span>
              نقشه سایت
            </h4>
            <ul className="space-y-4">
              {[
                { name: 'صفحه اصلی', page: 'home' },
                { name: 'فروشگاه حبوبات', page: 'products' },
                { name: 'درباره توس ۲۴۰۰', page: 'about' },
                { name: 'مجله و آموزش آشپزی', page: 'blog' },
                { name: 'آشپز هوشمند (AI)', page: 'ai-chef' },
                { name: 'تماس با کارخانه', page: 'contact' }
              ].map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="text-gray-400 hover:text-toos-green transition-all text-sm font-bold flex items-center gap-2 group"
                  >
                    <ArrowLeft size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-toos-gold rounded-full"></span>
              ارتباط مستقیم
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-toos-green/10 rounded-xl flex items-center justify-center text-toos-green flex-shrink-0 group-hover:bg-toos-green group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-black mb-1">آدرس کارخانه</p>
                  <p className="text-sm text-gray-300 leading-relaxed">خراسان رضوی، چناران، شهرک صنعتی، فاز ۲، خیابان دانش</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-toos-green/10 rounded-xl flex items-center justify-center text-toos-green flex-shrink-0 group-hover:bg-toos-green group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-black mb-1">تلفن دفتر پخش</p>
                  <p className="text-sm text-gray-300 ltr font-mono">051-37685653</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-toos-green/10 rounded-xl flex items-center justify-center text-toos-green flex-shrink-0 group-hover:bg-toos-green group-hover:text-white transition-all">
                  <Printer size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-black mb-1">فکس</p>
                  <p className="text-sm text-gray-300 ltr font-mono">051-37344231</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-10 h-10 bg-toos-green/10 rounded-xl flex items-center justify-center text-toos-green flex-shrink-0 group-hover:bg-toos-green group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-black mb-1">پست الکترونیک</p>
                  <p className="text-sm text-gray-300 font-mono">info@toosfood.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Trust Column */}
          <div>
            <h4 className="text-lg font-black mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-toos-gold rounded-full"></span>
              استانداردهای کیفی
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <ShieldCheck className="text-toos-gold" size={24} />
                <span className="text-[10px] font-black uppercase text-gray-400">ISO 22000</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <Leaf className="text-toos-green" size={24} />
                <span className="text-[10px] font-black uppercase text-gray-400">Organic</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <Award className="text-toos-gold" size={24} />
                <span className="text-[10px] font-black uppercase text-gray-400">Premium</span>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
                <Globe className="text-blue-400" size={24} />
                <span className="text-[10px] font-black uppercase text-gray-400">Export Ready</span>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-gray-500 justify-center">
              <CheckCircle2 size={14} className="text-toos-green" />
              تاییدیه سازمان غذا و دارو
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
             <p className="text-gray-500 text-xs font-medium">
               © ۱۴۰۳ تمامی حقوق مادی و معنوی این وب‌سایت متعلق به شرکت <span className="text-gray-300 font-black">فرآورده‌های غذایی توس</span> است.
             </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors font-bold">حریم خصوصی</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors font-bold">شرایط استفاده</a>
            <div className="w-px h-4 bg-white/10"></div>
            <p className="text-gray-500 text-[10px] font-medium tracking-widest uppercase">
              Designed by <span className="text-toos-gold">Creative Team</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};