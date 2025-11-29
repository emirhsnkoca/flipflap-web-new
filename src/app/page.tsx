import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';

const Page = () => {
  return (
    <>
      {/* --- 2. NAVBAR (Cam Efekti - Glassmorphism) --- */}
      <Navbar />

      {/* --- 3. HERO SECTION --- */}
      <Hero />
    </>
  );
};

export default Page;

