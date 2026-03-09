import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../utils/languageContext';
import { getMockPost } from '../../utils/mockDataBilingual';
import { getExhibition } from '../../utils/exhibitionsData';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { WPPost } from '../../utils/types';
import { ArrowLeft } from 'lucide-react';

interface ExhibitionDetailPageProps {
  onNavigate: (page: string) => void;
  exhibition?: WPPost;
  slug?: string;
  backPage?: string;
}

export function ExhibitionDetailPage({ onNavigate, exhibition, slug, backPage }: ExhibitionDetailPageProps) {
  const { language, t } = useLanguage();
  const [postData, setPostData] = useState<WPPost | undefined>(exhibition);
  const [loading, setLoading] = useState(!exhibition && !!slug);
  const [error, setError] = useState(false);

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (exhibition) {
        setPostData(exhibition);
        setLoading(false);
        return;
    }
    
    if (slug) {
        setLoading(true);
        // Try to get exhibition from the new exhibitions data first
        let data = getExhibition(slug, language);
        // Fallback to mock data if not found
        if (!data) {
            data = getMockPost(slug, language);
        }
        if (data) {
            setPostData(data);
            setLoading(false);
        } else {
            setError(true);
            setLoading(false);
        }
    }
  }, [exhibition, slug, language]);

  // Carousel logic
  useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  const scrollTo = (index: number) => api?.scrollTo(index);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-sans">{t('common.loading')}</div>;
  if (error || !postData) return <div className="min-h-screen flex items-center justify-center font-sans text-red-500">{language === 'th' ? 'ไม่พบนิทรรศการ' : 'Exhibition not found.'}</div>;

  // Use gallery from postData or fallback to featured image
  const baseGallery = postData.gallery && postData.gallery.length > 0 
    ? postData.gallery 
    : (postData.featuredImage ? [postData.featuredImage.sourceUrl] : []);

  // Add random placeholder images as requested
  const galleryImages = [
    ...baseGallery,
    "https://images.unsplash.com/photo-1762718984199-b00c15f3d347?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcnQlMjBleGhpYml0aW9uJTIwYWJzdHJhY3QlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2ODA0Njc2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1762928289094-197055a5d5c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwaW5zdGFsbGF0aW9uJTIwd2hpdGUlMjB3YWxsfGVufDF8fHx8MTc2ODA0Njc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  return (
    <div className="w-full bg-white pb-24 min-h-screen">
       {/* Hero Section */}
       <div className="h-[35vh] md:h-[80vh] w-full relative overflow-hidden group bg-black">
         {galleryImages.length > 0 ? (
             <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full h-full"
                opts={{ align: "start", loop: true }}
             >
                <CarouselContent className="h-full -ml-0">
                   {galleryImages.map((src, index) => (
                      <CarouselItem key={index} className="h-full pl-0">
                         <ImageWithFallback
                            src={index === 0 ? "https://images.unsplash.com/photo-1664786063671-5f4f91e770cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcmNoaXRlY3R1cmUlMjBsaWdodCUyMHNoYWRvd3xlbnwxfHx8fDE3NjgwNDkxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" : src}
                            alt={`${postData.title} Gallery ${index + 1}`}
                            className="w-full h-full object-cover opacity-90"
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
         ) : (
             <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">
                    {language === 'th' ? 'ไม่มีรูปภาพ' : 'No images available'}
                </span>
             </div>
         )}

         {/* Thumbnails */}
         {galleryImages.length > 1 && (
             <div className="absolute bottom-8 right-6 md:right-12 z-20 flex gap-2">
                {galleryImages.map((src, index) => (
                   <button
                      key={index}
                      onClick={() => scrollTo(index)}
                      className={`w-16 h-10 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                         current === index 
                            ? 'border-white scale-105 shadow-lg' 
                            : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                   >
                      <ImageWithFallback
                         src={index === 0 ? "https://images.unsplash.com/photo-1664786063671-5f4f91e770cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcmNoaXRlY3R1cmUlMjBsaWdodCUyMHNoYWRvd3xlbnwxfHx8fDE3NjgwNDkxMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" : src}
                         alt={`Thumbnail ${index + 1}`}
                         className="w-full h-full object-cover"
                      />
                   </button>
                ))}
             </div>
         )}

         {/* Back Button */}
         <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <button 
                onClick={() => onNavigate(backPage || 'exhibitions')}
                className="fixed top-[120px] left-6 z-50 md:static flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-normal font-sans">
                    {backPage === 'archives' 
                        ? (language === 'th' ? 'กลับสู่คลังข้อมูล' : 'Back to Archives') 
                        : (language === 'th' ? 'กลับสู่นิทรรศการ' : 'Back to Exhibitions')
                    }
                </span>
            </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
            
            {/* Left Column - Meta Data */}
            <div className="md:col-span-5 flex flex-col gap-8">
                <div className="flex flex-col gap-0 px-0 md:px-[28px] py-[0px]">
                    <h1 className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                        {postData.title}
                    </h1>
                    
                    {postData.acf?.artist && (
                        <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                            {postData.acf.artist}
                        </p>
                    )}

                    {postData.date && (
                        <p className={`text-xl md:text-2xl text-black font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{postData.date}</p>
                    )}
                </div>

                {postData.acf?.curator && (
                    <div className="flex flex-col gap-0 px-0 md:px-[28px] py-[0px]">
                        <p className={`text-xl md:text-2xl text-black font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                            {language === 'th' ? 'ภัณฑารักษ์โดย' : 'Curated by'}
                        </p>
                        <p className={`text-xl md:text-2xl text-black font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{postData.acf.curator}</p>
                    </div>
                )}
            </div>

            {/* Right Column - Text Content */}
            <div className={`md:col-start-6 md:col-span-7 text-xl md:text-2xl text-black font-normal leading-tight space-y-6 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                {postData.content && (
                    <div className="[&>p]:mb-8" dangerouslySetInnerHTML={{ __html: postData.content }} />
                )}

                {postData.acf?.biography && (
                    <>
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h3 className={`text-xl md:text-2xl font-normal text-black mb-6 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                                {language === 'th' ? 'ประวัติศิลปิน' : 'Artist Biography'}
                            </h3>
                            <div className="[&>p]:mb-8" dangerouslySetInnerHTML={{ __html: postData.acf.biography }} />
                        </div>
                    </>
                )}

                {postData.acf?.imageCredits && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            {postData.acf.imageCredits}
                        </p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}