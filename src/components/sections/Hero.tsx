import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <main className="relative z-40 container mx-auto px-6 py-6 md:py-0 md:h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        
      {/* MERKEZ: Metin ve Aksiyon */}
      <div className="text-center space-y-8 -mt-16 md:-mt-40 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-titan text-white leading-tight tracking-wide hero-title"
        >
          IT'S <span className="text-yellow-300">FLIP</span><span className="text-lime-400">FLAP</span> <br />
          <span className="text-yellow-300">TIME!</span>
        </motion.h1>
        
        <p className="!mt-60 text-xl md:text-2xl text-white font-bold drop-shadow-md max-w-2xl mx-auto px-4 font-fredoka block relative">
          Put on your cutest wings, overcome obstacles, and start bouncing above the clouds. Are you ready for the adventure?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center pt-8 px-4">
          {/* FRAGMAN BUTONU */}
          <motion.a 
             href="https://x.com/flipflapdotfun/status/1990121563635548206"
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95, translateY: 6 }}
             className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-xl md:text-2xl font-black px-8 md:px-12 py-5 md:py-8 rounded-[2.5rem] border-b-[8px] border-yellow-600 shadow-xl transition-all w-full sm:w-auto font-fredoka inline-block"
          >
            Watch Trailer
          </motion.a>
        </div>
      </div>
    </main>
  );
};
