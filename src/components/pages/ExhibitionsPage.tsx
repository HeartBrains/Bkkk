import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useLanguage } from '../../utils/languageContext';
import { exhibitions } from '../../utils/exhibitionsData';
import { useState, useEffect } from 'react';

// Categorize exhibition status using ISO dates
function getExhibitionStatus(fromDate: string, toDate: string, referenceDate: Date): 'current' | 'upcoming' | 'past' | null {
  const start = new Date(fromDate);
  const end = new Date(toDate);

  // Upcoming: exhibition hasn't started yet
  if (referenceDate < start) {
    return 'upcoming';
  }

  // Current: today is between start and end
  if (referenceDate >= start && referenceDate <= end) {
    return 'current';
  }

  // Past: exhibition has ended
  if (referenceDate > end) {
    return 'past';
  }

  return null;
}

interface ExhibitionsPageProps {
  onNavigate?: (page: string, slug?: string) => void;
  targetSectionId?: string;
}

export function ExhibitionsPage({ onNavigate, targetSectionId }: ExhibitionsPageProps) {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('current-exhibitions');

  // Reference date: March 10, 2026
  const today = new Date(2026, 2, 10);

  // Categorize exhibitions by status
  const currentExhibitions = exhibitions
    .filter(ex => getExhibitionStatus(ex.fromDate, ex.toDate, today) === 'current')
    .sort((a, b) => new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime());

  const upcomingExhibitions = exhibitions
    .filter(ex => getExhibitionStatus(ex.fromDate, ex.toDate, today) === 'upcoming')
    .sort((a, b) => new Date(a.fromDate).getTime() - new Date(b.fromDate).getTime());

  const pastExhibitions = exhibitions
    .filter(ex => getExhibitionStatus(ex.fromDate, ex.toDate, today) === 'past')
    .sort((a, b) => new Date(b.toDate).getTime() - new Date(a.toDate).getTime());

  // Navigation sections
  const sections = [
    { 
      id: 'current-exhibitions', 
      label: language === 'th' ? 'นิทรรศการปัจจุบัน' : 'Current Exhibitions',
      count: currentExhibitions.length
    },
    { 
      id: 'upcoming-exhibitions', 
      label: language === 'th' ? 'นิทรรศการที่กำลังจะเริ่ม' : 'Upcoming Exhibitions',
      count: upcomingExhibitions.length
    },
    { 
      id: 'past-exhibitions', 
      label: language === 'th' ? 'นิทรรศการที่ผ่านมา' : 'Past Exhibitions',
      count: pastExhibitions.length
    }
  ];

  // Scroll to section handler
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
  }, []);

  // Scroll to target section on mount
  useEffect(() => {
    if (targetSectionId) {
      setTimeout(() => scrollToSection(targetSectionId), 100);
    }
  }, [targetSectionId]);

  // Exhibition card component
  const ExhibitionCard = ({ item, index, prefix }: { item: any; index: number; prefix: string }) => {
    const imageUrl = item.gallery && item.gallery.length > 0 ? item.gallery[0] : '';
    
    return (
      <div 
        key={`${prefix}-${index}-${item.slug}`}
        className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" 
        onClick={() => onNavigate?.('exhibition-detail', item.slug)}
      >
        <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
          {imageUrl && (
            <ImageWithFallback 
              src={imageUrl} 
              alt={item.title[language]}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
            {item.title[language]}
          </h3>
          <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
            {item.artist[language]}
          </p>
          <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
            {item.dateDisplay[language]}
          </p>
        </div>
      </div>
    );
  };

  // Empty state component
  const EmptyState = ({ message }: { message: string }) => (
    <div className="py-20 text-gray-400 font-sans text-xl md:text-2xl">
      {message}
    </div>
  );

  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans text-black">
      {/* Hero Section */}
      <ParallaxHero 
        image="https://irp.cdn-website.com/5516674f/dms3rep/multi/cover-for-Exhibitions-list-83b680a4.jpg"
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Sticky Navigation Menu */}
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
            {/* Current Exhibitions Section */}
            <section id="current-exhibitions" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12 md:gap-16">
                {currentExhibitions.length > 0 ? (
                  currentExhibitions.map((item, index) => (
                    <ExhibitionCard key={item.id} item={item} index={index} prefix="current" />
                  ))
                ) : (
                  <EmptyState 
                    message={language === 'th' ? 'ไม่มีนิทรรศการในขณะนี้' : 'No current exhibitions'}
                  />
                )}
              </div>
            </section>

            {/* Upcoming Exhibitions Section */}
            <section id="upcoming-exhibitions" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12 md:gap-16">
                {upcomingExhibitions.length > 0 ? (
                  upcomingExhibitions.map((item, index) => (
                    <ExhibitionCard key={`upcoming-${item.id}`} item={item} index={index} prefix="upcoming" />
                  ))
                ) : (
                  <EmptyState 
                    message={language === 'th' ? 'ไม่มีนิทรรศการที่กำลังจะเริ่ม' : 'No upcoming exhibitions'}
                  />
                )}
              </div>
            </section>

            {/* Past Exhibitions Section */}
            <section id="past-exhibitions" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12 md:gap-16">
                {pastExhibitions.length > 0 ? (
                  pastExhibitions.map((item, index) => (
                    <ExhibitionCard key={`past-${item.id}`} item={item} index={index} prefix="past" />
                  ))
                ) : (
                  <EmptyState 
                    message={language === 'th' ? 'ไม่มีนิทรรศการที่ผ่านมา' : 'No past exhibitions'}
                  />
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}