import { MOCK_POSTS } from './mockData';
import { RECORDS } from './records';
import { ARTISTS_DATA } from './residencyData';

export interface SearchDocument {
  id: string;
  title: string;
  content: string;
  keywords: string;
  page: string;
  slug?: string; // Added to support navigation to specific slugs
}

export const STATIC_SEARCH_DATA: SearchDocument[] = [
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
    id: 'press',
    title: 'Press',
    content: 'Press releases, media kits, and coverage of Bangkok Kunsthalle.',
    keywords: 'media news kit release journalism download coverage',
    page: 'press'
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
    id: 'kyaf',
    title: 'Khao Yai Art & Film',
    content: 'Experience art and film in the unique setting of Khao Yai.',
    keywords: 'kyaf khao yai art film festival nature',
    page: 'khaoyai'
  },
  {
    id: 'shop',
    title: 'Shop',
    content: 'Browse our collection of books, merchandise, and unique items.',
    keywords: 'store merchandise books gifts buy',
    page: 'shop'
  },
  {
    id: 'bookings',
    title: 'Bookings',
    content: 'Book tickets for events, screenings, and special programs.',
    keywords: 'tickets reservations seats entry',
    page: 'shop'
  },
  {
    id: 'products',
    title: 'Products',
    content: 'Explore our curated selection of art products and publications.',
    keywords: 'merch goods souvenirs catalogue',
    page: 'shop'
  },
  {
    id: 'current-exhibitions',
    title: 'Current Exhibitions',
    content: 'See what is currently on view at Bangkok Kunsthalle.',
    keywords: 'now showing present display',
    page: 'exhibitions'
  },
  {
    id: 'upcoming-exhibitions',
    title: 'Upcoming Exhibitions',
    content: 'Preview the future exhibitions and projects coming soon.',
    keywords: 'future coming soon next',
    page: 'exhibitions'
  },
  {
    id: 'moving-image',
    title: 'Moving Image Program',
    content: 'Our dedicated program for video art, film, and moving images.',
    keywords: 'film video cinema screen movie',
    page: 'exhibitions'
  },
  {
    id: 'public-program',
    title: 'Public Program',
    content: 'Engage with our public programs including talks, tours, and workshops.',
    keywords: 'education community participation',
    page: 'activities'
  },
  {
    id: 'screening-program',
    title: 'Screening Program',
    content: 'Attend our regular film screenings and audio-visual presentations.',
    keywords: 'film movie cinema watch',
    page: 'activities'
  },
  {
    id: 'artists-residence',
    title: 'Artists in Residence',
    content: 'Meet the current artists living and working at the Kunsthalle.',
    keywords: 'resident studio practice living',
    page: 'residency'
  },
  {
    id: 'prev-residence',
    title: 'Previous Artists in Residence',
    content: 'Explore the archive of artists who have participated in our residency.',
    keywords: 'alumni past residents history',
    page: 'residency'
  },
  {
    id: 'past-exhibitions',
    title: 'Past Exhibitions',
    content: 'Look back at our previous exhibitions and projects.',
    keywords: 'history archive retrospective',
    page: 'archives'
  },
  {
    id: 'past-activities',
    title: 'Past Activities',
    content: 'Browse our archive of past events and programs.',
    keywords: 'history events archive old',
    page: 'archives'
  }
];

// Helper to strip HTML tags for search content
function stripHtml(html: string): string {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

export async function getFullSearchData(): Promise<SearchDocument[]> {
  // 1. Start with static pages
  const data = [...STATIC_SEARCH_DATA];

  // 2. Add dynamic content (simulated from mockData)
  Object.values(MOCK_POSTS).forEach(post => {
    let page = '';
    let keywords = '';

    if (post.type === 'activity') {
      page = 'activity-detail';
      keywords = `activity event ${post.categories?.join(' ') || ''}`;
    } else if (post.type === 'exhibition') {
      page = 'exhibition-detail';
      keywords = `exhibition art show`;
    } else if (post.type === 'post') {
      page = 'blog-detail';
      keywords = `blog news ${post.categories?.join(' ') || ''}`;
    }

    if (page) {
      data.push({
        id: `${post.type}-${post.slug}`,
        title: post.title,
        content: stripHtml(post.content),
        keywords: keywords,
        page: page,
        slug: post.slug
      });
    }
  });

  // 3. Add content from RECORDS (Archives/Past events)
  RECORDS.forEach(record => {
    // Check for duplicates based on slug
    const exists = data.some(d => d.slug === record.slug);
    if (exists) return;

    let page = '';
    let keywords = '';

    if (record.category === 'activity' || record.category === 'event') {
      page = 'activity-detail';
      keywords = `activity event ${record.status} ${record.description || ''}`;
    } else if (record.category === 'exhibition') {
      page = 'exhibition-detail';
      keywords = `exhibition art show ${record.status} ${record.description || ''}`;
    }

    if (page) {
      data.push({
        id: `record-${record.id}`,
        title: record.title,
        content: `${record.description || ''} (${record.date})`,
        keywords: keywords,
        page: page,
        slug: record.slug
      });
    }
  });

  // 4. Add Artists from Residency
  ARTISTS_DATA.forEach(artist => {
      data.push({
          id: `artist-${artist.slug}`,
          title: artist.name,
          content: stripHtml(artist.bio + " " + artist.statement),
          keywords: `artist resident residency ${artist.period} ${artist.category}`,
          page: 'artist-detail',
          slug: artist.slug
      });
  });

  return data;
}

// Keep the default export for backward compatibility if needed, but prefer getFullSearchData
export const searchData = STATIC_SEARCH_DATA;
