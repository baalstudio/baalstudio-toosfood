import React from 'react';
import { 
  Users, Target, Eye, Award, History, Factory, 
  ChevronRight, CheckCircle2, Globe, HeartPulse, 
  ShieldCheck, Leaf, FlaskConical, Microscope 
} from 'lucide-react';
import { Logo } from './Logo';

export const AboutPage: React.FC = () => {
  const stats = [
    { label: 'ظرفیت تولید سالانه', value: '۱۲,۰۰۰ تن', icon: <Factory className="text-toos-green" /> },
    { label: 'کشورهای صادراتی', value: '۱۵ کشور', icon: <Globe className="text-blue-500" /> },
    { label: 'پرسنل متخصص', value: '۲۵۰+ نفر', icon: <Users className="text-amber-500" /> },
    { label: 'استاندارد کیفی', value: '۸ گواهینامه', icon: <Award className="text-red-500" /> },
  ];

  const timeline = [
    { year: '۱۳۷۵', event: 'تأسیس شرکت فرآورده‌های غذایی توس با نام تجاری توس ۲۴۰۰ و شروع فعالیت در صنعت غذا.', image: 'https://images.unsplash.com/photo-1595861111762-b91c0e3522ba?q=80&w=400&auto=format&fit=crop' },
    { year: '۱۳۸۸', event: 'راه‌اندازی فاز دوم و ورود به بازارهای صادراتی کشورهای همسایه با تنوع محصول بیشتر.', image: 'https://images.unsplash.com/photo-1544256673-a201c137456d?q=80&w=400&auto=format&fit=crop' },
    { year: '۱۳۹۵', event: 'نوسازی کامل ماشین‌آلات و پیاده‌سازی استانداردهای هوشمند لیزری برای فرآوری حبوبات.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop' },
    { year: '۱۴۰۳', event: 'توسعه خطوط تولید ادویه‌جات و سبزیجات خشک با بهره‌گیری از دانش نوین متخصصان.', image: 'https://images.unsplash.com/photo-1532634993-15f421e42ec0?q=80&w=400&auto=format&fit=crop' },
  ];

  const coreValues = [
    { 
      title: 'صداقت با مشتری', 
      desc: 'ما معتقدیم کیفیت واقعی محصول بهترین تبلیغ است.', 
      icon: <CheckCircle2 className="w-8 h-8" /> 
    },
    { 
      title: 'سلامت محوری', 
      desc: 'استفاده از محصولات ارگانیک و بدون مواد نگهدارنده اولویت ماست.', 
      icon: <HeartPulse className="w-8 h-8" /> 
    },
    { 
      title: 'نوآوری در تولید', 
      desc: 'بهره‌گیری از تکنولوژی‌های روز دنیا برای حفظ ارزش غذایی.', 
      icon: <FlaskConical className="w-8 h-8" /> 
    },
    { 
      title: 'مسئولیت اجتماعی', 
      desc: 'حمایت از کشاورزان بومی و حفظ محیط زیست با بسته‌بندی سبز.', 
      icon: <Leaf className="w-8 h-8" /> 
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-toos-dark text-white">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Factory" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
             <div className="mb-10 flex justify-start">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/20 inline-block">
                   <Logo className="h-16" />
                </div>
             </div>
             <nav className="flex items-center gap-2 text-sm text-green-200 mb-8 opacity-80">
                <span className="hover:text-white cursor-pointer">خانه</span>
                <ChevronRight size={14} />
                <span className="text-toos-gold font-black">درباره ما</span>
             </nav>
             <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight">
                داستان توس فود؛ <br/>
                <span className="text-toos-gold">توس ۲۴۰۰</span>
             </h1>
             <p className="text-green-50 text-lg md:text-xl leading-relaxed opacity-90 font-medium text-justify">
               شرکت فرآورده‌های غذایی توس با نام تجاری توس ۲۴۰۰، از سال ۱۳۷۵ شروع به فعالیت نمود. از همان بدو تأسیس دغدغه اصلی گروه توس تهیه بهترین مواد اولیه از برترین مزارع بوده تا در نهایت با بهترین نوع فرآوری و بسته‌بندی، محصولی فاخر برای سفره‌های صمیمی مردمان این مرز و بوم فراهم کنیم.
             </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-gray-50 rounded-2xl mb-4 group-hover:bg-toos-green/10 transition-colors">
                {stat.icon}
              </div>
              <p className="text-3xl font-black text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story / Vision Mission */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-toos-gold/10 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-6 -left-6 z-30 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block animate-bounce">
                <Logo className="h-10" />
             </div>
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                  alt="Management" 
                  className="w-full h-auto"
                />
             </div>
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 max-w-xs hidden md:block">
                <p className="text-toos-green font-black text-2xl mb-2">توس ۲۴۰۰</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  بیش از ۲۸ سال تجربه در فرآوری و بسته‌بندی محصولات ممتاز غذایی.
                </p>
             </div>
          </div>
          <div className="space-y-10">
             <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                   <Target className="text-toos-green" /> اصالت و تخصص
                </h2>
                <div className="space-y-6">
                   <div className="bg-gray-50 p-8 rounded-3xl border-r-8 border-toos-green">
                      <p className="text-gray-700 leading-loose text-lg text-justify">
                        در مسیر اعتلای کیفیت، استفاده از دانش متخصصان و همچنین بهره‌گیری از جدیدترین ماشین‌آلات روز دنیا همواره در دستور کار ما بوده است. هم‌اکنون شرکت فرآورده‌های غذایی توس در حال تولید و فرآوری انواع حبوبات، ادویه و سبزیجات خشک می‌باشد.
                      </p>
                   </div>
                </div>
             </div>
             <div className="pt-6 border-t border-gray-100">
                <p className="text-gray-500 leading-loose italic text-xl">
                  "امید که همچو گذشته حق یاریمان کند."
                  <br/>
                  <span className="text-toos-dark font-black mt-4 block">— خانواده بزرگ توس ۲۴۰۰</span>
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-gray-50/50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">ارزش‌های <span className="text-toos-green">بنیادین</span> ما</h2>
               <p className="text-gray-500 max-w-2xl mx-auto">اصولی که هرگز در خط تولید و مدیریت توس فود بر سر آن‌ها معامله نمی‌کنیم.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {coreValues.map((value, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl hover:border-toos-green/20 transition-all text-center">
                     <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-toos-light text-toos-green mb-8">
                        {value.icon}
                     </div>
                     <h4 className="text-xl font-black text-gray-900 mb-4">{value.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed font-medium">{value.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
               <History className="text-toos-gold" /> مسیر رشد توس ۲۴۰۰
            </h2>
            <p className="text-gray-500">از یک رؤیای بزرگ تا مدرن‌ترین خط تولید منطقه</p>
         </div>

         <div className="relative">
            {/* Timeline Line */}
            <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gray-100 hidden lg:block"></div>
            
            <div className="space-y-24">
               {timeline.map((item, i) => (
                  <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                     <div className="lg:w-1/2 flex justify-center">
                        <div className="relative group">
                           <div className="absolute -inset-4 bg-toos-green/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                           <img src={item.image} alt={item.year} className="w-80 h-80 rounded-[3rem] object-cover shadow-2xl relative z-10" />
                        </div>
                     </div>
                     
                     {/* Timeline Point */}
                     <div className="hidden lg:flex absolute right-1/2 translate-x-1/2 w-10 h-10 bg-white border-4 border-toos-green rounded-full z-20 items-center justify-center">
                        <div className="w-2 h-2 bg-toos-green rounded-full"></div>
                     </div>

                     <div className={`lg:w-1/2 text-center lg:text-right ${i % 2 !== 0 ? 'lg:text-left' : ''}`}>
                        <span className="text-5xl font-black text-toos-green/10 mb-4 block leading-none">{item.year}</span>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">{item.year}</h3>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                           {item.event}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Quality Control / Certifications */}
      <section className="py-24 bg-toos-dark text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-16">کیفیت؛ اتفاقی نیست!</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="space-y-6 p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-toos-green/20 rounded-[2rem] mb-6">
                     <Microscope className="w-10 h-10 text-toos-green" />
                  </div>
                  <h4 className="text-xl font-black">آزمایشگاه پیشرفته</h4>
                  <p className="text-green-50/70 leading-relaxed text-sm">
                     تجهیزات مدرن آزمایشگاهی جهت بررسی آفات، رطوبت و سلامت دانه‌ها در بدو ورود به کارخانه.
                  </p>
               </div>
               <div className="space-y-6 p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-toos-gold/20 rounded-[2rem] mb-6">
                     <ShieldCheck className="w-10 h-10 text-toos-gold" />
                  </div>
                  <h4 className="text-xl font-black">استانداردهای بین‌المللی</h4>
                  <p className="text-green-50/70 leading-relaxed text-sm">
                     دارای گواهینامه‌های ISO 9001، ISO 22000 و HACCP برای تضمین سلامت زنجیره تولید.
                  </p>
               </div>
               <div className="space-y-6 p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-toos-green/20 rounded-[2rem] mb-6">
                     <Factory className="w-10 h-10 text-toos-green" />
                  </div>
                  <h4 className="text-xl font-black">خط تولید اتوماتیک</h4>
                  <p className="text-green-50/70 leading-relaxed text-sm">
                     بسته‌بندی تحت اتمسفر اصلاح شده (MAP) جهت حفظ تازگی محصولات بدون استفاده از مواد سمی.
                  </p>
               </div>
            </div>
            
            <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
               <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center font-black">ISO 9001</div>
               <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center font-black">HACCP</div>
               <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center font-black">HALAL</div>
               <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center font-black">ISO 22000</div>
            </div>
         </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-white">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50 p-16 rounded-[4rem] border border-gray-100 shadow-inner">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">فردا را با <span className="text-toos-green">ما</span> بسازید</h2>
            <p className="text-gray-500 text-lg mb-12 leading-relaxed">
               توس ۲۴۰۰ با اشتیاق از همکاری‌های جدید در زمینه‌های فروش، تأمین کالا و سرمایه‌گذاری استقبال می‌کند.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="bg-toos-green text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-toos-dark transition-all shadow-2xl">
                  مشاهده فرصت‌های شغلی
               </button>
               <button className="bg-white border-2 border-toos-green text-toos-green px-12 py-5 rounded-2xl font-black text-xl hover:bg-toos-green hover:text-white transition-all">
                  سرمایه‌گذاری در طرح‌های نوین
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};