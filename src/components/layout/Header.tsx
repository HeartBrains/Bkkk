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
        isTransparent ? 'bg-transparent text-white' : 'bg-white text-black'
      }`}
    >
      <div 
        onClick={onLogoClick}
        className="text-xl font-bold tracking-tight leading-none font-serif cursor-pointer"
      >
        Bangkok
        <br />
        Kunsthalle
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onMenuClick}
        className={isTransparent ? "text-white hover:bg-white/20 hover:text-white" : "text-black hover:bg-black/10"}
      >
        <Menu className="h-8 w-8" strokeWidth={1.5} />
      </Button>
    </header>
  );
}
