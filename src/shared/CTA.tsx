import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col items-center justify-center text-center px-6 py-20" id="downloads">
      
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-emerald-600">
        Get the App
      </h2>

      <p className="text-xl text-slate-500 mb-10 max-w-lg">
        Effortlessly navigate your path to nutritional finesse.
        Available on iOS and Android.
      </p>

      <div className="flex flex-col md:flex-row gap-4">
        <img 
          src="/apple.svg" 
          alt="App Store" 
          className='w-[140px] cursor-pointer transition-transform hover:scale-105 active:scale-95' 
          onClick={() => setIsOpen(true)}
        />
        <img 
          src="/google.png" 
          alt="Play Store" 
          className='w-[140px] cursor-pointer transition-transform hover:scale-105 active:scale-95' 
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* --- Framer Motion Popup --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full z-10"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Coming Soon</h3>
              <p className="text-slate-600 mb-8">
                We're currently cooking up something amazing. We'll be live on stores very soon!
              </p>
              
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200"
              >
                Awesome!
              </button>
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </section>
  )
}