'use client'
import { Mail, Phone, MapPin, ShieldCheck, CheckCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="bg-white selection:bg-blue-100">
      {/* Header Section */}
      <section className="relative bg-slate-950 py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
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
          </p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6 grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Side: Information */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Direct Information</h2>
            <div className="grid gap-4">
              {[
                { icon: <Phone />, label: 'Priority Support', val: '+1 (234) 567-890' },
                { icon: <Mail />, label: 'Email Inquiry', val: 'service@awaystrader.com' },
                { icon: <MapPin />, label: 'Service Area', val: 'London, UK & Surrounding Areas' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-600 transition-all group">
                  <div className="bg-slate-50 p-3 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{item.label}</p>
                    <p className="text-lg font-bold text-slate-900">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-blue-500" size={28} />
              <h3 className="text-xl font-bold">100% Insured Care</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Every Aways Trader project is covered by £5M public liability insurance for your peace of mind.
            </p>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:col-span-7">
          <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200 p-8 md:p-12 rounded-[3rem]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-900 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-300 placeholder:text-slate-500 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all outline-none text-slate-900"
                  />
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-900 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="example@mail.com" 
                    className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-300 placeholder:text-slate-500 focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all outline-none text-slate-900"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-900 ml-1">Service</label>
                  <select className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-300 focus:border-blue-600 focus:bg-white transition-all outline-none text-slate-900 appearance-none">
                    <option>Window Cleaning</option>
                    <option>Solar Panel Washing</option>
                    <option>Building Pressure Wash</option>
                  </select>
                </div>
                {/* Property Type */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-900 ml-1">Property</label>
                  <div className="flex gap-3">
                    {['Residential', 'Commercial'].map((type) => (
                      <label key={type} className="flex-1 flex items-center justify-center p-4 bg-slate-50 rounded-2xl cursor-pointer border border-slate-300 hover:border-blue-600 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 transition-all group">
                        <input type="radio" name="property" className="hidden" />
                        <span className="text-sm font-bold text-slate-600 group-has-[:checked]:text-blue-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message Area */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-900 ml-1">Project Details</label>
                <textarea 
                  rows={4} 
                  placeholder="Describe your property (size, address, etc.)" 
                  className="w-full p-4 bg-slate-50 rounded-2xl border border-slate-300 placeholder:text-slate-500 focus:border-blue-600 focus:bg-white transition-all outline-none resize-none text-slate-900"
                ></textarea>
              </div>

              <button className="group w-full bg-blue-600 text-white font-black py-5 rounded-[2rem] hover:bg-blue-700 hover:shadow-xl transition-all flex items-center justify-center gap-3">
                Send Request <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}