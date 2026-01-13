import activitiesHero from "figma:asset/0071ef88c5b70f64f427c978c8989d4f2ff57cb1.png";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useState } from 'react';
import { useLanguage } from '../../utils/languageContext';
import { getMockPostsByType } from '../../utils/mockDataBilingual';

interface ActivitiesPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  const { language, t } = useLanguage();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Get all activities in current language
  const allActivities = getMockPostsByType('activity', language);

  // Map activities to include tags
  const activitiesWithTags = allActivities.map(activity => ({
    ...activity,
    tags: activity.categories || ['Performance'] // Use categories as tags
  }));

  const filteredData = activeTag 
    ? activitiesWithTags.filter(item => item.tags.includes(activeTag))
    : activitiesWithTags;

  const tags = language === 'th' 
    ? ['การแสดง', 'การฉายภาพยนตร์', 'การบรรยาย', 'เวิร์คช็อป', 'เสียง']
    : ['Performance', 'Screening', 'Talk / Lectures', 'Workshop', 'Sound'];

  const tagMapping: Record<string, string> = {
    'Performance': 'การแสดง',
    'Screening': 'การฉายภาพยนตร์',
    'Talk / Lectures': 'การบรรยาย',
    'Workshop': 'เวิร์คช็อป',
    'Sound': 'เสียง'
  };

  return (
    <div className="w-full bg-white pb-24 min-h-screen font-sans text-black">
      {/* Hero */}
      <ParallaxHero 
        image={activitiesHero}
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      {/* Main Content */}
      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
            
            {/* Activities Label - Col 1-2 */}
            <div className="md:col-span-2">
                 <div className="md:sticky md:top-32">
                    <h2 className={`text-xl md:text-2xl font-normal text-black md:sticky md:top-32 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{t('nav.activities')}</h2>
                 </div>
            </div>

            {/* Tags Filter - Col 3-4 */}
            <div className="md:col-span-3">
                <div className="md:sticky md:top-32 flex flex-col gap-2 items-end">
                    <h3 className={`text-xl md:text-2xl font-normal text-black text-right mb-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      {language === 'th' ? 'เรียงตามหมวดหมู่' : 'Sort by Tags'}
                    </h3>
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            className={`text-right text-xl md:text-2xl font-normal leading-tight transition-colors duration-200 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                                activeTag === tag ? 'text-black' : 'text-gray-400 hover:text-black'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Activities Grid - Col 5-12 */}
            <div className="md:col-span-7">
                <div className="grid grid-cols-1 gap-16">
                    {filteredData.map((item, idx) => (
                        <Reveal key={item.id} delay={idx * 0.1}>
                            <div 
                                className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group"
                                onClick={() => onNavigate('activity-detail', item.slug)}
                            >
                                <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden">
                                    <ImageWithFallback 
                                        src={item.featuredImage.sourceUrl} 
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className={`text-lg md:text-xl font-normal text-black leading-tight whitespace-pre-wrap ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                                        {item.title}
                                    </h3>
                                    {item.date && (
                                        <p className={`text-lg md:text-xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                                            {item.date}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}