import { useEffect, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import aboutHero from 'figma:asset/2e3a0e5af1e1e13f82c48787eed213758894268f.png';

export type AboutPageType = 'about' | 'vision' | 'history';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  activePage?: AboutPageType;
}

export function AboutPage({ onNavigate, activePage = 'about' }: AboutPageProps) {
  const isScrolling = useRef(false);

  // Handle auto-scroll to section
  useEffect(() => {
    if (activePage) {
        const el = document.getElementById(activePage);
        if (el) {
            setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }
  }, [activePage]);

  return (
    <div className="w-full min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <ParallaxHero 
        image={aboutHero}
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col gap-24 md:gap-32">
        
            {/* About Us */}
            <section id="about" className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-normal font-sans text-black leading-tight tracking-tight">About Us</h2>
                    </Reveal>
                </div>
                <div className="w-full md:w-1/2">
                    <Reveal delay={0.1}>
                        <div className="flex flex-col gap-6 text-xl md:text-2xl text-black font-normal leading-tight tracking-tight">
                            <p>
                                Bangkok Kunsthalle is a dynamic, rigorous and accessible cultural institution devoted to art, cinema, music, dance, literature, architecture and other creative languages. Bangkok Kunsthalle represents a new model of art museum. This alternative institution occupies the abandoned Thai Wattana Panich building, a leading printing house that was razed by fire in 2001. The raw, industrial space presents a novel and pioneering platform which mirrors the quality of artworks chosen to be exhibited there.
                            </p>
                            <p>
                                Bangkok Kunsthalle is an artist driven institution, where each new exhibition activates a new space in the brutalist complex. Architectural interventions are informed by the artists, their vision and artworks. Artists invited to exhibit at Bangkok Kunsthalle are commissioned to make site-specific works addressing the building and surrounding area's rich visual language and cultural history.
                            </p>
                            <p>
                                The institution prides itself in its experimental nature, pushing the boundaries of contemporary art through novel exhibitions and public programmes. At its core, Bangkok Kunsthalle strives to be the focal point of creative dialogue for not only Thailand but South-East Asia as a whole.
                            </p>
                            <p>
                                The institution organises about four exhibitions per year featuring international and Thai artists. Throughout the year it also presents a dynamic public program which includes artists' talks, lectures, workshops, screenings and readings to contextualise the featured artists' practices and to address wide cultural topics that are relevant and timely.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision" className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-normal font-sans text-black leading-tight tracking-tight">Vision & Mission</h2>
                    </Reveal>
                </div>
                <div className="w-full md:w-1/2">
                    <Reveal delay={0.1}>
                        <div className="flex flex-col gap-6 text-xl md:text-2xl text-black font-normal leading-tight tracking-tight">
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* History */}
            <section id="history" className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-normal font-sans text-black leading-tight tracking-tight">History</h2>
                    </Reveal>
                </div>
                <div className="w-full md:w-1/2">
                    <Reveal delay={0.1}>
                         <div className="flex flex-col gap-6 text-xl md:text-2xl text-black font-normal leading-tight tracking-tight">
                            <p>
                                This alternative institution occupies the abandoned Thai Wattana Panich building, a leading printing house that was razed by fire in 2001. The raw, industrial space presents a novel and pioneering platform which mirrors the quality of artworks chosen to be exhibited there.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

        </div>
      </div>
    </div>
  );
}
