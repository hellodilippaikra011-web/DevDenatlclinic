'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Stethoscope, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with Dark Red Gradient and subtle dental imagery overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505] z-10 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0000] to-red-950 z-20 opacity-90"></div>
        {/* Atmosphere radial gradient */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-red-900/20 rounded-full blur-[120px] z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] z-10 pointer-events-none"></div>
        
        {/* Placeholder for dental imagery (using picsum as placeholder) */}
        <Image 
          src="https://picsum.photos/seed/dental-office/1920/1080?blur=2" 
          alt="Dental Clinic Environment" 
          fill 
          className="object-cover opacity-30 mix-blend-overlay"
          referrerPolicy="no-referrer"
          priority
        />
      </div>

      <div className="container relative z-30 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-[10px] font-bold uppercase tracking-widest mb-6 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Premium Dental Care</span>
            </div>

            <h1 className="font-outfit text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight text-white mb-6">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-700 to-red-900">Smile</span>,<br/>
              Our Priority.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed mb-8">
              Experience advanced dental care with a focus on your comfort. We blend modern technology with specialized expertise to perfect your smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#appointment"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-900/20 hover:scale-105 transition-transform text-center flex items-center justify-center"
              >
                  Book Appointment
              </Link>
              
              <Link 
                href="#contact"
                className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-lg text-white font-bold text-sm uppercase tracking-wider hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Quick Highlights Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-900 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl flex flex-col gap-6">
              
              <div className="flex items-center gap-5 p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-500/20">
                  <Stethoscope className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-outfit font-bold text-white mb-1">Experienced Doctors</h3>
                  <p className="text-xs text-zinc-400">Specialized team of dental experts</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-500/20">
                  <ShieldCheck className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-outfit font-bold text-white mb-1">Modern Equipment</h3>
                  <p className="text-xs text-zinc-400">State-of-the-art technology</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-4 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/30 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-red-600/10 flex items-center justify-center border border-red-500/20">
                  <Clock className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-outfit font-bold text-white mb-1">Emergency Care</h3>
                  <p className="text-xs text-zinc-400">24/7 support for dental emergencies</p>
                </div>
              </div>

            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
}
