import { motion } from 'framer-motion';

export const Integrations = () => {
  return (
    <section className="relative min-h-screen bg-sky-400 flex flex-col items-center justify-center overflow-hidden snap-start z-20 py-20">
      
      {/* --- ÜST BULUT DALGASI (Ters/Sarkan) --- */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none rotate-180 transform -translate-y-1">
         <svg viewBox="0 0 1440 320" className="w-full h-16 md:h-24 lg:h-32 text-white fill-current" preserveAspectRatio="none">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

      {/* --- BAŞLIK --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 text-center"
      >
        <h2 
          className="text-6xl md:text-8xl font-titan text-white drop-shadow-[0_15px_5px_rgba(0,0,0,0.4)] stroke-text"
          style={{ WebkitTextStroke: '12px #0c4a6e', paintOrder: 'stroke fill' }}
        >
          INTEGRATIONS
        </h2>
        <p className="text-xl text-white font-fredoka font-bold mt-4 max-w-lg mx-auto drop-shadow-md">
          Powered by the best technologies!
        </p>
      </motion.div>

      {/* --- KARTLAR --- */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-5xl">
        
        {/* KART 1: SEAL INTEGRATION */}
        <motion.div 
           initial={{ x: -50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           whileHover={{ scale: 1.02 }}
           className="bg-white rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-[400px]"
        >
           {/* Kartın Tamamını Kaplayan Görsel */}
           <div className="absolute inset-0 z-0">
             <img 
               src="/assets/images/seal.png" 
               alt="Seal Integration" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
           </div>
           
           {/* İçerik Katmanı (En Üstte) */}
           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:justify-end group-hover:pb-12">
             
             {/* Başlık */}
             <h3 
               className="text-6xl font-titan text-white mb-2 transition-all duration-500 group-hover:-translate-y-2"
               style={{ WebkitTextStroke: '8px black', paintOrder: 'stroke fill' }}
             >
               SEAL
             </h3>
             
             {/* Detaylar (Hover'da Açılır) */}
             <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
               <p className="text-xl font-fredoka font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-xs mx-auto leading-relaxed">
                 Fully encrypted data protection powered by Seal. Your privacy is our priority!
               </p>
             </div>
           </div>
        </motion.div>

        {/* KART 2: SUI INTEGRATION */}
        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           whileHover={{ scale: 1.02 }}
           className="bg-white rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-[400px]"
        >
           {/* Kartın Tamamını Kaplayan Görsel */}
           <div className="absolute inset-0 z-0">
             <img 
               src="/assets/images/sui.png" 
               alt="Sui Integration" 
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
             />
           </div>
           
           {/* İçerik Katmanı (En Üstte) */}
           <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8 transition-all duration-500 group-hover:justify-end group-hover:pb-12">
             
             {/* Başlık */}
             <h3 
               className="text-6xl font-titan text-white mb-2 transition-all duration-500 group-hover:-translate-y-2"
               style={{ WebkitTextStroke: '8px black', paintOrder: 'stroke fill' }}
             >
               SUI
             </h3>
             
             {/* Detaylar (Hover'da Açılır) */}
             <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
               <p className="text-xl font-fredoka font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] max-w-xs mx-auto leading-relaxed">
                 A high-speed, reliable, and encrypted game running on the Sui blockchain.
               </p>
             </div>
           </div>
        </motion.div>

      </div>

      {/* --- ALT BULUT DALGASI (Opsiyonel, sayfa sonu için) --- */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none transform translate-y-1">
         <svg viewBox="0 0 1440 320" className="w-full h-16 md:h-24 lg:h-32 text-white fill-current" preserveAspectRatio="none">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

    </section>
  );
};
