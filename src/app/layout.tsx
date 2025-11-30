import React from 'react';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import Scene from '@/components/3d/Scene';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-hidden font-fredoka">
      
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
