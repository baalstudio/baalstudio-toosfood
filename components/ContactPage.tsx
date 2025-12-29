import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageSquare, User, Building, Instagram, 
  Linkedin, ArrowRight, CheckCircle2, ChevronDown, 
  Printer, Hash
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const contactInfos = [
    {
      icon: <Phone className="text-toos-green" />,
      title: 'شماره‌های تماس',
      details: ['۰۵۱-۴۶۱۸۸۴۸۶ (تلفن کارخانه)', '۰۵۱-۳۷۶۸۵۶۵۳ (دفتر پخش)'],
      color: 'bg-green-50'
    },
    {
      icon: <Printer className="text-blue-500" />,
      title: 'ارتباطات فکس',
      details: ['۰۵۱-۳۷۳۴۴۲۳۱ (فکس مرکزی)'],
      color: 'bg-blue-50'
    },
    {
      icon: <MapPin className="text-red-500" />,
      title: 'آدرس کارخانه',
      details: ['خراسان رضوی، چناران، شهرک صنعتی، فاز ۲، خیابان دانش'],
      color: 'bg-red-50'
    },
    {
      icon: <Hash className="text-amber-500" />,
      title: 'اطلاعات پستی',
      details: ['کد پستی: ۹۱۹۶۷۱۳۸۷۵', 'ایمیل: info@toosfood.com'],
      color: 'bg-amber-50'
    }
  ];

  const faqs = [
    {
      q: 'آیا امکان خرید حضوری از درب کارخانه وجود دارد؟',
      a: 'بله، فروشگاه مرکزی توس فود واقع در شهرک صنعتی چناران آماده خدمت‌رسانی به مشتریان عزیز است.'
    },
    {
      q: 'شرایط نمایندگی محصولات توس فود چیست؟',
      a: 'برای دریافت شرایط نمایندگی در شهرستان‌ها، لطفاً از طریق بخش "فروش عمده" با شماره‌های دفتر پخش (۰۵۱-۳۷۶۸۵۶۵۳) تماس حاصل فرمایید.'
    },
    {
      q: 'چگونه می‌توانیم از اصالت محصولات اطمینان حاصل کنیم؟',
      a: 'تمامی محصولات اصلی توس فود دارای هولوگرام امنیتی و کد پیگیری سازمان غذا و دارو روی بسته‌بندی هستند.'
    },
    {
      q: 'حداقل سفارش برای خریدهای عمده چقدر است؟',
      a: 'برای خریدهای عمده کارخانه‌ای، حداقل سفارش از هر محصول ۵ کارتن (یا ۱۰۰ بسته) می‌باشد.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-toos-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            پل‌های ارتباطی با <span className="text-toos-gold">توس فود</span>
          </h1>
          <p className="text-green-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            ما در توس فود همیشه آماده شنیدن نظرات، انتقادات و پاسخگویی به سوالات شما هستیم. 
            تیم پشتیبانی ما در سریع‌ترین زمان ممکن با شما در ارتباط خواهد بود.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfos.map((info, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
              <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, dIdx) => (
                  <p key={dIdx} className="text-gray-500 text-sm font-medium leading-relaxed">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form */}
          <div className="flex-1">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-gray-900 mb-4">ارسال پیام مستقیم</h2>
              <p className="text-gray-500">فرم زیر را پر کنید تا همکاران ما در بخش مربوطه با شما تماس بگیرند.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 pr-2 flex items-center gap-2">
                    <User size={16} className="text-toos-green" /> نام و نام خانوادگی
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="مثلا: علی محمدی"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 pr-2 flex items-center gap-2">
                    <Mail size={16} className="text-toos-green" /> آدرس ایمیل
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="example@mail.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none transition-all ltr text-right"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 pr-2 flex items-center gap-2">
                    <Phone size={16} className="text-toos-green" /> شماره تماس
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="۰۹۱۲۰۰۰۰۰۰۰"
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none transition-all ltr text-right"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 pr-2 flex items-center gap-2">
                    <Building size={16} className="text-toos-green" /> موضوع پیام
                  </label>
                  <select 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none transition-all appearance-none"
                  >
                    <option value="">انتخاب کنید...</option>
                    <option value="sales">واحد فروش و نمایندگی</option>
                    <option value="support">پشتیبانی و پیگیری سفارش</option>
                    <option value="quality">صدای مشتری و کنترل کیفیت</option>
                    <option value="other">سایر موارد</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 pr-2 flex items-center gap-2">
                  <MessageSquare size={16} className="text-toos-green" /> متن پیام شما
                </label>
                <textarea 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="چطور می‌توانیم به شما کمک کنیم؟"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-toos-green/10 focus:border-toos-green outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-100 ${
                  isSuccess ? 'bg-green-500 text-white' : 'bg-toos-green text-white hover:bg-toos-dark active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <>کمی صبر کنید...</>
                ) : isSuccess ? (
                  <><CheckCircle2 /> پیام شما با موفقیت ارسال شد</>
                ) : (
                  <><Send size={20} /> ارسال پیام</>
                )}
              </button>
            </form>
          </div>

          {/* Map Placeholder / Location Details */}
          <div className="w-full lg:w-96 space-y-8">
            <div className="bg-gray-100 rounded-[2.5rem] h-96 relative overflow-hidden group shadow-inner">
               {/* Simulating a map with a styled iframe or placeholder */}
               <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4 animate-bounce" />
                    <p className="font-bold">موقعیت مکانی توس فود</p>
                    <p className="text-xs mt-2">خراسان رضوی، چناران، شهرک صنعتی</p>
                  </div>
               </div>
               {/* Overlay for action */}
               <div className="absolute bottom-6 inset-x-6">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full bg-white text-gray-900 py-4 rounded-2xl font-black text-center shadow-2xl hover:bg-toos-green hover:text-white transition-all"
                  >
                    مسیریابی با نقشه گوگل
                  </a>
               </div>
            </div>

            <div className="bg-toos-light p-8 rounded-[2.5rem] border border-green-100">
               <h4 className="text-xl font-black text-toos-dark mb-6">ما را دنبال کنید</h4>
               <div className="flex gap-4">
                  <a href="#" className="flex-1 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-2 group">
                    <Instagram className="text-pink-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-gray-600">اینستاگرام</span>
                  </a>
                  <a href="#" className="flex-1 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-2 group">
                    <Linkedin className="text-blue-700 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-gray-600">لینکدین</span>
                  </a>
                  <a href="#" className="flex-1 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center gap-2 group">
                    <Send className="text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-gray-600">تلگرام</span>
                  </a>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4">سوالات <span className="text-toos-green">متداول</span></h2>
              <p className="text-gray-500">پاسخ سریع به برخی از پرسش‌های پرتکرار شما</p>
           </div>

           <div className="space-y-4">
             {faqs.map((faq, idx) => (
               <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-right flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className={`font-black text-lg transition-colors ${openFaq === idx ? 'text-toos-green' : 'text-gray-800'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-toos-green' : 'text-gray-400'}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm bg-gray-50/50">
                      {faq.a}
                    </div>
                  </div>
               </div>
             ))}
           </div>
           
           <div className="mt-16 text-center">
              <p className="text-gray-500 font-bold mb-6">هنوز سوالی دارید؟</p>
              <button className="bg-white border-2 border-toos-green text-toos-green px-10 py-4 rounded-2xl font-black hover:bg-toos-green hover:text-white transition-all flex items-center gap-3 mx-auto">
                 گپ زدن با پشتیبان هوشمند
                 <ArrowRight size={20} className="rotate-180" />
              </button>
           </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-toos-green text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-8">فرصت همکاری با بهترین‌ها</h2>
            <p className="text-green-50 text-xl mb-12 opacity-80 max-w-2xl mx-auto">
              توس فود همواره به دنبال توسعه شبکه فروش و همکاری با تامین‌کنندگان برتر است.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <button className="bg-white text-toos-green px-12 py-5 rounded-2xl font-black text-xl hover:bg-toos-dark hover:text-white transition-all shadow-2xl">
                 درخواست نمایندگی
               </button>
               <button className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                 ارسال رزومه کاری
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};