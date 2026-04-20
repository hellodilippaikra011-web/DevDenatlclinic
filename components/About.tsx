'use client';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images/Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/dentist-professional/800/1000" 
                alt="Dr. Dev" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-outfit text-3xl font-bold text-white mb-1">Dr. Hemsapna</h3>
                <p className="text-red-400 font-medium tracking-wide text-sm uppercase">Chief Dental Surgeon & Founder</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-gray-300 border border-white/5">BDS, MDS (Oral Surgery)</span>
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium text-gray-300 border border-white/5">10+ Years Experience</span>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-900/40 rounded-full blur-[60px] -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
                Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Dental Excellence</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                Dev Dental Clinic & Health Care is a premier dental facility dedicated to providing top-tier oral care. We merge compassion with clinical precision in a serene, modern environment to ensure your smile is not just beautiful, but deeply healthy.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="font-outfit text-xl font-bold text-white mb-2 relative z-10">Our Mission</h4>
                <p className="text-sm text-zinc-400 relative z-10 font-light leading-relaxed">
                  To deliver exceptional, pain-free dental care using state-of-the-art technology, focusing on patient education and preventive care.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-md border border-white/10 shadow-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h4 className="font-outfit text-xl font-bold text-white mb-2 relative z-10">Our Vision</h4>
                <p className="text-sm text-zinc-400 relative z-10 font-light leading-relaxed">
                  To be the most trusted healthcare provider, setting new standards for clinical outcomes and patient experience in dentistry.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="font-outfit text-lg font-bold text-white mb-4">Core Values</h4>
              <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Integrity & Trust
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Patient-Centric
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Clinical Excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span> Comfort & Safety
                </li>
              </ul>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
