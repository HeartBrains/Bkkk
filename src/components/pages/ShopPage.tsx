import { ASSETS } from '../../utils/assets';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useState } from 'react';
import { Reveal } from '../ui/Reveal';
import { useLanguage } from '../../utils/languageContext';
import { getTranslation } from '../../utils/translations';

type SortOption = 'newest' | 'price-asc' | 'price-desc';

interface ShopPageProps {
  onNavigate?: (page: string) => void;
}

export function ShopPage({ onNavigate }: ShopPageProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'products' | 'bookings'>('products');
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  // Mock data for products
  const products = [
    { id: 1, name: 'Product 001', nameTH: 'สินค้า 001' },
    { id: 2, name: 'Product 002', nameTH: 'สินค้า 002' },
    { id: 3, name: 'Product 003', nameTH: 'สินค้า 003' },
  ];

  // Mock data for bookings
  const bookings = [
    { id: 1, name: 'Lorem Ipsum', nameTH: 'โลเร็ม อิปซัม', price: '฿0000' },
    { id: 2, name: 'Lorem Ipsum', nameTH: 'โลเร็ม อิปซัม', price: '฿0000' },
    { id: 3, name: 'Lorem Ipsum', nameTH: 'โลเร็ม อิปซัม', price: '฿0000' },
  ];

  const sortOptions: { labelKey: string; value: SortOption }[] = [
      { labelKey: 'shop.newest', value: 'newest' },
      { labelKey: 'shop.priceLowHigh', value: 'price-asc' },
      { labelKey: 'shop.priceHighLow', value: 'price-desc' },
  ];

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <ParallaxHero 
        image={ASSETS.BLOG_1} 
        height="h-[80vh]"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      {/* Content */}
      <div className="w-full px-6 py-12 md:py-16 min-h-[800px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
            
            {/* Col 1-2: Title & Navigation */}
            <div className="md:col-span-2">
                <div className="sticky top-32 flex flex-col gap-6">
                    <h2 className="text-xl md:text-2xl font-normal font-sans text-black">{getTranslation(language, 'shop.title')}</h2>
                    <div className="flex flex-col gap-2 items-start">
                        <button 
                            onClick={() => setActiveTab('products')}
                            className={`text-xl md:text-2xl font-sans transition-colors text-left ${
                                activeTab === 'products' ? 'text-black font-medium' : 'text-gray-300 hover:text-gray-500'
                            }`}
                        >
                            {getTranslation(language, 'shop.products')}
                        </button>
                        <button 
                            onClick={() => setActiveTab('bookings')}
                            className={`text-xl md:text-2xl font-sans transition-colors text-left ${
                                activeTab === 'bookings' ? 'text-black font-medium' : 'text-gray-300 hover:text-gray-500'
                            }`}
                        >
                            {getTranslation(language, 'shop.bookings')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Col 3-4: Sort Menu */}
            <div className="md:col-span-3">
                {activeTab === 'bookings' && (
                    <div className="sticky top-32 flex flex-col gap-2 items-end">
                        <h3 className="text-xl md:text-2xl font-normal text-black text-right tracking-tight mb-2">{getTranslation(language, 'shop.sortBy')}</h3>
                        {sortOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setSortBy(option.value)}
                                className={`text-right text-xl md:text-2xl font-normal tracking-tight leading-tight transition-colors duration-200 ${
                                    sortBy === option.value ? 'text-black' : 'text-gray-400 hover:text-black'
                                }`}
                            >
                                {getTranslation(language, option.labelKey)}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Col 6-12: Main Content */}
            <div className="md:col-start-6 md:col-span-7 w-full flex flex-col gap-24">
                {activeTab === 'products' ? (
                    products.map((product, index) => (
                        <Reveal key={product.id} delay={index * 0.1}>
                            <div 
                                className="flex flex-col gap-6 w-full md:w-[45vw] cursor-pointer group"
                                onClick={() => onNavigate?.('contact')}
                            >
                                {/* Placeholder Image */}
                                <div className="aspect-[3/4] w-full bg-gray-300" />
                                
                                {/* Info */}
                                <h3 className={`text-xl md:text-2xl font-normal font-sans text-black ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{language === 'th' ? product.nameTH : product.name}</h3>
                            </div>
                        </Reveal>
                    ))
                ) : (
                    bookings.map((booking, index) => (
                        <Reveal key={booking.id} delay={index * 0.1}>
                            <div className="flex flex-col gap-6 w-full md:w-[45vw] group">
                                {/* Placeholder Image */}
                                <div className="aspect-[3/4] w-full bg-gray-300" />
                                
                                {/* Info */}
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className={`text-xl md:text-2xl font-normal font-sans text-black ${language === 'th' ? 'leading-[1.82em]' : ''}`}>{language === 'th' ? booking.nameTH : booking.name}</h3>
                                    <span className="text-xl md:text-2xl font-normal font-sans text-black">{booking.price}</span>
                                </div>
                                
                                <button 
                                    className={`border border-black px-4 py-2 text-lg font-sans text-black hover:bg-black hover:text-white transition-colors cursor-pointer ${language === 'th' ? 'leading-[1.82em]' : ''}`}
                                    onClick={() => onNavigate?.('contact')}
                                >
                                    {getTranslation(language, 'shop.bookTicket')}
                                </button>
                            </div>
                        </Reveal>
                    ))
                )}
            </div>

        </div>
      </div>
    </div>
  );
}
