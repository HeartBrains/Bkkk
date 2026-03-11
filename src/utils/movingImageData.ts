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
  statement: {
    en: string;
    th: string;
  };
  gallery?: string[];
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
    statement: {
      en: '<p>Once the nation\'s major publisher and disseminator of school textbooks, the Thai Watana Panich building now invites a different kind of engagement. Its dusty and black ashened walls, marked by time and history, offer a backdrop for possible exploration and questioning. In this space, "Infringes" (2024) becomes less about the building\'s past influence and more about what it means to encounter a place that once held institutional power. What happens when art and film enter a space designed to control knowledge? How does the building\'s history shape, or even resist, the narratives presented in these films?</p><p>In considering these questions through a series of films that intervenes on inherited stories and accepted truths, "Infringes" proposes a rethinking of the relationship between power, space, history, and memory. The building itself becomes part of this inquiry, raising questions about how spaces, like narratives, can be repurposed and reimagined.</p><p>The films selected for this program unsettle the boundaries between past and present, myth and memory. They foreground the complex mechanisms by which the past is controlled to sustain present-day hegemony. The works offer speculative interventions to reclaim agency and narrative autonomy and with the alchemy of vibrant sight and sound, each work offers, as Rhea Storr puts it, a way to "protest joyfully." In that spirit, the films provide a joyful disruption of dominant narratives, fostering potential for collective transformation where erased or suppressed voices and histories can be reclaimed. As an active reimagining of the shared futures that can emerge, let us infringe upon the familiar to open ourselves to new forms of communal knowledge and resistance.</p>',
      th: '<p>อาคารไทยวัฒนาพานิช ซึ่งเคยเป็นสำนักพิมพ์และเผยแพร่ตำราเรียนรายใหญ่ของประเทศ บัดนี้ได้เชิญชวนให้เกิดการมีส่วนร่วมในรูปแบบที่แตกต่างออกไป กำแพงที่เต็มไปด้วยฝุ่นและเขม่าดำ ซึ่งถูกทำเครื่องหมายด้วยเวลาและประวัติศาสตร์ เสนอฉากหลังสำหรับการสำรวจและตั้งคำถามที่เป็นไปได้ ในพื้นที่นี้ "การล่วงล้ำ" (2024) มีความหมายน้อยลงเกี่ยวกับอิทธิพลในอดีตของอาคาร และมากขึ้นเกี่ยวกับความหมายของการพบเจอสถานที่ที่เคยมีอำนาจสถาบัน จะเกิดอะไรขึ้นเมื่อศิลปะและภาพยนตร์เข้าสู่พื้นที่ที่ถูกออกแบบมาเพื่อควบคุมความรู้? ประวัติศาสตร์ของอาคารหล่อหลอมหรือแม้กระทั่งต่อต้านเรื่องเล่าที่นำเสนอในภาพยนตร์เหล่านี้อย่างไร?</p><p>ในการพิจารณาคำถามเหล่านี้ผ่านชุดภาพยนตร์ที่แทรกแซงเรื่องเล่าที่สืบทอดและความจริงที่ยอมรับ "การล่วงล้ำ" เสนอการคิดใหม่เกี่ยวกับความสัมพันธ์ระหว่างอำนาจ พื้นที่ ประวัติศาสตร์ และความทรงจำ ตัวอาคารเองกลายเป็นส่วนหนึ่งของการสืบสวนนี้ ทำให้เกิดคำถามเกี่ยวกับว่าพื้นที่ เช่นเดียวกับเรื่องเล่า สามารถนำมาใช้ใหม่และจินตนาการใหม่ได้อย่างไร</p><p>ภาพยนตร์ที่คัดเลือกสำหรับโปรแกรมนี้ทำให้ขอบเขตระหว่างอดีตและปัจจุบัน ตำนานและความทรงจำสั่นคลอน พวกเขานำเสนอกลไกที่ซับซ้อนซึ่งอดีตถูกควบคุมเพื่อรักษาอำนาจนิยมในปัจจุบัน ผลงานเหล่านี้เสนอการแทรกแซงเชิงคาดการณ์เพื่อเรียกร้องการมีอำนาจและความเป็นอิสระในการเล่าเรื่อง และด้วยการเล่นแร่แปรธาตุของภาพและเสียงที่สดใส แต่ละผลงานเสนอ ตามที่ Rhea Storr กล่าวไว้ วิธีการ "ประท้วงอย่างมีความสุข" ด้วยจิตวิญญาณนั้น ภาพยนตร์เหล่านี้ให้การหยุดชะงักอย่างมีความสุขของเรื่องเล่าที่โดดเด่น ส่งเสริมศักยภาพสำหรับการเปลี่ยนแปลงร่วมกันที่เสียงและประวัติศาสตร์ที่ถูกลบหรือถูกปราบปรามสามารถเรียกคืนได้ ในฐานะการจินตนาการใหม่อย่างแข็งขันของอนาคตที่สามารถเกิดขึ้นได้ ให้เราล่วงล้ำสิ่งที่คุ้นเคยเพื่อเปิดตัวเองให้กับรูปแบบใหม่ของความรู้และการต่อต้านของชุมชน</p>'
    },
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Martha+Atienza-+Anito-+2015-+9+minutes-+courtesy+of+the+artist.png',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Sky+Hopinka-+I-ll+Remember+You+as+You+Were-+Not+as+What+You-ll+Become-+2016-+13+minutes-+courtesy+of+the+artist.png',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Aura+Satz-+While+Smoke+Signals-+2023-+9+minutes-+courtesy+of+the+artist.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Riar+Rizaldi-+Notes+from+Gog+Magog-+2022-+20+minutes-+courtesy+of+the+artist.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Rhea+Storr-+A+Protest-+A+Celebration-+A+Mixed+Message-+2018-+12+minutes-+courtesy+of+the+artist+and+LUX+London.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Ji%C5%99%C3%AD+%C5%BD%C3%A1k-+Unfinished+Love+Letter-+2020-+23+minutes-+courtesy+of+the+artist.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/Puma_4.+Moving+Image+Programs-4.1+Infringes-Artwork+Images--Chulayarnnon+Siriphol-+Birth+of+Golden+Snail-+2018-+20+mins-+courtesy+of+the+artist.jpg'
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
    statement: {
      en: '<p>\"Search for Life I\" (20:20 min, 2024) is a science-fiction documentary that traces colonial histories, diaspora, and intergenerational survival. Filmed across the Philippines, Mexico, and the open sea, the work parallels the migration of monarch butterflies with the journeys of Filipino seafarers whose labor sustains global trade—drawing connections between natural and human movements across generations and geographies. The film forms part of a larger series exploring global maritime shipping and the indispensable yet often overlooked role of Filipino seafarers, presented alongside the mythic journeys of monarch butterflies migrating thousands of kilometers.</p><p>The project also revisits the historical ties between the Philippines and Mexico forged during the Spanish colonial period. These routes are revisited not only as frameworks of colonial exploitation but as sites of cultural exchange and transformation. The monarch butterfly, whose migratory journey spans generations, becomes a metaphor that reinforces themes of endurance and interconnectedness, as well as the intrinsic ties between nature and human history.</p><p>At Bangkok Kunsthalle, the work is situated alongside the constant movement of cargo just outside the building. The presentation is an invitation to understand labor not as backdrop but as a constitutive and sensing assemblage linking bodies, materials, and worlds in continuous motion.</p><p>A companion film and talk program \"WORKWORKWORK\" (2025), curated by Rosalia Namsai Engchuan, extends the exhibition\\\'s inquiry into the entanglements of labor, desire, and care, presenting films that trace how work reverberates across bodies, ecologies, and histories. The series gestures toward both exhaustion and persistence, evoking the cyclical and unending motion of work that structures not only economies but also desires and togetherness. Rather than understanding labor merely as economic activity, we encounter it as a complex web of relations shaped by colonial histories, migration, gender, and the environment.</p><p>These films illuminate how labor is never merely material but always already spectral: animated by absences and afterlives that persist in gestures, memories, and infrastructures with no beginning and no end. Labor folds into the \"Search for Life\"—for dignity and belonging amid the rhythms and ruins of late capitalism.</p>',
      th: '<p>\"ค้นหาชีวิต I\" (20:20 นาที, 2024) เป็นสารคดีไซไฟที่ติดตามประวัติศาสตร์อาณานิคม ชาวพลัดถิ่น และการอยู่รอดข้ามรุ่น ถ่ายทำทั่วฟิลิปปินส์ เม็กซิโก และทะเลเปิด ผลงานนี้เปรียบเทียบการอพยพขงผีเสื้อกษัตริย์กับการเดินทางของกะลาสีชาวฟิลิปปินส์ที่แรงงานของพวกเขาค้ำจุนการค้าระดับโลก—สร้างความเชื่อมโยงระหว่างการเคลื่อนไหวของธรรมชาติและมนุษย์ข้ามรุ่นและภูมิศาสตร์ ภาพยนตร์เป็นส่วนหนึ่งของซีรีส์ที่ใหญ่กว่าที่สำรวจการขนส่งทางทะเลทั่วโลกและบทบาทที่ขาดไม่ได้แต่มักถูกมองข้ามของกะลาสีชาวฟิลิปปินส์ นำเสนอควบคู่ไปกับการเดินทางในตำนานของผีเสื้อกษัตริย์ที่อพยพหลายพันกิโลเมตร</p><p>โครงการนี้ยังทบทวนความสัมพันธ์ทางประวัติศาสตร์ระหว่างฟิลิปปินส์และเม็กซิโกที่สร้างขึ้นในช่วงระยะเวลาาณานิคมของสเปน เส้นทางเหล่านี้ถูกทบทวนไม่เพียงแต่เป็นกรอบของการแสวงหาประโยชน์จากอาณานิคม แต่เป็นสถานที่ของการแลกเปลี่ยนและการเปลี่ยนแปลงทางวัฒนธรรม ผีเสื้อกษัตริย์ซึ่งการเดินทางอพยพข้ามรุ��น กลายเป็นคำอุปมาที่เสริมธีมของความอดทนและการเชื่อมโยงกัน รวมถึงความสัมพันธ์ที่แท้จริงระหว่างธรรมชาติและประวัติศาสตร์ของมนุษย์</p><p>ที่กรุงเทพ คุนส์ฮัลเล ผลงานนี้ตั้งอยู่ควบคู่ไปกับการเคลื่อนไหวของสินค้าที่ไม่หยุดหย่อนนอกอาคาร การนำเสนอเป็นคำเชิญให้เข้าใจแรงงานไม่ใช่เป็นฉากหลัง แต่เป็นการประกอบที่เป็นองค์ประกอบและรับรู้ที่เชื่อมโยงร่างกาย วัสดุ และโลกในการเคลื่อนไหวอย่างต่อเนื่อง</p><p>ภาพยนตร์ร่วมและโปรแกรมพูดคุย \"WORKWORKWORK\" (2025) ซึ่งภัณฑารักษ์โดยโรซาเลีย นามทราย เอ็งชวน ขยายการสืบสวนของนิทรรศการเข้าสู่ความพัวพันของแรงงาน ความปรารถนา และการดูแล นำเสนอภาพยนตร์ที่ติดตามว่างานสะท้อนกลับข้ามร่างกาย ระบบนิเวศ และประวัติศาสตร์อย่างไร ซีรีส์แสดงท่าทีต่อทั้งความเหนื่อยล้าและความพากเพียร กระตุ้นให้นึกถึงการเคลื่อนไหวแบบวงจรและไม่มีที่สิ้นสุดของงานที่สร้างโครงสร้างไม่เพียงแต่เศรษฐกิจ แต่ยังรวมถึงความปรารถนาและความเป็นหนึ่งเดียวกัน แทนที่จะเข้าใจแรงงานเพียงแค่เป็นกิจกรรมทางเศรษฐกิจ เราพบว่ามันเป็นเครือข่ายที่ซับซ้อนของความสัมพันธ์ที่ถูกสร้างโดยประวัติศาสตร์อาณานิคม การอพยพ เพศ และสภาพแวดล้อม</p><p>ภาพยนตร์เหล่านี้ส่องสว่างว่าแรงงานไม่เคยเป็นเพียงวัตถุ แต่เป็นผีเสมอ: เคลื่อนไหวโดยความขาดและชีวิตหลังความตายที่ยังคงอยู่ในท่าทาง ความทรงจำ และโครงสร้างพื้นฐานโดยไม่มีจุดเริ่มต้นและจุดสิ้นสุด แรงงานพับเข้าสู่ \"ค้นหาชีวิต\"—เพื่อศักดิ์ศรีและความเป็นเจ้าของท่ามกลางจังหวะและซากปรักหักพังของทุนนิยมสาย</p>'
    },
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Search+for+Life+I+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Warm+Spell+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Perfumed+Nightmare+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Search+for+Life+I+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Warm+Spell+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Perfumed+Nightmare+1-1920w.jpeg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.5+Search+for+Life+I+-+WORKWORKWORK-Artwork+Images--Search+for+Life+I+1.jpg'
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
    statement: {
      en: '<p>To think and feel from where we find ourselves: here, now, in this building. 13.740577922529402, 100.51491353933588. Or—Bangkok as a deity with a birth chart. To think deeply about Chinatown is to think about movement, transformation, and the entangled forces that shape identities and places.</p><p>"Shapeshifting Spaces: stretched by desires within them" (2025)is a curatorial inquiry into the dynamic and relational nature of spaces—always in flux, already in multitudes, imbued with feelings, histories, and potentialities. Shapeshifting Spaces are enmeshed in networks of human and more-than-human interdependencies. They shape and are shaped by migration, techno-orientalism, capitalist acceleration, ecological decay, collective memory, and the erasure and reimagining of histories. They are deeply tied to the passing of non-linear time and its staggering into chromatic unfolding where pasts and futures never neatly align.</p><p>To endure is to shape-shift. Shapeshifting Spaces sit at the rupture between appearances and realities. The nature of contradiction is not antidotal but co-constitutive. Everything exists—because of, despite of, for—with another. They occupy a terroir between potential and determinism, where empty potentiality actualizes through relations. There is no outside. There is only relation and interdependency.</p><p>It is within these Shapeshifting Spaces, liminal nodes in ever-moving and wild assemblages, that we return to our bodies and feel the seeds for a worlding otherwise—hopefully.</p><p>"Shapeshifting Spaces: stretched by desires within them" is a future oriented vessel infused with the promise to not forget where we come from. It asks questions about determinism beyond intent. If agencies are collectively enunciated then whose desires turn into what forces—stretching the spaces we inhabit? Every moment contains its own horizon. Every space carries within it a relational field of possibilities, loose ends that never cease to root for new associations to tangle with.</p><p>"Shapeshifting Spaces: stretched by desires within them" is where we encounter the fragments of a future that is not yet but still calling to us.</p>',
      th: '<p>คิดและรู้สึกจากที่เราพบตัวเอง: ที่นี่ ตอนนี้ ในอาคารนี้ 13.740577922529402, 100.51491353933588 หรือ—กรุงเทพฯ ในฐานะเทพที่มีแผนภูมิเกิด การคิดอย่างลึกซึ้งเกี่ยวกับเยาวราชคือการคิดเกี่ยวกับการเคลื่อนไหว การเปลี่ยนแปลง และกำลังที่พัวพันกันที่หล่อหลอมเอกลักษณ์และสถานที่</p><p>"พื้นที่เปลี่ยนรูป: ถูกยืดออกโดยความปรารถนาภายใน" (2025) เป็นการสืบสวนของภัณฑารักษ์เกี่ยวกับธรรมชาติที่เปลี่ยนแปลงและเชื่อมโยงของพื้นที่—เปลี่ยนแปลงอยู่เสมอ มีอยู่หลายมิติอยู่แล้ว เต็มไปด้วยความรู้สึก ประวัติศาสตร์ และศักยภาพ พื้นที่เปลี่ยนรูปพัวพันอยู่ในเครือข่ายของการพึ่งพาอาศัยกันระหว่างมนุษย์และมากกว่ามนุษย์ พวกเขาหล่อหลอมและถูกหล่อหลอมโดยการอพยพ เทคโน-โอเรียนทัลลิสม์ การเร่งตัวของทุนนิยม การสลายตัวของระบบนิเวศ ความทรงจำร่วม และการลบล้างและจินตนาการใหม่ของประวัติศาสตร์ พวกเขาผูกพันอย่างลึกซึ้งกับการผ่านไปของเวลาที่ไม่เป็นเส้นตรงและการเดินโซเซของมันเข้าสู่การคลี่คลายสีสันที่อดีตและอนาคตไม่เคยสอดคล้องกันอย่างเรียบร้อย</p><p>การอดทนคือการเปลี่ยนรูป พื้นที่เปลี่ยนรูปตั้งอยู่ที่รอยแตกระหว่างรูปลักษณ์และความเป็นจริง ธรรมชาติของความขัดแย้งไม่ใช่การต่อต้าน แต่ร่วมก่อสร้าง ทุกอย่างมีอยู่—เพราะ แม้ว่า เพื่อ—กับอีกสิ่งหนึ่ง พวกเขาอยู่ในพื้นที่ระหว่างศักยภาพและกำหนดชะตากรรม ที่ศักยภาพว่างเปล่าเกิดขึ้นจริงผ่านความสัมพันธ์ ไม่มีภายนอก มีเพียงความสัมพันธ์และการพึ่งพาอาศัยกัน</p><p>มันอยู่ภายในพื้นที่เปลี่ยนรูปเหล่านี้ จุดเปลี่ยนผ่านในการประกอบที่เคลื่อนไหวและป่าเถื่อนอยู่เสมอ ที่เรากลับมาหาร่างกายของเราและรู้สึกถึงเมล็ดพันธุ์สำหรับการสร้างโลกอื่น—หวังว่า</p><p>"พื้นที่เปลี่ยนรูป: ถูกยืดออกโดยความปรารถนาภายใน" เป็นภาชนะที่มุ่งสู่อนาคตซึ่งเต็มไปด้วยคำสัญญาที่จะไม่ลืมว่าเรามาจากไหน มันถามคำถามเกี่ยวกับกำหนดชะตากรรมเกินกว่าเจตนา หากหน่วยงานถูกประกาศร่วมกันแล้วความปรารถนาของใครกลายเป็นพลังอะไร—ยืดพื้นที่ที่เราอาศัยอยู่? ทุกช่วงเวลามีขอบฟ้าของตัวเอง ทุกพื้นที่มีสนามเชื่อมโยงของความเป็นไปได้ปลายเปิดที่ไม่เคยหยุดหาสมาคมใหม่ที่จะพัวพัน</p><p>"พื้นที่เปลี่ยนรูป: ถูกยืดออกโดยความปรารถนาภายใน" คือที่ที่เราพบเศษส่วนของอนาคตที่ยังไม่มา แต่ยังคงเรียกหาเรา</p>'
    },
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Doug+Aitken-+Wilderness--Doug+Aitken-+Wilderness+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Doug+Aitken-+Wilderness--Doug+Aitken-+Wilderness+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Doug+Aitken-+Wilderness--Doug+Aitken-+Wilderness+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+10.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+7.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+8.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+4.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+9.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+6.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+11.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Lawrence+Lek-+Black+Cloud--Lawrence+Lek-+Black+Cloud-+courtesy+of+the+artist+5.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+7.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+8.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+6.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+5.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Ming+Wong-+After+Chinatown--Ming+Wong-+After+Chinatown-+courtesy+of+the+artist+4.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Surapong+Pinijkhar-+Sampeng--Surapong+Pinijkhar-+Sampeng+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Surapong+Pinijkhar-+Sampeng--Surapong+Pinijkhar-+Sampeng+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.2+Shapeshifting+Spaces+stretched+by+the+desires+within+them-Artwork+Images-Surapong+Pinijkhar-+Sampeng--Surapong+Pinijkhar-+Sampeng+3.jpg'
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
      th: '28 กุมภาพันธ์ 2568 - 27 เ���ษายน 2568'
    },
    statement: {
      en: '<p>We gather to step out of whatever is. We gather because we want resistance, reorientation, and possibility. We gather to root, to heal, to evolve and sometimes to conceal, to cling, and conserve. We gather to assert our response-ability. In times when any kind of future under the current world order has become a completely unbelievable narrative. In times when communal and spiritual bonds are replaced with consumerism and individualism. What does it mean to come together with intent?</p><p>"we gather" (2025) is a moving image program that invites audiences to witness and immerse themselves in modes of assembly. The moving image works focus on the non-televised aspects and instances of gatherings—the rehearsals, speculations and meta-reflections. The wild beyond of people getting together in all forms and places. Brazil, the Swiss Alps, Uzbekistan, police training institutions, and an anonymous forest. The aim is not a representation of those places and people. The gesture of the program is diffractive, offering a point of departure without defining or prescribing a destination. The relationship remains critical with an acute awareness of togetherness as an ontological fact. Ultimately, the relational potentiality of collective presences carries a latent possibility to go in any direction. And sometimes, this leads to stories where we are not winning.</p><p>As we tremble before uncertain futures, we remember that we are not simply recipients of history—we are participants in its unfolding. Along the pathways of violence through which modernity was built, upon which it unfolds, and where it accelerates, we search for another world within this one. Accelerated capitalism limits our ability to need each other and leaves us longing; it stretches time toward linear development, toward exponential nowhere and empty promises—never meant to bring us anywhere but only to convince us to follow. Fuck this way of understanding anything about what life is about.</p><p>What does it mean to be human in relationship with all life? What if we built out differences not by retreating into escapism and distance, but by coming together? What if the key was not to be strong but to be soft together? And can gathering become a placeholder—to see what we mean by that? What if we gathered as if the future depended on it? Because it does.</p>',
      th: '<p>เรารวมตัวกันเพื่อก้าวออกจากสิ่งที่เป็นอยู่ เรารวมตัวกันเพราะเราต้องการความต้านทาน การปรับทิศทางใหม่ และความเป็นไปได้ เรารวมตัวกันเพื่อหยั่งราก เพื่อเยียวยา เพื่อวิวัฒนาการ และบางครั้งเพื่อปกปิด เพื่อยึดติด และอนุรักษ์ เรารวมตัวกันเพื่อยืนยันความสามารถในการตอบสนองของเรา ในยุคที่อนาคตใดๆ ภายใต้ระเบียบโลกปัจจุบันได้กลายเป็นเรื่องเล่าที่ไม่น่าเชื่อถือโดยสิ้นเชิง ในยุคที่ความผูกพันชุมชนและจิตวิญญาณถูกแทนที่ด้วยลัทธิบริโภคนิยมและปัจเจกนิยม การมารวมตัวกันด้วยเจตนาหมายความว่าอย่างไร?</p><p>"เรารวมตัวกัน" (2025) เป็นโปรแกรมภาพเคลื่อนไหวที่เชิญผู้ชมให้เป็นพยานและดื่มด่ำกับรูปแบบของการชุมนุม ผลงานภาพเคลื่อนไหวมุ่งเน้นไปที่ด้านและกรณีของการชุมนุมที่ไม่ได้ออกอากาศทางโทรทัศน์—การซ้อม การคาดการณ์ และการไตร่ตรองเชิงเมตา ความป่าเถื่อนเกินกว่าของผู้คนที่มารวมตัวกันในทุกรูปแบบและสถานที่ บราซิล เทือกเขาแอลป์สวิส อุซเบกิสถาน สถาบันฝึกอบรมตำรวจ และป่าที่ไม่ระบุชื่อ เป้าหมายไม่ใช่การเป็นตัวแทนของสถานที่และผู้คนเหล่านั้น ท่าทางของโปรแกรมคือการหักเห แสดงจุดเริ่มต้นโดยไม่กำหนดหรือกำหนดปลายทาง ความสัมพันธ์ยังคงวิพากษ์วิจารณ์ด้วยความตระหนักอย่างแหลมคมเกี่ยวกับความเป็นหนึ่งเดียวกันเป็นข้อเท็จจริงเชิงอภิปรัชญา ในท้ายที่สุด ศักยภาพเชิงสัมพันธ์ของการปรากฏตัวร่วมกันมีความเป็นไปได้แฝงที่จะไปในทิศทางใดก็ได้ และบางครั้ง นี่นำไปสู่เรื่องราวที่เราไม่ได้ชนะ</p><p>ขณะที่เราสั่นสะเทือนต่อหน้าอนาคตที่ไม่แน่นอน เราจำได้ว่าเราไม่ได้เป็นเพียงผู้รับประวัติศาสตร์—เราเป็นผู้มีส่วนร่วมในการคลี่คลายของมัน ตามเส้นทางของความรุนแรงที่สมัยใหม่ถูกสร้างขึ้น ซึ่งมันคลี่คลาย และที่มันเร่งตัว เราค้นหาโลกอื่นภายในโลกนี้ ทุนนิยมที่เร่งตัวจำกัดความสามารถของเราในการต้องการกันและกัน และทำให้เราโหยหา มันยืดเวลาไปสู่การพัฒนาเชิงเส้น ไปสู่ที่ไหนสั่งแห่งที่ไม่มีที่สิ้นสุดและคำสัญญาที่ว่างเปล่า—ไม่เคยตั้งใจจะพาเราไปไหน แต่เพียงเพื่อโน้มน้าวให้เราทำตาม ช่างมันกับวิธีการทำความเข้าใจอะไรก็ตามเกี่ยวกับชีวิต</p><p>การเป็นมนุษย์ในความสัมพันธ์กับชีวิตทั้งหมดหมายความว่าอย่างไร? จะเป็นอย่างไรถ้าเราสร้างความแตกต่างไม่ใช่โดยการถอยหนีเข้าสู่การหนีความเป็นจริงและระยะห่าง แต่โดยการมารวมตัวกัน? จะเป็นอย่างไรถ้ากุญแจไม่ใช่การเข้มแข็ง แต่เป็นการอ่อนโยนร่วมกัน? และการรวมตัวกันสามารถกลายเป็นตัวยึดตำแหน่งเพื่อดูว่าเราหมายความว่าอย่างไร? จะเป็นอย่างไรถ้าเรารวมตัวกันราวกับว่าอนาคตขึ้นอยู่กับมัน? เพราะมันเป็นเช่นนั้น</p>'
    },
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+11.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+10.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+4.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+7.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+9.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+8.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+6.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+5.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-AFSAR-DAVRA-+Proxy+Conference+In+Forest--AFSAR-DAVRA-+Proxy+Conference+In+Forest+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Saodat+Ismailova-+Chillpiq--Saodat+Ismailova-+Chillpiq+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+14.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Isaac+Wai-+Rehearsal+of+the+Futures+Police+Training--Isaac+Wai-+Rehearsal+of+the+Futures+Police+Training+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Isaac+Wai-+Rehearsal+of+the+Futures+Police+Training--Isaac+Wai-+Rehearsal+of+the+Futures+Police+Training+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+13.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+15.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+16.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+17.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+11.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+10.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+12.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen--Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen+4.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen--Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen--Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen--Andrew+Norman+Wilson-+Silvesterchl%C3%A4usen+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+8.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+6.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.3+we+gather-Artwork+Images-Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade--Cinthia+Marcelle+-+Tiago+Mata+Machado-+Comunidade+2.jpg'
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
    statement: {
      en: '<p>What connects us, and what keeps us apart? And what if what keeps us apart is not a visible thing, but the very concept that any relation might become? What if that concept is the European belief system of human exceptionalism—the illusion of the superior position of the human subject over our more-than-human kin?</p><p>"seeds" (2025) brings together two research-based moving image works on familial objects—the ginkgo and the betel nut. Together, these works offer conceptual seeds: propositions for rethinking temporality, relationality, and the unstable yet soft grounds of vernacular knowledge and value beyond the colonial order. What is referred to as the "ginkgo nut" is a fertilized ovule carrying a seed within. Similarly, the so-called betel nut—widely chewed across Asia—is the seed of the areca palm. Its name arises from the cultural practice of wrapping it in betel leaves, rather than scientific classification. These slippages between naming and biological origin illuminate how vernacular knowledge disrupts botanical taxonomies rooted in Western science, making space for plural, embodied, and relational ways of knowing. Stories of mixed ontological status.</p><p>"seeds" shifts the frame of reference from human-centered storytelling toward the lessons we might be offered by plants as our entangled kin. Because our times demand methods in which politics, poetics, and ethics are assembled toward speculative possibility. Conventional documentary will not do—but at the same time, speculative detachment unrooted from lived realities risks becoming obsolete escapism. Instead of clinging to thick descriptions of what we already know—and in doing so, reproducing a collective situation that does not serve the global majority—both artists expand the empirical concept through their unique languages. Bridging documentary and critical research with speculative modes of storytelling, here refusals of "proper" place are not closures, but beginnings of critical fabulist elsewheres.</p><p>Our future needs materials to think with, more than impulses to criticize. Both films in this program offer just that: seeds for a reworlding through relation, refusal, and the speculative labor of becoming otherwise.</p>',
      th: '<p>อะไรเชื่อมโยงเรา และอะไรทำให้เราแยกจากกัน? และจะเป็นอย่างไรถ้าสิ่งที่ทำให้เราแยกจากกันไม่ใช่สิ่งที่มองเห็นได้ แต่เป็นแนวคิดที่ความสัมพันธ์ใดๆ อาจจะกลายเป็น? จะเป็นอย่างไรถ้าแนวคิดนั้นคือระบบความเชื่อของยุโรปเกี่ยวกับความพิเศษของมนุษย์—ภาพลวงตาของตำแหน่งที่เหนือกว่าของหัวข้อมนุษย์เหนือญาติที่มากกว่ามนุษย์ของเรา?</p><p>"เมล็ดพันธุ์" (2025) รวมผลงานภาพเคลื่อนไหวที่ใช้การวิจัยสองชิ้นเกี่ยวกับวัตถุในครอบครว—แปะก๊วยและหมากพลู ผลงานเหล่านี้เสนอเมล็ดพันธุ์เชิงแนวคิด: ข้อเสนอสำหรับการคิดใหม่เกี่ยวกับความชั่วคราว ความเชื่อมโยง และพื้นฐานที่ไม่มั่นคงแต่อ่อนโยนของความรู้และค่านิยมพื้นบ้านเกินกว่าคำสั่งอาณานิคม สิ่งที่เรียกว่า "ถั่วแปะก๊วย" คือไข่ที่ได้รับการปฏิสนธิแล้วแบกเมล็ดภายใน ในทำนองเดียวกัน หมากพลูที่เรียกกัน—เคี้ยวกันอย่างแพร่หลายทั่วเอเชีย—คือเมล็ดของต้นหมาก ชื่อของมันเกิดจากการปฏิบัติทางวัฒนธรรมของการห่อในใบพลู มากกว่าการจำแนกทางวิทยาศาสตร์ ความลื่นไถลเหล่านี้ระหว่างการตั้งชื่อและต้นกำเนิดทางชีววิทยาส่องสว่างว่าความรู้พื้นบ้านทำลายอนุกรมวิธานพฤกษศาสตร์ที่หยั่งรากในวิทยาศาสตร์ตะวันตกอย่างไร ทำให้มีพื้นที่สำหรับวิธีการรู้ที่หลากหลาย เป็นรูปธรรม และเชื่อมโยง เรื่องราวของสถานะภววิทยาผสม</p><p>"เมล็ดพันธุ์" เปลี่ยนกรอบอ้างอิงจากการเล่าเรื่องที่มนุษย์เป็นศูนย์กลางไปสู่บทเรียนที่เราอาจได้รับจากพืชในฐานะญาติที่พัวพันของเรา เพราะยุคของเราต้องการวิธีการที่การเมือง กวีศาสตร์ และจริยธรรมถูกประกอบไปสู่ความเป็นไปได้เชิงคาดการณ์ สารคดีทั่วไปจะไม่ทำ—แต่ในเวลาเดียวกัน การแยกตัวเชิงคาดการณ์ที่ไม่มีรากจากความเป็นจริงที่มีชีวิตมีความเสี่ยงที่จะกลายเป็นการหนีความเป็นจริงที่ล้าสมัย แทนที่จะยึดติดกับคำอธิบายหนาของสิ่งที่เรารู้อยู่แล้ว—และในการทำเช่นนั้น ทำซ้ำสถานการณ์ร่วมกันที่ไม่ให้บริการส่วนใหญ่ของโลก—ศิลปินทั้งสองขยายแนวคิดเชิงประจักษ์ผ่านภาษาที่เป็นเอกลักษณ์ของพวกเขา เชื่อมโยงสารคดีและการวิจัยเชิงวิพากษ์กับโหมดการเล่าเรื่องเชิงคาดการณ์ ที่นี่การปฏิเสธ "สถานที่ที่เหมาะสม" ไม่ใช่การปิด แต่เป็นจุดเริ่มต้นของที่อื่นที่มีนิยายเชิงวิพากษ์</p><p>อนาคตของเราต้องการวัสดุที่จะคิดด้วย มากกว่าแรงกระตุ้นที่จะวิพากษ์วิจารณ์ ภาพยนตร์ทั้งสองในโปรแกรมนี้เสนอเพียงเท่านั้น: เมล็ดพันธุ์สำหรับการสร้างโลกใหม่ผ่านความสัมพันธ์ การปฏิเสธ และแรงงานเชิงคาดการณ์ของการกลายเป็นอย่างอื่น</p>'
    },
    gallery: [
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+5.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Mooni+Perry-+Binlang+Xishi--Mooni+Perry-+Binlang+Xishi+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+4.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Mooni+Perry-+Binlang+Xishi--Mooni+Perry-+Binlang+Xishi+2.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Mooni+Perry-+Binlang+Xishi--Mooni+Perry-+Binlang+Xishi+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+7.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+9.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+1.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Mooni+Perry-+Binlang+Xishi--Mooni+Perry-+Binlang+Xishi+4.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+3.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+8.jpg',
      'https://irp.cdn-website.com/5516674f/dms3rep/multi/4.+Moving+Image+Programs-4.4+seeds-Artwork+Images-Tang+Han-+Ginkgo+and+Other+Times--Tang+Han-+Ginkgo+and+Other+Times+6.jpg'
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
    statement: {
      en: '<p>“Inviting You to Die With Me” (2026) is an invitation to confront healing as a long, always unfinished, and often uncomfortable process of adaptation and transformation. Grounded in the concept of “continuous birth”, the exhibition understands life and form not as products with origins, but as processes that are always already underway. Read through a Plutonian lens, death is not opposed to life, nor is it something to be transcended or aestheticized. It functions instead as a structural condition of growth across human and more-than-human worlds. What endures here is the capacity to regenerate through cycles of destruction and re-emergence. Healing, in this framework, is durational and shared. It resists resolution, closure, and the fantasy—so dominant today—of personal optimization and relief.</p><p>This understanding of life as continuous becoming forms the foundation of Parinda Mai’s long-term research, through which mythology, astrology, and artistic practice are mobilized as epistemic tools for thinking about collective endurance across times.</p><p>At the core of the exhibition are Mai’s moving image works alongside her opening lecture performance. These works emerge from her sustained engagement with the Southeast Asian folktale “The Twelve Sisters” (Nang Sip Song or Phra Rot Meri), a story transmitted through oral traditions, temple murals, children’s books, popular media, and cinema. Repeated rather than preserved, the myth persists through distortion, translation, and retelling. Mai approaches “The Twelve Sisters” not as an identity narrative centered on individual figures, but as a Plutonian psychic structure through which collective conditions of gender, violence, care, and survival are continuously reworked. In this sense, the myth becomes a vessel for understanding how societies endure and metabolize trauma across vast temporal scales/the kalpas: a very, very long time.</p><p>Hutsama Juntaratana extends this inquiry into the material realm. Composed from matter formed through decay—bones and charcoal—her “Offerings” (2026) are residues in processes that have already passed through loss. Installed within the darkened Kunsthalle, the sculptures enter into a spatial dialogue with the moving images. Intermittently illuminated by projected light, the figures surface alongside the films, binding sculptures, moving images, and architecture into a shared temporal community. Viewing here, becomes an immersion within a field shaped by material persistence.</p>',
      th: '"ขอเชิญคุณมาตายกับฉัน" (2026) คือคำเชิญให้เผชิญหน้ากับการเยียวยาในฐานะกระบวนการปรับตัวและการเปลี่ยนแปลงที่ยาวนาน ไม่มีวันเสร็จสิ้น และมักไม่สบายใจ ยึดมั่นในแนวคิด "การเกิดอย่างต่อเนื่อง" นิทรรศการเข้าใจชีวิตและรูปแบบไม่ใช่เป็นผลิตภัณฑ์ที่มีต้นกำเนิด แต่เป็นกระบวนการที่ดำเนินอยู่แล้วเสมอ อ่านผ่านเลนส์ของดาวพลูโต ความตายไม่ได้ตรงข้ามกับชีวิต และไม่ใช่สิ่งที่จะเหนือกว่าหรือสวยงาม แต่ทำหน้าที่เป็นเงื่อนไขโครงสร้างของการเจริญเติบโตในโลกของมนุษย์และมากกว่ามนุษย์ สิ่งที่ยั่งยืนที่นี่คือความสามารถในการฟื้นฟูผ่านวงจรของการทำลายและการกลับมาอีกครั้ง การเยียวยาในกรอบนี้เป็นระยะเวลาและแบ่งปัน มันต่อต้านการแก้ไข การปิด และจินตนาการ—ที่โดดเด่นในปัจจุบัน—ของการเพิ่มประสิทธิภาพและการบรรเทาส่วนบุคคล</p><p>ความเข้าใจนี้เกี่ยวกับชีวิตในฐานะการกลายเป็นอย่างต่อเนื่องเป็นรากฐานของการวิจัยระยะยาวของ Parinda Mai ซึ่งตำนาน โหราศาสตร์ และการปฏิบัติทางศิลปะถูกระดมเป็นเครื่องมือทางญาณวิทยาสำหรับการคิดเกี่ยวกับความอดทนร่วมกันข้ามเวลา แกนกลางของนิทรรศการคือผลงานภาพเคลื่อนไหวของ Mai พร้อมกับการบรรยายเปิดของเธอ ผลงานเหล่านี้เกิดจากการมีส่วนร่วมอย่างต่อเนื่องของเธอกับนิทานพื้นบ้านเอเชียตะวันออกเฉียงใต้ "สิบสองนางฟ้า" (นางสิบสองหรือพระรถเมรี) เรื่องราวที่ถ่ายทอดผ่านประเพณีปากเปล่า ภาพจิตรกรรมฝาผนังวัด หนังสือเด็ก สื่อยอดนิยม และภาพยนตร์ ซ้ำแล้วซ้ำอีกมากกว่าการรักษาไว้ ตำนานยังคงอยู่ผ่านการบิดเบือน การแปล และการเล่าซ้ำ Mai เข้าถึง "สิบสองนางฟ้า" ไม่ใช่เป็นเรื่องเล่าเอกลักษณ์ที่มุ่งเน้นไปที่ตัวบุคคล แต่เป็นโครงสร้างจิตใจของพลูโตซึ่งเงื่อนไขร่วมกันของเพศ ความรุนแรง การดูแล และการอยู่รอดได้รับการปรับปรุงอย่างต่อเนื่อง ในแง่นี้ ตำนานกลายเป็นภาชนะสำหรับความเข้าใจว่าสังคมอดทนและเผาผลาญบาดแผลข้ามระดับชั่วคราวที่กว้างใหญ่/กัปป์: เวลานานมากๆ Hutsama Juntaratana ขยายการสืบสวนนี้เข้าสู่อาณาจักรวัสดุ ประกอบด้วยสสารที่เกิดจากการสลายตัว—กระดูกและถ่าน "เครื่องบูชา" (2026) ของเธอคือสารตกค้างในกระบวนการที่ผ่านการสูญเสียไปแล้ว ติดตั้งภายใน Kunsthalle ที่มืด ประติมากรรมเข้าสู่บทสนทนาเชิงพื้นที่กับภาพเคลื่อนไหว ได้รับการส่องสว่างเป็นระยะโดยแสงที่ฉาย ตัวเลขผุดขึ้นพร้อมกับภาพยนตร์ ผูกประติมากรรม ภาพเคลื่อนไหว และสถาปัตยกรรมเข้าเป็นชุมชนชั่วคราวที่แบ่งปัน การดูที่นี่ กลายเป็นการแช่ในสนามที่ถูกสร้างโดยความพากเพียรของวัสดุ'
    },
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
    ]
  }
];

export function getMovingImageProgramBySlug(slug: string): MovingImageProgram | undefined {
  return movingImagePrograms.find(program => program.slug === slug);
}

export function getCurrentMovingImageProgram(): MovingImageProgram | undefined {
  const today = new Date();
  return movingImagePrograms.find(program => {
    const fromDate = new Date(program.fromDate);
    const toDate = new Date(program.toDate);
    return today >= fromDate && today <= toDate;
  });
}