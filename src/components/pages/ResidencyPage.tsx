import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxHero } from '../ui/ParallaxHero';
import { Reveal } from '../ui/Reveal';
import { useState } from 'react';
import { ARTISTS_DATA } from '../../utils/residencyData';

interface ResidencyPageProps {
  onNavigate?: (page: string, slug?: string) => void;
}

export function ResidencyPage({ onNavigate }: ResidencyPageProps) {
  const [activeCategory, setActiveCategory] = useState<'current' | 'previous'>('current');

  const filteredArtists = ARTISTS_DATA.filter(artist => artist.category === activeCategory);

  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans">
      {/* Hero Section */}
      <ParallaxHero 
        image={ASSETS.ACTIVITY_NEON} 
        height="h-[80vh]"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
        <div className="absolute inset-0 flex items-center justify-center z-20">

        </div>
      </ParallaxHero>

      {/* Content */}
      <div className="w-full px-6 md:px-12 py-12 md:py-16">
        <section className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <div className="sticky top-32 flex flex-col items-start gap-4">
                    <Reveal>
                        <button 
                            onClick={() => setActiveCategory('current')}
                            className={`text-xl md:text-2xl font-normal leading-tight transition-colors duration-300 block text-left ${
                                activeCategory === 'current' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            Artists in Residence
                        </button>
                        <button 
                            onClick={() => setActiveCategory('previous')}
                            className={`text-xl md:text-2xl font-normal leading-tight transition-colors duration-300 mt-8 ${
                                activeCategory === 'previous' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                            }`}
                        >
                            Previous Artists in Residence
                        </button>
                    </Reveal>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-24">
                {filteredArtists.length > 0 ? (
                    filteredArtists.map((artist, index) => (
                        <Reveal key={artist.id} delay={index * 0.1}>
                            <div 
                                className="flex flex-col gap-4 w-full md:max-w-2xl cursor-pointer group"
                                onClick={() => onNavigate?.('artist-detail', artist.slug)} 
                            >
                                <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
                                    <ImageWithFallback 
                                        src={artist.category === 'current' ? "https://images.unsplash.com/photo-1760260623945-07314e790eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsb29raW5nJTIwYXQlMjBjYW1lcmElMjBwb3J0cmFpdCUyMGFydGlzdGljfGVufDF8fHx8MTc2ODE1MTAyOXww&ixlib=rb-4.1.0&q=80&w=1080" : artist.image}
                                        alt={artist.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg md:text-xl font-normal text-black">{artist.name}</h3>
                                    <p className="text-lg md:text-xl font-normal text-black">{artist.period}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))
                ) : (
                     <Reveal>
                        <p className="text-lg md:text-xl text-gray-400">No artists found in this category.</p>
                     </Reveal>
                )}
            </div>
        </section>
      </div>
    </div>
  );
}
