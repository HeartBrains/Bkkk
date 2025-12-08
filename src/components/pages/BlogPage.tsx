import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { motion } from 'motion/react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

const BLOG_POSTS = [
    { id: 1, image: ASSETS.BLOG_1, title: 'Art as a Reflection of Society', date: '22 Nov 2025' },
    { id: 2, image: ASSETS.BLOG_2, title: 'The Evolution of Light Installations', date: '18 Nov 2025' },
    { id: 3, image: ASSETS.BLOG_3, title: 'Shadows and Silhouettes: A Study', date: '15 Nov 2025' },
    { id: 4, image: ASSETS.BLOG_4, title: 'Neon Cities: Urban Aesthetics', date: '10 Nov 2025' },
    { id: 5, image: ASSETS.BLOG_5, title: 'Traditional Dance in Modern Times', date: '05 Nov 2025' },
    { id: 6, image: ASSETS.BLOG_6, title: 'Industrial Spaces Reimagined', date: '01 Nov 2025' },
];

export function BlogPage({ onNavigate }: BlogPageProps) {
  return (
    <div className="w-full bg-white pb-24 min-h-screen">
       {/* Hero Section */}
       <div className="h-[50vh] md:h-[60vh] w-full relative overflow-hidden bg-gray-100">
        <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
        >

        </motion.div>
        {/* Overlay if needed */}
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <Reveal>
            <h1 className="text-3xl md:text-4xl font-serif mb-12 text-gray-800">Blog</h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
            {BLOG_POSTS.map((post, index) => (
                <Reveal key={post.id} delay={index * 0.1}>
                    <div 
                        className="group cursor-pointer"
                        onClick={() => onNavigate('blog-detail')}
                    >
                        <div className="aspect-[16/10] w-full overflow-hidden mb-4 bg-gray-100">
                            <ImageWithFallback 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl md:text-2xl font-serif font-medium text-gray-300 group-hover:text-black transition-colors duration-300">
                                {post.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-2 transition-colors duration-300 group-hover:text-gray-600 font-sans">{post.date}</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </div>
  );
}
