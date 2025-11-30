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
          className="text-5xl md:text-7xl font-titan text-white drop-shadow-lg stroke-text"
          style={{ WebkitTextStroke: '8px #0c4a6e', paintOrder: 'stroke fill' }}
        >
          INTEGRATIONS
        </h2>
        <p className="text-xl text-white font-fredoka font-bold mt-4 max-w-lg mx-auto drop-shadow-md">
          Powered by the best technologies!
        </p>
      </motion.div>

      {/* --- KARTLAR --- */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-5xl">
        
        {/* KART 1 */}
        <motion.div 
           initial={{ x: -50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           whileHover={{ scale: 1.02, rotate: -1 }}
           className="bg-white rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center relative overflow-hidden group"
        >
           <div className="absolute inset-0 bg-yellow-100 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] pointer-events-none"></div>
           
           <div className="w-32 h-32 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-lg z-10 group-hover:scale-110 transition-transform">
             {/* Buraya logo gelecek (Örn: Solana) */}
             <span className="text-4xl">⚡</span>
           </div>
           
           <h3 className="text-3xl font-titan text-black mb-4 z-10">High Speed</h3>
           <p className="text-lg font-fredoka font-bold text-gray-600 z-10">
             Lightning fast transactions and seamless integration with major networks.
           </p>
        </motion.div>

        {/* KART 2 */}
        <motion.div 
           initial={{ x: 50, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           viewport={{ once: true }}
           whileHover={{ scale: 1.02, rotate: 1 }}
           className="bg-white rounded-[3rem] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 flex flex-col items-center text-center relative overflow-hidden group"
        >
           <div className="absolute inset-0 bg-purple-100 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] pointer-events-none"></div>
           
           <div className="w-32 h-32 bg-purple-400 rounded-full border-4 border-black flex items-center justify-center mb-6 shadow-lg z-10 group-hover:scale-110 transition-transform">
              {/* Buraya logo gelecek (Örn: Phantom) */}
              <span className="text-4xl">🔒</span>
           </div>
           
           <h3 className="text-3xl font-titan text-black mb-4 z-10">Secure Vault</h3>
           <p className="text-lg font-fredoka font-bold text-gray-600 z-10">
             Top-tier security protocols ensuring your assets are always safe.
           </p>
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
