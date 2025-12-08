import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

interface PostPageProps {
  onNavigate: (page: string) => void;
}

export function PostPage({ onNavigate }: PostPageProps) {
    return (
        <div className="w-full bg-white pb-24 min-h-screen">
            {/* Hero Section */}
             <div className="h-[60vh] w-full relative overflow-hidden bg-gray-100 group">

                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-8 left-6 md:left-12 z-20">
                    <button 
                        onClick={() => onNavigate('home')}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium font-sans">Back to Home</span>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                     {/* Left Column - Meta */}
                     <div className="md:w-1/3">
                        <h1 className="text-2xl md:text-3xl font-serif leading-tight mb-6 text-gray-400 font-medium">
                            Which mirrors quality of artworks chosen to be exhibited there.
                        </h1>
                        <p className="text-gray-400 text-lg">Posted: 01 Oct 2025</p>
                     </div>

                     {/* Right Column - Body */}
                     <div className="md:w-2/3 text-gray-600 leading-relaxed space-y-6 text-sm md:text-base font-light">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur in est eu ullamcorper. Nam aliquet, ligula sit amet ullamcorper venenatis, leo dolor lacinia magna, sodales convallis tortor augue viverra est. Nulla facilisi. Phasellus id justo eu metus pretium posuere ut viverra nibh. Phasellus elementum nisl nec erat volutpat, id porta lacus iaculis. Phasellus et ullamcorper turpis, eget porttitor tellus.
                        </p>
                        <p>
                            Duis vitae nulla sed nunc euismod sollicitudin eu at nisl. Sed malesuada facilisis augue id imperdiet. Nulla vestibulum mollis mi, vel sollicitudin nisl congue nec. Praesent id augue eget enim viverra fermentum eget id diam. Etiam libero eros, rhoncus sed interdum in, commodo quis nulla. Nulla quis hendrerit ligula.
                        </p>
                        <p>
                            Nullam at massa pretium augue egestas vestibulum nec eu tellus. In hac habitasse platea dictumst. In et consequat magna. Integer rutrum, mauris non congue molestie, nisl felis volutpat lectus, eget posuere velit neque eu nunc. Nullam ut tortor vitae dui blandit laoreet. Integer vestibulum ex risus, vitae finibus sem sagittis quis. Maecenas semper tincidunt ex. Donec est magna, egestas non erat ac, sodales varius nunc. Donec tincidunt hendrerit bibendum. Aenean sit amet nisl lacus.
                        </p>
                        <p>
                            Cras ullamcorper suscipit turpis quis euismod. Vivamus suscipit sapien sit amet elit tincidunt tincidunt in at libero. Proin aliquet nec mauris sit amet dignissim. Ut felis nisi, viverra sed elementum quis, blandit eu felis. Suspendisse mollis augue eget bibendum laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec volutpat hendrerit tempus.
                        </p>
                        <p>
                            Proin quis ante a massa ultrices lobortis ac ac nibh. Morbi urna metus, interdum non egestas nec, tempor sed justo. Nullam id dui in erat porta tristique. Fusce dictum rutrum magna eget sollicitudin. Duis eleifend egestas felis et placerat. Donec auctor finibus vehicula. Fusce commodo risus vitae augue tincidunt, a accumsan nisl mollis.
                        </p>
                     </div>
                </div>
            </div>
        </div>
    );
}
