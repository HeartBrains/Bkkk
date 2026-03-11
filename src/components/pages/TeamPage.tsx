import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { ASSETS } from '../../utils/assets';
import { useLanguage } from '../../utils/languageContext';
import { getTranslation } from '../../utils/translations';
import { FOUNDER, DIRECTORS, TEAM_GROUPS } from '../../utils/teamDataBilingual';

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
        image="https://irp.cdn-website.com/5516674f/dms3rep/multi/cover-team-f51a7633.jpg"
        height="h-[60vh] md:h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div className="w-full mx-auto px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row pl-[0px] pr-[10px] py-[0px]">
          
          {/* Sidebar */}
          <aside className="w-full md:w-1/2 shrink-0 relative h-fit mb-12 md:mb-0">
            <nav className="md:sticky md:top-32 flex flex-col items-start gap-2">
                
                {/* Founder */}
                <button
                    onClick={() => scrollToSection('founder')}
                    className={`text-left text-xl md:text-2xl font-sans font-normal transition-all duration-300 cursor-pointer ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                        activeSection === 'founder' || !activeSection
                        ? 'text-black'
                        : 'text-gray-400 hover:text-black'
                    }`}
                >
                    {getTranslation(language, 'team.founder')}
                </button>

                {/* Directors Group */}
                {DIRECTORS && DIRECTORS.length > 0 && (
                <div className="flex flex-col gap-2">
                    <button 
                        onClick={() => scrollToSection(getDirectorId(DIRECTORS[0].name))}
                        className={`text-left text-xl md:text-2xl font-sans font-normal transition-all duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            DIRECTORS.some(d => activeSection === getDirectorId(d.name))
                            ? 'text-black'
                            : 'text-gray-400 hover:text-black'
                        }`}
                    >
                        {getTranslation(language, 'team.directors')}
                    </button>
                </div>
                )}

                {/* Team */}
                <button
                    onClick={() => scrollToSection('team')}
                    className={`text-left text-xl md:text-2xl font-sans font-normal transition-all duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                        activeSection === 'team'
                        ? 'text-black'
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
                            className="w-full h-full bg-cover bg-right p-[0px] m-[0px]"
                            style={{ backgroundImage: `url(${FOUNDER.image})` }}
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
                                    style={{ backgroundImage: `url(${director.image})` }}
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
                        <div key={group.role} className="flex flex-col gap-2">
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
                    ))}
                </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}