'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, CheckCircle } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'windows', name: 'Windows' },
    { id: 'solar', name: 'Solar Panels' },
    { id: 'building', name: 'Building Wash' },
  ];

  const projects = [
    { id: 1, category: 'windows', title: 'Luxury Estate Windows', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800' },
    { id: 2, category: 'solar', title: 'Industrial Solar Farm', image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800' },
    { id: 3, category: 'building', title: 'Retail Center Pressure Wash', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800' },
    { id: 4, category: 'windows', title: 'High-Rise Office Glass', image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?q=80&w=800' },
    { id: 5, category: 'solar', title: 'Residential Solar Array', image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800' },
    { id: 6, category: 'building', title: 'Modern Apartment Complex', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Header */}
      <section className="bg-slate-50 py-20 px-6 text-center border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Our Work Excellence</h1>
          <p className="text-slate-500 text-lg">
            Browse through our portfolio of successfully completed residential and commercial projects.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-4 py-12 px-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-8 py-3 rounded-full font-bold transition-all duration-300 ${
              filter === cat.id 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' 
              : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-600'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[400px] rounded-[2rem] overflow-hidden bg-slate-100 shadow-xl shadow-slate-200/50"
              >
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <CheckCircle size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Completed</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <Maximize2 size={20} />
                    <span className="text-sm font-medium">View Full Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-xl font-medium">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Call to Action Footer */}
      <section className="mt-24 max-w-5xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Want results like these?</h2>
            <p className="text-blue-100 mb-8 text-lg">Join hundreds of satisfied property owners today.</p>
            <button className="bg-white text-blue-600 font-black px-10 py-4 rounded-2xl hover:bg-slate-100 transition-all shadow-xl active:scale-95">
              Book Your Cleaning Now
            </button>
          </div>
          {/* Abstract background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}