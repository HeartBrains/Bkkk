import { Reveal } from '../ui/Reveal';

export function PressPage() {
  return (
    <div className="w-full bg-white min-h-screen pb-12">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <Reveal>
            <h1 className="text-3xl md:text-4xl font-serif mb-8 text-gray-900">Press</h1>
        </Reveal>
        
        <Reveal delay={0.1}>
            <div className="grid gap-8">
                {/* Placeholder content for Press */}
                <div className="border-b border-gray-200 py-8">
                    <p className="text-gray-500 mb-2">November 22, 2025</p>
                    <h2 className="text-2xl font-serif text-black mb-4">Bangkok Kunsthalle Opens New Exhibition</h2>
                    <a href="#" className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors">Download PDF</a>
                </div>
                <div className="border-b border-gray-200 py-8">
                    <p className="text-gray-500 mb-2">October 15, 2025</p>
                    <h2 className="text-2xl font-serif text-black mb-4">Interview with Curator Mark Chearavanont</h2>
                    <a href="#" className="text-black underline underline-offset-4 hover:text-gray-600 transition-colors">Read Article</a>
                </div>
            </div>
        </Reveal>
      </div>
    </div>
  );
}
