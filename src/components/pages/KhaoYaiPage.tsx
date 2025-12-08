import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';
import khaoYaiHero from "figma:asset/9dae9d1894230d3eec6cdcd7ad979b5b951fc060.png";

export function KhaoYaiPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white min-h-screen pb-12"
    >
      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden group">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
        >
            <ImageWithFallback 
              src={khaoYaiHero} 
              alt="Khao Yai Art Forest" 
              className="absolute inset-0 w-full h-full object-cover"
            />
        </motion.div>
        
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="absolute inset-0 flex items-center justify-center">
            <Reveal>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white text-center">
                    Khao Yai<br />Art Forest
                </h1>
            </Reveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-4">
        <Reveal>
            <div className="text-center py-20">
                <p className="text-xl text-gray-500 font-serif">Coming Soon</p>
            </div>
        </Reveal>
      </div>
    </motion.div>
  );
}
