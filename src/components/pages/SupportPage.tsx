import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import partnersSprite from "figma:asset/eef054d9d2335ae6399ea1781db9290bf8a57720.png";
import supportHero from "figma:asset/31ea28713060df0bb7786615b9851978be305cbd.png";
import { ParallaxHero } from '../ui/ParallaxHero';
import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

const PARTNERS = [
    { name: 'The Fine Arts Department', short: 'FAD', bgPos: '0% 0%' },
    { name: 'Ministry of Culture', short: 'MOC', bgPos: '100% 0%' },
    { name: 'C.P. Group', short: 'C.P.', bgPos: '0% 33.3333%' },
    { name: 'True Corporation', short: 'true', bgPos: '100% 33.3333%' },
    { name: 'Tourism Authority of Thailand', short: 'TAT', bgPos: '0% 66.6666%' },
    { name: 'Chef Cares', short: 'Chef Cares', bgPos: '100% 66.6666%' },
    { name: 'Thai Airways', short: 'THAI', bgPos: '0% 100%' },
    { name: 'Eden Estate', short: 'EDEN', bgPos: '100% 100%' },
];

export function SupportPage() {
    return (
        <div className="w-full bg-white pb-24 min-h-screen">
            {/* Hero Section */}
            <ParallaxHero 
                image={supportHero}
                height="h-[80vh]"
            >
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
            </ParallaxHero>

            {/* Content */}
            <div className="w-full px-6 py-16 md:py-24">
                <Reveal>
                    <h1 className="text-3xl md:text-4xl font-sans mb-16 md:mb-24">Support</h1>
                </Reveal>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 md:gap-y-24">
                    {PARTNERS.map((partner, i) => (
                        <Reveal key={i} delay={i * 0.1}>
                            <div className="flex flex-col items-center text-center group">
                                {/* Logo Sprite */}
                                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 md:mb-8 overflow-hidden relative transition-colors duration-300 bg-white">
                                    <div 
                                        className="w-full h-full"
                                        style={{
                                            backgroundImage: `url(${partnersSprite})`,
                                            backgroundSize: '200% 400%',
                                            backgroundPosition: partner.bgPos,
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
}
