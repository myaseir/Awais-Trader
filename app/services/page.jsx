'use client'
import { Sun, Wind, Building2, CheckCircle2, ArrowRight, Droplets, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  const allServices = [
    {
      title: "Window Cleaning",
      icon: <Wind className="w-8 h-8" />,
      description: "Crystal clear, streak-free windows using our advanced reach-and-wash pure water system. No ladders, no mess, just perfection.",
      features: ["Interior & Exterior", "Sills & Frames Included", "Hard Water Removal"],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800",
      accent: "blue"
    },
    {
      title: "Solar Panel Washing",
      icon: <Sun className="w-8 h-8" />,
      description: "Maximize your energy ROI. Dust and grime can reduce efficiency by 30%. We use specialized brushes and de-ionized water.",
      features: ["Efficiency Reports", "Chemical-Free Wash", "Multi-Array Discounts"],
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
      accent: "blue"
    },
    {
      title: "Building Wash",
      icon: <Building2 className="w-8 h-8" />,
      description: "Complete exterior restoration. We use 'Soft Washing' techniques to kill mold and algae without damaging paint or masonry.",
      features: ["Low-Pressure Tech", "Stucco & Brick Safe", "Gutter Brightening"],
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
      accent: "blue"
    }
  ];

  return (
    <div className="bg-white selection:bg-blue-100">
      {/* 1. Header Section - Tightened for Mobile */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6"
          >
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">Our Expertise</span>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
            Expertise in <br /> Every <span className="text-blue-500 underline decoration-blue-500/30">Drop.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            From residential estates to commercial complexes, we deliver specialized cleaning solutions tailored to your property.
          </p>
        </div>
      </section>

      {/* 2. Services List - Responsive Architecture */}
      <section className="py-16 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="space-y-16 md:space-y-40">
          {allServices.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 md:gap-20 items-center`}
            >
              {/* Image Container - Scaled for Mobile */}
              <div className="w-full lg:flex-1">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <div className="absolute -inset-3 bg-blue-50 rounded-[2.5rem] -z-10"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-[2rem] w-full h-64 md:h-[500px] object-cover shadow-2xl shadow-slate-200"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl lg:hidden">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                </div>
              </div>

              {/* Text Content - Focused Typography */}
              <div className="w-full lg:flex-1 space-y-6 text-center lg:text-left">
                <div className="hidden lg:flex w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{service.title}</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                  {service.description}
                </p>
                
                {/* Feature Grid - Optimized for Mobile columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center justify-center lg:justify-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 size={18} className="text-blue-600 shrink-0" />
                      <span className="text-xs md:text-sm font-bold text-slate-700 uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link href="/contact" className="w-full lg:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-200">
                    Get an Estimate <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Tech Section - Premium Dark Card */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-20 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                 <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                   <Droplets size={32} />
                 </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">The Pure Water Advantage</h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                Traditional squeegees leave soap residue that attracts dust. We use de-ionized water 
                filtration for a "spot-free" finish that stays cleaner for much longer.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                <ShieldCheck size={20} className="text-blue-500" />
                <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">100% Residue Free Guaranteed</span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800" 
                alt="Tech" 
                className="relative z-10 rounded-[2rem] w-full h-64 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}