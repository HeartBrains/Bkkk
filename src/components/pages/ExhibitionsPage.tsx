
import image_bcc8f94ceda901a1c8d6226e712633412365a9fd from 'figma:asset/bcc8f94ceda901a1c8d6226e712633412365a9fd.png';
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

interface ExhibitionItem {
  id: string;
  title: string;
  artist: string;
  date: string;
  image: string;
}

interface ExhibitionsPageProps {
    onNavigate?: (page: string) => void;
}

export function ExhibitionsPage({ onNavigate }: ExhibitionsPageProps) {
  const upcoming: ExhibitionItem[] = [
    {
      id: '1',
      title: 'Search for Life I',
      artist: 'Stephanie Comilang',
      date: '22 Nov 2025',
      image: ASSETS.EXHIBITION_BUTTERFLY
    }
  ];

  const current: ExhibitionItem[] = [
    {
      id: '2',
      title: 'Search for Life I',
      artist: 'Stephanie Comilang',
      date: '22 Nov 2025',
      image: ASSETS.EXHIBITION_TERRAZZO
    }
  ];

  const renderSection = (title: string, items: ExhibitionItem[]) => (
    <div className="flex flex-col md:flex-row gap-8 md:gap-24">
      {/* Left Column: Section Title */}
      <div className="md:w-1/3">
        <Reveal>
            <h2 className="text-xl md:text-2xl text-gray-400 font-serif">{title}</h2>
        </Reveal>
      </div>

      {/* Right Column: Items */}
      <div className="md:w-2/3 space-y-16">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.2}>
              <div 
                className="max-w-md cursor-pointer group"
                onClick={() => onNavigate && onNavigate('exhibition-detail')}
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full mb-6 overflow-hidden bg-gray-100">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Text Content */}
                <div className="space-y-1 font-serif">
                  <h3 className="text-xl text-gray-400 group-hover:text-black transition-colors duration-300">{item.title}</h3>
                  <p className="text-xl text-gray-400 group-hover:text-black transition-colors duration-300">{item.artist}</p>
                  <p className="text-xl text-gray-400 group-hover:text-black transition-colors duration-300">{item.date}</p>
                </div>
              </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <div className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden bg-gray-100">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
        >

        </motion.div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Page Title */}
        <Reveal>
            <h1 className="text-2xl md:text-3xl font-serif font-medium mb-16 text-gray-900">Exhibitions</h1>
        </Reveal>

        <div className="space-y-24">
            {renderSection('Upcoming', upcoming)}
            {renderSection('Current', current)}
        </div>
      </div>
    </div>
  );
}
