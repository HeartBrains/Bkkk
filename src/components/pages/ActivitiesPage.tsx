import activitiesHero from "figma:asset/0071ef88c5b70f64f427c978c8989d4f2ff57cb1.png";
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useState } from 'react';

interface ActivitiesPageProps {
  onNavigate: (page: string, slug?: string) => void;
}

const ACTIVITIES_DATA = [
    {
        id: '1',
        title: 'Morlam Collective,\nJitti Chompee, 2025.',
        image: 'https://images.unsplash.com/photo-1677123628739-dea0cfd09fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JsYW0lMjBDb2xsZWN0aXZlJTIwcGVyZm9ybWFuY2UlMjBhcnQlMjB0cmFkaXRpb25hbCUyMFRoYWklMjBkYW5jZXxlbnwxfHx8fDE3NjgwMzk2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Performance'],
        slug: 'morlam-collective'
    },
    {
        id: '2',
        title: 'Living Cinematheque,\na screening series by artist in\nresidence, Spencer Sweeney.',
        image: 'https://images.unsplash.com/photo-1572689600233-ce64e0d0d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGVuY2VyJTIwU3dlZW5leSUyMGFydGlzdCUyMHRhbGslMjBibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDM5NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Screening'],
        slug: 'living-cinematheque'
    },
    {
        id: '3',
        title: 'Liminal Signals\nCedric Arnold\nand Thanapat Ogaslert, 2025.',
        image: 'https://images.unsplash.com/photo-1557005751-f6bea54d48d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaW1pbmFsJTIwU2lnbmFscyUyMGV4cGVyaW1lbnRhbCUyMHNvdW5kJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzY4MDM5NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Performance', 'Sound'],
        slug: 'liminal-signals'
    },
    {
        id: '4',
        title: 'A Very Long Gif,\na screening series and hangout by\nartist in residence, Eduardo Williams.',
        image: 'https://images.unsplash.com/photo-1609167110008-9ded171e95b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBJTIwVmVyeSUyMExvbmclMjBHaWYlMjBFZHVhcmRvJTIwV2lsbGlhbXMlMjB2aWRlbyUyMGFydHxlbnwxfHx8fDE3NjgwMzk2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Screening'],
        slug: 'a-very-long-gif'
    },
    {
        id: '5',
        title: 'The Tuss, Ryan Ogaslert,\nand Mark Chearavanont\nRushup Edge, 2025.',
        image: 'https://images.unsplash.com/photo-1746556333642-ba1bd743c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGUlMjBUdXNzJTIwUnlhbiUyME9nYXNsZXJ0JTIwUnVzaHVwJTIwRWRnZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2ODAzOTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Performance'],
        slug: 'the-tuss'
    },
    {
        id: '6',
        title: 'Neon Reveries, Wong Kar-Wai\nscreening series: In the Mood for\nLove, Happy Together, Chungking\nExpress, and Fallen Angels.',
        image: 'https://images.unsplash.com/photo-1701245035244-9a683d76cb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXb25nJTIwS2FyJTIwV2FpJTIwTmVvbiUyMFJldmVyaWVzJTIwbW92aWUlMjBzY2VuZSUyMHJlZCUyMGdyZWVuJTIwbGlnaHR8ZW58MXx8fHwxNzY4MDM5NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        tags: ['Screening'],
        slug: 'neon-reveries'
    }
];

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredData = activeTag 
    ? ACTIVITIES_DATA.filter(item => item.tags.includes(activeTag))
    : ACTIVITIES_DATA;

  return (
    <div className="w-full bg-white pb-24 min-h-screen font-sans text-black">
      {/* Hero */}
      <ParallaxHero 
        image={activitiesHero}
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      {/* Main Content */}
      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
            
            {/* Activities Label - Col 1-2 */}
            <div className="md:col-span-2">
                 <div className="md:sticky md:top-32">
                    <h2 className="text-xl md:text-2xl font-normal text-black tracking-tight md:sticky md:top-32">Activities</h2>
                 </div>
            </div>

            {/* Tags Filter - Col 3-4 */}
            <div className="md:col-span-3">
                <div className="md:sticky md:top-32 flex flex-col gap-2 items-end">
                    <h3 className="text-xl md:text-2xl font-normal text-black text-right tracking-tight mb-2">Sort by Tags</h3>
                    {['Performance', 'Screening', 'Talk / Lectures', 'Workshop', 'Sound'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                            className={`text-right text-xl md:text-2xl font-normal tracking-tight leading-tight transition-colors duration-200 ${
                                activeTag === tag ? 'text-black' : 'text-gray-400 hover:text-black'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gap/Spacer - Col 5-6 */}
            
            {/* Content List - Col 6-12 (7 cols) */}
            <div className="md:col-start-6 md:col-span-7 w-full flex flex-col gap-24">
                {filteredData.map((item, index) => (
                    <Reveal key={item.id} delay={index * 0.1}>
                            <div 
                            className="flex flex-col gap-6 w-full md:max-w-2xl cursor-pointer group"
                            onClick={() => onNavigate('activity-detail', item.slug)}
                        >
                            {/* Image */}
                            <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                                <ImageWithFallback 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-xl md:text-2xl font-normal leading-tight font-sans text-black whitespace-pre-wrap tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

        </div>
      </div>

    </div>
  );
}
