import { useState, useEffect, useMemo } from 'react';
import blogHero from 'figma:asset/2a1347ddbd36462f89f4337de2853a02223550a0.png';
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

interface BlogPost {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    image: string;
    isCurrent?: boolean;
}

interface BlogYear {
    year: string;
    posts: BlogPost[];
}

// Extended mock data to have 20 records
const BLOG_DATA: BlogYear[] = [
    {
        year: '2026',
        posts: [
            { id: '2026-1', title: 'Future Visions', subtitle: 'Art of Tomorrow', date: '15 January 2026', image: ASSETS.BLOG_1, isCurrent: true },
        ]
    },
    {
        year: '2025',
        posts: [
            { id: '2025-1', title: 'Art as a Reflection of Society', subtitle: 'Contemporary perspectives', date: '01 December 2025', image: ASSETS.BLOG_1 },
            { id: '2025-2', title: 'The Evolution of Light Installations', subtitle: 'Illuminating spaces', date: '15 November 2025', image: ASSETS.BLOG_2 },
            { id: '2025-3', title: 'Digital Frontiers in Art', subtitle: 'Virtual reality meets canvas', date: '20 October 2025', image: ASSETS.BLOG_3 },
            { id: '2025-4', title: 'Sustainable Sculpture', subtitle: 'Eco-friendly materials', date: '05 September 2025', image: ASSETS.BLOG_4 },
        ]
    },
    {
        year: '2024',
        posts: [
            { id: '2024-1', title: 'Shadows and Silhouettes', subtitle: 'A Study in Contrast', date: '15 December 2024', image: ASSETS.BLOG_3 },
            { id: '2024-2', title: 'Neon Cities: Urban Aesthetics', subtitle: 'City lights and nights', date: '10 November 2024', image: ASSETS.BLOG_4 },
            { id: '2024-3', title: 'Abstract Expressionism Today', subtitle: 'Color and form', date: '22 September 2024', image: ASSETS.BLOG_5 },
            { id: '2024-4', title: 'Minimalist Architecture', subtitle: 'Less is more', date: '14 August 2024', image: ASSETS.BLOG_6 },
            { id: '2024-5', title: 'The Sound of Art', subtitle: 'Auditory experiences', date: '30 June 2024', image: ASSETS.BLOG_1 },
        ]
    },
    {
        year: '2023',
        posts: [
            { id: '2023-1', title: 'Traditional Dance in Modern Times', subtitle: 'Cultural preservation', date: '05 December 2023', image: ASSETS.BLOG_5 },
            { id: '2023-2', title: 'Ceramics and Culture', subtitle: 'Clay through history', date: '12 October 2023', image: ASSETS.BLOG_2 },
            { id: '2023-3', title: 'Street Art Revolution', subtitle: 'Walls that speak', date: '18 August 2023', image: ASSETS.BLOG_3 },
            { id: '2023-4', title: 'Textile Narratives', subtitle: 'Woven stories', date: '05 June 2023', image: ASSETS.BLOG_4 },
            { id: '2023-5', title: 'Performance Art Retrospective', subtitle: 'Body as medium', date: '22 April 2023', image: ASSETS.BLOG_6 },
        ]
    },
    {
        year: '2022',
        posts: [
            { id: '2022-1', title: 'Industrial Spaces Reimagined', subtitle: 'Architecture and art', date: '01 December 2022', image: ASSETS.BLOG_6 },
            { id: '2022-2', title: 'Photography in the Digital Age', subtitle: 'Capturing moments', date: '15 October 2022', image: ASSETS.BLOG_1 },
            { id: '2022-3', title: 'Installation Art Basics', subtitle: 'Immersive environments', date: '20 August 2022', image: ASSETS.BLOG_2 },
            { id: '2022-4', title: 'Color Theory in Practice', subtitle: 'Emotional spectrum', date: '10 June 2022', image: ASSETS.BLOG_3 },
        ]
    },
    {
        year: '2021',
        posts: [
            { id: '2021-1', title: 'The Origins of Bauhaus', subtitle: 'Design history', date: '12 December 2021', image: ASSETS.BLOG_4 },
            { id: '2021-2', title: 'Art Deco Revival', subtitle: 'Geometric elegance', date: '05 October 2021', image: ASSETS.BLOG_5 },
        ]
    }
];

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [activeYear, setActiveYear] = useState<string>('2025');
  const [visibleCount, setVisibleCount] = useState(5); // Start with 5 posts
  const [isLoading, setIsLoading] = useState(false);

  // Flatten logic to calculate which posts to show based on visibleCount
  // Filters out posts marked as 'isCurrent' to keep this as an archive list
  const displayedData = useMemo(() => {
    let count = 0;
    const result: BlogYear[] = [];
    
    for (const yearGroup of BLOG_DATA) {
        if (count >= visibleCount) break;
        
        // Filter out posts that are tagged as current
        const validPosts = yearGroup.posts.filter(post => !post.isCurrent);
        
        // Skip year if no valid posts remain
        if (validPosts.length === 0) continue;

        const remainingSlots = visibleCount - count;
        const postsToShow = validPosts.slice(0, remainingSlots);
        
        if (postsToShow.length > 0) {
            result.push({
                ...yearGroup,
                posts: postsToShow
            });
            count += postsToShow.length;
        }
    }
    return result;
  }, [visibleCount]);

  const totalPosts = useMemo(() => {
      return BLOG_DATA.reduce((acc, curr) => {
          const validPosts = curr.posts.filter(p => !p.isCurrent);
          return acc + validPosts.length;
      }, 0);
  }, []);

  const scrollToYear = (year: string) => {
      const el = document.getElementById(`year-${year}`);
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

  useEffect(() => {
      const handleScroll = () => {
          // 1. Scroll Spy Logic
          // Use displayedData to get currently rendered years
          const yearIds = displayedData.map(d => d.year);
          const headerOffset = window.innerHeight * 0.3; 
          
          // Default to the first visible year if nothing else matches (e.g. at very top)
          let current = yearIds[0];
          
          for (const year of yearIds) {
              const el = document.getElementById(`year-${year}`);
              if (el) {
                  const rect = el.getBoundingClientRect();
                  // If the top of the section is above the threshold, it's the current candidate
                  if (rect.top <= headerOffset) {
                      current = year;
                  }
              }
          }
          
          // Check if we are at the bottom of the page
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
             const lastYear = yearIds[yearIds.length - 1];
             if (lastYear) current = lastYear;
          }
          
          setActiveYear(current);

          // 2. Infinite Scroll Logic
          // Only trigger if we have more posts to load and aren't currently loading
          if (
              window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
              !isLoading &&
              visibleCount < totalPosts
          ) {
              setIsLoading(true);
              // Simulate network delay for "lazy load" feel
              setTimeout(() => {
                  setVisibleCount(prev => Math.min(prev + 5, totalPosts));
                  setIsLoading(false);
              }, 500); 
          }
      };
      
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Run once to set initial active year
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedData, isLoading, visibleCount, totalPosts]);

  return (
    <div className="w-full min-h-screen bg-white pb-24">
       {/* Hero Section */}
       <ParallaxHero 
          image={blogHero}
          height="h-[80vh]"
       >
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
       </ParallaxHero>

      {/* Content Section */}
      <div className="w-full mx-auto px-6 pt-[96px] pr-[24px] pb-[0px] pl-[48px]">
        <div className="flex flex-col md:flex-row">
            
            {/* Sidebar - Shows only years that are currently loaded/visible */}
            <aside className="w-full md:w-1/2 shrink-0 md:sticky md:top-32 h-fit mb-12 md:mb-0">
                <nav className="flex flex-col space-y-2">
                    <h2 className="text-xl md:text-2xl font-sans font-medium text-black mb-4">Blog</h2>
                    {displayedData.map((data) => (
                        <button
                            key={data.year}
                            onClick={() => scrollToYear(data.year)}
                            className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${
                                activeYear === data.year
                                ? 'text-gray-400 font-medium' 
                                : 'text-gray-400 hover:text-black font-normal'
                            }`}
                        >
                            {data.year}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="w-full md:w-1/2 min-h-[50vh]">
                {displayedData.map((yearGroup) => (
                    <div key={yearGroup.year} id={`year-${yearGroup.year}`} className="mb-24 scroll-mt-32">
                        <div className="flex flex-col gap-24">
                            {yearGroup.posts.map((post) => (
                                <Reveal key={post.id}>
                                    <div 
                                        className="flex flex-col gap-6 cursor-pointer group w-full md:max-w-2xl"
                                        onClick={() => onNavigate('blog-detail')}
                                    >
                                        {/* Image */}
                                        <div className="aspect-[4/5] w-full bg-gray-200 overflow-hidden">
                                            <ImageWithFallback 
                                                src={post.image} 
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-xl md:text-2xl font-sans text-black font-normal leading-tight tracking-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-xl md:text-2xl font-sans text-black font-normal leading-tight tracking-tight">
                                                {post.subtitle}
                                            </p>
                                            <p className="text-xl md:text-2xl font-sans text-black font-normal leading-tight tracking-tight">
                                                {post.date}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                ))}
                
                {/* Loading Indicator */}
                {isLoading && (
                    <div className="w-full py-8 flex justify-center">
                        <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
                    </div>
                )}
            </main>

        </div>
      </div>
    </div>
  );
}
