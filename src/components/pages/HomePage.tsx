import { useLanguage } from '../../utils/languageContext';
import { getMockPost } from '../../utils/mockDataBilingual';
import { getCurrentMovingImageProgram } from '../../utils/movingImageData';
import { movingImageGalleries } from '../../utils/movingImageGalleryData';
import { getUpcomingExhibitions, getCurrentExhibitions } from '../../utils/exhibitionHelpers';
import { getCurrentActivities } from '../../utils/activityHelpers';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { HeroSlider } from '../ui/HeroSlider';
import { useState, useEffect } from 'react';
import heroImage from 'figma:asset/8e246e2ab08ea6847836a779350a6d9869881ed9.png';
import imgPumaDescriptionWithoutPlaceSamatchaApaisuwan1 from "figma:asset/f876ff15d4a325a29125011d24ad2ca5ca66bb51.png";
import imgPumaVernacularObjectsPrapasiriKasemkijkajorn13 from "figma:asset/93174aaa38e984342b3c7203ec474df53dd7d616.png";
import imgPumaDescriptionWithoutPlaceSamatchaApaisuwan11 from "figma:asset/e4b9c70ac0b33be9a2541c9a6b47492e9354df1f.png";
import imgPumaLiminalSignals8 from "figma:asset/5e140ec6d37cb7e0037ac051703f84bd597985db.png";
import imgPumaMittaDelSantiWarunWanapaiboon1 from "figma:asset/9eae500bdb07f8716e004e113057b5a47b2d86bd.png";

const heroImages = [
  imgPumaDescriptionWithoutPlaceSamatchaApaisuwan1,
  imgPumaVernacularObjectsPrapasiriKasemkijkajorn13,
  imgPumaDescriptionWithoutPlaceSamatchaApaisuwan11,
  imgPumaLiminalSignals8,
  imgPumaMittaDelSantiWarunWanapaiboon1
];

export function HomePage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const { language, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('current-exhibitions');

  // Get bilingual content
  const liminalSignals = getMockPost('liminal-signals', language);
  
  // Get current moving image program
  const currentMovingImageProgram = getCurrentMovingImageProgram();
  
  // Get gallery images for current moving image program
  const currentProgramGallery = currentMovingImageProgram?.slug 
    ? (currentMovingImageProgram.gallery || movingImageGalleries[currentMovingImageProgram.slug as keyof typeof movingImageGalleries])
    : null;
  const currentProgramHasImages = currentProgramGallery && currentProgramGallery.length > 0;

  // Get current and upcoming exhibitions from exhibitionsData.ts
  const currentExhibitions = getCurrentExhibitions(language);
  const upcomingExhibitions = getUpcomingExhibitions(language);

  // Get current activities
  const currentActivities = getCurrentActivities();

  // Anchor sections
  const sections = [
    { id: 'current-exhibitions', label: t?.('exhibitions.current') || 'Current Exhibitions' },
    { id: 'upcoming-exhibitions', label: t?.('exhibitions.upcoming') || 'Upcoming Exhibitions' },
    { id: 'moving-image-program', label: language === 'th' ? 'โปรแกรมภาพเคลื่อนไหว' : 'Moving Image Program' },
    { id: 'current-activities', label: language === 'th' ? 'กิจกรรมปัจจุบัน' : 'Current Activities' }
  ];

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Adjust for header
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

  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans text-black">
      {/* Hero Section */}
      <HeroSlider 
        images={heroImages} 
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </HeroSlider>

      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Sticky Anchor Menu */}
          <aside className="w-full md:w-1/2 shrink-0">
            <nav className="md:sticky md:top-32 flex flex-col items-start gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    onNavigate?.('home');
                    setActiveSection(section.id);
                    setTimeout(() => scrollToSection(section.id), 100);
                  }}
                  className={`text-left text-xl md:text-2xl font-sans font-normal transition-all duration-300 ${
                    activeSection === section.id
                      ? 'text-black'
                      : 'text-gray-400 hover:text-black'
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
                {currentExhibitions.map((item) => (
                  <div key={item!.id} className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('exhibition-detail', item!.slug)}>
                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                      <ImageWithFallback 
                        src={item!.featuredImage.sourceUrl} 
                        alt={item!.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.title}</h3>
                      <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.acf?.artist}</p>
                      <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Exhibitions */}
            <section id="upcoming-exhibitions" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12">
                {upcomingExhibitions.length > 0 ? (
                  upcomingExhibitions.map((item) => (
                    <div key={item!.id} className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('exhibition-detail', item!.slug)}>
                      <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback 
                          src={item!.featuredImage.sourceUrl} 
                          alt={item!.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.title}</h3>
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.acf?.artist}</p>
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.date}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col gap-6 w-full md:w-[45vw]">
                    <p className={`text-xl md:text-2xl font-normal text-gray-400 leading-tight text-center md:text-left ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      {language === 'th' ? 'ไม่มีนิทรรศการที่กำลังจะมาถึง' : 'No upcoming exhibitions'}
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Moving Image Program */}
            <section id="moving-image-program" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12">
                {currentMovingImageProgram && (
                  <div 
                    className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" 
                    onClick={() => onNavigate?.('moving-image-detail', currentMovingImageProgram.slug)}
                  >
                    {currentProgramHasImages && (
                      <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback
                          src={currentProgramGallery![0]}
                          alt={currentMovingImageProgram.title[language]}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-1">
                      <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                        {currentMovingImageProgram.title[language]}
                      </h3>
                      <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                        {language === 'th' ? 'ภัณฑารักษ์: ' : 'Curated by '}
                        {currentMovingImageProgram.curator[language]}
                      </p>
                      <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                        {currentMovingImageProgram.dateDisplay[language]}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Current Activities */}
            <section id="current-activities" className="mb-32 md:mb-40 scroll-mt-32">
              <div className="flex flex-col gap-12">
                {currentActivities.length > 0 ? (
                  currentActivities.map((item) => (
                    <div key={item.id} className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('activity-detail', item.slug)}>
                      <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.title}</h3>
                        {item.description && (
                          <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.description}</p>
                        )}
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item.date}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col gap-6 w-full md:w-[45vw]">
                    <p className={`text-xl md:text-2xl font-normal text-gray-400 leading-tight text-center md:text-left ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      {language === 'th' ? 'ไม่มีกิจกรรมปัจจุบัน' : 'No current activities'}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}