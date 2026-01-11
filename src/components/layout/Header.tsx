import { Menu } from 'lucide-react';
import { Button } from '../ui/button';

interface HeaderProps {
  onMenuClick: () => void;
  onLogoClick?: () => void;
  isTransparent?: boolean;
}

export function Header({ onMenuClick, onLogoClick, isTransparent = false }: HeaderProps) {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center transition-colors duration-300 ${
        isTransparent ? 'bg-transparent text-white' : 'bg-transparent text-black'
      }`}
    >
      <div 
        onClick={onLogoClick}
        className="text-3xl font-bold tracking-tight leading-none font-sans cursor-pointer mt-[0px] mr-[0px] mb-[0px] ml-[24px]"
      >
        Bangkok
        <br />
        Kunsthalle
      </div>
      <Button 
        variant="ghost" 
        onClick={onMenuClick}
        className={`w-[9vw] h-[9vw] min-w-[9vw] min-h-[9vw] md:w-[6vw] md:h-[6vw] md:min-w-[6vw] md:min-h-[6vw] !p-0 ${isTransparent ? "text-white hover:bg-white/20 hover:text-white" : "text-black hover:bg-black/10"}`}
      >
        <Menu className="!w-[45%] !h-[45%]" strokeWidth={1.5} />
      </Button>
    </header>
  );
}
