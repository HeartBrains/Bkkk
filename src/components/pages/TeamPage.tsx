import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { ASSETS } from '../../utils/assets';
import { useLanguage } from '../../utils/languageContext';
import { getTranslation } from '../../utils/translations';
import { FOUNDER, DIRECTORS, TEAM_GROUPS } from '../../utils/teamDataBilingual';
import founderImage from "figma:asset/63583d51ce120d2667a025955b831543df17fc5f.png";
import stefanoImage from "figma:asset/53a86972f0147a364bd78a4ba6e4e6c9bfcf4267.png";

type Section = 'founder' | 'team' | string;

interface TeamPageProps {
    activePage?: 'founder' | 'team';
    onNavigate?: (page: string) => void;
}

export function TeamPage({ activePage = 'founder' }: TeamPageProps) {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>('founder');
  
  const getDirectorId = (name: string) => name.replace(/\s+/g, '-').toLowerCase();

  const scrollToSection = (id: string) => {
      const el = document.getElementById(id);
      if (el) {
          const offset = 120;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
      
          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
      }
  };

  // Scroll Spy
  useEffect(() => {
      const handleScroll = () => {
          const sectionIds = ['founder', ...DIRECTORS.map(d => getDirectorId(d.name)), 'team'];
          // Trigger point: 30% down the screen or fixed offset
          const headerOffset = window.innerHeight * 0.3; 
          
          let current = sectionIds[0];
          
          for (const id of sectionIds) {
              const el = document.getElementById(id);
              if (el) {
                  const rect = el.getBoundingClientRect();
                  // If the top of the section is above the threshold, it's a candidate
                  if (rect.top <= headerOffset) {
                      current = id;
                  }
              }
          }

          // Special check: if we are at the bottom of the page, activate the last section
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
              current = 'team';
          }
          
          setActiveSection(current);
      };
      
      window.addEventListener('scroll', handleScroll);
      // Run once on mount to set initial state correctly
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initial Scroll
  useEffect(() => {
    if (activePage) {
        // If it's founder, we might be at top anyway, but scroll just in case
        const target = activePage === 'team' ? 'team' : 'founder';
        
        // Use a small timeout to ensure DOM is ready
        const timer = setTimeout(() => {
             // Only scroll if not already there (to avoid fighting with browser restoration)
             if (window.scrollY < 100 && target === 'founder') return;
             scrollToSection(target);
        }, 100);
        return () => clearTimeout(timer);
    }
  }, [activePage]);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <ParallaxHero 
        image="https://images.unsplash.com/photo-1735605917461-4c1b77a6616f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MTA0MDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[60vh] md:h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div className="w-full mx-auto px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row">
          
          {/* Sidebar */}
          <aside className="w-full md:w-1/2 shrink-0 relative md:sticky md:top-32 h-fit mb-12 md:mb-0">
            <nav className="flex flex-col space-y-6">
                
                {/* Founder */}
                <button
                    onClick={() => scrollToSection('founder')}
                    className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 cursor-pointer ${
                        activeSection === 'founder' || !activeSection
                        ? 'text-black font-medium'
                        : 'text-gray-400 hover:text-black'
                    }`}
                >
                    {getTranslation(language, 'team.founder')}
                </button>

                {/* Directors Group */}
                <div className="flex flex-col space-y-2">
                    <button 
                        onClick={() => scrollToSection(getDirectorId(DIRECTORS[0].name))}
                        className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${
                            DIRECTORS.some(d => activeSection === getDirectorId(d.name))
                            ? 'text-black font-medium'
                            : 'text-gray-400 hover:text-black'
                        }`}
                    >
                        {getTranslation(language, 'team.directors')}
                    </button>
                    <div className="pl-0 flex flex-col space-y-2">
                        {DIRECTORS.map(director => {
                             const id = getDirectorId(director.name);
                             return (
                                <button
                                    key={director.name}
                                    onClick={() => scrollToSection(id)}
                                    className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${
                                        activeSection === id
                                        ? 'text-black font-medium'
                                        : 'text-gray-400 hover:text-black'
                                    }`}
                                >
                                    {director.name}
                                </button>
                             );
                        })}
                    </div>
                </div>

                {/* Team */}
                <button
                    onClick={() => scrollToSection('team')}
                    className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${
                        activeSection === 'team'
                        ? 'text-gray-400 font-medium'
                        : 'text-gray-400 hover:text-black'
                    }`}
                >
                    {getTranslation(language, 'team.team')}
                </button>

            </nav>
          </aside>

          {/* Content Area */}
          <main className="w-full md:w-1/2 min-h-[50vh]">
            
            {/* Founder Section */}
            <div id="founder" className="flex flex-col gap-8 w-full md:max-w-2xl mb-24 scroll-mt-32">
                <Reveal>
                     <div className="aspect-[2/3] w-full bg-gray-100 mb-6">
                        <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${founderImage})` }}
                        />
                    </div>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="text-xl md:text-2xl font-sans text-black font-normal mb-6">
                        {FOUNDER.name}
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="text-xl md:text-2xl text-black font-normal leading-tight tracking-tight flex flex-col gap-6">
                        {(language === 'th' ? FOUNDER.bioTH : FOUNDER.bio).map((para, i) => (
                            <p key={i} className={language === 'th' ? 'leading-[1.82em]' : undefined}>{para}</p>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* Directors Sections */}
            {DIRECTORS.map((director, index) => (
                <div key={director.name} id={getDirectorId(director.name)} className="flex flex-col gap-8 w-full md:max-w-2xl mb-24 scroll-mt-32">
                    {director.image && (
                        <Reveal>
                            <div className="aspect-[2/3] w-full bg-gray-100 mb-6">
                                <div 
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${director.name === 'Stefano Rabolli Pansera' ? stefanoImage : director.image})` }}
                                />
                            </div>
                        </Reveal>
                    )}
                    <Reveal delay={0.1}>
                        <h2 className="text-xl md:text-2xl font-sans text-black font-normal mb-6">
                            {director.name}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <div className="text-xl md:text-2xl text-black font-normal leading-tight tracking-tight flex flex-col gap-6">
                            {(language === 'th' ? director.bioTH : director.bio).map((para, i) => (
                                <p key={i} className={language === 'th' ? 'leading-[1.82em]' : undefined}>{para}</p>
                            ))}
                        </div>
                    </Reveal>
                </div>
            ))}

            {/* Team Section */}
            <div id="team" className="w-full md:max-w-2xl pb-24 scroll-mt-32">
                <div className="space-y-12">
                    {TEAM_GROUPS.map((group, index) => (
                        <Reveal key={group.role} delay={index * 0.05}>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xl md:text-2xl font-sans text-black font-medium leading-tight tracking-tight">
                                    {language === 'th' ? group.roleTH : group.role}
                                </h3>
                                <div className="flex flex-col gap-1">
                                    {(language === 'th' && group.membersTH ? group.membersTH : group.members).map(member => (
                                        <p key={member} className="text-xl md:text-2xl font-sans text-black font-normal leading-tight tracking-tight">
                                            {member}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}