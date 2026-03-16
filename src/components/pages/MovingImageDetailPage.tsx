import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../utils/languageContext';
import { getMovingImageProgramBySlug } from '../../utils/movingImageData';
import { movingImageGalleries } from '../../utils/movingImageGalleryData';
import { getDetailContentByLanguage } from '../../utils/detailContent';
import { ArrowLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface MovingImageDetailPageProps {
  slug: string;
  onNavigate?: (page: string) => void;
  backPage?: string;
}

export function MovingImageDetailPage({ slug, onNavigate, backPage }: MovingImageDetailPageProps) {
  const { language } = useLanguage();
  const program = getMovingImageProgramBySlug(slug);
  const gallery = program?.gallery || movingImageGalleries[slug as keyof typeof movingImageGalleries];
  
  // Get detail content from detailContent.ts based on language
  const detailContent = getDetailContentByLanguage(slug, language) || '';

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Carousel logic
  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  // Auto-scroll thumbnails to keep current thumbnail visible
  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const thumbnailWidth = 64 + 8; // w-16 (64px) + gap (8px)
      const scrollPosition = current * thumbnailWidth - (container.clientWidth / 2) + (thumbnailWidth / 2);
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  }, [current]);

  const scrollTo = (index: number) => api?.scrollTo(index);

  if (!program) {
    return (
      <div className="w-full min-h-screen bg-white pt-32 px-6 md:px-12">
        <p className="text-xl">Program not found</p>
      </div>
    );
  }

  const galleryImages = gallery && gallery.length > 0 ? gallery.slice(0, 5) : [];

  return (
    <div className="w-full bg-white pb-24 min-h-screen">
      {/* Hero Section - Only show if images exist */}
      {galleryImages.length > 0 && (
        <div className="h-[35vh] md:h-[80vh] w-full relative overflow-hidden group bg-black">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full h-full"
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="h-full -ml-0">
              {galleryImages.map((src, index) => (
                <CarouselItem key={index} className="h-full pl-0">
                  <img
                    src={src}
                    alt={`${program.title[language]} Gallery ${index + 1}`}
                    className="w-full h-full object-cover opacity-90"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {galleryImages.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <CarouselPrevious className="pointer-events-auto static transform-none h-12 w-12 bg-black/30 hover:bg-black/50 border-none text-white" />
                <CarouselNext className="pointer-events-auto static transform-none h-12 w-12 bg-black/30 hover:bg-black/50 border-none text-white" />
              </div>
            )}
          </Carousel>

          {/* Thumbnails */}
          {galleryImages.length > 1 && (
            <div className="absolute bottom-8 right-6 md:right-[5%] z-20 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    current === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <button 
              onClick={() => onNavigate?.(backPage || 'home')}
              className="fixed top-[120px] left-6 z-50 md:static md:ml-[5%] flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-normal font-sans">
                {backPage === 'archives'
                  ? (language === 'th' ? 'กลับสู่คลังข้อมูล' : 'Back to Archives')
                  : backPage === 'exhibitions'
                  ? (language === 'th' ? 'กลับสู่นิทรรศการ' : 'Back to Exhibitions')
                  : backPage === 'moving-image'
                  ? (language === 'th' ? 'กลับสู่โปรแกรมภาพเคลื่อนไหว' : 'Back to Moving Image Program')
                  : (language === 'th' ? 'กลับสู่หน้าหลัก' : 'Back to Home')
                }
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`w-full px-[5%] md:py-16 ${galleryImages.length > 0 ? 'pt-[96px] pb-[0px]' : 'py-8'}`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          {/* Left Column - Program Info */}
          <div className="md:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-0 px-0 md:px-[28px] py-[0px]">
              {/* Title */}
              <h1 className={`text-xl md:text-2xl font-normal ${language === 'th' ? 'leading-[1.82em]' : ''} m-[0px]`}>
                {program.title[language]}
              </h1>

              {/* Dates */}
              <p className={`text-xl md:text-2xl font-normal ${language === 'th' ? 'leading-[1.82em]' : ''} m-[0px]`}>
                {program.dateDisplay[language]}
              </p>
              
              {/* Curated by */}
              <p className={`text-xl md:text-2xl font-normal ${language === 'th' ? 'leading-[1.82em]' : ''} m-[0px]`}>
                {language === 'th' ? 'ภัณฑารักษ์: ' : 'Curated by '}{program.curator[language]}
              </p>
            </div>

            {/* Films in Program */}
            <div className="px-0 md:px-[28px]">
              <h2 className={`text-xl md:text-2xl font-medium leading-tight mb-6 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                {language === 'th' ? 'ภาพยนตร์ในโปรแกรม' : 'Films in Program'}
              </h2>
              
              <div className="space-y-8">
                {program.films.map((film, index) => (
                  <div key={index} className="space-y-2">
                    <p className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      <span className="font-medium">{index + 1}.</span> {film.artist}, <em>{film.title}</em>, {film.year}
                    </p>
                    <p className={`text-xl md:text-2xl text-gray-600 leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      {film.format}
                      {film.duration && `, ${film.duration}`}
                    </p>
                    <p className={`text-xl md:text-2xl text-gray-500 leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      {film.credit.replace(/courtesy of the artist\.?/i, '').trim()}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Installation Views */}
              {program.installationViews && program.installationViews.length > 0 && (
                <div className="mt-16">
                  <ul className="space-y-3">
                    {program.installationViews.map((view, index) => (
                      <li key={index} className={`text-[12px] text-gray-600 leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                        {view.artist}, <em>{view.title}</em>, {view.year}. {language === 'th' ? 'ภาพจัดแสดง, บางกอก คุนสท์ฮัลเล่' : 'Installation view, Bangkok Kunsthalle'}.
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Statement */}
          <div className="md:col-start-7 md:col-span-6 px-0 md:px-[28px]">
            <div 
              className={`[&>p]:mb-8 [&>p]:text-2xl ${language === 'th' ? '[&>p]:leading-[1.82em]' : ''}`}
              dangerouslySetInnerHTML={{ __html: detailContent }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}