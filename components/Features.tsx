import React from 'react';
import { ShieldCheck, Truck, Leaf, PackageCheck } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 1,
    title: 'تضمین کیفیت',
    description: 'تمامی محصولات از بهترین مزارع دستچین شده و تحت نظارت دقیق کنترل کیفیت قرار می‌گیرند.',
    icon: <ShieldCheck size={40} />,
  },
  {
    id: 2,
    title: 'بسته‌بندی بهداشتی',
    description: 'استفاده از ماشین‌آلات تمام اتوماتیک و بسته‌بندی چند لایه برای حفظ تازگی محصول.',
    icon: <PackageCheck size={40} />,
  },
  {
    id: 3,
    title: 'کاملا ارگانیک',
    description: 'محصولات ما بدون مواد نگهدارنده شیمیایی و کاملا طبیعی به دست شما می‌رسد.',
    icon: <Leaf size={40} />,
  },
  {
    id: 4,
    title: 'توزیع سریع',
    description: 'سیستم پخش گسترده برای رساندن محصولات تازه به فروشگاه‌ها و درب منزل شما.',
    icon: <Truck size={40} />,
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            چرا <span className="text-toos-green">توس فود</span> انتخاب اول است؟
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            ما متعهد هستیم تا سالم‌ترین و باکیفیت‌ترین محصولات خشکبار را با استانداردهای روز جهانی به شما عرضه کنیم.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-2xl transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white text-toos-green shadow-md mb-6 group-hover:bg-toos-green group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};