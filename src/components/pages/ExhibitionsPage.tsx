import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useLanguage } from '../../utils/languageContext';
import { getMockPostsByType } from '../../utils/mockDataBilingual';
import { getAllExhibitions } from '../../utils/exhibitionsData';
import { useState, useEffect } from 'react';
import { fetchRecords, RecordItem } from '../../utils/records';

// Helper functions to parse and categorize exhibitions
function parseExhibitionDate(dateString: string): { start: Date; end: Date } | null {
  try {
    // Handle different date formats
    // Format 1: "13 December 2025 - 31 May 2026"
    // Format 2: "13 December 2025 – 31 May 2026" (with en-dash)
    const parts = dateString.split(/\s*[-–]\s*/);
    if (parts.length !== 2) return null;

    const [startStr, endStr] = parts;

    // Parse dates - trying multiple formats
    const parseDate = (str: string): Date | null => {
      // Format: "13 December 2025"
      const match = str.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
      if (!match) return null;

      const [, day, monthName, year] = match;
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const monthIndex = months.findIndex(m => m.toLowerCase() === monthName.toLowerCase());
      if (monthIndex === -1) return null;

      return new Date(parseInt(year), monthIndex, parseInt(day));
    };

    const start = parseDate(startStr);
    const end = parseDate(endStr);

    if (!start || !end) return null;

    return { start, end };
  } catch (error) {
    console.error('Error parsing date:', dateString, error);
    return null;
  }
}

function isExhibitionActive(dateString: string, referenceDate: Date): boolean {
  const parsed = parseExhibitionDate(dateString);
  if (!parsed) return false;
  
  return referenceDate >= parsed.start && referenceDate <= parsed.end;
}

function isExhibitionUpcoming(dateString: string, referenceDate: Date): boolean {
  const parsed = parseExhibitionDate(dateString);
  if (!parsed) return false;
  
  return referenceDate < parsed.start;
}

interface ExhibitionsPageProps {
  onNavigate?: (page: string, slug?: string) => void;
  targetSectionId?: string;
}

export function ExhibitionsPage({ onNavigate, targetSectionId }: ExhibitionsPageProps) {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('current-exhibitions');
  const [movingImageRecords, setMovingImageRecords] = useState<RecordItem[]>([]);

  // Get all exhibitions from CSV data and mock exhibitions in current language
  const csvExhibitions = getAllExhibitions(language);
  const mockExhibitions = getMockPostsByType('exhibition', language);
  
  // Combine both sources
  const allExhibitions = [...mockExhibitions, ...csvExhibitions];

  // Fetch moving image programs
  useEffect(() => {
    const loadMovingImagePrograms = async () => {
      try {
        const records = await fetchRecords({ category: 'moving-image', status: 'all', language });
        // Sort by date - newest first (2026, 2025, 2024...)
        const sortedRecords = records.sort((a, b) => {
          // Extract year from date string
          const yearA = parseInt(a.date.match(/\b20\d{2}\b/)?.[0] || '0');
          const yearB = parseInt(b.date.match(/\b20\d{2}\b/)?.[0] || '0');
          return yearB - yearA; // Descending order
        });
        setMovingImageRecords(sortedRecords);
      } catch (error) {
        console.error('Failed to fetch moving image programs', error);
      }
    };
    loadMovingImagePrograms();
  }, [language]);

  // Categorize exhibitions
  // Today's date: March 8, 2026
  const today = new Date(2026, 2, 8); // Month is 0-indexed, so 2 = March
  
  const currentExhibitions = allExhibitions.filter(ex => 
    isExhibitionActive(ex.date, today)
  );
  
  const upcomingExhibitions = allExhibitions.filter(ex => 
    isExhibitionUpcoming(ex.date, today)
  );

  // Anchor sections
  const sections = [
    { id: 'current-exhibitions', label: t?.('exhibitions.current') || 'Current Exhibitions' },
    { id: 'upcoming-exhibitions', label: t?.('exhibitions.upcoming') || 'Upcoming Exhibitions' },
    { id: 'moving-image-archive', label: language === 'th' ? 'คลังภาพเคลื่อนไหว' : 'Moving Image Archive' }
  ];

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  // Scroll to target section if provided
  useEffect(() => {
    if (targetSectionId) {
      setTimeout(() => {
        scrollToSection(targetSectionId);
      }, 100);
    }
  }, [targetSectionId]);

  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans text-black">
      {/* Hero Section */}
      <ParallaxHero 
        image="https://images.unsplash.com/photo-1767294274414-5e1e6c3974e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBleGhpYml0aW9uJTIwc3BhY2V8ZW58MXx8fHwxNzcyOTc2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Sticky Anchor Menu */}
          <aside className="w-full md:w-1/2 shrink-0">
            <nav className="md:sticky md:top-32 flex flex-col items-start gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-black font-medium'
                      : 'text-gray-400 hover:text-black font-normal'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Sections */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Current Exhibitions */}
            <section id="current-exhibitions" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12 md:gap-16">
                {currentExhibitions.length > 0 ? (
                  currentExhibitions.map((item) => (
                    <div key={item.id} className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('exhibition-detail', item.slug)}>
                      <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        {item.featuredImage && (
                          <ImageWithFallback 
                            src={item.featuredImage.sourceUrl} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.title}</h3>
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.acf?.artist}</p>
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.date}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-gray-400 font-sans text-xl md:text-2xl">
                    {t('common.noResults')}
                  </div>
                )}
              </div>
            </section>

            {/* Upcoming Exhibitions */}
            <section id="upcoming-exhibitions" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12 md:gap-16">
                {upcomingExhibitions.length > 0 ? (
                  upcomingExhibitions.map((item) => (
                    <div key={item.id} className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('exhibition-detail', item.slug)}>
                      <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        {item.featuredImage && (
                          <ImageWithFallback 
                            src={item.featuredImage.sourceUrl} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.title}</h3>
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.acf?.artist}</p>
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.date}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-gray-400 font-sans text-xl md:text-2xl">
                    {t('common.noResults')}
                  </div>
                )}
              </div>
            </section>

            {/* Moving Image Archive */}
            <section id="moving-image-archive" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12 md:gap-16">
                {movingImageRecords.map((record) => (
                  <div 
                    key={record.id} 
                    className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" 
                    onClick={() => onNavigate?.('moving-image-detail', record.slug)}
                  >
                    <div className="aspect-[3/4] w-full bg-gray-200 overflow-hidden relative transition-colors duration-300 group-hover:bg-gray-300">
                      {/* Placeholder Gray Box */}
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{record.title}</h3>
                      <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                        {language === 'th' ? 'ภัณฑารักษ์: ' : 'Curated by '}
                        {record.curator}
                      </p>
                      <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{record.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}