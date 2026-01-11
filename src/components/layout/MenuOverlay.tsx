import { X, ChevronDown, ChevronRight } from 'lucide-react';
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

interface MenuItem {
    label: string;
    page: string;
    children?: MenuItem[];
}

const sitemap: MenuItem[] = [
    { label: 'Home', page: 'home' },
    { label: 'Visit', page: 'visit' },
    { 
      label: 'Exhibitions', 
      page: 'exhibitions',
      children: [
          { label: 'Current Exhibitions', page: 'exhibitions' },
          { label: 'Upcoming Exhibitions', page: 'exhibitions' },
          { label: 'Moving Image Program', page: 'exhibitions' },
      ]
    },
    {
        label: 'Activities',
        page: 'activities',
        children: [
            { label: 'Public Program', page: 'activities' },
            { label: 'Screening Program', page: 'activities' },
        ]
    },
    {
        label: 'Residency',
        page: 'residency',
        children: [
            { label: 'Artists in Residence', page: 'residency' },
            { label: 'Previous Artists in Residence', page: 'residency' },
        ]
    },
    { label: 'Blog', page: 'blog' },
    { label: 'About us', page: 'about' },
    { label: 'Team', page: 'team' },
    {
        label: 'Shop',
        page: 'shop',
        children: [
            { label: 'Bookings', page: 'shop' },
            { label: 'Products', page: 'shop' },
        ]
    },
    {
        label: 'Archives',
        page: 'archives',
        children: [
            { label: 'Past Exhibitions', page: 'archives' },
            { label: 'Past Activities', page: 'archives' },
        ]
    },
    { label: 'Contact Us', page: 'contact' },
];

export function MenuOverlay({ isOpen, onClose, onNavigate, activePage }: MenuOverlayProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

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
                <div className="flex flex-col gap-2 -mt-14 px-[0px] py-[0.18px] pt-[15px] pr-[0px] pb-[0px] pl-[0px]">
                    {sitemap.map((item) => {
                        const isExpanded = expandedItems.includes(item.label);
                        const hasChildren = item.children && item.children.length > 0;
                        const isActive = activePage === item.page;

                        return (
                            <motion.div 
                                key={item.label}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    show: { opacity: 1, x: 0 }
                                }}
                                className="flex flex-col"
                            >
                                <div className="flex items-center justify-between group">
                                    <button
                                        onClick={() => {
                                            onNavigate(item.page);
                                            onClose();
                                        }}
                                        className={`text-left text-xl md:text-2xl font-normal transition-colors duration-300 tracking-wide ${
                                            isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                    
                                    {hasChildren && (
                                        <button 
                                            onClick={(e) => toggleExpand(item.label, e)}
                                            className="p-2 text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                        </button>
                                    )}
                                </div>

                                <AnimatePresence>
                                    {hasChildren && isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden pl-4 md:pl-6 border-l border-white/10 ml-2 mt-2 space-y-2"
                                        >
                                            {item.children!.map((child) => (
                                                <button
                                                    key={child.label}
                                                    onClick={() => {
                                                        onNavigate(child.page);
                                                        onClose();
                                                    }}
                                                    className="block w-full text-left text-lg text-gray-500 hover:text-white transition-colors py-1"
                                                >
                                                    {child.label}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}

                    {/* Footer Section */}
                </div>

                <motion.div 
                    className="mt-auto flex justify-between items-end w-full pt-8"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: { opacity: 1, y: 0 }
                    }}
                >
                    <div className="flex items-center gap-6">
                        <ExpandingSearch 
                            onNavigate={(page) => {
                                onNavigate(page);
                                onClose();
                            }}
                            className="gap-2"
                            iconClassName="w-6 h-6 text-white"
                            inputClassName="w-40 text-lg text-white placeholder:text-gray-500"
                        />
                        <button 
                            onClick={() => {
                                onNavigate('khaoyai');
                                onClose();
                            }}
                            className="text-xl md:text-2xl text-white font-normal hover:text-gray-300 transition-colors uppercase tracking-wide"
                        >
                            KYAF
                        </button>
                    </div>

                    <div className="text-xl md:text-2xl font-normal text-gray-500 select-none tracking-wide">
                        <span className="text-white cursor-pointer hover:text-gray-300 transition-colors">EN</span>
                        <span className="mx-2">|</span>
                        <span className="cursor-pointer hover:text-white transition-colors">TH</span>
                    </div>
                </motion.div>

             </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
