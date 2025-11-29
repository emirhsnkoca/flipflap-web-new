import { Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 pt-2 md:pt-4 px-4 md:px-6 container mx-auto">
      <div className="flex justify-between items-center">
        {/* LOGO SOLDA */}
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} 
          className="w-32 md:w-48 cursor-pointer hover:scale-105 transition-transform z-50"
        >
          <img 
            src="/assets/images/logo-nobg.png" 
            alt="FlipFlap Logo" 
            className="w-full transform -rotate-6" 
          />
        </motion.div>

        {/* MOBİL MENÜ BUTONU */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white bg-sky-500/50 p-2 rounded-xl backdrop-blur-md border-2 border-white/50 z-50"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex gap-4 bg-white/40 backdrop-blur-md p-2 rounded-full border-2 border-white/50 shadow-lg">
           {['Nasıl Oynanır?', 'Karakterler', 'Liderlik Tablosu'].map((item) => (
             <button key={item} className="px-6 py-2 rounded-full font-bold text-sky-900 hover:bg-white transition-colors">
               {item}
             </button>
           ))}
        </div>

        {/* SAĞ CTA (3D Buton - Desktop) */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, translateY: 4 }}
          className="hidden md:flex bg-lime-400 hover:bg-lime-300 text-white text-xl font-black px-8 py-3 rounded-3xl border-b-[6px] border-lime-600 shadow-xl items-center gap-2 uppercase tracking-wide transition-all"
        >
          <Download size={28} strokeWidth={3} />
          Hemen İndir
        </motion.button>
      </div>

      {/* MOBİL MENÜ (Açılır/Kapanır) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white/90 backdrop-blur-xl rounded-3xl p-6 flex flex-col gap-4 shadow-2xl border-4 border-white md:hidden z-40"
          >
             {['Nasıl Oynanır?', 'Karakterler', 'Liderlik Tablosu'].map((item) => (
               <button key={item} className="w-full text-left px-4 py-3 rounded-xl font-black text-sky-900 hover:bg-sky-100 text-lg transition-colors">
                 {item}
               </button>
             ))}
             <button className="w-full bg-lime-400 text-white text-xl font-black px-8 py-4 rounded-2xl border-b-[6px] border-lime-600 shadow-xl flex items-center justify-center gap-2 uppercase tracking-wide mt-2 active:translate-y-1 active:border-b-0 transition-all">
               <Download size={24} strokeWidth={3} />
               Hemen İndir
             </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
