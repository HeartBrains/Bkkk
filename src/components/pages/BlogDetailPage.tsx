import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface BlogDetailPageProps {
  onNavigate: (page: string) => void;
}

export function BlogDetailPage({ onNavigate }: BlogDetailPageProps) {
  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Hero */}
      <div className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden group">
         <ImageWithFallback
            src={ASSETS.BLOG_1}
            alt="Blog Detail Hero"
            className="w-full h-full object-cover"
         />
         <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <button 
                onClick={() => onNavigate('blog')}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium font-sans">Back to Blog</span>
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
         {/* Title */}
         <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">
           Art as a Reflection of Society
         </h1>

         <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left Column */}
            <div className="md:w-1/3">
               <div className="text-xl md:text-2xl text-gray-400 font-serif space-y-2">
                  <p>Contemporary Art</p>
                  <p>Culture</p>
                  <p>Insights</p>
                  <p className="mt-4">22 Nov 2025</p>
               </div>
            </div>

            {/* Right Column */}
            <div className="md:w-2/3 text-gray-800 font-sans leading-relaxed text-lg space-y-8">
               <p>
                 Art has always served as a mirror to society, reflecting its triumphs, struggles, and evolving identity. In the contemporary landscape, this relationship has become even more intricate. Artists are not merely observers but active participants in the cultural dialogue, challenging norms and envisioning new futures.
               </p>
               
               <p>
                 The role of public institutions like the Bangkok Kunsthalle is to facilitate this conversation. By providing a space where diverse voices can be heard, we foster a community that values creativity and critical thinking. Our upcoming exhibitions aim to explore these themes deeply, inviting visitors to engage with art that speaks directly to the human condition in the 21st century.
               </p>

               <div>
                 <h3 className="text-xl font-medium mb-4 text-black">Key Themes</h3>
                 <div className="space-y-2 text-base">
                    <p><span className="font-semibold">Identity & Belonging:</span> Exploring how personal and collective identities are shaped in a globalized world.</p>
                    <p><span className="font-semibold">Urban Transformation:</span> Documenting the changing face of our cities and the impact on local communities.</p>
                    <p><span className="font-semibold">Digital Horizons:</span> Investigating the intersection of technology and traditional artistic practices.</p>
                 </div>
               </div>

               <p className="text-sm text-gray-500">
                 Join us for our monthly talks and workshops to dive deeper into these topics with our featured artists and curators.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
