import React from 'react';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import Scene from '@/components/3d/Scene';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-hidden font-fredoka">
      
      {/* --- 1. ARKA PLAN (Video Katmanı) --- */}
      <div className="fixed inset-0 z-0 w-full h-full bg-sky-300">
         <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="absolute top-0 left-0 w-full h-full object-cover scale-105"
         >
           <source src="/assets/videos/demo.mp4" type="video/mp4" />
           Your browser does not support the video tag.
         </video>
         <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </div>

      {/* --- 3D CANVAS KATMANI (Tüm Sayfa İçin Tek Canvas) --- */}
      <Scene />

      {/* --- İÇERİK KATMANI --- */}
      <div className="relative z-10 min-h-screen flex flex-col snap-start">
        {children}
      </div>
      </div>
    </SmoothScroll>
  );
};
