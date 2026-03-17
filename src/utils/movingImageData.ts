export interface MovingImageProgram {
  id: string;
  slug: string;
  title: {
    en: string;
    th: string;
  };
  curator: {
    en: string;
    th: string;
  };
  fromDate: string;
  toDate: string;
  dateDisplay: {
    en: string;
    th: string;
  };
  status: 'upcoming' | 'current' | 'past';
  featuredImage?: string;
  gallery?: string[];
  installationViews?: Array<{
    artist: string;
    title: string;
    year: string;
  }>;
  films: {
    title: string;
    artist: string;
    year: string;
    format: string;
    duration: string;
    credit: string;
  }[];
}

export const movingImagePrograms: MovingImageProgram[] = [
  {
    id: '6',
    slug: 'upcoming-program-2026',
    title: {
      en: 'To Be Announced',
      th: 'จะประกาศในเร็วๆ นี้'
    },
    curator: {
      en: 'Rosalia Namsai Engchuan',
      th: 'โรซาเลีย นามทราย เอ็งชวน'
    },
    fromDate: '2026-05-01',
    toDate: '2026-07-31',
    dateDisplay: {
      en: '1 May 2026 - 31 July 2026',
      th: '1 พฤษภาคม 2569 - 31 กรกฎาคม 2569'
    },
    status: 'upcoming',
    gallery: [
      'https://images.unsplash.com/photo-1764689668473-b834a1a575e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvamVjdG9yJTIwY2luZW1hJTIwYXJ0fGVufDF8fHx8MTc3MzU2MjYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    ],
    films: []
  },
  {
    id: '1',
    slug: 'infringes',
    title: {
      en: 'Infringes',
      th: 'การล่วงล้ำ'
    },
    curator: {
      en: 'Komtouch Napattaloong',
      th: 'คมทัช นภัทธลอง'
    },
    fromDate: '2024-10-23',
    toDate: '2024-12-22',
    dateDisplay: {
      en: '23 October 2024 - 22 December 2024',
      th: '23 ตุลาคม 2567 - 22 ธันวาคม 2567'
    },
    status: 'past',
    featuredImage: 'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+1+COVER-1920w.jpg',
    gallery: [
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+30-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+1-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Riar+Rizaldi-+Notes+from+Gog+Magog-+2022-+20+minutes-+courtesy+of+the+artist-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Rhea+Storr-+A+Protest-+A+Celebration-+A+Mixed+Message-+2018-+12minutes-+courtesy+of+the+artist+and+LUX+London-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.1+Infringes--Infringes+-Andrea+Rossetti+22-1920w.jpg'
    ],
    installationViews: [
      {
        artist: 'Aura Satz',
        title: 'While Smoke Signals',
        year: '2023'
      },
      {
        artist: 'Jiří Žák',
        title: 'Unfinished Love Letter',
        year: '2020'
      },
      {
        artist: 'Sky Hopinka',
        title: 'I\'ll Remember You as You Were, Not as What You\'ll Become',
        year: '2016'
      }
    ],
    films: [
      {
        title: 'Birth of Golden Snail',
        artist: 'Chulayarnnon Siriphol',
        year: '2018',
        format: '16 mm film, black & white, silence',
        duration: '20 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'While Smoke Signals',
        artist: 'Aura Satz',
        year: '2023',
        format: 'color, sound',
        duration: '9 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Unfinished Love Letter',
        artist: 'Jiří Žák',
        year: '2020',
        format: 'color, sound',
        duration: '23 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Notes from Gog Magog',
        artist: 'Riar Rizaldi',
        year: '2022',
        format: 'color, sound',
        duration: '20 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'A Protest, A Celebration, A Mixed Message',
        artist: 'Rhea Storr',
        year: '2018',
        format: 'color, sound',
        duration: '12 minutes',
        credit: 'Courtesy of the artist and LUX London.'
      },
      {
        title: 'Anito',
        artist: 'Martha Atienza',
        year: '2015',
        format: 'color, sound',
        duration: '9 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'I\'ll Remember You as You Were, Not as What You\'ll Become',
        artist: 'Sky Hopinka',
        year: '2016',
        format: 'color, sound',
        duration: '13 minutes',
        credit: 'Courtesy of the artist.'
      }
    ]
  },
  {
    id: '5',
    slug: 'search-for-life-i',
    title: {
      en: 'Search for Life I',
      th: 'ค้นหาชีวิต I'
    },
    curator: {
      en: 'Rosalia Namsai Engchuan',
      th: 'โรซาเลีย นามทราย เอ็งชวน'
    },
    fromDate: '2025-11-22',
    toDate: '2026-02-22',
    dateDisplay: {
      en: '22 November 2025 - 22 February 2026',
      th: '22 พฤศจิกายน 2568 - 22 กุมภาพันธ์ 2569'
    },
    status: 'past',
    
    featuredImage: 'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I-+Krittawat+-+Prapasiri+5+COVER-1920w.jpg',
    gallery: [
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Warm+Spell-+Krittawat+-+Prapasiri+1-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I-+Krittawat+-+Prapasiri+5-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I+1-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I+2-1920w.jpg',
      'https://lirp.cdn-website.com/5516674f/dms3rep/multi/opt/Puma_Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.5+Search+for+Life+I--Search+for+Life+I-+Krittawat+-+Prapasiri+10-1920w.jpg'
    ],
    films: [
      {
        title: 'Search for Life I',
        artist: 'Stephanie Comilang',
        year: '2024',
        format: 'color, sound',
        duration: '20:20 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'The Wandering Ghost',
        artist: 'Prapat Jiwarangsan',
        year: '2018',
        format: 'color, sound',
        duration: '20 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Ploy',
        artist: 'Prapat Jiwarangsan',
        year: '2020',
        format: 'color, sound',
        duration: '51 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Perfumed Nightmare',
        artist: 'Kidlat Tahimik',
        year: '1977',
        format: 'color, sound',
        duration: '91 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Warm Spell',
        artist: 'Shen Xin',
        year: '2018',
        format: 'color, sound',
        duration: '34:22 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Hara Factory Workers Struggle',
        artist: 'Jon Uengphakorn',
        year: '1975',
        format: '16 mm film, color, sound',
        duration: '45 minutes',
        credit: 'Courtesy of the artist.'
      }
    ],
    installationViews: [
      {
        artist: 'Stephanie Comilang',
        title: 'Search for Life I',
        year: '2024'
      }
    ]
  },
  {
    id: '2',
    slug: 'shapeshifting-spaces',
    title: {
      en: 'Shapeshifting Spaces: stretched by the desires within them',
      th: 'พื้นที่เปลี่ยนรูป: ถูกยืดออกโดยความปรารถนาภายใน'
    },
    curator: {
      en: 'Rosalia Namsai Engchuan',
      th: 'โรซาเลีย นามทราย เอ็งชวน'
    },
    fromDate: '2025-01-17',
    toDate: '2025-02-27',
    dateDisplay: {
      en: '17 January 2025 - 27 February 2025',
      th: '17 มกราคม 2568 - 27 กุมภาพันธ์ 2568'
    },
    status: 'past',

    featuredImage: 'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+1+COVER.jpg',
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+5.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Moving+Image+Programs-+Puttisin+Choojesroom+2.jpg',      
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+10.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.2+Shapeshifting+Spaces--Surapong+Pinijkhar-+Sampeng+1.jpg'
    ],
    films: [
      {
        title: 'Sampeng (The Chinatown Montage)',
        artist: 'Surapong Pinijkhar',
        year: '1982',
        format: '16 mm film, color, sound',
        duration: '60 minutes',
        credit: 'Courtesy of the artist and Thai Film Archive.'
      },
      {
        title: 'After Chinatown',
        artist: 'Ming Wong',
        year: '2012',
        format: 'black & white, sound',
        duration: '7:09 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Wilderness',
        artist: 'Doug Aitken',
        year: '2022',
        format: 'color, sound',
        duration: '13:54 minutes',
        credit: 'Courtesy of the artist; 303 Gallery, New York; Galerie Eva Presenhuber, Zurich; Victoria Miro, London; and Regen Projects, Los Angeles.'
      },
      {
        title: 'Black Cloud',
        artist: 'Lawrence Lek',
        year: '2021',
        format: 'color, sound',
        duration: '11 minutes',
        credit: 'Commissioned for the 4th VH Award, sponsored by Hyundai Motor Corporation. Courtesy of the artist.'
      }
    ],
    installationViews: [
      {
        artist: 'Surapong Pinijkhar',
        title: 'Sampeng (The Chinatown Montage)',
        year: '1982'
      },
      {
        artist: 'Ming Wong',
        title: 'After Chinatown',
        year: '2012'
      },
      {
        artist: 'Doug Aitken',
        title: 'Wilderness',
        year: '2022'
      }
    ]
  },
  {
    id: '3',
    slug: 'we-gather',
    title: {
      en: 'we gather',
      th: 'เรารวมตัวกัน'
    },
    curator: {
      en: 'Rosalia Namsai Engchuan',
      th: 'โรซาเลีย นามทราย เอ็งชวน'
    },
    fromDate: '2025-02-28',
    toDate: '2025-04-27',
    dateDisplay: {
      en: '28 February 2025 - 27 April 2025',
      th: '28 กุมภาพันธ์ 2568 - 27 เคมีนาคม 2568'
    },
    status: 'past',
    featuredImage: 'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Moving+Image+Programs-+Puttisin+Choojesroom+15+COVER.jpg',
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Moving+Image+Programs-+Puttisin+Choojesroom+15.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Isaac+Wai-+Rehearsal+of+the+Futures+Police+Training+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Saodat+Ismailova-+Chillpiq+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--AFSAR-DAVRA-+Proxy+Conference+In+Forest+11.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.3+we+gather--Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen+1.jpg'
    ],
    films: [
      {
        title: 'Comunidade',
        artist: 'Cinthia Marcelle and Tiago Mata Machado',
        year: '2015–2016',
        format: 'color, sound',
        duration: '8:16 minutes',
        credit: 'Courtesy of the artists, Luisa Strina Gallery, and Sproviery Gallery.'
      },
      {
        title: 'Rehearsal of the Futures: Police Training Exercises',
        artist: 'Isaac Chong Wai',
        year: '2018',
        format: 'performance and video',
        duration: '18:14 minutes',
        credit: 'Commissioned by M+ Museum for M+ Live Art: Audience as Performer. Courtesy of the artist, Blindspot Gallery, and Zilberman Gallery.'
      },
      {
        title: 'Silvesterchläusen',
        artist: 'Andrew Norman Wilson',
        year: '2024',
        format: 'color, sound',
        duration: '12:17 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Chillpiq',
        artist: 'Saodat Ismailova',
        year: '2018',
        format: 'color, sound',
        duration: '17 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Proxy Conference: In Forest',
        artist: 'AFSAR×DAVRA',
        year: '2023',
        format: 'color, sound',
        duration: '35:04 minutes',
        credit: 'Commissioned by Tai Kwun Contemporary. Courtesy of the artists.'
      }
    ],
    installationViews: [
      {
        artist: 'AFSAR×DAVRA',
        title: 'Proxy Conference: In Forest',
        year: '2023'
      }
    ]
  },
  {
    id: '4',
    slug: 'seeds',
    title: {
      en: 'seeds',
      th: 'เมล็ดพันธุ์'
    },
    curator: {
      en: 'Rosalia Namsai Engchuan',
      th: 'โรซาเลีย นามทราย เอ็งชวน'
    },
    fromDate: '2025-04-30',
    toDate: '2025-06-22',
    dateDisplay: {
      en: '30 April 2025 - 22 June 2025',
      th: '30 เมษายน 2568 - 22 มิถุนายน 2568'
    },
    status: 'past',
    featuredImage: 'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+3+COVER.jpg',
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+6.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Mooni+Perry-+Binlang+Xishi+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Tang+Han-+Ginkgo+and+Other+Times+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.4+seeds--Mooni+Perry-+Binlang+Xishi+2.jpg'
    ],
    films: [
      {
        title: 'Ginkgo and Other Times',
        artist: 'Tang Han',
        year: '2023',
        format: 'color, sound',
        duration: '15 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Binlang Xishi: Chapter 1 and 2',
        artist: 'Mooni Perry',
        year: '2021–2022',
        format: 'color, sound',
        duration: '25 minutes',
        credit: 'Courtesy of the artist.'
      }
    ]
  },
  {
    id: '7',
    slug: 'inviting-you-to-die-with-me',
    title: {
      en: 'Inviting You to Die With Me',
      th: 'ขอเชิญคุณมาตายกับฉัน'
    },
    curator: {
      en: 'Rosalia Namsai Engchuan',
      th: 'โรซาเลีย นามทรย เอ็งชวน'
    },
    fromDate: '2026-02-28',
    toDate: '2026-05-03',
    dateDisplay: {
      en: '28 February 2026 - 3 May 2026',
      th: '28 กุมภาพันธ์ 2569 - 3 พฤษภาคม 2569'
    },
    status: 'current',
    featuredImage: 'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Inviting+You+to+Die+With+Me-+Prapasiri+3+COVER.jpg',
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Inviting+You+to+Die+With+Me-+Prapasiri+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Inviting+You+to+Die+With+Me-+Prapasiri+7.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Blinded+by+Centuries+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--Blinded+by+Centuries+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_Images+for+Website-Bangkok+Kunsthalle+Images+for+Website-4.+Moving+Image+Program-4.6+Inviting+You+to+Die+With+Me--12+Kalpas+A+Beginning+of+Beginning+4.jpg'
    ],
    films: [
      {
        title: '12 Kalpas: A Beginning of Beginning',
        artist: 'Parinda Mai',
        year: '2021',
        format: 'color, sound',
        duration: '8 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Blinded by Centuries',
        artist: 'Parinda Mai',
        year: '2023',
        format: 'color, sound',
        duration: '14 minutes',
        credit: 'Courtesy of the artist.'
      },
      {
        title: 'Offerings',
        artist: 'Hutsama Juntaratana',
        year: '2026',
        format: 'sculptural installation',
        duration: '',
        credit: 'Courtesy of the artist.'
      }
    ],
    installationViews: [
      {
        artist: 'Parinda Mai',
        title: 'Inviting You to Die With Me',
        year: '2026'
      }
    ]
  }
];

export function getMovingImageProgramBySlug(slug: string): MovingImageProgram | undefined {
  return movingImagePrograms.find(program => program.slug === slug);
}

export function getCurrentMovingImageProgram(): MovingImageProgram | undefined {
  const today = new Date();
  return movingImagePrograms.find(program => {
    // Priority 1: Check explicit status tag
    if (program.status === 'current') return true;
    if (program.status === 'upcoming' || program.status === 'past') return false;
    
    // Priority 2: Calculate from dates
    const fromDate = new Date(program.fromDate);
    const toDate = new Date(program.toDate);
    return today >= fromDate && today <= toDate;
  });
}