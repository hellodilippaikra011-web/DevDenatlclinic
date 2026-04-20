'use client';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

export default function Appointment() {
  return (
    <section id="appointment" className="py-24 relative bg-[#0a0a0a]">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-950/20 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-5 h-full">
            
            {/* Info Side */}
            <div className="lg:col-span-2 bg-black/40 p-10 md:p-14 border-r border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[80px] pointer-events-none"></div>
              
              <h3 className="font-outfit text-3xl font-bold text-white mb-4">Book Your Visit</h3>
              <p className="text-gray-400 font-light mb-10 leading-relaxed">
                Schedule your appointment online. Our team will contact you shortly to confirm your preferred time slot.
              </p>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-950/30 flex items-center justify-center shrink-0 border border-red-900/30">
                    <MapPin className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Clinic Address</h4>
                    <p className="text-sm text-gray-400">Infront of PWD Rest House Pali, Distt- Korba, 495449</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-950/30 flex items-center justify-center shrink-0 border border-red-900/30">
                    <Clock className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Working Hours</h4>
                    <p className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: Emergency Only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-950/30 flex items-center justify-center shrink-0 border border-red-900/30">
                    <Phone className="text-red-500" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Emergency Contact</h4>
                    <p className="text-sm text-gray-400">+91 89593-18649</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3 p-10 md:p-14">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 text-sm text-white focus:border-red-500 outline-none transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 text-sm text-white focus:border-red-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 text-sm text-white focus:border-red-500 outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label htmlFor="date" className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Preferred Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      id="date" 
                      className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 text-sm text-white focus:border-red-500 outline-none transition-colors [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest">Special Requests / Symptoms</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    placeholder="Tell us briefly about your dental issue..."
                    className="w-full bg-black/40 border border-white/10 rounded-md py-3 px-4 text-sm text-white focus:border-red-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-red-600 rounded-md font-bold text-xs uppercase tracking-widest mt-2 hover:bg-red-700 transition-colors text-white"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
