'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/80 py-12 border-t border-white/5 relative overflow-hidden backdrop-blur-md">
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="flex flex-col items-center justify-center text-red-600">
                 <span className="font-bold text-5xl leading-none" style={{ fontFamily: 'sans-serif' }}>देव</span>
              </div>
              <div className="flex flex-col justify-center ml-2 text-white">
                <span className="font-outfit font-black text-2xl sm:text-3xl leading-none tracking-tight uppercase mb-1">
                  DENTAL CLINIC
                </span>
                <span className="font-outfit font-bold text-[0.65rem] sm:text-xs leading-none tracking-[0.1em] sm:tracking-[0.15em] uppercase">
                  & Health Care
                </span>
              </div>
            </Link>
            <p className="text-gray-400 font-light text-sm leading-relaxed">
              Premium dental care blending modern technology with specialized expertise to perfect your smile.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#home" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Home</Link></li>
              <li><Link href="#about" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">About Us</Link></li>
              <li><Link href="#services" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Services</Link></li>
              <li><Link href="#gallery" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Gallery</Link></li>
              <li><Link href="#contact" className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              <li className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">General Dentistry</li>
              <li className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Teeth Whitening</li>
              <li className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Dental Implants</li>
              <li className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Root Canal</li>
              <li className="text-zinc-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">Cosmetic Dentistry</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Operating Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                <span>Mon - Fri</span>
                <span className="text-white">9AM - 8PM</span>
              </li>
              <li className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                <span>Saturday</span>
                <span className="text-white">9AM - 5PM</span>
              </li>
              <li className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500">
                <span>Sunday</span>
                <span className="text-red-500">Emergency</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Dev Dental Clinic & Health Care. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
