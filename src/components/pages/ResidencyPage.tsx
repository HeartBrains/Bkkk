import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxHero } from '../ui/ParallaxHero';
import { Reveal } from '../ui/Reveal';
import { ARTISTS_DATA } from '../../utils/residencyData';
import { useLanguage } from '../../utils/languageContext';
import { getTranslation } from '../../utils/translations';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';

interface ResidencyPageProps {
  onNavigate?: (page: string, slug?: string) => void;
  targetSectionId?: string;
}

export function ResidencyPage({ onNavigate, targetSectionId }: ResidencyPageProps) {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('current-artists');

  const sections = [
    {
      id: 'current-artists',
      title: getTranslation(language, 'residency.currentArtists'),
      items: ARTISTS_DATA.filter(artist => artist.category === 'current')
    },
    {
      id: 'past-artists',
      title: getTranslation(language, 'residency.pastArtists'),
      items: ARTISTS_DATA.filter(artist => artist.category === 'previous')
    }
  ].filter(section => section.items.length > 0);

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
      scrollToSection(targetSectionId);
    }
  }, [targetSectionId]);

  // Get all hero images from residency artists
  const heroImages = ARTISTS_DATA.map(artist => artist.image);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans text-black">
      {/* Hero Section with Slider */}
      <div className="relative w-full h-[80vh] overflow-hidden z-0">
        <Slider {...sliderSettings} className="h-full">
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-[80vh]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Content */}
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
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content Sections */}
          <div className="w-full md:w-1/2 flex flex-col">
            {sections.map((section, idx) => (
              <section key={idx} id={section.id} className="mb-32 md:mb-40 scroll-mt-32">
                {/* Artists */}
                <div className="flex flex-col gap-12 md:gap-16">
                  {section.items.map((artist, index) => (
                    <Reveal key={artist.id} delay={index * 0.1}>
                      <div 
                        className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group"
                        onClick={() => onNavigate?.('artist-detail', artist.slug)} 
                      >
                        <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
                          <ImageWithFallback 
                            src={artist.gallery && artist.gallery.length > 0 ? artist.gallery[0] : artist.image}
                            alt={language === 'th' ? artist.nameTH : artist.name}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className={`text-xl md:text-2xl font-normal text-black ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{language === 'th' ? artist.nameTH : artist.name}</h3>
                          <p className={`text-xl md:text-2xl font-normal text-black ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{language === 'th' ? artist.periodTH : artist.period}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}