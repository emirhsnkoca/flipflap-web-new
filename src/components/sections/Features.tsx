import { motion } from 'framer-motion';

export const Features = () => {
  return (
    <section className="relative z-40 container mx-auto px-6 py-20">
      {/* Placeholder for Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-white"
      >
        <h2 className="text-4xl font-black mb-8 stroke-text" style={{ WebkitTextStroke: '2px #4c1d95' }}>Özellikler</h2>
        <p className="text-xl font-bold">Yakında eklenecek...</p>
      </motion.div>
    </section>
  );
};
