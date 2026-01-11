import { useState } from 'react';
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import khaoYaiHero from "figma:asset/cf64d0ac119d7726ae241c9d4cf05ce82a8d3c8c.png";
import bangkokHover from "figma:asset/c62c64ac454fd8fd1b5ba6a64e8e3a9305f2f778.png";

interface LandingPageProps {
  onEnter: (destination: 'bangkok' | 'khaoyai') => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  const [hovered, setHovered] = useState<'bangkok' | 'khaoyai' | null>(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex font-sans">
      
      {/* Background Images (Full Screen) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none z-0 ${hovered === 'bangkok' ? 'opacity-100' : 'opacity-0'}`}
      >
        <ImageWithFallback 
            src={bangkokHover} 
            alt="Bangkok Kunsthalle"
            className="w-full h-full object-cover" 
        />
      </div>

      <div 
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none z-0 ${hovered === 'khaoyai' ? 'opacity-100' : 'opacity-0'}`}
      >
        <ImageWithFallback 
            src={khaoYaiHero} 
            alt="Khao Yai Art Forest" 
            className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Left Trigger Zone - Bangkok Kunsthalle */}
      <div 
        className="w-1/2 h-full z-10 flex items-center justify-start cursor-pointer relative border-r border-white/10 pl-8 md:pl-16 lg:pl-24"
        onClick={() => onEnter('bangkok')}
        onMouseEnter={() => setHovered('bangkok')}
        onMouseLeave={() => setHovered(null)}
      >
        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white text-left leading-tight tracking-tight select-none transition-all duration-700 ${hovered === 'khaoyai' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          Bangkok<br />Kunsthalle
        </h1>
      </div>

      {/* Right Trigger Zone - Khao Yai Art Forest */}
      <div 
        className="w-1/2 h-full z-10 flex items-center justify-end cursor-pointer relative pr-8 md:pr-16 lg:pr-24"
        onClick={() => onEnter('khaoyai')}
        onMouseEnter={() => setHovered('khaoyai')}
        onMouseLeave={() => setHovered(null)}
      >
        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white text-right leading-tight tracking-tight select-none transition-all duration-700 ${hovered === 'bangkok' ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          Khao Yai<br />Art Forest
        </h1>
      </div>

    </div>
  );
}
