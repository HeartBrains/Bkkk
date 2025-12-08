import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { MenuOverlay } from './components/layout/MenuOverlay';
import { LandingPage } from './components/pages/LandingPage'; // Import LandingPage
import { HomePage } from './components/pages/HomePage';
import { KhaoYaiPage } from './components/pages/KhaoYaiPage';
import { AboutPage } from './components/pages/AboutPage';
import { FounderPage } from './components/pages/FounderPage';
import { TeamPage } from './components/pages/TeamPage';
import { SupportPage } from './components/pages/SupportPage';
import { VisitPage } from './components/pages/VisitPage';
import { PostPage } from './components/pages/PostPage';
import { ActivitiesPage } from './components/pages/ActivitiesPage';
import { BlogPage } from './components/pages/BlogPage';
import { BlogDetailPage } from './components/pages/BlogDetailPage';
import { ExhibitionsPage } from './components/pages/ExhibitionsPage';
import { ExhibitionDetailPage } from './components/pages/ExhibitionDetailPage';
import { ActivityDetailPage } from './components/pages/ActivityDetailPage';
import { ArchivesPage } from './components/pages/ArchivesPage';
import { ResidencyPage } from './components/pages/ResidencyPage';
import { ShopPage } from './components/pages/ShopPage';
import { PressPage } from './components/pages/PressPage';
import { ContactPage } from './components/pages/ContactPage';
import { HiddenAssetsPage } from './components/pages/HiddenAssetsPage';

export type Page = 'home' | 'khaoyai' | 'about' | 'vision' | 'history' | 'founder' | 'team' | 'support' | 'visit' | 'news' | 'activities' | 'activity-detail' | 'blog' | 'blog-detail' | 'exhibitions' | 'exhibition-detail' | 'archives' | 'residency' | 'shop' | 'press' | 'contact' | 'hidden-assets';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false); // New state for Landing Page
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
      setCurrentPage(page as Page);
      window.scrollTo(0, 0);
      setIsMenuOpen(false);
  };

  const handleEnter = (destination: 'bangkok' | 'khaoyai') => {
    setHasEntered(true);
    if (destination === 'bangkok') {
      setCurrentPage('home');
    } else {
      setCurrentPage('khaoyai');
    }
  };

  // If user hasn't entered, show Landing Page
  if (!hasEntered) {
      return <LandingPage onEnter={handleEnter} />;
  }

  // Header is transparent on Home and Exhibitions page when at the top
  const isTransparent = (
    currentPage === 'home' || 
    currentPage === 'khaoyai' ||
    currentPage === 'exhibitions' || 
    currentPage === 'activities' || 
    currentPage === 'activity-detail' || 
    currentPage === 'blog' ||
    currentPage === 'blog-detail' ||
    currentPage === 'visit' ||
    currentPage === 'about' ||
    currentPage === 'founder' ||
    currentPage === 'team' ||
    currentPage === 'vision' ||
    currentPage === 'history' ||
    currentPage === 'contact'
  ) && !scrolled;

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      <Header 
        onMenuClick={() => setIsMenuOpen(true)} 
        onLogoClick={() => handleNavigate('home')}
        isTransparent={isTransparent}
      />

      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
        activePage={currentPage}
      />

      <main>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'khaoyai' && <KhaoYaiPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} activePage="about" />}
        {currentPage === 'vision' && <AboutPage onNavigate={handleNavigate} activePage="vision" />}
        {currentPage === 'history' && <AboutPage onNavigate={handleNavigate} activePage="history" />}
        
        {currentPage === 'founder' && <FounderPage onNavigate={handleNavigate} />}
        {currentPage === 'team' && <TeamPage onNavigate={handleNavigate} />}
        
        {currentPage === 'support' && <SupportPage />}
        {currentPage === 'visit' && <VisitPage />}
        {currentPage === 'news' && <PostPage onNavigate={handleNavigate} />}
        {currentPage === 'activities' && <ActivitiesPage onNavigate={handleNavigate} />}
        {currentPage === 'activity-detail' && <ActivityDetailPage onNavigate={handleNavigate} />}
        {currentPage === 'blog' && <BlogPage onNavigate={handleNavigate} />}
        {currentPage === 'blog-detail' && <BlogDetailPage onNavigate={handleNavigate} />}
        {currentPage === 'exhibitions' && <ExhibitionsPage onNavigate={handleNavigate} />}
        {currentPage === 'exhibition-detail' && <ExhibitionDetailPage onNavigate={handleNavigate} />}
        {currentPage === 'archives' && <ArchivesPage />}
        {currentPage === 'residency' && <ResidencyPage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'press' && <PressPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'hidden-assets' && <HiddenAssetsPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
