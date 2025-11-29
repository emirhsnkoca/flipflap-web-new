import React from 'react';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-hidden font-fredoka">
      
      {/* --- 1. ARKA PLAN (Video Katmanı) --- */}
      {/* fixed: Sayfa kaydırılsa bile video sabit kalır */}
      <div className="fixed inset-0 z-0 w-full h-full bg-sky-300">
         
         {/* scale-105: Kenarlarda olası boşlukları/siyah çizgileri önlemek için hafif zoom */}
         <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="absolute top-0 left-0 w-full h-full object-cover scale-105"
         >
           <source src="/assets/videos/demo.mp4" type="video/mp4" />
           {/* Tarayıcı videoyu desteklemezse görünecek mesaj */}
           Your browser does not support the video tag.
         </video>
         
         {/* Overlay - Yazıların okunması için hafif karartma */}
         <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </div>

      {/* --- İÇERİK KATMANI (Videonun Üstünde) --- */}
      <div className="relative z-10 min-h-screen flex flex-col snap-start">
        {children}
      </div>
      </div>
    </SmoothScroll>
  );
};
