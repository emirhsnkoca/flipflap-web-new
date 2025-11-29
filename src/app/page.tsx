import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { HowToPlay } from '@/components/sections/HowToPlay';

const Page = () => {
  return (
    <>
      {/* --- 2. NAVBAR (Cam Efekti - Glassmorphism) --- */}
      <Navbar />

      {/* --- 3. HERO SECTION --- */}
      <Hero />

      {/* --- 4. HOW TO PLAY SECTION --- */}
      <HowToPlay />
    </>
  );
};

export default Page;
