import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

// SVG COMPONENTS
const XIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 127.14 96.36" width="24" height="18" fill="currentColor">
    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c.63-23.28-2.53-46.69-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
  </svg>
);

export const Footer = () => {
  const socialLinks = [
    { icon: <XIcon />, href: "https://x.com/flipflapdotfun", label: "X (Twitter)", color: "bg-black" },
    { icon: <DiscordIcon />, href: "#", label: "Discord", color: "bg-[#5865F2]" },
    { icon: <Gamepad2 size={22} />, href: "https://chicknsurvivor.vercel.app/", label: "Play Now", color: "bg-indigo-500" },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Characters", href: "#characters" },
    { name: "Integrations", href: "#integrations" },
    { name: "Whitepaper", href: "#" },
  ];

  return (
    <footer className="relative bg-[#0c4a6e] pt-12 pb-12 overflow-hidden -mt-1 z-30">
      
      {/* --- ARKA PLAN SÜSLEMELERİ --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-yellow-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* --- SOL: LOGO & MARKA --- */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {/* Logo Resmi */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden rotate-[-6deg]">
                <img src="/assets/images/logo.jpeg" alt="FlipFlap Logo" className="w-full h-full object-cover" />
            </div>

            {/* Marka İsmi */}
            <div className="text-left">
                <h2 
                  className="text-4xl md:text-5xl font-titan stroke-text drop-shadow-[0_4px_0px_rgba(0,0,0,0.3)]"
                  style={{ WebkitTextStroke: '5px black', paintOrder: 'stroke fill' }}
                >
                  <span className="text-yellow-300">FLIP</span><span className="text-lime-400">FLAP</span>
                </h2>
                <p className="text-sky-200 font-fredoka text-sm md:text-base font-bold mt-1 ml-1">
                    Join the fun!
                </p>
            </div>
          </motion.div>

          {/* --- SAĞ: LİNKLER VE SOSYAL MEDYA --- */}
          <div className="flex flex-col items-center md:items-end gap-6">
              
              {/* Menü Linkleri */}
              <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="text-white font-titan text-lg hover:text-yellow-300 transition-colors drop-shadow-md"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              {/* Sosyal Medya ve Telif Hakkı Yan Yana */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* İkonlar */}
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`
                          w-10 h-10 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          flex items-center justify-center text-white ${social.color}
                          transition-transform
                        `}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>

                  {/* Telif Hakkı */}
                  <div className="text-sky-200 font-fredoka text-sm text-center md:text-right">
                    <p>© 2025 FlipFlap.</p>
                    <p>
                      Made by <span className="text-white font-bold">OverBlock.</span>
                    </p>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
