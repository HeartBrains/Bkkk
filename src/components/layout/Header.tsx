import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import logoImage from "figma:asset/c4b9ac99c37ce625f62558a3efaf0107be9526ee.png";

interface HeaderProps {
  onMenuClick: () => void;
  onLogoClick?: () => void;
  isTransparent?: boolean;
  isScrolled?: boolean;
}

export function Header({ onMenuClick, onLogoClick, isTransparent = false, isScrolled = false }: HeaderProps) {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-start md:items-center transition-all duration-300 bg-transparent`}
    >
      <div 
        onClick={onLogoClick}
        className="cursor-pointer mt-0 mr-0 mb-0 ml-0 md:ml-[24px] p-0 overflow-visible"
      >
        <ImageWithFallback 
          src={logoImage} 
          alt="Bangkok Kunsthalle Logo" 
          className={`h-[40px] md:h-[60px] w-auto object-contain transition-all duration-300 ${isTransparent ? 'invert brightness-0' : ''} ${isScrolled ? 'opacity-0 invisible' : 'opacity-100 visible'} mx-[-8px] my-[0px]`}
        />
      </div>
      <div className="flex items-center gap-4">
        {/* Removed KYAF link */}
        <Button 
          variant="ghost" 
          onClick={onMenuClick}
          className={`w-[9vw] h-[9vw] min-w-[9vw] min-h-[9vw] md:w-[6vw] md:h-[6vw] md:min-w-[6vw] md:min-h-[6vw] !p-0 transition-colors hover:bg-transparent ${
            isTransparent 
              ? 'text-white' 
              : 'text-black'
          }`}
        >
          <Menu className="!w-[82%] !h-[82%] md:!w-[45%] md:!h-[45%]" strokeWidth={1.5} />
        </Button>
      </div>
    </header>
  );
}