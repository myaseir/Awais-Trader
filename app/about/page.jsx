'use client'
import { CheckCircle2, Award, Users, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const stats = [
    { label: 'Properties Cleaned', value: '500+', icon: <CheckCircle2 className="text-blue-500" /> },
    { label: 'Happy Clients', value: '100%', icon: <Users className="text-blue-500" /> },
    { label: 'Years Experience', value: '6+', icon: <Award className="text-blue-500" /> },
    { label: 'Average Response', value: '2hr', icon: <Clock className="text-blue-500" /> },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Split Layout */}
      <section className="relative py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Revitalizing Buildings, One <span className="text-blue-600">Detail</span> at a Time.
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              Aways Trader wasn't built in a day. It was built through thousands of hours on ladders, 
              hundreds of solar arrays cleaned, and a relentless commitment to making every 
              property look its absolute best.
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Team" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-900">Trusted by 500+ Owners</p>
                <p className="text-slate-500">Residential & Commercial</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop" 
                alt="Professional Window Cleaning"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative Blue Box */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-600 rounded-[2rem] -z-0 hidden md:block"></div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Responsive Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-black text-white">{stat.value}</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Why Aways Trader?</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">We combine advanced technology with old-school work ethic to deliver unmatched results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="group p-10 bg-slate-50 rounded-[2rem] hover:bg-blue-600 transition-all duration-500">
            <Zap className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-2xl font-bold mb-4 group-hover:text-white text-slate-900">Precision Gear</h4>
            <p className="text-slate-600 group-hover:text-blue-50 leading-relaxed">
              We use de-ionized water systems and soft-wash tech that protects your surfaces while removing 99% of grime.
            </p>
          </div>

          <div className="group p-10 bg-slate-50 rounded-[2rem] hover:bg-blue-600 transition-all duration-500">
            <CheckCircle2 className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-2xl font-bold mb-4 group-hover:text-white text-slate-900">Safety First</h4>
            <p className="text-slate-600 group-hover:text-blue-50 leading-relaxed">
              Our team is fully insured and IRATA certified for high-access cleaning. We don't take risks with your property.
            </p>
          </div>

          <div className="group p-10 bg-slate-50 rounded-[2rem] hover:bg-blue-600 transition-all duration-500">
            <Users className="text-blue-600 group-hover:text-white mb-6" size={40} />
            <h4 className="text-2xl font-bold mb-4 group-hover:text-white text-slate-900">Eco-Commitment</h4>
            <p className="text-slate-600 group-hover:text-blue-50 leading-relaxed">
              All our cleaning agents are biodegradable and safe for your pets, plants, and the environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}