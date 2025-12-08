import { AboutLayout } from './AboutLayout';
import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface FounderPageProps {
  onNavigate: (page: string) => void;
}

export function FounderPage({ onNavigate }: FounderPageProps) {
  return (
    <AboutLayout activePage="founder" onNavigate={onNavigate}>
      <div className="flex flex-col gap-8 max-w-xl">
        {/* Top Text Paragraph */}
        <div className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
             <p>
                Born in South Korea and later naturalised Thai, Ms. Marisa Chearavanont is a philanthropist, art collector and patron. With her primary focus in art, education and gastronomy – the three elements that are helping connect Thai culture to the world – Ms. Chearavanont founded Thai Art Initiative (ThAI) in 2022 and Bangkok Kunsthalle in 2024 with the mission of making Thailand the Southeast Asian hub for contemporary art.
             </p>
        </div>

        {/* Image Content */}
        <div className="w-full">
            <div className="aspect-[2/3] w-full bg-gray-100 mb-3">
                <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${ASSETS.FOUNDER})` }}
                    role="img"
                    aria-label="Marisa Chearavanont"
                />
            </div>
            <p className="text-xs text-gray-500 font-light">
                Marisa Chearavanont, Founder
            </p>
        </div>

        {/* Bottom Text Paragraph */}
        <div className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
             <p>
                Ms. Chearavanont is noted for her contributions to the contemporary art scene. She serves as Asia-Pacific Acquisition Committee for Tate Modern (London) and International Leadership Council for New Museum (New York City). In 2022, Ms. Chearavanont was the first recipient of RINASCIMENTO+ Award for her role as an art collector. In Asia, she is a Founding Patron for M+ Museum (Hong Kong) and member of BACC Foundation committee (Bangkok) as well as being appointed senior expert by Thailand's Ministry of Culture and Office of The Prime Minister to advise and oversee the development of contemporary art, culture and national identity in Thailand.
             </p>
        </div>
      </div>
    </AboutLayout>
  );
}
