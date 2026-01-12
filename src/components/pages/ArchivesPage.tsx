import archivesHero from 'figma:asset/2a1347ddbd36462f89f4337de2853a02223550a0.png';
import { useState, useEffect, useMemo } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { fetchRecords, RecordItem, RecordCategory } from '../../utils/records';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useLanguage } from '../../utils/languageContext';

// Helper to extract the relevant year from a date string
const getYearFromDate = (dateStr: string): string => {
    const matches = dateStr.match(/\b20\d{2}\b/g);
    if (matches && matches.length > 0) {
        return matches[matches.length - 1];
    }
    return '';
};

interface ArchivesPageProps {
  onNavigate: (page: string, slug?: string, backTo?: string) => void;
}

export function ArchivesPage({ onNavigate }: ArchivesPageProps) {
  const { language, t } = useLanguage();
  const [allRecords, setAllRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState<{
      category: RecordCategory | null;
      year: string | null | 'all';
  }>({ category: null, year: null });

  useEffect(() => {
    const loadRecords = async () => {
      setLoading(true);
      try {
        const data = await fetchRecords({ status: 'past', category: 'all', language });
        setAllRecords(data);
      } catch (error) {
        console.error("Failed to fetch records", error);
      } finally {
        setLoading(false);
      }
    };

    loadRecords();
  }, [language]);

  const availableFilters = useMemo(() => {
      const exhibitions = new Set<string>();
      const activities = new Set<string>();

      allRecords.forEach(record => {
          const year = getYearFromDate(record.date);
          if (year) {
              if (record.category === 'exhibition') {
                  exhibitions.add(year);
              } else if (record.category === 'activity') {
                  activities.add(year);
              }
          }
      });

      return {
          exhibitions: Array.from(exhibitions).sort((a, b) => b.localeCompare(a)), 
          activities: Array.from(activities).sort((a, b) => b.localeCompare(a))
      };
  }, [allRecords]);

  const displayedRecords = useMemo(() => {
      if (!activeFilter.category) {
          return allRecords;
      }
      return allRecords.filter(record => {
          if (record.category !== activeFilter.category) return false;
          if (activeFilter.year === 'all') return true;
          const recordYear = getYearFromDate(record.date);
          return recordYear === activeFilter.year;
      });
  }, [allRecords, activeFilter]);

  const handleFilterClick = (category: RecordCategory, year: string | 'all') => {
      if (activeFilter.category === category && activeFilter.year === year) {
          setActiveFilter({ category: null, year: null });
      } else {
          setActiveFilter({ category, year });
      }
  };

  const handleItemClick = (item: RecordItem) => {
      if (item.category === 'exhibition') {
          onNavigate('exhibition-detail', item.slug || item.id, 'archives');
      } else if (item.category === 'activity') {
          onNavigate('activity-detail', item.slug || item.id, 'archives');
      }
      // 'event' category might not have a detail page, or maps to activity?
      // Assuming 'event' -> 'activity-detail' or ignore for now.
      else if (item.category === 'event') {
          onNavigate('activity-detail', item.slug || item.id, 'archives');
      }
  };

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      <ParallaxHero 
        image={archivesHero}
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        
        <div className="flex flex-col md:flex-row">
            
            {/* Sidebar */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <div className="md:sticky md:top-32 flex flex-col gap-12">
                    
                    {/* Past Exhibition */}
                    <div className="flex flex-col gap-4">
                        <h3 
                            onClick={() => handleFilterClick('exhibition', 'all')}
                            className={`text-xl md:text-2xl font-sans cursor-pointer transition-colors ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                                activeFilter.category === 'exhibition' && activeFilter.year === 'all'
                                ? 'text-black font-medium'
                                : 'text-black font-medium hover:text-gray-600'
                            }`}
                        >
                            {t('archives.pastExhibition')}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {availableFilters.exhibitions.length > 0 ? (
                                availableFilters.exhibitions.map(year => (
                                    <button 
                                        key={`exh-${year}`}
                                        onClick={() => handleFilterClick('exhibition', year)}
                                        className={`text-xl md:text-2xl text-left font-sans transition-colors ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                                            activeFilter.category === 'exhibition' && activeFilter.year === year
                                            ? 'text-black font-medium'
                                            : 'text-gray-400 font-normal hover:text-gray-600'
                                        }`}
                                    >
                                        {year}
                                    </button>
                                ))
                            ) : (
                                <span className={`text-gray-300 font-sans text-lg ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{t('archives.noPastExhibitions')}</span>
                            )}
                        </div>
                    </div>

                    {/* Past Activities */}
                    <div className="flex flex-col gap-4">
                        <h3 
                            onClick={() => handleFilterClick('activity', 'all')}
                            className={`text-xl md:text-2xl font-sans cursor-pointer transition-colors ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                                activeFilter.category === 'activity' && activeFilter.year === 'all'
                                ? 'text-black font-medium'
                                : 'text-black font-medium hover:text-gray-600'
                            }`}
                        >
                            {t('archives.pastActivities')}
                        </h3>
                        <div className="flex flex-col gap-2">
                            {availableFilters.activities.length > 0 ? (
                                availableFilters.activities.map(year => (
                                    <button 
                                        key={`act-${year}`}
                                        onClick={() => handleFilterClick('activity', year)}
                                        className={`text-xl md:text-2xl text-left font-sans transition-colors ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                                            activeFilter.category === 'activity' && activeFilter.year === year
                                            ? 'text-black font-medium'
                                            : 'text-gray-400 font-normal hover:text-gray-600'
                                        }`}
                                    >
                                        {year}
                                    </button>
                                ))
                            ) : (
                                <span className={`text-gray-300 font-sans text-lg ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{t('archives.noPastActivities')}</span>
                            )}
                        </div>
                    </div>

                </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2">
                <div className="space-y-16 md:space-y-24">
                    {loading ? (
                        <div className="py-20 text-gray-400 font-sans text-xl">Loading archives...</div>
                    ) : displayedRecords.length > 0 ? (
                        displayedRecords.map((item, index) => (
                            <Reveal key={item.id} delay={index * 0.1}>
                                <div 
                                    className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group"
                                    onClick={() => handleItemClick(item)}
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
                                        <h3 className={`text-lg md:text-xl font-normal leading-tight font-sans text-black ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.title}</h3>
                                        {item.description && (
                                            <p className={`text-lg md:text-xl font-normal text-black leading-tight font-sans ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.description}</p>
                                        )}
                                        <p className={`text-lg md:text-xl font-normal text-black leading-tight mt-2 font-sans ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.date}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))
                    ) : (
                        <div className="py-20 text-gray-400 font-sans text-xl">
                            No archives found for this selection.
                        </div>
                    )}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}