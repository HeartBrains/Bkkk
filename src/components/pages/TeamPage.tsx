import { AboutLayout } from './AboutLayout';
import { Reveal } from '../ui/Reveal';

interface TeamPageProps {
  onNavigate: (page: string) => void;
}

const TEAM_MEMBERS = [
// ... (same data)
  { name: 'Marisa Chearavanont', role: 'Founder / President', email: 'marisa.c@khaoyaiart.com' },
  { name: 'Stefano Rabolli Pansera', role: 'Director', email: 'stefano.rp@khaoyaiart.com' },
  { name: 'Mark Chearavanont', role: 'Curator', email: 'mark.c@bangkok-kunsthalle.org' },
  { name: 'Gemmica Sinthawalai', role: 'Curator', email: 'gemmi.sin@bangkok-kunsthalle.org' },
  { name: 'Rosalia Namsai Engchuan', role: 'Moving Image Curator', email: 'rosalia.e@bangkok-kunsthalle.org' },
  { name: 'Claudia Ko', role: 'Financial Sustainability & Donor Relations', email: 'claudia.k@khaoyaiart.com' },
  { name: 'Pornperm Paitayawat', role: 'Food & Gastronomy', email: 'perm.p@khaoyaiart.com' },
];

const ADVISORY_BOARD = [
  { name: 'Jessica Morgan', title: 'Director of Dia Art Foundation' },
  { name: 'Manuela Luca-Dazio', title: 'Executive Director Pritzker Architecture Prize' },
  { name: 'Rita and Uli Sigg', title: 'Founders and Donors of M+' },
  { name: 'Taizo Son', title: 'Founder of Mistletoe, Inc.' },
  { name: 'Juan Carlos Verme', title: 'President of Proyectoamil' },
  { name: 'Alan Lau', title: 'Vice Chairman of M+' },
];

const DIRECTORS_CIRCLE = [
  'Anna Guggenbuehl',
  'Shu Jin',
  'Dominique Petite-Frere',
  'Ralph Segreti',
  'Victor Wang',
  'Shala Monroque',
];

export function TeamPage({ onNavigate }: TeamPageProps) {
  return (
    <AboutLayout activePage="team" onNavigate={onNavigate}>
      <div className="max-w-2xl space-y-16">
        
        {/* Team Section */}
        <div className="space-y-8">
          {TEAM_MEMBERS.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.1}>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-serif text-black font-medium">
                  {member.name}
                </h3>
                <div className="text-sm text-gray-500 font-sans">
                  <p>{member.role}</p>
                  <a href={`mailto:${member.email}`} className="hover:text-black transition-colors duration-300">
                    {member.email}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Advisory Board Section */}
        <div className="space-y-6">
          <Reveal>
            <h3 className="text-xl font-serif text-gray-800 mb-6">Advisory Board</h3>
          </Reveal>
          {ADVISORY_BOARD.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-serif text-black font-medium">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-500 font-sans">
                  {member.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Director's Circle Section */}
        <div className="space-y-6">
          <Reveal>
            <h3 className="text-xl font-serif text-gray-800 mb-6">Director's Circle</h3>
          </Reveal>
          <div className="space-y-4">
            {DIRECTORS_CIRCLE.map((name, index) => (
              <Reveal key={name} delay={index * 0.05}>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-serif text-black font-normal">
                    {name}
                  </h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </AboutLayout>
  );
}
