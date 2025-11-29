import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* İçerik Container */}
      <div className="relative z-40 container mx-auto px-6 py-6 md:py-0 flex-grow flex flex-col items-center justify-center">
        
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
      </div>

      {/* Homepage Bulutları: Hero'nun en altında yer alır */}
      <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
          <svg viewBox="0 0 1440 320" className="w-full h-16 md:h-24 lg:h-32 text-white fill-current" preserveAspectRatio="none">
              <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
       </div>
    </section>
  );
};
