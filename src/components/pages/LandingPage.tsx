import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import khaoYaiHero from "figma:asset/9dae9d1894230d3eec6cdcd7ad979b5b951fc060.png";

interface LandingPageProps {
  onEnter: (destination: 'bangkok' | 'khaoyai') => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex font-serif">
      
      {/* Left Side - Bangkok Kunsthalle */}
      <div 
        className="w-1/2 h-full z-10 flex items-center justify-start cursor-pointer relative group overflow-hidden border-r border-white/10 pl-8 md:pl-16 lg:pl-24"
        onClick={() => onEnter('bangkok')}
      >
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <ImageWithFallback 
            src={ASSETS.LANDING_BUILDING} 
            alt="Bangkok Kunsthalle" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <ImageWithFallback 
            src="figma:asset/1364b1635c5b828b9b5a188accc01c12b27fd329.png" 
            alt="Bangkok Kunsthalle Hover" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-left leading-tight tracking-tight select-none transition-all duration-700 group-hover:scale-105 group-hover:opacity-0">
          Bangkok<br />Kunsthalle
        </h1>
      </div>

      {/* Right Side - Khao Yai Art Forest */}
      <div 
        className="w-1/2 h-full z-10 flex items-center justify-end cursor-pointer relative group overflow-hidden pr-8 md:pr-16 lg:pr-24"
        onClick={() => onEnter('khaoyai')}
      >
        <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <ImageWithFallback 
            src={khaoYaiHero} 
            alt="Khao Yai Art Forest" 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 w-full h-full bg-black/30" />
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-right leading-tight tracking-tight select-none transition-all duration-700 group-hover:scale-105 group-hover:opacity-0">
          Khao Yai<br />Art Forest
        </h1>
      </div>

    </div>
  );
}
