import { useLanguage } from '../../utils/languageContext';
import { getMovingImageProgramBySlug } from '../../utils/movingImageData';
import { ArrowLeft } from 'lucide-react';

interface MovingImageDetailPageProps {
  slug: string;
  onNavigate?: (page: string) => void;
  backPage?: string;
}

export function MovingImageDetailPage({ slug, onNavigate, backPage }: MovingImageDetailPageProps) {
  const { language } = useLanguage();
  const program = getMovingImageProgramBySlug(slug);

  if (!program) {
    return (
      <div className="w-full min-h-screen bg-white pt-32 px-6 md:px-12">
        <p className="text-xl">Program not found</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans text-black">
      {/* Back Button */}
      <div className="pt-32 px-6 md:px-12 pb-8">
        <button
          onClick={() => onNavigate?.(backPage || 'home')}
          className="flex items-center gap-2 text-black hover:opacity-60 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">
            {backPage === 'archives'
              ? (language === 'th' ? 'กลับสู่คลังข้อมูล' : 'Back to Archives')
              : backPage === 'exhibitions'
              ? (language === 'th' ? 'กลับสู่นิทรรศการ' : 'Back to Exhibitions')
              : (language === 'th' ? 'กลับสู่หน้าหลัก' : 'Back to Home')
            }
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="px-6 md:px-12 pb-24">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Column - Program Info */}
          <div className="w-full md:w-1/2 shrink-0">
            {/* Title */}
            <h1 className={`text-xl md:text-2xl font-normal ${language === 'th' ? 'leading-[1.82em]' : ''} m-[0px]`}>
              {program.title[language]}
            </h1>

            {/* Dates */}
            <p className={`text-xl md:text-2xl font-normal ${language === 'th' ? 'leading-[1.82em]' : ''} m-[0px]`}>
              {program.dateDisplay[language]}
            </p>

            {/* Curator */}
            <p className={`text-xl md:text-2xl font-normal mb-12 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
              {language === 'th' ? 'ภัณฑารักษ์: ' : 'Curated by '}
              {program.curator[language]}
            </p>

            {/* Films in Program */}
            <div className="space-y-8">
              <h2 className={`text-xl md:text-2xl font-medium leading-tight mb-6 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                {language === 'th' ? 'ภาพยนตร์ในโปรแกรม' : 'Films in Program'}
              </h2>
              
              {program.films.map((film, index) => (
                <div key={index} className="space-y-2">
                  <p className={`text-xl md:text-2xl font-normal leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                    <span className="font-medium">{index + 1}.</span> {film.artist}, <em>{film.title}</em>, {film.year}
                  </p>
                  <p className={`text-xl md:text-2xl text-gray-600 leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                    {film.format}
                    {film.duration && `, ${film.duration}`}
                  </p>
                  <p className={`text-xl md:text-2xl text-gray-500 leading-tight ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                    {film.credit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Statement */}
          <div className="w-full md:w-1/2">
            <div 
              className={`[&>p]:mb-6 [&>p]:text-2xl ${language === 'th' ? '[&>p]:leading-[1.82em]' : ''}`}
              dangerouslySetInnerHTML={{ __html: program.statement[language] }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}