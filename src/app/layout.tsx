import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden font-fredoka">
      
      {/* --- 1. ARKA PLAN (Video Katmanı) --- */}
      {/* fixed: Sayfa kaydırılsa bile video sabit kalır */}
      <div className="fixed inset-0 z-0 w-full h-full bg-black">
         
         <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="w-full h-full object-cover opacity-100"
         >
           <source src="/assets/videos/demo.mp4" type="video/mp4" />
           {/* Tarayıcı videoyu desteklemezse görünecek mesaj */}
           Your browser does not support the video tag.
         </video>
         
         {/* Overlay - Yazıların okunması için hafif karartma */}
         <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
         
         {/* Alt kısımdaki Bulutlar */}
         <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
            <svg viewBox="0 0 1440 320" className="w-full h-auto text-white fill-current drop-shadow-xl">
                <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
         </div>
      </div>

      {/* --- İÇERİK KATMANI (Videonun Üstünde) --- */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {children}
      </div>
    </div>
  );
};
