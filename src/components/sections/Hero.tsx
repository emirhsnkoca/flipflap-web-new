import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <main className="relative z-40 container mx-auto px-6 py-6 md:py-0 md:h-[calc(100vh-100px)] flex flex-col items-center justify-center">
        
      {/* MERKEZ: Metin ve Aksiyon */}
      <div className="text-center space-y-8 -mt-8 md:-mt-20 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-5xl sm:text-6xl md:text-9xl font-titan text-white leading-tight tracking-wide hero-title"
        >
          GÖKYÜZÜNDE <br />
          <span className="text-yellow-300">FLIP ZAMANI!</span>
        </motion.h1>
        
        <p className="text-xl md:text-2xl text-white font-bold drop-shadow-md max-w-2xl mx-auto px-4 font-fredoka">
          En sevimli kanatlarını tak, engelleri aş ve bulutların üzerinde zıplamaya başla. Maceraya hazır mısın?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center pt-8 px-4">
          {/* DEV OYNA BUTONU */}
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95, translateY: 6 }}
             className="bg-green-500 hover:bg-green-400 text-white text-2xl md:text-4xl font-black px-10 md:px-16 py-5 md:py-8 rounded-[2.5rem] border-b-[8px] border-green-700 shadow-2xl flex items-center justify-center gap-4 transition-all w-full sm:w-auto font-fredoka"
          >
            <Play fill="white" size={40} className="md:w-12 md:h-12" />
            OYNA
          </motion.button>
          
          {/* FRAGMAN BUTONU */}
          <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95, translateY: 6 }}
             className="bg-yellow-400 hover:bg-yellow-300 text-yellow-900 text-xl md:text-2xl font-black px-8 md:px-12 py-5 md:py-8 rounded-[2.5rem] border-b-[8px] border-yellow-600 shadow-xl transition-all w-full sm:w-auto font-fredoka"
          >
            Fragmanı İzle
          </motion.button>
        </div>
      </div>
    </main>
  );
};
