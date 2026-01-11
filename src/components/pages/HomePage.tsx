import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxHero } from '../ui/ParallaxHero';
import { HeroSlider } from '../ui/HeroSlider';
import { motion } from 'motion/react';
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

interface ExhibitionItem {
  id: string;
  image?: string;
  title: string;
  artist?: string;
  date: string;
  detail?: string;
  isPlaceholder?: boolean;
  slug?: string; // Add slug field
}

const currentExhibitions: ExhibitionItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1747100934541-22fd3a57fea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1pbmltYWwlMjBpbnN0YWxsYXRpb24lMjBhcnQlMjBhYnN0cmFjdCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjgwMjkwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Description Without Place',
    artist: 'Absalon',
    date: '13 December 2025–31 May 2026',
    slug: 'description-without-place'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1766792235402-2496867ea9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBhYnN0cmFjdCUyMGNvbnRlbXBvcmFyeSUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjgwMjkwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Vernacular Objects',
    artist: 'Mark Chearavanont',
    date: '27 November 2025–15 March 2026',
    slug: 'vernacular-objects'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1597890739435-1701160a07fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZhYnJpYyUyMGFydCUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjgwMjkwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mitta del Santo',
    artist: 'Phoenchan Vinyaratn',
    date: '26 September 2025–8 February 2026',
    slug: 'mitta-del-santi'
  }
];

const upcomingExhibitions: ExhibitionItem[] = [
  {
    id: '4',
    title: 'Lorem Ipsum',
    artist: 'Lorem Ipsum',
    date: '13 December 2025–31 May 2026',
    isPlaceholder: true,
    // slug not needed as it navigates to 'exhibitions'
  }
];

const publicPrograms: ExhibitionItem[] = [
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1747504858849-fde086e3680a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZXhwZXJpbWVudGFsJTIwY2luZW1hJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzY4MDI5MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Liminal Signals,\nan expanded cinema and sonic\nexploration event',
    date: '21 November 2025',
    detail: 'By Cedric Arnold & Thanapat\nOgaslert (CRS/RCRS/RRR)',
    slug: 'liminal-signals'
  }
];

export function HomePage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
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
        
        {/* Current Exhibitions */}
        <section className="flex flex-col md:flex-row mb-32 md:mb-40">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
             <h2 className="text-xl md:text-2xl font-normal sticky top-32 tracking-tight">Current Exhibitions</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-16">
             {currentExhibitions.map((item) => (
                <div key={item.id} className="flex flex-col gap-6 w-full md:max-w-2xl cursor-pointer group" onClick={() => onNavigate?.('exhibition-detail', item.slug)}>
                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback 
                            src={item.image!} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg md:text-xl font-normal leading-tight">{item.title}</h3>
                        <p className="text-lg md:text-xl font-normal text-black leading-tight">{item.artist}</p>
                        <p className="text-lg md:text-xl font-normal text-black leading-tight mt-2">{item.date}</p>
                    </div>
                </div>
             ))}
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="flex flex-col md:flex-row mb-32 md:mb-40">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
             <h2 className="text-xl md:text-2xl font-normal sticky top-32 tracking-tight">Upcoming Exhibitions</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12">
             {upcomingExhibitions.map((item) => (
                <div key={item.id} className="flex flex-col gap-6 w-full md:max-w-2xl cursor-pointer group" onClick={() => onNavigate?.('exhibitions')}>
                    <div className="aspect-[3/4] w-full bg-gray-200 overflow-hidden relative transition-colors duration-300 group-hover:bg-gray-300">
                       {/* Placeholder Gray Box */}
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg md:text-xl font-normal leading-tight">{item.title}</h3>
                        <p className="text-lg md:text-xl font-normal text-black leading-tight">{item.artist}</p>
                        <p className="text-lg md:text-xl font-normal text-black leading-tight mt-2">{item.date}</p>
                    </div>
                </div>
             ))}
          </div>
        </section>

        {/* Upcoming Public Program */}
        <section className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
             <h2 className="text-xl md:text-2xl font-normal sticky top-32 tracking-tight">Upcoming Public Program</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12">
             {publicPrograms.map((item) => (
                <div key={item.id} className="flex flex-col gap-6 w-full md:max-w-2xl cursor-pointer group" onClick={() => onNavigate?.('activity-detail', item.slug)}>
                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback 
                            src={item.image!} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg md:text-xl font-normal leading-tight whitespace-pre-wrap">{item.title}</h3>
                        <p className="text-lg md:text-xl font-normal text-black leading-tight mt-2">{item.date}</p>
                        {item.detail && <p className="text-lg md:text-xl font-normal leading-tight text-gray-500 mt-4 whitespace-pre-wrap">{item.detail}</p>}
                    </div>
                </div>
             ))}
          </div>
        </section>

      </div>
    </div>
  );
}
