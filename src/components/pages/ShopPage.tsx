import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ShopPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="h-[50vh] md:h-[60vh] w-full relative overflow-hidden">
        <ImageWithFallback 
          src={ASSETS.BLOG_1} 
          alt="Shop" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white">
            Shop
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Publications & Merchandise</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-sans">
            Discover our curated selection of art publications, exhibition catalogues, and exclusive merchandise.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our shop features artist monographs, limited edition prints, and thoughtfully designed items that celebrate contemporary art and culture.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Visit us in person or contact us for information about available publications.
          </p>
        </div>
      </div>
    </div>
  );
}
