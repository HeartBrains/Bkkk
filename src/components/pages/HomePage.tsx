
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

interface ContentItem {
  id: string;
  image: string;
  title: string;
  date: string;
  page?: string;
}

function ContentSection({ title, items, onNavigate }: { title: string, items: ContentItem[], onNavigate?: (page: string) => void }) {
  return (
    <section className="mb-12 md:mb-16">
      <Reveal>
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 md:mb-8 text-gray-900">{title}</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
        {items.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.1}>
            <div 
              className="group cursor-pointer flex flex-col"
              onClick={() => item.page && onNavigate?.(item.page)}
            >
              <div className="aspect-[3/2] overflow-hidden mb-4 w-full bg-gray-100">
                <ImageWithFallback 
                  src={title === 'Exhibitions' ? "figma:asset/8c3d9a60f9b7b938df410fb85ba264317a40231c.png" : item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-medium text-gray-400 group-hover:text-black transition-colors duration-300 leading-snug font-serif">
                  {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base font-sans transition-colors duration-300 group-hover:text-gray-600">{item.date}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function HomePage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const exhibitions: ContentItem[] = [
    { 
        id: 'e1', 
        image: ASSETS.EXHIBITION_BUTTERFLY, 
        title: 'Lorem ipsum dolor sit amet consectetur', 
        date: '22 Nov 2025',
        page: 'exhibition-detail'
    },
    { 
        id: 'e2', 
        image: ASSETS.EXHIBITION_TERRAZZO, 
        title: 'Lorem ipsum dolor sit amet consectetur', 
        date: '22 Nov 2025',
        page: 'exhibition-detail'
    }
  ];

  const activities: ContentItem[] = [
    { 
        id: 'a1', 
        image: ASSETS.ACTIVITY_NEON, 
        title: 'Lorem ipsum dolor sit amet consectetur', 
        date: '22 Nov 2025',
        page: 'activities'
    },
    { 
        id: 'a2', 
        image: ASSETS.BLOG_3, // Best match for the black/white silhouette
        title: 'Lorem ipsum dolor sit amet consectetur', 
        date: '22 Nov 2025',
        page: 'activities'
    }
  ];

  const blog: ContentItem[] = [
    { 
        id: 'b1', 
        image: ASSETS.BLOG_1, 
        title: 'Lorem ipsum dolor sit amet consectetur', 
        date: '22 Nov 2025',
        page: 'blog'
    },
    { 
        id: 'b2', 
        image: ASSETS.BLOG_2, 
        title: 'Lorem ipsum dolor sit amet consectetur', 
        date: '22 Nov 2025',
        page: 'blog'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white min-h-screen pb-12"
    >
      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden group bg-gray-100">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
        >

        </motion.div>
        
        {/* Gradient overlay to ensure menu visibility if needed, though design is clean */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-4">
        <ContentSection title="Exhibitions" items={exhibitions} onNavigate={onNavigate} />
        <ContentSection title="Activities" items={activities} onNavigate={onNavigate} />
        <ContentSection title="Blog" items={blog} onNavigate={onNavigate} />
      </div>
    </motion.div>
  );
}