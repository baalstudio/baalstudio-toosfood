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
import { CertificatesPage } from './components/CertificatesPage';
import { BlogPostPage } from './components/BlogPostPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { blogPostsData } from './components/BlogSection';
import { allProducts } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog' | 'blog-post' | 'products' | 'product-detail' | 'ai-chef' | 'contact' | 'about' | 'certificates'>('home');
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  
  // Persist AI Chef state
  const [lastRecipe, setLastRecipe] = useState<string>('');
  const [lastMatchingProducts, setLastMatchingProducts] = useState<any[]>([]);
  const [lastIngredient, setLastIngredient] = useState<string>('');

  useEffect(() => {
    // Sync state with URL on initial load and browser back/forward
    const handlePopState = () => {
      const path = window.location.pathname.slice(1); // Remove leading slash
      const searchParams = new URLSearchParams(window.location.search);
      
      if (!path || path === '') {
        setCurrentPage('home');
      } else if (path === 'products') {
        setCurrentPage('products');
      } else if (path === 'blog') {
        setCurrentPage('blog');
      } else if (path === 'about') {
        setCurrentPage('about');
      } else if (path === 'contact') {
        setCurrentPage('contact');
      } else if (path === 'certificates') {
        setCurrentPage('certificates');
      } else if (path === 'ai-chef') {
        setCurrentPage('ai-chef');
      } else if (path === 'product-detail') {
        const id = searchParams.get('id');
        if (id) {
          setSelectedProductId(Number(id));
          setCurrentPage('product-detail');
        } else {
          setCurrentPage('products');
        }
      } else if (path === 'blog-post') {
        const id = searchParams.get('id');
        if (id) {
          setSelectedPostId(Number(id));
          setCurrentPage('blog-post');
        } else {
          setCurrentPage('blog');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState(); // Call once on mount

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const updateUrl = (page: string, id?: number) => {
    const url = page === 'home' ? '/' : `/${page}${id ? `?id=${id}` : ''}`;
    if (window.location.pathname + window.location.search !== url) {
      window.history.pushState({ page, id }, '', url);
    }
  };

  const handleNavigate = (page: string, sectionId?: string) => {
    const targetPage = (page === 'blog') ? 'blog' : 
                      (page === 'blog-post' ? 'blog-post' :
                      (page === 'products' ? 'products' : 
                      (page === 'product-detail' ? 'product-detail' :
                      (page === 'ai-chef' ? 'ai-chef' : 
                      (page === 'contact' ? 'contact' : 
                      (page === 'about' ? 'about' : 
                      (page === 'certificates' ? 'certificates' : 'home')))))));
    
    setCurrentPage(targetPage);
    updateUrl(targetPage);

    if (sectionId && targetPage === 'home') {
       setTimeout(() => {
         const element = document.getElementById(sectionId);
         if (element) element.scrollIntoView({ behavior: 'smooth' });
       }, 50);
    }
  };

  const handlePostClick = (postId: number) => {
    setSelectedPostId(postId);
    setCurrentPage('blog-post');
    updateUrl('blog-post', postId);
  };

  const handleProductClick = (productId: number) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
    updateUrl('product-detail', productId);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right" dir="rtl">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features />
            
            <div className="bg-white pb-20">
               <ProductGrid isLanding={true} onProductClick={handleProductClick} />
               <div className="text-center mt-8">
                  <button 
                    onClick={() => handleNavigate('products')}
                    className="bg-toos-green text-white px-12 py-4 rounded-2xl font-black text-xl hover:bg-toos-dark transition-all shadow-2xl shadow-green-200 hover:-translate-y-1"
                  >
                    مشاهده تمامی محصولات فروشگاه
                  </button>
               </div>
            </div>

            <BlogSection 
              viewMode="preview" 
              onViewAll={() => handleNavigate('blog')} 
              onPostClick={handlePostClick}
            />
            <AiChef 
              viewMode="preview" 
              onFullView={() => handleNavigate('ai-chef')} 
              onProductClick={handleProductClick}
              persistedState={{
                recipe: lastRecipe,
                matchingProducts: lastMatchingProducts,
                ingredient: lastIngredient
              }}
              onStateChange={(state) => {
                setLastRecipe(state.recipe);
                setLastMatchingProducts(state.matchingProducts);
                setLastIngredient(state.ingredient);
              }}
            />
          </>
        )}

        {currentPage === 'products' && (
          <div className="min-h-screen">
             <ProductsPage onProductClick={handleProductClick} />
          </div>
        )}

        {currentPage === 'product-detail' && selectedProductId !== null && (
          <div className="min-h-screen">
             {(() => {
               const product = allProducts.find(p => p.id === selectedProductId);
               return product ? (
                 <ProductDetailPage 
                   product={product} 
                   onBack={() => setCurrentPage('products')} 
                 />
               ) : null;
             })()}
          </div>
        )}

        {currentPage === 'blog' && (
          <div className="min-h-screen">
             <BlogSection 
               viewMode="full" 
               onPostClick={handlePostClick}
             />
          </div>
        )}

        {currentPage === 'blog-post' && selectedPostId !== null && (
          <div className="min-h-screen">
             {(() => {
               const post = blogPostsData.find(p => p.id === selectedPostId);
               return post ? (
                 <BlogPostPage 
                   post={post} 
                   onBack={() => setCurrentPage('blog')} 
                 />
               ) : null;
             })()}
          </div>
        )}

        {currentPage === 'ai-chef' && (
          <div className="min-h-screen">
             <AiChef 
               viewMode="full" 
               onProductClick={handleProductClick}
               persistedState={{
                 recipe: lastRecipe,
                 matchingProducts: lastMatchingProducts,
                 ingredient: lastIngredient
               }}
               onStateChange={(state) => {
                 setLastRecipe(state.recipe);
                 setLastMatchingProducts(state.matchingProducts);
                 setLastIngredient(state.ingredient);
               }}
             />
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

        {currentPage === 'certificates' && (
          <div className="min-h-screen">
             <CertificatesPage />
          </div>
        )}
      </main>
      
      <Footer onNavigate={handleNavigate} />
      <SupportChat />
    </div>
  );
}

export default App;