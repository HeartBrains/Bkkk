import { AboutLayout, AboutPageType } from './AboutLayout';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  activePage?: AboutPageType;
}

export function AboutPage({ onNavigate, activePage = 'about' }: AboutPageProps) {
  return (
    <AboutLayout activePage={activePage} onNavigate={onNavigate}>
      <div className="flex flex-col gap-6 text-sm md:text-base text-gray-600 leading-relaxed font-light">
        <h2 className="text-2xl md:text-3xl font-serif leading-tight text-gray-400 font-medium mb-6">
            The raw, industrial space presents a novel and pioneering platform which mirrors quality of artworks chosen to be exhibited there.
        </h2>
        <p>
            Bangkok Kunsthalle is a dynamic, rigorous and accessible cultural institution devoted to art, cinema, music, dance, literature, architecture and other creative languages. Bangkok Kunsthalle represents a new model of art museum. This alternative institution occupies the abandoned Thai Wattana Panich building, a leading printing house that was razed by fire in 2001. The raw, industrial space presents a novel and pioneering platform which mirrors the quality of artworks chosen to be exhibited there.
        </p>
        <p>
            Bangkok Kunsthalle is an artist driven institution, where each new exhibition activates a new space in the brutalist complex. Architectural interventions are informed by the artists, their vision and artworks. Artists invited to exhibit at Bangkok Kunsthalle are commissioned to make site-specific works addressing the building and surrounding area's rich visual language and cultural history.
        </p>
        <p>
            The institution prides itself in its experimental nature, pushing the boundaries of contemporary art through novel exhibitions and public programmes. At its core, Bangkok Kunsthalle strives to be the focal point of creative dialogue for not only Thailand but South-East Asia as a whole.
        </p>
        <p>
            The institution organises about four exhibitions per year featuring international and Thai artists. Throughout the year it also presents a dynamic public program which includes artists' talks, lectures, workshops, screenings and readings to contextualise the featured artists' practices and to address wide cultural topics that are relevant and timely.
        </p>
      </div>
    </AboutLayout>
  );
}
