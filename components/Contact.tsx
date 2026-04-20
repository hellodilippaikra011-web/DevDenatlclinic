'use client';
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Touch</span>
            </h2>
            <p className="text-gray-400 font-light mb-12 leading-relaxed">
              We are here to answer any questions you may have about your dental health or our services. Reach out to us and we&apos;ll respond as soon as we can.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-red-950/20 flex items-center justify-center shrink-0 border border-red-900/50">
                  <MapPin className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-outfit text-xl font-bold mb-2">Location</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Infront of PWD Rest House Pali<br />
                    Distt- Korba, 495449
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-red-950/20 flex items-center justify-center shrink-0 border border-red-900/50">
                  <Phone className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-outfit text-xl font-bold mb-2">Contact Numbers</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    Main / Emergency: +91 89593-18649
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-red-950/20 flex items-center justify-center shrink-0 border border-red-900/50">
                  <Mail className="text-red-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-outfit text-xl font-bold mb-2">Email Address</h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    info@devdentalclinic.com<br />
                    support@devdentalclinic.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Map Area */}
          <div className="relative h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl p-2">
            <iframe 
              src="https://maps.google.com/maps?q=PWD%20Rest%20House%20Pali,%20Korba,%20495449&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border border-white/5 rounded-xl filter grayscale invert contrast-125 opacity-70"
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
            {/* Overlay to give it a dark red tint */}
            <div className="absolute inset-0 bg-red-900/10 pointer-events-none mix-blend-color"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
