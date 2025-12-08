import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const PARTNERS = [
    { name: 'Thai Beverage Public Company Limited', short: 'ThaiBev', bgPos: '0% 0%' },
    { name: 'C.P. Group', short: 'C.P.', bgPos: '0% 33.3333%' },
    { name: 'True Corporation', short: 'true', bgPos: '100% 33.3333%' },
    { name: 'Tourism Authority of Thailand', short: 'TAT', bgPos: '0% 66.6666%' },
    { name: 'Chef Cares', short: 'Chef Cares', bgPos: '100% 66.6666%' },
    { name: 'Thai Airways', short: 'THAI', bgPos: '0% 100%' },
    { name: 'Eden Estate', short: 'EDEN', bgPos: '100% 100%' },
];

export function SupportPage() {
    return (
        <div className="w-full bg-white pb-24 min-h-screen">
            {/* Hero Section */}
            <div className="h-[60vh] w-full relative overflow-hidden bg-gray-100">

                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <h1 className="text-3xl md:text-4xl font-serif mb-16 md:mb-24">Support</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
                    {PARTNERS.map((partner, i) => (
                        <div key={i} className="flex flex-col items-center text-center group">
                            {/* Logo Sprite */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-gray-200 mb-6 md:mb-8 overflow-hidden relative group-hover:border-black transition-colors duration-300 bg-white">
                                <div 
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `url(${ASSETS.PARTNERS_SPRITE})`,
                                        backgroundSize: '200% 400%',
                                        backgroundPosition: partner.bgPos,
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                            </div>
                            
                            <p className="text-gray-900 font-medium text-sm md:text-base max-w-[200px]">
                                {partner.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
