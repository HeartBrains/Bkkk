import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Reveal } from '../ui/Reveal';


interface ActivitiesPageProps {
  onNavigate: (page: string) => void;
}

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  return (
    <div className="w-full bg-white pb-24 min-h-screen">
      {/* Hero */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-gray-100">

      </div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-8">
         <Reveal>
            <h1 className="text-xl md:text-2xl font-serif text-gray-900">Activities</h1>
         </Reveal>
      </div>

      {/* Featured Card */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Reveal delay={0.1}>
            <div 
                className="relative aspect-[16/9] w-full overflow-hidden group cursor-pointer"
                onClick={() => onNavigate('activity-detail')}
            >
                 <ImageWithFallback 
                    src={ASSETS.ACTIVITY_NEON} 
                    alt="Neon Reveries" 
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6 md:p-10">
                  <div>
                    <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-2 tracking-tight">Neon Reveries</h2>
                    <p className="text-xl md:text-2xl text-white/90 font-sans font-medium">Wong Kar-Wai Screening Series</p>
                  </div>
                  
                  <div className="text-white/90 text-sm md:text-base font-sans space-y-1 md:w-1/2">
                    <div className="flex justify-between gap-4">
                      <span>22/8 - In the Mood for Love (2000)</span>
                      <span>19:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>23/8 - Happy Together (1997)</span>
                      <span>17:00 / 19:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>30/8 - Chungking Express (1994)</span>
                      <span>17:00 / 19:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>6/9 - Fallen Angels (1995)</span>
                      <span>17:00 / 19:00</span>
                    </div>
                  </div>
                </div>

            </div>
        </Reveal>
      </div>

      {/* List Layout - Also clickable */}
      <div className="max-w-7xl mx-auto px-6">
        <Reveal delay={0.2}>
            <div 
                className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-gray-200 pt-8 cursor-pointer hover:bg-gray-50 transition-colors duration-300 p-4 -mx-4 rounded-lg group"
                onClick={() => onNavigate('activity-detail')}
            >
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">Neon Reveries</h3>
                </div>
                <div className="md:w-2/3">
                    <div className="text-gray-500 font-serif text-lg md:text-xl space-y-2">
                        <p>Wong Kar-Wai</p>
                        <p>Screening Series</p>
                        <p>Screenings</p>
                        <p>01 Oct – 01 Nov 2025</p>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>

    </div>
  );
}
