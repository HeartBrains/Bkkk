import { Instagram, Facebook, Youtube } from 'lucide-react';
import { ExpandingSearch } from '../search/ExpandingSearch';

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="bg-black text-white px-6 py-12 pb-6">
      {/* Top Links Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-8 md:gap-0 text-sm font-medium tracking-wide">
        <ExpandingSearch onNavigate={onNavigate} />
        
        <div className="flex gap-12">
          <button onClick={() => onNavigate?.('contact')} className="hover:text-gray-300 uppercase">Press</button>
          <button onClick={() => onNavigate?.('contact')} className="hover:text-gray-300 uppercase">Subscribe</button>
        </div>

        <div className="flex items-center gap-4">
          <span className="uppercase mr-2">Follow Us</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Instagram className="w-5 h-5" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Facebook className="w-5 h-5" /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><Youtube className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Bottom Logo & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 md:pt-0 md:border-none">
        <h1 className="text-5xl md:text-8xl font-bold uppercase leading-none tracking-tighter mb-8 md:mb-0 w-full md:w-auto font-serif">
          Bangkok
          <br />
          Kunsthalle
        </h1>
        
        <div className="flex flex-col items-end text-[10px] text-gray-400 gap-1">
          <div className="flex gap-4">
            <button onClick={() => onNavigate?.('hidden-assets')} className="hover:text-gray-300">Assets</button>
            <span>|</span>
            <button onClick={() => onNavigate?.('contact')} className="hover:text-gray-300">Terms & Privacy Policy</button>
            <span>|</span>
            <span>©2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
