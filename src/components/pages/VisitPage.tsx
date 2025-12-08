import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function VisitPage() {
    return (
        <div className="w-full bg-white pb-24 min-h-screen">
            {/* Hero Section */}
             <div className="h-[60vh] w-full relative overflow-hidden bg-gray-100">

            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    {/* Left Column - Title */}
                    <div className="md:w-1/4">
                        <h1 className="text-3xl md:text-4xl font-serif">Visit</h1>
                    </div>

                    {/* Right Column - Details & Map */}
                    <div className="md:w-3/4 flex flex-col gap-12">
                        {/* Details Text */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-sm uppercase tracking-wide mb-1">Bangkok Kunsthalle</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    599 Pantachit Alley, Pom Prap, Bangkok
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-sm uppercase tracking-wide mb-1">Opening Hours</h3>
                                <p className="text-gray-600 text-sm">Wed - Sun</p>
                                <p className="text-gray-600 text-sm">14:00 - 20:00</p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full aspect-[4/3] md:aspect-[16/9] bg-gray-100 relative overflow-hidden rounded-sm">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.590763634063!2d100.511872!3d13.743292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299004545c9d9%3A0x6e6f7f8a9b0c1d2e!2sBangkok%20Kunsthalle!5e0!3m2!1sen!2sth!4v1710000000000!5m2!1sen!2sth"
                                title="Bangkok Kunsthalle Map"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
                             />
                             
                             {/* Map Pin / Label Overlay */}
                             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                 <div className="bg-black text-white px-4 py-2 text-xs md:text-sm font-bold uppercase tracking-wider shadow-lg">
                                    Bangkok<br/>Kunsthalle
                                 </div>
                                 <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-black border-r-[8px] border-r-transparent mx-auto"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
