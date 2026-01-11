import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxHero } from '../ui/ParallaxHero';
import { Reveal } from '../ui/Reveal';

interface Artist {
  id: number;
  name: string;
  date: string;
  image: string;
}

const artists: Artist[] = [
  {
    id: 1,
    name: "Cole Lu",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1700896019740-50219bc94ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBpbnN0YWxsYXRpb24lMjB3b29kZW4lMjBkb29ycyUyMGRhcmt8ZW58MXx8fHwxNzY4MTM4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Nicolas Amato",
    date: "Janurary–February 2025",
    image: "https://images.unsplash.com/photo-1663192070720-c0828beeb284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYmFuZG9uZWQlMjBzdGFpcmNhc2UlMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzY4MTM4Nzg2fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Spencer Sweeney",
    date: "July–December 2025",
    image: "https://images.unsplash.com/photo-1637761566180-9dbde4fdab77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBpbiUyMHN0dWRpbyUyMHdvcmtpbmclMjBjb250ZW1wb3Jhcnl8ZW58MXx8fHwxNzY4MTM4Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ResidencyPage() {
  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans">
      {/* Hero Section */}
      <ParallaxHero 
        image={ASSETS.ACTIVITY_NEON} 
        height="h-[80vh]"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
        <div className="absolute inset-0 flex items-center justify-center z-20">

        </div>
      </ParallaxHero>

      {/* Content */}
      <div className="w-full px-6 py-12 md:py-16">
        <section className="flex flex-col md:flex-row">
            {/* Left Column */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <div className="sticky top-32">
                    <Reveal>
                        <h2 className="text-xl md:text-2xl font-normal text-black leading-tight">Artists In Residence</h2>
                        <p className="text-xl md:text-2xl font-normal text-gray-400 leading-tight">Previous Artists in Residence</p>
                    </Reveal>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-24">
                {artists.map((artist, index) => (
                    <Reveal key={artist.id} delay={index * 0.1}>
                        <div className="flex flex-col gap-4 max-w-lg cursor-pointer group">
                            <div className="aspect-[3/4] w-full bg-gray-100 relative overflow-hidden">
                                <ImageWithFallback 
                                    src={artist.image} 
                                    alt={artist.name}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg md:text-xl font-normal text-black">{artist.name}</h3>
                                <p className="text-lg md:text-xl font-normal text-black">{artist.date}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
