import { motion, type Variants } from 'framer-motion';
import { useState, Suspense } from 'react';
import { View, PerspectiveCamera } from '@react-three/drei';
import { Chick } from '@/components/3d/Chick';
import { Penguin } from '@/components/3d/Penguin';
import { Flamingo } from '@/components/3d/Flamingo';
import { Owl } from '@/components/3d/Owl';

// Karakter verileri
const characters = [
  {
    id: 1,
    name: "FLAPPY",
    color: "bg-yellow-400",
    borderColor: "border-yellow-700",
    image: "/assets/images/logo.jpeg",
    description: "The classic flipper!"
  },
  {
    id: 2,
    name: "BLAZE",
    color: "bg-cyan-200",
    borderColor: "border-cyan-600",
    image: "/assets/images/logo.jpeg",
    description: "Fierce and fast!"
  },
  {
    id: 3,
    name: "SHADOW",
    color: "bg-pink-400",
    borderColor: "border-pink-700",
    image: "/assets/images/logo.jpeg",
    description: "Mysterious flyer."
  },
  {
    id: 4,
    name: "TOXIC",
    color: "bg-orange-500",
    borderColor: "border-orange-800",
    image: "/assets/images/logo.jpeg",
    description: "Green energy!"
  }
];

export const Characters = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const panelVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-[#8ce026] flex flex-col items-center justify-center overflow-hidden snap-start z-20 py-20">
      
      {/* --- TERS BULUT DALGASI --- */}
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
        className="relative z-10 mb-12 text-center"
      >
        <h2 
          className="text-7xl md:text-8xl font-titan text-white stroke-text drop-shadow-[0_15px_5px_rgba(0,0,0,0.4)]"
          style={{ WebkitTextStroke: '16px #5c2a0b', paintOrder: 'stroke fill' }}
        >
          CHARACTERS
        </h2>
        <p className="text-xl text-white font-fredoka font-bold mt-4 max-w-lg mx-auto drop-shadow-md">
          Choose your wingmate and conquer the skies!
        </p>
      </motion.div>

      {/* --- KARAKTER PANELLERİ (4 PARÇA) --- */}
      <motion.div 
        className="container mx-auto px-4 h-[60vh] min-h-[500px] flex flex-col md:flex-row gap-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {characters.map((char) => (
          <motion.div
            key={char.id}
            variants={panelVariants}
            onMouseEnter={() => setActiveId(char.id)}
            onMouseLeave={() => setActiveId(null)}
            className={`
              relative rounded-[2rem] border-8 border-black overflow-hidden cursor-pointer hover:-translate-y-2 transition-transform duration-300
              ${char.color}
              flex-1 flex flex-col items-center justify-end pb-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]
            `}
          >
            {/* Arka Plan Deseni */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/comic-dots.png')] pointer-events-none"></div>
            
            {/* KARAKTER GÖRSELİ VEYA 3D MODEL */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <View className="w-full h-full">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                    <pointLight position={[-5, 5, 5]} intensity={0.5} color="#fff" />
                    
                    <Suspense fallback={null}>
                        {char.id === 1 && <Chick />}
                        {char.id === 2 && <Penguin />}
                        {char.id === 3 && <Flamingo />}
                        {char.id === 4 && <Owl />}
                    </Suspense>
                </View>
            </div>

            {/* Karakter Bilgisi (Altta) */}
            <div className="relative z-10 text-center transform transition-transform duration-300 mb-4 pointer-events-none">
              <h3 
                className={`text-4xl font-titan text-white uppercase drop-shadow-lg stroke-text-sm mb-2 ${activeId === char.id ? 'scale-110' : 'scale-100'}`}
                style={{ WebkitTextStroke: '4px black', paintOrder: 'stroke fill' }}
              >
                {char.name}
              </h3>
              
              <motion.p 
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: activeId === char.id ? 1 : 0,
                  height: activeId === char.id ? 'auto' : 0
                }}
                className="text-white font-fredoka font-bold text-lg px-4 overflow-hidden hidden md:block"
              >
                {char.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- ALT BULUT DALGASI (Section Bitimi) --- */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none transform translate-y-1">
         <svg viewBox="0 0 1440 320" className="w-full h-16 md:h-24 lg:h-32 text-white fill-current" preserveAspectRatio="none">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>

    </section>
  );
};
