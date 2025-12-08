import { X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ASSETS } from '../../utils/assets';
import { ExpandingSearch } from '../search/ExpandingSearch';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
  activePage: string;
}

export function MenuOverlay({ isOpen, onClose, onNavigate, activePage }: MenuOverlayProps) {
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const menuItems = [
    { label: 'About Us', page: 'about' },
    { label: 'Exhibitions', page: 'exhibitions' },
    { label: 'Activities', page: 'activities' },
    { label: 'Blog', page: 'blog' },
    { label: 'Archives', page: 'archives' },
    { label: 'Visit', page: 'visit' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex text-white font-sans"
        >
          {/* Left Image Side - Hidden on Mobile */}
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="hidden md:block w-1/2 h-full relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${ASSETS.BUILDING})` }}
            />
            <div 
              className="absolute top-6 left-6 text-xl font-bold tracking-tight leading-none font-serif z-10 text-white cursor-pointer"
              onClick={() => {
                onNavigate('home');
                onClose();
              }}
            >
                Bangkok
                <br />
                Kunsthalle
            </div>
          </motion.div>

          {/* Right Content Side */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 h-full bg-black flex flex-col relative overflow-y-auto"
          >
             {/* Close Button */}
             <div className="absolute top-6 right-6 z-20">
                <button onClick={onClose} className="hover:opacity-70 transition-opacity duration-300">
                    <X className="w-6 h-6 text-white" />
                </button>
             </div>

             {/* Navigation Links Container */}
             <motion.div 
                className="flex-1 flex flex-col px-8 md:px-16 pt-20 pb-8"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.3
                        }
                    }
                }}
             >
                <div className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                    <motion.button 
                        key={item.label}
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0 }
                        }}
                        onClick={() => {
                            onNavigate(item.page);
                            onClose();
                        }}
                        className={`text-left text-xl md:text-2xl font-normal transition-colors duration-300 tracking-wide ${
                            activePage === item.page ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        {item.label}
                    </motion.button>
                    ))}
                    
                    {/* More Section */}
                    <motion.div 
                        className="flex flex-col mt-1"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0 }
                        }}
                    >
                        <button 
                            onClick={() => setIsMoreOpen(!isMoreOpen)}
                            className="flex items-center gap-2 text-xl md:text-2xl font-normal text-white transition-colors duration-300 w-full text-left tracking-wide hover:text-gray-300"
                        >
                            More 
                            <ChevronDown className={`w-5 h-5 transition-transform duration-500 ease-[0.22,1,0.36,1] ${isMoreOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <AnimatePresence>
                            {isMoreOpen && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden w-full relative"
                                >
                                    <div className="bg-white text-black px-6 py-4 mt-4 w-full md:w-[120%] -ml-6 md:-ml-8 shadow-lg origin-top">
                                        <div className="flex flex-col gap-2 pl-6 md:pl-8">
                                            {[
                                                { label: 'Artist Residency', page: 'residency' },
                                                { label: 'Contact Us', page: 'contact' },
                                                { label: 'Support Us', page: 'support' },
                                                { label: 'Shop', page: 'shop' },
                                                { label: 'Press', page: 'press' }
                                            ].map((subItem, idx) => (
                                                <motion.button 
                                                    key={subItem.label}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                                                    onClick={() => {
                                                        onNavigate(subItem.page);
                                                        onClose();
                                                    }}
                                                    className="text-left text-lg md:text-xl font-medium text-black hover:text-gray-600 transition-colors duration-200 block"
                                                >
                                                    {subItem.label}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Search Section */}
                    <motion.div 
                        className="mt-4"
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0 }
                        }}
                    >
                        <ExpandingSearch 
                            onNavigate={(page) => {
                                onNavigate(page);
                                onClose();
                            }}
                            className="gap-3"
                            iconClassName="w-5 h-5 md:w-6 md:h-6"
                            inputClassName="w-40 md:w-60 text-lg"
                        />
                    </motion.div>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

             </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
