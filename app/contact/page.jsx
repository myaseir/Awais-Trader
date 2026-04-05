'use client'
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-white selection:bg-blue-100">
      {/* Header Section with Glassmorphism Effect */}
      <section className="relative bg-slate-950 py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.2em] text-blue-500 uppercase bg-blue-500/10 rounded-full border border-blue-500/20">
            Contact Aways Trader
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[0.9]">
            Let’s Restore Your <br />
            <span className="text-blue-500">Property’s Shine.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Ready for a transformation? Request your bespoke quote today. 
            Our specialists respond to most inquiries within <span className="text-white font-bold underline decoration-blue-500">2 hours.</span>
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Information & Trust */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Direct Information</h2>
            <div className="grid gap-4">
              {[
                { icon: <Phone />, label: 'Priority Support', val: '+1 (234) 567-890' },
                { icon: <Mail />, label: 'Email Inquiry', val: 'service@awaystrader.com' },
                { icon: <MapPin />, label: 'Service Area', val: 'London, UK & Surrounding Areas' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Trust Card */}
          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
            <ShieldCheck className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold">100% Insured Care</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Your peace of mind is our priority. Every Aways Trader project is covered by £5M public liability insurance.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Licensed', 'Eco-Safe', 'Guaranteed'].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1 bg-white/10 rounded-full">
                    <CheckCircle size={12} className="text-blue-400" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Premium Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 rounded-[3rem]"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Service Required</label>
                  <select className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none appearance-none cursor-pointer">
                    <option>Window Cleaning</option>
                    <option>Solar Panel Washing</option>
                    <option>Building Pressure Wash</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Property Type</label>
                  <div className="flex gap-3">
                    {['Residential', 'Commercial'].map((type) => (
                      <label key={type} className="flex-1 flex items-center justify-center p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-blue-50 transition-all border-2 border-transparent has-[:checked]:border-blue-600 has-[:checked]:bg-white group">
                        <input type="radio" name="property" className="hidden" />
                        <span className="text-sm font-bold text-slate-600 group-has-[:checked]:text-blue-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Additional Project Details</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about the project size, location, and preferred dates..." 
                  className="w-full p-4 bg-slate-50 rounded-2xl border-2 border-transparent focus:border-blue-600 focus:bg-white transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="group w-full bg-blue-600 text-white font-black py-5 rounded-[2rem] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-500 flex items-center justify-center gap-3">
                Send Request <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}