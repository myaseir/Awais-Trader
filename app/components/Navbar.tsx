'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-2 rounded-lg shadow-md group-hover:bg-blue-700 transition-colors">
              <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
              Aways<span className="text-blue-600">Trader</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                    isActive 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="ml-4 pl-4 border-l border-slate-200">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center gap-2 active:scale-95"
              >
                <PhoneCall size={16} />
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold p-3 rounded-xl ${
                    pathname === link.href 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-100"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}