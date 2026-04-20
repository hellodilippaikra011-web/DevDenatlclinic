'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-900/50 hover:scale-110 transition-transform"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[320px] sm:w-[350px] bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-black/60 px-4 py-4 flex items-center gap-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center relative">
                <span className="font-outfit font-bold text-white text-lg">D</span>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-red-900"></span>
              </div>
              <div>
                <h4 className="text-white font-medium text-sm">Dev Dental Support</h4>
                <p className="text-red-200 text-xs font-light">Online - Reply typically in mins</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 h-[250px] bg-transparent overflow-y-auto flex flex-col gap-3">
              <div className="bg-black/40 p-3 rounded-2xl rounded-tl-sm text-sm text-zinc-300 font-light max-w-[85%] border border-white/10">
                Hello! Welcome to Dev Dental Clinic. How can we help you smile brighter today?
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 bg-black/40 border-t border-white/10">
              <form 
                className="relative flex items-center" 
                onSubmit={(e) => { e.preventDefault(); /* mock submission */ }}
              >
                <input 
                  type="text" 
                  placeholder="Type a message..." 
                  className="w-full bg-black/40 text-sm text-white placeholder-zinc-500 rounded-md pl-4 pr-12 py-3 outline-none border border-white/10 focus:border-red-500 transition-colors"
                />
                <button type="submit" className="absolute right-2 text-red-500 hover:text-red-400 transition-colors p-2">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
