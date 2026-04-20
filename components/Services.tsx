'use client';
import { motion } from 'motion/react';
import { 
  Smile, 
  Sparkles, 
  Activity, 
  Layers, 
  Scissors, 
  ShieldAlert,
  HeartPulse
} from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive oral exams, cleanings, and preventive care to maintain optimal dental health.',
    icon: <Smile size={32} className="text-red-500" />
  },
  {
    title: 'Teeth Whitening',
    description: 'Advanced whitening treatments to safely and effectively brighten your smile.',
    icon: <Sparkles size={32} className="text-red-500" />
  },
  {
    title: 'Root Canal Treatment',
    description: 'Painless endodontic therapy to save inflamed or infected teeth and relieve pain.',
    icon: <Activity size={32} className="text-red-500" />
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements that restore full function and aesthetics.',
    icon: <Layers size={32} className="text-red-500" />
  },
  {
    title: 'Braces & Orthodontics',
    description: 'Traditional braces and clear aligners to correct misaligned teeth and jaw irregularities.',
    icon: <Scissors size={32} className="text-red-500" />
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Veneers, bonding, and total smile makeovers custom-designed for you.',
    icon: <HeartPulse size={32} className="text-red-500" />
  },
  {
    title: 'Tooth Extraction',
    description: 'Simple and surgical extractions, including wisdom teeth, using advanced pain management.',
    icon: <ShieldAlert size={32} className="text-red-500" />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-[#050505]">
      {/* Background acccents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Services</span>
          </h2>
          <p className="text-gray-400 leading-relaxed font-light">
            We offer a comprehensive range of dental treatments using the latest technology and pain-management protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 border-l-2 border-red-600 p-6 backdrop-blur-sm flex flex-col gap-4 group hover:bg-zinc-900/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:border-red-500/50 transition-colors">
                {service.icon}
              </div>
              
              <div>
                <p className="text-red-500 text-xs font-bold uppercase mb-1 tracking-tighter">0{index + 1}. {service.title}</p>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA Card spanning to fit grid appropriately */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-50px" }}
             transition={{ duration: 0.5, delay: services.length * 0.1 }}
             className="relative bg-zinc-900/40 p-6 backdrop-blur-sm border-l-2 border-red-600 md:col-span-2 lg:col-span-1 xl:col-span-1 flex items-center justify-center"
          >
            <div className="relative h-full w-full flex flex-col items-center justify-center text-center gap-4 z-10">
               <h3 className="font-outfit text-xl font-bold text-white">Need a specific treatment?</h3>
               <p className="text-zinc-300 text-sm mb-2">Our specialists are here to help you.</p>
               <a 
                href="#appointment"
                className="w-full py-3 rounded-lg border border-red-600 text-red-500 font-bold uppercase tracking-wider text-xs hover:bg-red-600 hover:text-white transition-colors"
               >
                 Consult Now
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
