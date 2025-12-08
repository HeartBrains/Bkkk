import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface ExhibitionDetailPageProps {
  onNavigate: (page: string) => void;
}

export function ExhibitionDetailPage({ onNavigate }: ExhibitionDetailPageProps) {
  return (
    <div className="w-full bg-white pb-24 min-h-screen">
       {/* Hero Section */}
       <div className="h-[50vh] md:h-[60vh] w-full relative overflow-hidden group bg-gray-100">

        <div className="absolute bottom-8 left-6 md:left-12 z-20">
            <button 
                onClick={() => onNavigate('exhibitions')}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm font-medium font-sans">Back to Exhibitions</span>
            </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* Left Column - Title */}
            <div className="md:w-1/3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-400 font-medium leading-tight">
                    Unwinding<br/>
                    Architecture<br/>
                    the Poetics of the<br/>
                    Snake Nicolas Amato
                </h1>
            </div>

            {/* Right Column - Text Content */}
            <div className="md:w-2/3 text-sm md:text-base text-black leading-relaxed space-y-6 font-sans">
                <p>
                    The serpent moves across time, across borders. It is a transcultural and transhistorical symbol appearing in diverse mythologies from the frozen landscapes of Russia to the arid expanses of Egypt, from the dense jungles of the Americas to the sacred temples of Thailand. Across millennia, the serpent has persisted as an emblem of ritual, an artifact of ancient epistemologies, and a bridge between the seen and the unseen.
                </p>
                <p>
                    At Bangkok Kunsthalle, this presence moves across floors and across buildings.
                </p>
                <p>
                    It is not imposed but revealed. The serpent stretches along the banister, winding across four flights of green terrazzo stairs. Nicolas Amato, arriving at the Kunsthalle on the first day of the Chinese New Year—the Year of the Snake—recognized it embedded within the architecture itself. His intervention does not introduce something foreign; rather, it uncovers what was already there, transforming perception through an act as subtle yet profound as polishing.
                </p>
                <p>
                    The Kunsthalle's curatorial program is the architectural intervention, a practice of domesticating the building through art. Amato's work is in perfect dialogue with this dynamic—not an addition, but a revelation, an unveiling of what was always there.
                </p>
                <p>
                    The act of polishing becomes the intervention itself, not an imposition but an attunement, blurring the boundaries between art and architecture. The decision to polish the terrazzo rather than mark or alter it ensures that the intervention does not announce itself as a discrete artwork but instead dissolves into the materiality of the space. The act of refinement—of rendering the surface luminous—becomes the artistic gesture itself, reinforcing the conceptual and physical integration of the work within the architecture.
                </p>
                <p>
                    The snake of green polished terrazzo inhabits the in-between spaces.
                </p>
                <p>
                    Like an emerald entangled in the derelict building, it stretches across floors, piercing through the building, a silent guide toward the roof. It traverses thresholds, operating both spatially and metaphorically. More than a decorative motif, it acts as a structural force, shaping the movement through the building. It is more than moving through the floors, it is about dwelling the liminal spaces.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
}
