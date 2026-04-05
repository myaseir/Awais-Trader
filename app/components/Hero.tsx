'use client'
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* 1. New High-End Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/20 to-slate-950 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
          // A more modern, architectural cleaning image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000" 
          className="w-full h-full object-cover object-center"
          alt="Premium Property Cleaning"
        />
      </div>

      {/* 2. Content Container - Reduced top padding for mobile */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center pt-10 md:pt-0">
        
        {/* Trust Badge - Slightly smaller on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 md:mb-8"
        >
          <Sparkles size={14} /> Premium Exterior Care
        </motion.div>

        {/* Main Heading - Responsive sizing to prevent massive gaps */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8"
        >
          MAKING YOUR <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            ESTATE SHINE.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-300 text-base md:text-2xl max-w-2xl mx-auto mb-10 md:mb-12 font-medium leading-relaxed"
        >
          The trusted choice for window cleaning and solar maintenance across the region's finest properties.
        </motion.p>

        {/* Buttons - Full width on mobile, inline on desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/contact" 
            className="w-full sm:w-auto group bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/20 active:scale-95"
          >
            Get a Quote
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/services" 
            className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black text-lg text-white border-2 border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm text-center"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Features Row - Grid adjusted for mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 text-white/60">
            <ShieldCheck className="text-blue-500" size={18} />
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Insured</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 text-white/60">
            <Star className="text-blue-500" fill="currentColor" size={18} />
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">5-Star</span>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-3 text-white/60 col-span-2 md:col-span-1">
            <Sparkles className="text-blue-500" size={18} />
            <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest">Eco-Friendly</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}