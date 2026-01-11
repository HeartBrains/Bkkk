import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { ASSETS } from '../../utils/assets';
import founderImage from "figma:asset/63583d51ce120d2667a025955b831543df17fc5f.png";
import stefanoImage from "figma:asset/53a86972f0147a364bd78a4ba6e4e6c9bfcf4267.png";

type Section = 'founder' | 'team' | string; // 'founder', 'team', or director name

interface Director {
    name: string;
    role: string; // Used for sidebar list grouping? No, just Directors
    bio: string[];
    image?: string;
}

const DIRECTORS: Director[] = [
    {
        name: 'Stefano Rabolli Pansera',
        role: 'Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbCUyMGdsYXNzZXN8ZW58MXx8fHwxNzY1MDA1MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral', // Placeholder
        bio: [
            "Stefano Rabolli Pansera is an architect and curator. He studied at the Architectural Association in London where he graduated with Honours in 2005. He taught at the Architectural Association as Unit Master from 2007 to 2011.",
            "In 2013, he founded Beyond Entropy Ltd, a curatorial agency operating at the threshold of art, architecture and geopolitics. He curated the Angolan Pavilion at the 55th Venice Biennale (Golden Lion for Best National Participation).",
            "He has been the director of Hauser & Wirth in London and St. Moritz. He is currently the Director of Bangkok Kunsthalle."
        ]
    },
    {
        name: 'Luckana Kunavichayanont',
        role: 'Director',
        bio: [
             "Luckana Kunavichayanont is a prominent figure in the Thai art scene, known for her leadership and curatorial work. She served as the Director of the Bangkok Art and Culture Centre (BACC) for many years, steering it to become a central hub for contemporary art in Thailand."
        ]
    },
    {
        name: 'Poonperm Paitayawat',
        role: 'Food & Gastronomy',
        bio: [
            "Poonperm Paitayawat oversees the Food & Gastronomy sector of Bangkok Kunsthalle, bridging the gap between culinary arts and contemporary culture."
        ]
    },
    {
        name: 'Claudia Ko',
        role: 'Financial Sustainability & Donor Relations',
        bio: [
            "Claudia Ko manages Financial Sustainability & Donor Relations, ensuring the long-term viability and growth of the institution through strategic partnerships and donor engagement."
        ]
    }
];

const TEAM_GROUPS = [
    {
        role: 'Curators',
        members: ['Mark Chearavanont', 'Gemmica Sinthawalai']
    },
    {
        role: 'Moving Image Curator',
        members: ['Rosalia Namsai Engchuan']
    },
    {
        role: 'Education and Public Program Co-ordinator',
        members: ['Thanchanok Benjajinda']
    },
    {
        role: 'Artist Residency Program Co-ordinator',
        members: ['Pompavee Ritticongkhajorn']
    },
    {
        role: 'Gallery Co-ordinator',
        members: ['Pornrama Laopiyasakul']
    },
    {
        role: 'Graphic Designers',
        members: ['Kawisara Vacharaprucks', 'Kevin Niran Bondoerffer']
    },
    {
        role: 'Operation Team',
        members: ['Charisara Nuknaw', 'Sulawan Wongthong']
    },
    {
        role: 'Financial Sustainability and Donor Relations',
        members: ['Siripat Rojnirun']
    },
    {
        role: 'Accountant Team',
        members: ['Kamitta Pimparcha', 'Kanpitcha Namwimolwut']
    },
    {
        role: 'Publication Editor',
        members: ['Korn Kazaxa']
    }
];

interface TeamPageProps {
    activePage?: 'founder' | 'team';
    onNavigate?: (page: string) => void;
}

export function TeamPage({ activePage = 'founder' }: TeamPageProps) {
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
                        activeSection === 'founder'
                        ? 'text-black font-medium'
                        : 'text-gray-400 hover:text-black'
                    }`}
                >
                    Founder
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
                        Directors
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
                        ? 'text-black font-medium'
                        : 'text-gray-400 hover:text-black'
                    }`}
                >
                    Team
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
                        Marisa Chearavanont
                    </h2>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="text-xl md:text-2xl text-black font-normal leading-tight tracking-tight flex flex-col gap-6">
                        <p>
                            Born in South Korea and later naturalised Thai, Ms. Marisa Chearavanont is a philanthropist, art collector and patron. With her primary focus in art, education and gastronomy – the three elements that are helping connect Thai culture to the world – Ms. Chearavanont founded Thai Art Initiative (ThAI) in 2022 and Bangkok Kunsthalle in 2024 with the mission of making Thailand the Southeast Asian hub for contemporary art.
                        </p>
                        <p>
                            Ms. Chearavanont is noted for her contributions to the contemporary art scene. She serves as Asia-Pacific Acquisition Committee for Tate Modern (London) and International Leadership Council for New Museum (New York City). In 2022, Ms. Chearavanont was the first recipient of RINASCIMENTO+ Award for her role as an art collector. In Asia, she is a Founding Patron for M+ Museum (Hong Kong) and member of BACC Foundation committee (Bangkok) as well as being appointed senior expert by Thailand's Ministry of Culture and Office of The Prime Minister to advise and oversee the development of contemporary art, culture and national identity in Thailand.
                        </p>
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
                            {director.bio.map((para, i) => (
                                <p key={i}>{para}</p>
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
                                    {group.role}
                                </h3>
                                <div className="flex flex-col gap-1">
                                    {group.members.map(member => (
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