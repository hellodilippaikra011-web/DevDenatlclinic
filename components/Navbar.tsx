'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#appointment"
            className="flex items-center gap-2 px-6 py-2 border border-red-600 text-red-500 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
          >
            <PhoneCall size={16} />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors py-2 uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#appointment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 px-6 py-3 border border-red-600 text-red-500 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all"
              >
                <PhoneCall size={18} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
