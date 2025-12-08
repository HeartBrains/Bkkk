import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ASSETS } from '../../utils/assets';
import { Reveal } from '../ui/Reveal';

export type AboutPageType = 'about' | 'vision' | 'history' | 'founder' | 'team';

interface AboutLayoutProps {
  children: ReactNode;
  activePage: AboutPageType;
  onNavigate: (page: string) => void;
}

const MENU_ITEMS: { label: string; page: AboutPageType }[] = [
  { label: 'About Us', page: 'about' },
  { label: 'Vision / Mision', page: 'vision' },
  { label: 'History', page: 'history' },
  { label: 'Founder', page: 'founder' },
  { label: 'Team', page: 'team' },
];

export function AboutLayout({ children, activePage, onNavigate }: AboutLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-100">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
        >

        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-1/4 shrink-0 sticky top-32 h-fit">
            <nav className="flex flex-col space-y-2">
              {MENU_ITEMS.map((item, index) => {
                const isActive = activePage === item.page;
                return (
                  <Reveal key={item.page} delay={index * 0.1} duration={0.5}>
                      <button
                        onClick={() => onNavigate(item.page)}
                        className={`text-left text-2xl md:text-3xl font-serif transition-all duration-300 ease-out ${
                          isActive
                            ? 'text-black font-medium pl-2 border-l-2 border-black'
                            : 'text-gray-300 hover:text-gray-500 hover:pl-1'
                        }`}
                      >
                        {item.label}
                      </button>
                  </Reveal>
                );
              })}
            </nav>
          </aside>

          {/* Content Area */}
          <main className="flex-1 md:w-3/4">
             <Reveal delay={0.2}>
                {children}
             </Reveal>
          </main>
        </div>
      </div>
    </div>
  );
}
