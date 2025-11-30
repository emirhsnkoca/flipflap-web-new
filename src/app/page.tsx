import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Characters } from '@/components/sections/Characters';
import { Integrations } from '@/components/sections/Integrations';

const Page = () => {
  return (
    <>
      {/* --- 2. NAVBAR (Cam Efekti - Glassmorphism) --- */}
      <Navbar />

      {/* --- 3. HERO SECTION --- */}
      <Hero />

      {/* --- 4. CHARACTERS SECTION --- */}
      <Characters />

      {/* --- 5. INTEGRATIONS SECTION --- */}
      <Integrations />
    </>
  );
};

export default Page;
