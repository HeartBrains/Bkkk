import image_bcc8f94ceda901a1c8d6226e712633412365a9fd from 'figma:asset/bcc8f94ceda901a1c8d6226e712633412365a9fd.png';
import exhibitionHero from 'figma:asset/07497115bc1a76fabaf7b2881e803a69f3460ff2.png';
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useLanguage } from '../../utils/languageContext';
import { getMockPostsByType } from '../../utils/mockDataBilingual';

interface ExhibitionsPageProps {
    onNavigate?: (page: string, slug?: string) => void;
}

type Category = 'current' | 'upcoming' | 'moving-image';

export function ExhibitionsPage({ onNavigate }: ExhibitionsPageProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('current');
  const { language, t } = useLanguage();

  // Get all exhibitions in current language
  const allExhibitions = getMockPostsByType('exhibition', language);
  const allActivities = getMockPostsByType('activity', language);

  // Categorize exhibitions
  const currentExhibitions = allExhibitions.filter(ex => 
    ['description-without-place', 'vernacular-objects', 'mitta-del-santi'].includes(ex.slug)
  );
  
  const upcomingExhibitions = allExhibitions.filter(ex => 
    ['seeds', 'we-gather', 'shapeshifting-spaces'].includes(ex.slug)
  );

  const movingImageProgram = allActivities.filter(act => 
    act.slug === 'neon-reveries'
  );

  const getFilteredContent = () => {
    if (activeCategory === 'current') return currentExhibitions;
    if (activeCategory === 'upcoming') return upcomingExhibitions;
    return movingImageProgram;
  };

  const filteredExhibitions = getFilteredContent();

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
      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row">
            
            {/* Left Sidebar - Navigation */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <div className="sticky top-32 flex flex-col items-start gap-4">
                    <button 
                        onClick={() => setActiveCategory('current')}
                        className={`text-xl md:text-2xl font-sans text-left transition-colors duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            activeCategory === 'current' ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        {t('exhibitions.current')}
                    </button>
                    <button 
                        onClick={() => setActiveCategory('upcoming')}
                        className={`text-xl md:text-2xl font-sans text-left transition-colors duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            activeCategory === 'upcoming' ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        {t('exhibitions.upcoming')}
                    </button>
                    <button 
                        onClick={() => setActiveCategory('moving-image')}
                        className={`text-xl md:text-2xl font-sans text-left transition-colors duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            activeCategory === 'moving-image' ? 'text-black font-medium' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        {language === 'th' ? 'โปรแกรมภาพเคลื่อนไหว' : 'Moving Image Program'}
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
                                    className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group"
                                    onClick={() => onNavigate && onNavigate(activeCategory === 'moving-image' ? 'activity-detail' : 'exhibition-detail', item.slug)}
                                >
                                    {/* Image */}
                                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                                        <ImageWithFallback 
                                            src={item.featuredImage.sourceUrl}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex flex-col gap-1">
                                        <h3 className={`text-lg md:text-xl font-normal leading-tight font-sans text-black ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.title}</h3>
                                        {item.acf?.artist && (
                                            <p className={`text-lg md:text-xl font-normal text-black leading-tight font-sans ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.acf.artist}</p>
                                        )}
                                        <p className={`text-lg md:text-xl font-normal text-black leading-tight mt-2 font-sans ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.date}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))
                    ) : (
                        <div className="py-20 text-gray-400 font-sans text-xl">
                            {t('common.noResults')}
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}