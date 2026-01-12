import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WPPost } from '../../utils/types';
import { Reveal } from '../ui/Reveal';
import { VisitInfo } from './sections/VisitInfo';
import { useLanguage } from '../../utils/languageContext';
import { getMockPost } from '../../utils/mockDataBilingual';

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
        // Use bilingual mock data instead of API
        const data = getMockPost(slug, language);
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
                <span className="text-sm font-medium font-sans">
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
            <div className="md:col-span-6 flex flex-col gap-8">
                <Reveal>
                    <div className="flex flex-col gap-1">
                        <h1 className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                            {postData.title}
                        </h1>
                        
                        {postData.acf?.artist && (
                            <p className={`text-xl md:text-2xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                                {postData.acf.artist}
                            </p>
                        )}

                        {postData.date && (
                            <p className={`text-xl md:text-2xl text-black font-normal leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{postData.date}</p>
                        )}
                    </div>
                </Reveal>

                {postData.acf?.curator && (
                     <Reveal delay={0.2}>
                        <div className="flex flex-col gap-1 mt-6">
                            <p className={`text-xl md:text-2xl text-black font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                                {language === 'th' ? 'ภัณฑารักษ์โดย' : 'Curated by'}
                            </p>
                            <p className={`text-xl md:text-2xl text-black font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{postData.acf.curator}</p>
                        </div>
                     </Reveal>
                )}
            </div>

            {/* Right Column - Text Content */}
            <div className={`md:col-span-6 text-xl md:text-2xl text-black font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                <Reveal delay={0.2}>
                    <div className="flex flex-col gap-6">
                        {language === 'th' ? (
                            <>
                                <p className="leading-[1.82em]">
                                    Description Without Place (2025) นำเสนอนิทรรศการครั้งแรกในเอเชียของผลงาน Cells ทั้งหกชิ้นที่สร้างสรรค์โดย Absalon ศิลปินชาวฝรั่งเศส-อิสราเอล นิทรรศการนี้ขยายผลการวิจัยหลักสามประการของบางกอก คุนสท์ฮัลเลอ: การศึกษาการอยู่อาศัยในเมือง ผ่านการสำรวจวัตถุพื้นบ้านในเยาวราชที่กลายเป็นเครื่องเรือนบอกอาณาเขตผ่านการใช้งานในชีวิตประจำวันและการดัดแปลง; การตรวจสอบความซ้ำในฐานะกระบวนการทางศิลปะ ซึ่งปรากฏในชุดผลงานอักษรวิจิตรของ จาง แซ่ตั้ง; และการสำรวจสตูดิโอของศิลปินในฐานะพื้นที่แห่งการปลีกตัว การแสดงตัวตน และการทดลองอย่างถึงราก ดังที่พัฒนาผ่านการปฏิบัติของ Spencer Sweeney
                                </p>
                                <p className="leading-[1.82em]">
                                    แบบจำลองนิทรรศการทั้งหกของ Cells ของ Absalon นำเสนอการวิพากษ์วิจารณ์เชิงรากฐานต่อความเป็นบ้านและการเป็นเจ้าของ Cell แต่ละหลังเป็นที่อยู่อาศัยขนาด 1:1 ที่ปรับแต่งให้พอดีกับร่างกายของศิลปินและถูกคิดค้นให้ดำรงอยู่พร้อมกันในปารีส ซูริก แฟรงก์เฟิร์ต นิวยอร์ก เทลอาวีฟ และโตเกียว โดยไม่ยึดติดกับพื้นที่ทางกายภาพใดๆ เรขาคณิตของพวกมันทำหน้าที่เป็นภาษาสากลที่ปราศจากการอ้างอิงทางวัฒนธรรม การประดับตกแต่ง หรืออัตลักษณ์ท้องถิ่น Cell แต่ละหลังคือบ้านที่ไร้บริบท ดินแดนที่ไร้ผืนดิน Absalon อธิบายพวกมันว่าเป็น "ไวรัสในเมือง": การดำรงอยู่ที่อิสระซึ่งขัดจังหวะแนวคิดดั้งเดิมเกี่ยวกับบ้าน ทรัพย์สิน และอัตลักษณ์ ไม่มีสิ่งใดเกินความจำเป็น ทุกพื้นผิว ปริมาตร และช่องเปิดถูกปรับเทียบให้เข้ากับขนาดของกิริยาในชีวิตประจำวัน ผ่านความแม่นยำขั้นสูงสุดนี้ Cells เสนอรูปแบบของความเป็นบ้านที่หลุดพ้นจากการสะสมและการครอบครอง—ที่อยู่อาศัยที่ลดทอนลงเหลือเพียงการกระทำของการใช้ชีวิต
                                </p>
                                <p className="leading-[1.82em]">
                                    สำหรับ Absalon แล้ว Cell ไม่ใช่การหลบหนีจากโลก แต่เป็นวิธีการในการเปลี่ยนแปลง มันแสดงให้เห็นสิ่งที่ Michel Foucault เรียกว่า "เทคโนโลยีแห่งตัวตน"—วิธีการที่บุคคลปรับเปลี่ยนชีวิตของตนโดยการปรับเปลี่ยนเงื่อนไขของการใช้ชีวิต Cells ไม่ใช่การวิพากษ์วิจารณ์สังคมในเชิงสั่งสอน แต่เป็นเครื่องมือในการสร้างตัวตนใหม่ ในความชัดเจนแบบนักพรต ความโดดเดี่ยวกลายเป็นรูปแบบหนึ่งของความเป็นผู้กระทำ การบำเพ็ญตบะถูกยอมรับไม่ใช่ในฐานะการละเว้น แต่เป็นรูปแบบหนึ่งของการเยียวยา การต่อต้านข้อเรียกร้องของการหมุนเวียน ผลิตภาพ และการสะสม การอาศัยอยู่ใน Cell คือการเปลี่ยนชีวิตประจำวันให้เป็นการปฏิบัติที่ถูกออกแบบท่าทาง เพื่อทำให้การอยู่อาศัยกลายเป็นงานศิลปะเอง
                                </p>
                            </>
                        ) : (
                            <>
                                <p>
                                    Description Without Place (2025) presents the first exhibition in Asia of the six Cells conceived by the French-Israeli artist Absalon. The exhibition extends three central lines of research at Bangkok Kunsthalle: the study of urban inhabitation, pursued through investigations of the vernacular objects of Yaowarat that become territorial furniture through daily use and improvisation; the examination of repetition as artistic process, which manifested in Tang Chang’s series of calligraphic works; and the exploration of the artist’s studio as a site of withdrawal, self-enactment, and radical experimentation, as developed through the practices of Spencer Sweeney.
                                </p>
                                <p>
                                    The six exhibition copies of Absalon’s Cells articulate a fundamental critique of domesticity and belonging. Each Cell is a 1:1 dwelling tailored precisely to the artist’s own body and conceived to exist simultaneously in Paris, Zurich, Frankfurt, New York, Tel Aviv, and Tokyo—without anchoring itself to any territorial ground. Their geometry functions as a universal language, stripped of cultural reference, ornament, or local identity. Each Cell is a house without context, a territory without land. Absalon described them as “viruses in the city”: autonomous presences that interrupt established notions of home, property, and identity. Nothing is superfluous; every surface, volume, and opening is calibrated to the scale of daily gesture. Through this extreme precision, the Cells propose a form of domesticity freed from accumulation and possession—a dwelling reduced to the act of living itself.
                                </p>
                                <p>
                                    For Absalon, the Cell was not a retreat from the world, but a method of transformation. It enacts what Michel Foucault termed a “technology of the self”—a means by which one reshapes one’s life by reshaping the conditions of living. The Cells are not social critiques in the didactic sense; they are instruments of self-reconstruction. In their ascetic clarity, solitude becomes a mode of agency. Asceticism is embraced not as renunciation, but as a form of healing, a resistance to the demands of circulation, productivity, and accumulation. To inhabit a Cell is to transform daily life into a choreographed practice, to make dwelling itself a work of art.
                                </p>
                            </>
                        )}
                    </div>
                </Reveal>
            </div>
        </div>
      </div>
    </div>
  );
}