import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Characters } from '@/components/sections/Characters';

const Page = () => {
  return (
    <>
      {/* --- 2. NAVBAR (Cam Efekti - Glassmorphism) --- */}
      <Navbar />

      {/* --- 3. HERO SECTION --- */}
      <Hero />

      {/* --- 4. CHARACTERS SECTION --- */}
      <Characters />
    </>
  );
};

export default Page;
