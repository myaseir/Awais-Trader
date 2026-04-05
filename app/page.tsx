'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Zap, Droplets, CheckCircle2, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-white selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/90 md:via-white/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1600" 
            alt="Professional Cleaning" 
            className="w-full h-full object-cover object-center md:object-right"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-8 shadow-sm">
              <Sparkles size={16} className="text-blue-500" /> 
              <span>Trust the #1 Rated Exterior Cleaning Team</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight mb-8">
              Expert Care for <br />
              Your <span className="text-blue-600">Property.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
              Aways Trader provides premium window, solar, and building cleaning services designed for high-end residential and commercial estates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-blue-600 text-white px-8 md:px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-200 active:scale-95 group">
                Get a Free Quote 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 px-8 md:px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all text-center">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. LOGO CLOUD / TRUST BAR */}
      {/* 2. LOGO CLOUD / TRUST BAR - INFINITE SCROLL */}
      <section className="py-10 md:py-14 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-4 text-center md:text-left">
          <p className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em]">
            Trusted by Industry Leaders
          </p>
        </div>

        {/* The Slider Container */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-loop-scroll gap-12 md:gap-24 items-center">
            {/* First Set of Logos */}
            {[
              'COMMERCIAL PRO', 'SOLAR CLEAN', 'ESTATE CARE', 'RESIDENT_CO', 
              'GLASS MASTERS', 'URBAN WASH'
            ].map((brand, i) => (
              <span key={i} className="text-lg md:text-2xl font-black text-slate-300 hover:text-blue-500 transition-colors cursor-default whitespace-nowrap tracking-widest">
                {brand}
              </span>
            ))}
            {/* Duplicate Set for Seamless Looping */}
            {[
              'COMMERCIAL PRO', 'SOLAR CLEAN', 'ESTATE CARE', 'RESIDENT_CO', 
              'GLASS MASTERS', 'URBAN WASH'
            ].map((brand, i) => (
              <span key={`dup-${i}`} className="text-lg md:text-2xl font-black text-slate-300 hover:text-blue-500 transition-colors cursor-default whitespace-nowrap tracking-widest">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Add this to your globals.css or a <style> tag in this file */}
        <style jsx global>{`
          @keyframes loop-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-loop-scroll {
            display: flex;
            width: fit-content;
            animation: loop-scroll 20s linear infinite;
          }
        `}</style>
      </section>

      {/* 3. FEATURED SERVICES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">Precision Cleaning Solutions</h3>
          </div>
          <p className="text-slate-500 text-lg max-w-md">We use the latest technology to ensure your surfaces stay cleaner for longer without the risk of damage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: 'Windows', icon: <Droplets />, text: 'Streak-free finish using specialized de-ionized water technology.' },
            { title: 'Solar Panels', icon: <Zap />, text: 'Boost your energy efficiency by up to 30% with a professional wash.' },
            { title: 'Building Wash', icon: <ShieldCheck />, text: 'Soft-wash technology that effectively kills mold and protects paint.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -12 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-100/50 flex flex-col items-start text-left group transition-all"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h4>
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">{item.text}</p>
              <Link href="/services" className="mt-auto text-blue-600 font-bold flex items-center gap-2 group/btn">
                View Details <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE DIFFERENTIATOR */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] md:rounded-[4rem] overflow-hidden text-white relative">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 md:p-20 order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                Why Aways Trader is <span className="text-blue-500 italic">Different.</span>
              </h2>
              <div className="space-y-6">
                {[
                  '100% Pure Filtered Water System',
                  'Eco-Friendly, Non-Toxic Chemicals',
                  'Carbon Fiber Reach Poles (No Ladders Required)',
                  'Full Public Liability Insurance'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <p className="text-slate-300 font-medium md:text-lg">{point}</p>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-12 bg-white text-slate-900 px-8 py-4 rounded-xl font-black hover:bg-blue-500 hover:text-white transition-all shadow-lg active:scale-95">
                Our Technology
              </Link>
            </div>
            
            <div className="relative h-72 lg:h-full min-h-[400px] order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800" 
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                alt="Tech"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block p-3 bg-blue-50 rounded-2xl mb-6">
            <Star className="text-blue-600 w-8 h-8" fill="currentColor" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">Ready for a <span className="text-blue-600">Spotless</span> Result?</h2>
          <p className="text-lg md:text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
            Join hundreds of satisfied property owners. Get your no-obligation, custom quote in less than 24 hours.
          </p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-10 md:px-16 py-6 rounded-[2rem] font-black text-xl md:text-2xl hover:bg-blue-700 shadow-2xl shadow-blue-200 transition-all active:scale-95 hover:scale-105">
            Claim Your Free Quote
          </Link>
        </motion.div>
      </section>
    </div>
  );
}