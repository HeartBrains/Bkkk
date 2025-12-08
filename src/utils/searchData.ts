export interface SearchDocument {
  id: string;
  title: string;
  content: string;
  keywords: string;
  page: string;
}

export const searchData: SearchDocument[] = [
  {
    id: 'home',
    title: 'Home',
    content: 'Bangkok Kunsthalle is a multidisciplinary platform for contemporary art in Thailand.',
    keywords: 'art contemporary thailand platform bangkok main',
    page: 'home'
  },
  {
    id: 'about',
    title: 'About Us',
    content: 'Learn about our vision to ignite the Thai contemporary art scene, our history, and the team behind Bangkok Kunsthalle.',
    keywords: 'history vision team background mission story who we are',
    page: 'about'
  },
  {
    id: 'vision',
    title: 'Our Vision',
    content: 'We aim to be a leading platform for contemporary art, fostering dialogue and creativity.',
    keywords: 'mission goals creativity dialogue future strategy manifesto',
    page: 'vision'
  },
  {
    id: 'visit',
    title: 'Visit Us',
    content: 'Plan your visit to Bangkok Kunsthalle. Check our opening hours, location map, and directions.',
    keywords: 'location map hours directions ticket access transport address',
    page: 'visit'
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions',
    content: 'Discover our current, upcoming, and past exhibitions featuring local and international artists.',
    keywords: 'show gallery display art artists calendar schedule what is on',
    page: 'exhibitions'
  },
  {
    id: 'activities',
    title: 'Activities',
    content: 'Join our educational programs, workshops, artist talks, and special events.',
    keywords: 'events workshops education talks programs learning public',
    page: 'activities'
  },
  {
    id: 'blog',
    title: 'Blog & News',
    content: 'Read the latest updates, articles, interviews, and insights from the art world.',
    keywords: 'articles updates press reviews insights journalism media',
    page: 'blog'
  },
  {
    id: 'support',
    title: 'Support Us',
    content: 'Help us sustain our mission by becoming a patron or donor. Support the future of Thai art.',
    keywords: 'donate patron sponsorship funding membership giving philanthropy',
    page: 'support'
  },
  {
    id: 'contact',
    title: 'Contact',
    content: 'Get in touch with us for inquiries, press information, or collaborations.',
    keywords: 'email phone address press inquiries connect hello',
    page: 'contact'
  },
  {
    id: 'founder',
    title: 'Founder',
    content: 'Meet the founder of Bangkok Kunsthalle.',
    keywords: 'biography leadership owner director profile',
    page: 'founder'
  },
  {
    id: 'team',
    title: 'Our Team',
    content: 'The dedicated team working behind the scenes at Bangkok Kunsthalle.',
    keywords: 'staff curators management jobs careers hiring',
    page: 'team'
  },
  {
    id: 'residency',
    title: 'Residency',
    content: 'Our artist residency program supporting creative development.',
    keywords: 'artist-in-residence studio program development exchange housing',
    page: 'residency'
  },
  {
    id: 'archives',
    title: 'Archives',
    content: 'Explore our digital archives of past events and exhibitions.',
    keywords: 'history past events database records library collection',
    page: 'archives'
  },
  {
    id: 'exhibition-search-for-life',
    title: 'Search for Life I',
    content: 'Exhibition by Stephanie Comilang. A video installation exploring themes of migration, memory, and the butterfly effect.',
    keywords: 'stephanie comilang video art installation butterfly terrazzo current exhibition',
    page: 'exhibition-detail'
  },
  {
    id: 'activity-neon-reveries',
    title: 'Neon Reveries: Wong Kar-Wai Screening Series',
    content: 'Screening series featuring In the Mood for Love, Happy Together, Chungking Express, and Fallen Angels.',
    keywords: 'film cinema movie wong kar wai screening event activity',
    page: 'activity-detail'
  }
];
