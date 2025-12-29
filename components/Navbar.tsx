import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate: (page: string, sectionId?: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, sectionId?: string) => {
    onNavigate(page, sectionId);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'خانه', page: 'home', sectionId: undefined },
    { name: 'درباره ما', page: 'about', sectionId: undefined },
    { name: 'محصولات', page: 'products', sectionId: 'products' },
    { name: 'وبلاگ و آموزش', page: 'blog', sectionId: undefined },
    { name: 'آشپز هوشمند', page: 'ai-chef', sectionId: undefined },
    { name: 'تماس با ما', page: 'contact', sectionId: undefined },
  ];

  // Logic for dynamic classes: Navbar is opaque if scrolled OR if not on home page
  const isNavbarOpaque = isScrolled || currentPage !== 'home';

  const navBaseClasses = "fixed w-full z-50 transition-all duration-500 ease-in-out";
  const scrolledClasses = isNavbarOpaque 
    ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
    : "bg-transparent py-6";
  
  const linkColorClasses = isNavbarOpaque 
    ? "text-gray-700 hover:text-toos-green" 
    : "text-white/90 hover:text-toos-gold";

  const activeLinkClasses = isNavbarOpaque
    ? "bg-green-50 text-toos-green font-bold"
    : "bg-white/10 text-white font-bold backdrop-blur-sm";

  return (
    <nav className={`${navBaseClasses} ${scrolledClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <Logo className={`transition-transform duration-500 ${isNavbarOpaque ? 'h-12 scale-90' : 'h-16 scale-100'} origin-right`} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.page, link.sectionId)}
                className={`text-sm font-bold transition-all duration-300 px-4 py-2 rounded-xl ${
                  currentPage === link.page && !link.sectionId 
                    ? activeLinkClasses 
                    : linkColorClasses
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => handleNavClick('contact')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-black transition-all shadow-xl hover:scale-105 ${
                isNavbarOpaque 
                ? 'bg-toos-green text-white shadow-green-200' 
                : 'bg-white text-toos-dark shadow-black/20'
              }`}
            >
              <Phone size={18} />
              <span>سفارش عمده</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isNavbarOpaque ? 'text-gray-600' : 'text-white'} p-2 focus:outline-none`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out bg-white shadow-2xl overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.page, link.sectionId)}
              className={`block w-full text-right px-6 py-4 rounded-2xl font-black transition-colors ${
                  currentPage === link.page && !link.sectionId 
                    ? 'bg-green-50 text-toos-green' 
                    : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <div className="pt-6 mt-4 border-t border-gray-100">
             <button 
              onClick={() => handleNavClick('contact')}
              className="flex justify-center items-center gap-2 w-full bg-toos-green text-white px-5 py-4 rounded-2xl font-black shadow-lg"
             >
                <Phone size={20} />
                <span>تماس مستقیم با کارخانه</span>
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};