import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface ActivityDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ActivityDetailPage({ onNavigate }: ActivityDetailPageProps) {
  return (
    <div className="w-full bg-white min-h-screen pb-24">
      {/* Hero */}
      <div className="h-[60vh] md:h-[80vh] w-full relative overflow-hidden group">
         <ImageWithFallback
            src={ASSETS.EVENT_HERO}
            alt="Neon Reveries"
            className="w-full h-full object-cover"
         />
         <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <button 
                onClick={() => onNavigate('activities')}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium font-sans">Back to Activities</span>
            </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
         {/* Title */}
         <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">Neon Reveries</h1>

         <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left Column */}
            <div className="md:w-1/3">
               <div className="text-xl md:text-2xl text-gray-400 font-serif space-y-2">
                  <p>Wong Kar-Wai</p>
                  <p>Screening Series</p>
                  <p>Screenings</p>
                  <p className="mt-4">01 Oct – 01 Nov 2025</p>
               </div>
            </div>

            {/* Right Column */}
            <div className="md:w-2/3 text-gray-800 font-sans leading-relaxed text-lg space-y-8">
               <p>
                 This August and September, Bangkok Kunsthalle screens four Wong Kar Wai classics on Saturday nights, beginning with 'In the Mood for Love' (2000) on August 22—filmed partly in the Yaowarat neighborhood of the Kunsthalle. The series continues with 'Happy Together' (1997) on August 23, 'Chungking Express' (1994) on August 30, and 'Fallen Angels' (1995) on September 6. Moving from quiet longing to restless encounters and neon-lit nights, the films capture Wong's unforgettable vision of love, loneliness, and fleeting connection.
               </p>

               <div>
                 <h3 className="text-xl font-medium mb-4 text-black">Filming Schedule</h3>
                 <div className="space-y-2 text-base">
                    <p><span className="font-semibold">'In the Mood for Love' (2000)</span> on August 22 19.00 (one round only)</p>
                    <p><span className="font-semibold">'Happy Together' (1997)</span> on August 23 Round 1 at 17.00 Round 2 at 19.00</p>
                    <p><span className="font-semibold">'Chungking Express' (1994)</span> on August 30 Round 1 at 17.00 Round 2 at 19.00</p>
                    <p><span className="font-semibold">'Fallen Angels' (1995)</span> on September 6 Round 1 at 17.00 Round 2 at 19.00</p>
                    <p className="mt-4 text-gray-600">Screenings are free! Please book in advance as there is limited seating. The program will be in Original Voice with Thai subtitles. (No English Subtitles)</p>
                 </div>
               </div>

               <p className="text-sm text-gray-500">
                 We encourage you to arrive at Bangkok Kunsthalle 15-30 minutes before the screening begins. Seats not claimed by the start of the film may be released to visitors in the standby line.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
}
