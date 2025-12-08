import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ResidencyPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="h-[50vh] md:h-[60vh] w-full relative overflow-hidden">
        <ImageWithFallback 
          src={ASSETS.ACTIVITY_NEON} 
          alt="Artist Residency" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white">
            Residency
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Artist Residency Program</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-sans">
            Bangkok Kunsthalle offers residency opportunities for artists, curators, and cultural practitioners from around the world.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our residency program provides dedicated time and space for creative exploration, research, and collaboration within our vibrant cultural community.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Applications are accepted on a rolling basis. Please contact us for more information about upcoming opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
