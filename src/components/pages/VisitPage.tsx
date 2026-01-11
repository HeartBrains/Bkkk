import imgPumaAboutBangkokKunstalleWisonTungthunya7 from "figma:asset/392e07b43cde7a4a6e9511578089afed1f432174.png";
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { VisitInfo } from './sections/VisitInfo';

export function VisitPage() {
    return (
        <div className="w-full bg-white pb-24 min-h-screen">
            {/* Hero Section */}
            <ParallaxHero 
                image={imgPumaAboutBangkokKunstalleWisonTungthunya7}
                height="h-[80vh]"
            >
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
            </ParallaxHero>

            {/* Content */}
            <div className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
                <VisitInfo />
            </div>
        </div>
    );
}
