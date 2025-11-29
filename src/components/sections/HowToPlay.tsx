import { motion } from 'framer-motion';

export const HowToPlay = () => {
  return (
    <section className="relative min-h-screen bg-sky-400 flex items-center justify-center overflow-hidden snap-start z-20">
      
      {/* --- TERS BULUT DALGASI (Reverse Wave) --- */}
      {/* Homepage'in altındaki dalganın tam tersi, yukarıdan sarkacak */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none rotate-180 transform -translate-y-1">
         <svg viewBox="0 0 1440 320" className="w-full h-16 md:h-24 lg:h-32 text-white fill-current" preserveAspectRatio="none">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      {/* --- İÇERİK ALANI --- */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-titan text-white drop-shadow-lg stroke-text mb-12"
          style={{ 
            WebkitTextStroke: '8px #0c4a6e', 
            paintOrder: 'stroke fill'
          }}
        >
          HOW TO PLAY?
        </motion.h2>

        {/* Placeholder İçerik */}
        <p className="text-2xl text-white font-fredoka font-bold max-w-2xl mx-auto">
          Instructions and game mechanics will be here.
        </p>
      </div>

    </section>
  );
};

