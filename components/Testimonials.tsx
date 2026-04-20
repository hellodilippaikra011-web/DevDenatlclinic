'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Patient',
    content: 'The most painless root canal I have ever experienced. Dr. Dev and his team are incredibly professional and made sure I was comfortable throughout the entire procedure.',
    rating: 5,
    image: 'https://picsum.photos/seed/patient-priya/100/100'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    role: 'Patient',
    content: 'State-of-the-art facility! I got my dental implants here, and the results are phenomenal. They explained every step clearly and the aftercare support was amazing.',
    rating: 5,
    image: 'https://picsum.photos/seed/patient-rajesh/100/100'
  },
  {
    id: 3,
    name: 'Anjali Desai',
    role: 'Patient',
    content: 'I used to have severe dental anxiety, but the staff here changed that. The clinic environment is so calming, and they are incredibly gentle. Highly recommended!',
    rating: 5,
    image: 'https://picsum.photos/seed/patient-anjali/100/100'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative bg-[#050505] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
            Patient <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Stories</span>
          </h2>
          <p className="text-gray-400 font-light">Don&apos;t just take our word for it.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative">
                  <Quote className="absolute top-8 right-8 text-red-900/40 w-16 h-16" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="text-red-500 fill-red-500 w-5 h-5" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8 italic">
                    &quot;{testimonials[currentIndex].content}&quot;
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-900">
                      <Image 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-outfit">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded bg-black/40 border border-white/10 flex items-center justify-center text-white hover:border-red-500/50 hover:bg-black/60 transition-all focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded bg-black/40 border border-white/10 flex items-center justify-center text-white hover:border-red-500/50 hover:bg-black/60 transition-all focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
