import image_bcc8f94ceda901a1c8d6226e712633412365a9fd from 'figma:asset/bcc8f94ceda901a1c8d6226e712633412365a9fd.png';
import exhibitionHero from 'figma:asset/07497115bc1a76fabaf7b2881e803a69f3460ff2.png';
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { motion } from 'motion/react';
import { useState } from 'react';

interface ExhibitionsPageProps {
    onNavigate?: (page: string, slug?: string) => void;
}

type Category = 'current' | 'upcoming' | 'moving-image';

const EXHIBITIONS_DATA = [
    // Current
    {
        id: '1',
        title: 'Description Without Place',
        artist: 'Absalon',
        date: '13 December 2025 – 31 May 2026',
        image: 'https://images.unsplash.com/photo-1756889661455-38e4afd84815?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1pbmltYWxpc3QlMjBhYnN0cmFjdCUyMHNjdWxwdHVyZSUyMGZ1cm5pdHVyZSUyMGV4aGliaXRpb258ZW58MXx8fHwxNzY4MDM5MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'current',
        slug: 'description-without-place'
    },
    {
        id: '2',
        title: 'Vernacular Objects',
        artist: 'Mark Chearavanont',
        date: '27 November 2025 – 15 March 2026',
        image: 'https://images.unsplash.com/photo-1720842875537-961c36a16ec3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG9yZ2FuaWMlMjB5ZWxsb3clMjBzY3VscHR1cmUlMjBhYnN0cmFjdCUyMG9yZ2FuaWMlMjB5ZWxsb3clMjBzY3VscHR1cmV8ZW58MXx8fHwxNzY4MDM5MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'current',
        slug: 'vernacular-objects'
    },
    {
        id: '3',
        title: 'Mitta del Santi',
        artist: 'Ploenchun Vinyaratn',
        date: '26 September 2025 – 8 February 2026',
        image: 'https://images.unsplash.com/photo-1574240635388-2a6bdc8d3c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxhcmdlJTIwdGV4dGlsZSUyMGFydCUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjgwMzkxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'current',
        slug: 'mitta-del-santi'
    },
    // Upcoming
    {
        id: '4',
        title: 'seeds',
        artist: '',
        date: '30 April – 22 June 2026',
        image: 'https://images.unsplash.com/photo-1611923973164-e0e5f7f69872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGhvbGRpbmclMjB3aGl0ZSUyMGNlcmFtaWMlMjBiYWxscyUyMGFydHxlbnwxfHx8fDE3NjgwMzkxODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'upcoming',
        slug: 'seeds'
    },
    {
        id: '5',
        title: 'we gather',
        artist: '',
        date: '28 February – 27 April 2026',
        image: 'https://images.unsplash.com/photo-1747504858849-fde086e3680a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2luZW1hJTIwcm9vbSUyMHNjcmVlbmluZyUyMHZpZGVvJTIwYXJ0fGVufDF8fHx8MTc2ODAzOTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'upcoming',
        slug: 'we-gather'
    },
    {
        id: '6',
        title: 'Shapeshifting Spaces: stretched by the desires within them',
        artist: '',
        date: '17 January – 27 February 2026',
        image: 'https://images.unsplash.com/photo-1761655072443-9dec151c3e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGFydCUyMGluc3RhbGxhdGlvbiUyMHllbGxvdyUyMHRhYmxlJTIwaGFuZHN8ZW58MXx8fHwxNzY4MDM5MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'upcoming',
        slug: 'shapeshifting-spaces'
    },
    // Moving Image
    {
        id: '7',
        title: 'Neon Reveries',
        artist: 'Wong Kar-Wai Screening Series',
        date: '01 Oct – 01 Nov 2025',
        image: ASSETS.EVENT_HERO,
        category: 'moving-image',
        slug: 'neon-reveries'
    }
];

export function ExhibitionsPage({ onNavigate }: ExhibitionsPageProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('current');

  const filteredExhibitions = EXHIBITIONS_DATA.filter(item => item.category === activeCategory);

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <ParallaxHero 
        image={exhibitionHero}
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      {/* Content Container */}
      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] pl-[48px]">
        <div className="flex flex-col md:flex-row">
            
            {/* Left Sidebar - Navigation */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <div className="sticky top-32 flex flex-col items-start gap-4">
                    <button 
                        onClick={() => setActiveCategory('current')}
                        className={`text-xl md:text-2xl font-sans text-left transition-colors duration-300 ${
                            activeCategory === 'current' ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Current Exhibitions
                    </button>
                    <button 
                        onClick={() => setActiveCategory('upcoming')}
                        className={`text-xl md:text-2xl font-sans text-left transition-colors duration-300 ${
                            activeCategory === 'upcoming' ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Upcoming Exhibitions
                    </button>
                    <button 
                        onClick={() => setActiveCategory('moving-image')}
                        className={`text-xl md:text-2xl font-sans text-left transition-colors duration-300 ${
                            activeCategory === 'moving-image' ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Moving Image Program
                    </button>
                </div>
            </div>

            {/* Right Content - Exhibition List */}
            <div className="w-full md:w-1/2">
                <div className="space-y-16 md:space-y-24">
                    {filteredExhibitions.length > 0 ? (
                        filteredExhibitions.map((item, index) => (
                            <Reveal key={item.id} delay={index * 0.1}>
                                <div 
                                    className="flex flex-col gap-6 w-full md:max-w-2xl cursor-pointer group"
                                    onClick={() => onNavigate && onNavigate(item.category === 'moving-image' ? 'activity-detail' : 'exhibition-detail', item.slug)}
                                >
                                    {/* Image */}
                                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                                        <ImageWithFallback 
                                            src={item.image} 
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-lg md:text-xl font-normal leading-tight font-sans text-black">{item.title}</h3>
                                        {item.artist && (
                                            <p className="text-lg md:text-xl font-normal text-black leading-tight font-sans">{item.artist}</p>
                                        )}
                                        <p className="text-lg md:text-xl font-normal text-black leading-tight mt-2 font-sans">{item.date}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))
                    ) : (
                        <div className="py-20 text-gray-400 font-sans text-xl">
                            No exhibitions found.
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}
