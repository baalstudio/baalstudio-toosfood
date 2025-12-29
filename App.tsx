import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { BlogSection } from './components/BlogSection';
import { AiChef } from './components/AiChef';
import { Footer } from './components/Footer';
import { SupportChat } from './components/SupportChat';
import { ProductsPage } from './components/ProductsPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'products' | 'ai-chef' | 'contact' | 'about'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleNavigate = (page: string, sectionId?: string) => {
    // Determine target page type safely
    const targetPage = (page === 'blog') ? 'blog' : 
                      (page === 'products' ? 'products' : 
                      (page === 'ai-chef' ? 'ai-chef' : 
                      (page === 'contact' ? 'contact' : 
                      (page === 'about' ? 'about' : 'home'))));
    
    setCurrentPage(targetPage);

    if (sectionId && targetPage === 'home') {
       // Wait for render to complete then scroll
       setTimeout(() => {
         const element = document.getElementById(sectionId);
         if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 50);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <Features />
            
            <div className="bg-white pb-20">
               <ProductGrid isLanding={true} />
               <div className="text-center mt-8">
                  <button 
                    onClick={() => handleNavigate('products')}
                    className="bg-toos-green text-white px-12 py-4 rounded-2xl font-black text-xl hover:bg-toos-dark transition-all shadow-2xl shadow-green-200 hover:-translate-y-1"
                  >
                    مشاهده تمامی محصولات فروشگاه
                  </button>
               </div>
            </div>

            <BlogSection viewMode="preview" onViewAll={() => handleNavigate('blog')} />
            <AiChef viewMode="preview" onFullView={() => handleNavigate('ai-chef')} />
          </>
        )}

        {currentPage === 'products' && (
          <div className="min-h-screen">
             <ProductsPage />
          </div>
        )}

        {currentPage === 'blog' && (
          <div className="min-h-screen">
             <BlogSection viewMode="full" />
          </div>
        )}

        {currentPage === 'ai-chef' && (
          <div className="min-h-screen">
             <AiChef viewMode="full" />
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="min-h-screen">
             <ContactPage />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="min-h-screen">
             <AboutPage />
          </div>
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      <SupportChat />
    </div>
  );
}

export default App;