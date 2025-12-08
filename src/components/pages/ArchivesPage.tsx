import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ArchivesPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="h-[50vh] md:h-[60vh] w-full relative overflow-hidden">
        <ImageWithFallback 
          src={ASSETS.BUILDING} 
          alt="Archives" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white">
            Archives
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 font-sans">
            Our archives preserve the rich history of exhibitions, events, and cultural moments at Bangkok Kunsthalle.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Browse through our collection of past exhibitions, programs, and activities that have shaped our institution over the years.
          </p>
        </div>
      </div>
    </div>
  );
}
