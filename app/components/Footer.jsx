'use client'

import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Globe, 
  MessageCircle, 
  Share2,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Window Cleaning",
    "Solar Panel Wash",
    "Building Pressure Wash",
    "Gutter Maintenance",
    "Commercial Contracts"
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 text-center sm:text-left">
          
          {/* Column 1: Brand & Professional Bio */}
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-blue-500/20">
                <div className="w-5 h-5 border-2 border-white rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                AWAYS<span className="text-blue-500">TRADER</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Precision exterior cleaning for high-value estates. We restore clarity to your windows and peak efficiency to your solar energy systems.
            </p>
            
            {/* Safe Social Icons (Using Core Lucide Icons) */}
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                <Globe size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 group">
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300 group">
                <Share2 size={18} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-semibold hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Detailed Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Expertise</h4>
            <ul className="space-y-4 text-sm font-medium">
              {services.map((service) => (
                <li key={service} className="hover:text-white transition-colors cursor-pointer flex items-center gap-3 group">
                   <CheckCircle2 size={14} className="text-blue-600 opacity-50 group-hover:opacity-100 transition-opacity" /> 
                   {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Availability */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Direct Contact</h4>
            <ul className="space-y-6">
              <li className="flex flex-col items-center sm:items-start">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone Inquiry</p>
                <div className="flex items-center gap-3 text-blue-500 font-bold">
                  <Phone size={16} />
                  <span className="text-white text-lg">+1 (234) 567-890</span>
                </div>
              </li>
              <li className="flex flex-col items-center sm:items-start">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Support</p>
                <div className="flex items-center gap-3 text-blue-500 font-bold">
                  <Mail size={16} />
                  <span className="text-white">service@awaystrader.com</span>
                </div>
              </li>
              <li className="flex flex-col items-center sm:items-start">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Location</p>
                <div className="flex items-center gap-3 text-blue-500 font-bold">
                  <MapPin size={16} />
                  <span className="text-white text-center sm:text-left">London, United Kingdom</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.25em]">
          <p>© {currentYear} AWAYS TRADER — THE GOLD STANDARD IN CLEANING.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-all underline underline-offset-8 decoration-blue-600/30 hover:decoration-blue-600">Privacy</Link>
            <Link href="#" className="hover:text-white transition-all underline underline-offset-8 decoration-blue-600/30 hover:decoration-blue-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}