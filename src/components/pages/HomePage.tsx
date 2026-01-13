import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ParallaxHero } from '../ui/ParallaxHero';
import { HeroSlider } from '../ui/HeroSlider';
import { motion } from 'motion/react';
import { useLanguage } from '../../utils/languageContext';
import { getMockPost } from '../../utils/mockDataBilingual';
import heroImage from 'figma:asset/8e246e2ab08ea6847836a779350a6d9869881ed9.png';
import imgPumaDescriptionWithoutPlaceSamatchaApaisuwan1 from "figma:asset/f876ff15d4a325a29125011d24ad2ca5ca66bb51.png";
import imgPumaVernacularObjectsPrapasiriKasemkijkajorn13 from "figma:asset/93174aaa38e984342b3c7203ec474df53dd7d616.png";
import imgPumaDescriptionWithoutPlaceSamatchaApaisuwan11 from "figma:asset/e4b9c70ac0b33be9a2541c9a6b47492e9354df1f.png";
import imgPumaLiminalSignals8 from "figma:asset/5e140ec6d37cb7e0037ac051703f84bd597985db.png";
import imgPumaMittaDelSantiWarunWanapaiboon1 from "figma:asset/9eae500bdb07f8716e004e113057b5a47b2d86bd.png";

const heroImages = [
  imgPumaDescriptionWithoutPlaceSamatchaApaisuwan1,
  imgPumaVernacularObjectsPrapasiriKasemkijkajorn13,
  imgPumaDescriptionWithoutPlaceSamatchaApaisuwan11,
  imgPumaLiminalSignals8,
  imgPumaMittaDelSantiWarunWanapaiboon1
];

export function HomePage({ onNavigate }: { onNavigate?: (page: string, slug?: string) => void }) {
  const { language, t } = useLanguage();

  // Get bilingual content
  const descriptionWithoutPlace = getMockPost('description-without-place', language);
  const vernacularObjects = getMockPost('vernacular-objects', language);
  const mittaDelSanti = getMockPost('mitta-del-santi', language);
  const liminalSignals = getMockPost('liminal-signals', language);

  const currentExhibitions = [
    descriptionWithoutPlace,
    vernacularObjects,
    mittaDelSanti
  ].filter(Boolean);

  return (
    <div className="w-full bg-white min-h-screen pb-24 font-sans text-black">
      {/* Hero Section */}
      <HeroSlider 
        images={heroImages} 
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </HeroSlider>

      <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        
        {/* Current Exhibitions */}
        <section className="flex flex-col md:flex-row mb-32 md:mb-40">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
             <h2 className={`text-xl md:text-2xl font-normal sticky top-32 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{t('exhibitions.current')}</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12 md:gap-16">
             {currentExhibitions.map((item) => (
                <div key={item!.id} className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('exhibition-detail', item!.slug)}>
                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback 
                            src={item!.featuredImage.sourceUrl} 
                            alt={item!.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className={`text-lg md:text-xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.title}</h3>
                        <p className={`text-lg md:text-xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.acf?.artist}</p>
                        <p className={`text-lg md:text-xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{item!.date}</p>
                    </div>
                </div>
             ))}
          </div>
        </section>

        {/* Upcoming Exhibitions */}
        <section className="flex flex-col md:flex-row mb-32 md:mb-40">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
             <h2 className={`text-xl md:text-2xl font-normal sticky top-32 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{t('exhibitions.upcoming')}</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12">
             <div className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('exhibitions')}>
                 <div className="aspect-[3/4] w-full bg-gray-200 overflow-hidden relative transition-colors duration-300 group-hover:bg-gray-300">
                    {/* Placeholder Gray Box */}
                 </div>
                 <div className="flex flex-col gap-1">
                     <h3 className={`text-lg md:text-xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>Lorem Ipsum</h3>
                     <p className={`text-lg md:text-xl font-normal text-black leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>Lorem Ipsum</p>
                     <p className={`text-lg md:text-xl font-normal text-black leading-tight mt-2 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>13 December 2025–31 May 2026</p>
                 </div>
             </div>
          </div>
        </section>

        {/* Upcoming Public Program */}
        <section className="flex flex-col md:flex-row mb-12">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
             <h2 className={`text-xl md:text-2xl font-normal sticky top-32 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{language === 'th' ? 'โปรแกรมสาธารณะที่จะมาถึง' : 'Upcoming Public Program'}</h2>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-12">
             {liminalSignals && (
                <div className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group" onClick={() => onNavigate?.('activity-detail', liminalSignals.slug)}>
                    <div className="aspect-[3/4] w-full bg-gray-100 overflow-hidden relative">
                        <ImageWithFallback 
                            src={liminalSignals.featuredImage.sourceUrl} 
                            alt={liminalSignals.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className={`text-lg md:text-xl font-normal leading-tight whitespace-pre-wrap ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                          {language === 'th' 
                            ? 'สัญญาณแห่งจุดเปลี่ยนผ่าน,\nงานสำรวจโรงภาพยนตร์เชิงขยาย\nและเสียง' 
                            : 'Liminal Signals,\nan expanded cinema and sonic\nexploration event'}
                        </h3>
                        <p className="text-lg md:text-xl font-normal text-black leading-tight mt-2">{liminalSignals.date}</p>
                        <p className={`text-lg md:text-xl font-normal leading-tight text-gray-500 mt-4 whitespace-pre-wrap ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                          {language === 'th'
                            ? 'โดย เซดริค อาร์โนลด์ และ\nธนภัทร โอกาสเลิศ (CRS/RCRS/RRR)'
                            : 'By Cedric Arnold & Thanapat\nOgaslert (CRS/RCRS/RRR)'}
                        </p>
                    </div>
                </div>
             )}
          </div>
        </section>

      </div>
    </div>
  );
}