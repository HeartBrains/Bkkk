import { ASSETS } from './assets';
import { WPPost } from './types';

// Helper to create bilingual mock post
const createBilingualMockPost = (
  slug: string,
  type: 'exhibition' | 'activity' | 'post',
  titleEN: string,
  titleTH: string,
  date: string,
  dateTH: string,
  image: string,
  artistEN?: string,
  artistTH?: string,
  categoriesEN: string[] = [],
  categoriesTH: string[] = []
): { en: WPPost; th: WPPost } => ({
  en: {
    id: slug,
    slug,
    type,
    title: titleEN,
    date,
    content: `<p>This is a placeholder content for <strong>${titleEN}</strong>. Detailed information about this ${type} is coming soon.</p>`,
    featuredImage: { sourceUrl: image, altText: titleEN },
    categories: categoriesEN,
    acf: { artist: artistEN, curator: 'Curator Name' },
    gallery: [image]
  },
  th: {
    id: slug,
    slug,
    type,
    title: titleTH,
    date: dateTH,
    content: `<p>นี่คือเนื้อหาตัวยึดสำหรับ <strong>${titleTH}</strong> ข้อมูลโดยละเอียดเกี่ยวกับ${type === 'exhibition' ? 'นิทรรศการ' : type === 'activity' ? 'กิจกรรม' : 'บทความ'}นี้จะมาเร็วๆ นี้</p>`,
    featuredImage: { sourceUrl: image, altText: titleTH },
    categories: categoriesTH,
    acf: { artist: artistTH, curator: 'ภัณฑารักษ์' },
    gallery: [image]
  }
});

export const MOCK_POSTS_BILINGUAL = {
  // --- Activities ---
  
  // Screening
  // Removed: Neon Reveries

  'a-very-long-gif': createBilingualMockPost(
    'a-very-long-gif',
    'activity',
    'A Very Long Gif',
    'ภาพเคลื่อนไหวที่ยาวมาก',
    '2025',
    '2568',
    'https://images.unsplash.com/photo-1609167110008-9ded171e95b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBJTIwVmVyeSUyMExvbmclMjBHaWYlMjBFZHVhcmRvJTIwV2lsbGlhbXMlMjB2aWRlbyUyMGFydxlbnwxfHx8fDE3NjgwMzk2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Screening', 'Video Art'],
    ['การฉายภาพยนตร์', 'วิดีโออาร์ต']
  ),

  'experimental-shorts': createBilingualMockPost(
    'experimental-shorts',
    'activity',
    'Experimental Shorts',
    'หนังสั้นทดลอง',
    '22 Oct 2025',
    '22 ตุลาคม 2568',
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZpbG0lMjBwcm9qZWN0aW9ufGVufDF8fHx8MTc2ODAzOTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Screening', 'Experimental'],
    ['การฉายภาพยนตร์', 'ทดลอง']
  ),

  // Talk / Lectures
  'living-cinematheque': createBilingualMockPost(
    'living-cinematheque',
    'activity',
    'Living Cinematheque',
    'โรงภาพยนตร์แห่งชีวิต',
    '2025',
    '2568',
    'https://images.unsplash.com/photo-1572689600233-ce64e0d0d504?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTcGVuY2VyJTIwU3dlZW5leSUyMGFydGlzdCUyMHRhbGslMjBibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MDM5NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Talk / Lectures', 'Cinema', 'Archive'],
    ['การบรรยาย', 'ภาพยนตร์', 'คลังข้อมูล']
  ),
  
  'curating-futures': createBilingualMockPost(
    'curating-futures',
    'activity',
    'Curating Futures',
    'การจัดนิทรรศการแห่งอนาคต',
    '15 Nov 2025',
    '15 พฤศจิกายน 2568',
    'https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwdGFsa3xlbnwxfHx8fDE3NjgwMzk2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Talk / Lectures', 'Curatorial'],
    ['การบรรยาย', 'การภัณฑารักษ์']
  ),

  'architecture-talk': createBilingualMockPost(
    'architecture-talk',
    'activity',
    'Architecture & Memory',
    'สถาปัตยกรรมและความทรงจำ',
    '10 Dec 2025',
    '10 ธันวาคม 2568',
    'https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc2ODAzOTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Talk / Lectures', 'Architecture'],
    ['การบรรยาย', 'สถาปัตยกรรม']
  ),

  // Workshop
  'analog-photography': createBilingualMockPost(
    'analog-photography',
    'activity',
    'Analog Photography 101',
    'การถ่ายภาพฟิล์มเบื้องต้น',
    '12 Dec 2025',
    '12 ธันวาคม 2568',
    'https://images.unsplash.com/photo-1452587927703-ef609655d403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBjYW1lcmElMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjgwMzk2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Workshop', 'Photography'],
    ['เวิร์คช็อป', 'การถ่ายภาพ']
  ),

  'sound-design-workshop': createBilingualMockPost(
    'sound-design-workshop',
    'activity',
    'Soundscape Design',
    'การออกแบบทัศนียภาพเสียง',
    '05 Jan 2026',
    '05 มกราคม 2569',
    'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMG1peGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2ODAzOTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Workshop', 'Sound'],
    ['เวิร์คช็อป', 'เสียง']
  ),

  // Sound
  'liminal-signals': createBilingualMockPost(
    'liminal-signals',
    'activity',
    'Liminal Signals',
    'สัญญาณแห่งจุดเปลี่ยนผ่าน',
    '21 November 2025',
    '21 พฤศจิกายน 2568',
    'https://images.unsplash.com/photo-1747504858849-fde086e3680a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZXhwZXJpbWVudGFsJTIwY2luZW1hJTIwcGVyZm9ybWFuY2UlMjBhcnR8ZW58MXx8fHwxNzY4MDI5MDM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'Cedric Arnold & Thanapat Ogaslert',
    'เซดริค อาร์โนลด์ และ ธนภัทร โอกาสเลิศ',
    ['Sound', 'Performance', 'Experimental'],
    ['เสียง', 'การแสดง', 'ทดลอง']
  ),

  'sonic-textures': createBilingualMockPost(
    'sonic-textures',
    'activity',
    'Sonic Textures',
    'พื้นผิวเสียง',
    '14 Feb 2026',
    '14 กุมภาพันธ์ 2569',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNvdW5kJTIwd2F2ZXN8ZW58MXx8fHwxNzY4MDM5NjcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Sound', 'Installation'],
    ['เสียง', 'ศิลปะจัดวาง']
  ),

  // Performance (Other)
  'morlam-collective': createBilingualMockPost(
    'morlam-collective',
    'activity',
    'Morlam Collective',
    'คณะหมอลำ',
    '2025',
    '2568',
    'https://images.unsplash.com/photo-1677123628739-dea0cfd09fce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3JsYW0lMjBDb2xsZWN0aXZlJTIwcGVyZm9ybWFuY2UlMjBhcnQlMjB0cmFkaXRpb25hbCUyMFRoYWklMjBkYW5jZXxlbnwxfHx8fDE3NjgwMzk2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Performance', 'Music', 'Traditional'],
    ['การแสดง', 'ดนตรี', 'ประเพณี']
  ),

  'the-tuss': createBilingualMockPost(
    'the-tuss',
    'activity',
    'The Tuss',
    'เดอะ ทัส',
    '2025',
    '2568',
    'https://images.unsplash.com/photo-1746556333642-ba1bd743c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUaGUlMjBUdXNzJTIwUnlhbiUyME9nYXNsZXJ0JTIwUnVzaHVwJTIwRWRnZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc2ODAzOTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    undefined, undefined,
    ['Performance', 'Dance', 'Contemporary'],
    ['การแสดง', 'การเต้นรำ', 'ร่วมสมัย']
  ),

  // Archive Activities
  'sound-space-workshop': createBilingualMockPost(
    'sound-space-workshop',
    'activity',
    'Sound & Space Workshop',
    'เวิร์คช็ปเสียงและพื้นที่',
    '05 Mar 2025',
    '05 มีนาคม 2568',
    ASSETS.BLOG_2,
    undefined, undefined,
    ['Workshop', 'Sound', 'Interactive'],
    ['เวิร์คช็อป', 'เสียง', 'อินเทอร์แอคทีฟ']
  ),

  'annual-gala-2024': createBilingualMockPost(
    'annual-gala-2024',
    'activity',
    'Annual Gala 2024',
    'งานเลี้ยงประจำปี 2024',
    '20 Dec 2024',
    '20 ธันวาคม 2567',
    ASSETS.EVENT_HERO,
    undefined, undefined,
    ['Event', 'Fundraising', 'Gala'],
    ['งานอีเว้นท์', 'ระดมทุน', 'งานเลี้ยง']
  ),

  'traditional-dance': createBilingualMockPost(
    'traditional-dance',
    'activity',
    'Traditional Dance Performance',
    'การแสดงระบำพื้นเมือง',
    '12 Aug 2024',
    '12 สิงหาคม 2567',
    ASSETS.BLOG_5,
    undefined, undefined,
    ['Performance', 'Dance', 'Cultural'],
    ['การแสดง', 'การเต้นรำ', 'วัฒนธรรม']
  ),

  // --- Exhibitions ---
  'unwinding-architecture': {
    en: {
      id: 'exhibition-1',
      slug: 'unwinding-architecture',
      type: 'exhibition' as const,
      title: 'Unwinding Architecture the Poetics of the Snake Nicolas Amato',
      date: '10 Jan - 10 Mar 2025',
      categories: ['Exhibition', 'Installation', 'Architecture'],
      content: `
    <p>The serpent moves across time, across borders. It is a transcultural and transhistorical symbol appearing in diverse mythologies from the frozen landscapes of Russia to the arid expanses of Egypt, from the dense jungles of the Americas to the sacred temples of Thailand. Across millennia, the serpent has persisted as an emblem of ritual, an artifact of ancient epistemologies, and a bridge between the seen and the unseen.</p>
    <p>At Bangkok Kunsthalle, this presence moves across floors and across buildings.</p>
    <p>It is not imposed but revealed. The serpent stretches along the banister, winding across four flights of green terrazzo stairs. Nicolas Amato, arriving at the Kunsthalle on the first day of the Chinese New Year—the Year of the Snake—recognized it embedded within the architecture itself. His intervention does not introduce something foreign; rather, it uncovers what was already there, transforming perception through an act as subtle yet profound as polishing.</p>
    <p>The Kunsthalle's curatorial program is the architectural intervention, a practice of domesticating the building through art. Amato's work is in perfect dialogue with this dynamic—not an addition, but a revelation, an unveiling of what was always there.</p>
    <p>The act of polishing becomes the intervention itself, not an imposition but an attunement, blurring the boundaries between art and architecture. The decision to polish the terrazzo rather than mark or alter it ensures that the intervention does not announce itself as a discrete artwork but instead dissolves into the materiality of the space. The act of refinement—of rendering the surface luminous—becomes the artistic gesture itself, reinforcing the conceptual and physical integration of the work within the architecture.</p>
    <p>The snake of green polished terrazzo inhabits the in-between spaces.</p>
    <p>Like an emerald entangled in the derelict building, it stretches across floors, piercing through the building, a silent guide toward the roof. It traverses thresholds, operating both spatially and metaphorically. More than a decorative motif, it acts as a structural force, shaping the movement through the building. It is more than moving through the floors, it is about dwelling the liminal spaces.</p>
  `,
      featuredImage: {
        sourceUrl: ASSETS.BLOG_6,
        altText: 'Unwinding Architecture'
      },
      acf: { curator: 'Curator Name', artist: 'Nicolas Amato' }
    },
    th: {
      id: 'exhibition-1',
      slug: 'unwinding-architecture',
      type: 'exhibition' as const,
      title: 'คลี่คลายสถาปัตยกรรม บทกวีแห่งงู นิโกลาส อามาโต',
      date: '10 มกราคม - 10 มีนาคม 2568',
      categories: ['นิทรรศการ', 'ศิลปะจัดวาง', 'สถาปัตยกรรม'],
      content: `
    <p>งูเคลื่อนผ่านกาลเวลา ผ่านพรมแดน มันคือสัญลักษณ์ข้ามวัฒนธรรมและข้ามประวัติศาสตร์ที่ปรากฏในตำนานต่างๆ ตั้งแต่ภูมิทัศน์ที่เยือกเย็นของรัสเซียไปจนถึงพื้นที่แห้งแล้งของอียิปต์ จากป่าทึบของทวีปอเมริกาไปจนถึงวัดศักดิ์สิทธิ์ของไทย ตลอดหลายพันปี งูได้คงอยู่เป็นสัญลักษณ์ของพิธีกรรม สิ่งประดิษฐ์ของญาณวิทยาโบราณ และสะพานเชื่อมระหว่างสิ่งที่มองเห็นและสิ่งที่มองไม่เห็น</p>
    <p>ที่บางกอก คุนสท์ฮัลเล่ การปรากฏตัวนี้เคลื่อนผ่านชั้นและผ่านอาคาร</p>
    <p>มันไม่ได้ถูกกำหนดแต่ถูกเปิดเผย งูยืดตัวไปตามราวบันได พันผ่านบันไดเทอร์ราซโซสีเขียวสี่ชั้น นิโกลาส อามาโต เมื่อมาถึงคุนสท์ฮัลเล่ในวันแรกของตรุษจีน ปีมะโรง ได้รับรู้ถึงมันที่ฝังอยู่ภายในสถาปัตยกรรมเอง การแทรกแซงของเขาไม่ได้แนะนำสิ่งที่แปลกปลอม แต่ค้นพบสิ่งที่อยู่ที่นั่นอยู่แล้ว เปลี่ยนการรับรู้ผ่านการกระทำที่ละเอียดอ่อนแต่ลึกซึ้งเหมือนการขัดเงา</p>
    <p>โปรแกรมการดูแลของคุนสท์ฮัลเล่คือการแทรกแซงทางสถาปัตยกรรม การปฏิบัติในการทำให้อาคารเป็นส่วนตัวผ่านศิลปะ งานของอามาโตอยู่ในบทสนทนาที่สมบูรณ์แบบกับพลวัตนี้ ไม่ใช่การเพิ่มเติม แต่เป็นการเปิดเผย การเปิดม่านสิ่งที่อยู่ที่นั่นเสมอ</p>
    <p>การกระทำของการขัดเงากลายเป็นการแทรกแซงเอง ไม่ใช่การบังคับแต่เป็นการปรับเสียง ทำให้ขอบเขตระหว่างศิลปะและสถาปัตยกรรมเบลอ การตัดสินใจที่จะขัดเงาเทอร์ราซโซแทนที่จะทำเครื่องหมายหรือเปลี่ยนแปลงมันทำให้แน่ใจว่าการแทรกแซงไม่ประกาศตัวเองเป็นงานศิลปะที่แยกจากกัน แต่ละลายเข้าไปในคุณภาพทางวัตถุของพื้นที่ การกระทำของการปรับแต่ง ของการทำให้พื้นผิวส่องสว่าง กลายเป็นท่าทางศิลปะเอง เสริมการผสมผสานทางแนวคิดและทางกายภาพของงานภายในสถาปัตยกรรม</p>
    <p>งูเทอร์ราซโซสีเขียวขัดเงาอาศัยอยู่ในพื้นที่ระหว่าง</p>
    <p>เหมือนมรกตที่พันกันในอาคารร้าง มันยืดตัวผ่านชั้น แทงผ่านอาคาร เป็นผู้นำเงียบไปสู่หลังคา มันข้ามเกณฑ์ ทำงานทั้งในเชิงพื้นที่และเชิงเปรียบเทียบ มากกว่ามอ็ทีฟตกแต่ง มันทำหน้าที่เป็นแรงโครงสร้าง กำหนดรูปแบบการเคลื่อนไหวผ่านอาคาร มันเป็นมากกว่าการเคลื่อนผ่านชั้น มันเกี่ยวกับการอยู่อาศัยในพื้นที่ขีดจำกัด</p>
  `,
      featuredImage: {
        sourceUrl: ASSETS.BLOG_6,
        altText: 'คลี่คลายสถาปัตยกรรม'
      },
      acf: { curator: 'ภัณฑารักษ์', artist: 'นิโกลาส อามาโต' }
    }
  },

  'description-without-place': createBilingualMockPost(
    'description-without-place',
    'exhibition',
    'Description Without Place',
    'คำอธิบายโดยไม่มีสถานที่',
    '13 December 2025 - 31 May 2026',
    '13 ธันวาคม 2568 - 31 พฤษภาคม 2569',
    'https://images.unsplash.com/photo-1747100934541-22fd3a57fea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG1pbmltYWwlMjBpbnN0YWxsYXRpb24lMjBhcnQlMjBhYnN0cmFjdCUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjgwMjkwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Absalon',
    'แอบซาลอน',
    ['Exhibition', 'Abstract', 'Sculpture'],
    ['นิทรรศการ', 'นามธรรม', 'ประติมากรรม']
  ),

  'vernacular-objects': createBilingualMockPost(
    'vernacular-objects',
    'exhibition',
    'Vernacular Objects',
    'วัตถุพื้นบ้าน',
    '27 November 2025 - 15 March 2026',
    '27 พฤศจิกายน 2568 - 15 มีนาคม 2569',
    'https://images.unsplash.com/photo-1766792235402-2496867ea9e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBhYnN0cmFjdCUyMGNvbnRlbXBvcmFyeSUyMHNjdWxwdHVyZXxlbnwxfHx8fDE3NjgwMjkwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Mark Chearavanont',
    'มาร์ค เจียรวนนท์',
    ['Exhibition', 'Contemporary', 'Materiality'],
    ['นิทรรศการ', 'ร่วมสมัย', 'วัสดุ']
  ),

  'mitta-del-santi': createBilingualMockPost(
    'mitta-del-santi',
    'exhibition',
    'Mitta del Santi',
    'มิตตา เดล ซันติ',
    '26 September 2025 - 8 February 2026',
    '26 กันยายน 2568 - 8 กุมภาพันธ์ 2569',
    'https://images.unsplash.com/photo-1574240635388-2a6bdc8d3c3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGxhcmdlJTIwdGV4dGlsZSUyMGFydCUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3NjgwMjkwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Ploenchun Vinyaratn',
    'เปลื้อนชื่น วินยารัตน์',
    ['Exhibition', 'Textile', 'Installation'],
    ['นิทรรศการ', 'สิ่งทอ', 'ศิลปะจัดาง']
  ),

  'seeds': createBilingualMockPost('seeds', 'exhibition', 'Seeds', 'เมล็ดพันธุ์', '30 April – 22 June 2026', '30 เมษายน – 22 มิถุนายน 2569', 'https://images.unsplash.com/photo-1611923973164-e0e5f7f69872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxoYW5kcyUyMGhvbGRpbmclMjB3aGl0ZSUyMGNlcmFtaWMlMjBiYWxscyUyMGFydHxlbnwxfHx8fDE3NjgwMzkxODd8MA&ixlib=rb-4.1.0&q=80&w=1080', undefined, undefined, ['Exhibition', 'Ceramics', 'Nature'], ['นิทรรศการ', 'เซรามิก', 'ธรรมชาติ']),

  'we-gather': createBilingualMockPost('we-gather', 'exhibition', 'We Gather', 'เรารวมตัวกัน', '28 February – 27 April 2026', '28 กุมภาพันธ์ – 27 เมษายน 2569', 'https://images.unsplash.com/photo-1747504858849-fde086e3680a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxkYXJrJTIwY2luZW1hJTIwcm9vbSUyMHNjcmVlbmluZyUyMHZpZGVvJTIwYXJ0fGVufDF8fHx8MTc2ODAzOTE4N3ww&ixlib=rb-4.1.0&q=80&w=1080', undefined, undefined, ['Exhibition', 'Video Art', 'Community'], ['นิทรรศการ', 'วิดีโออาร์ต', 'ชุมชน']),

  'shapeshifting-spaces': createBilingualMockPost('shapeshifting-spaces', 'exhibition', 'Shapeshifting Spaces', 'พื้นที่เปลี่ยนรูป', '17 January – 27 February 2026', '17 มกราคม – 27 กุมภาพันธ์ 2569', 'https://images.unsplash.com/photo-1761655072443-9dec151c3e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxpbnRlcmFjdGl2ZSUyMGFydCUyMGluc3RhbGxhdGlvbiUyMHllbGxvdyUyMHRhYmxlJTIwaGFuZHN8ZW58MXx8fHwxNzY4MDM5MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080', undefined, undefined, ['Exhibition', 'Interactive', 'Space'], ['นิทรรศการ', 'อินเทอร์แอคทีฟ', 'พื้นที่']),

  // Archive Exhibitions
  'digital-horizons': createBilingualMockPost(
    'digital-horizons',
    'exhibition',
    'Digital Horizons',
    'ขอบฟ้าดิจิทัล',
    '15 Aug - 15 Oct 2024',
    '15 สิงหาคม - 15 ตุลาคม 2567',
    ASSETS.BLOG_4,
    undefined, undefined,
    ['Exhibition', 'New Media', 'Digital Art'],
    ['นิทรรศการ', 'นิวมีเดีย', 'ศิลปะดิจิทัล']
  ),

  // Blog posts
  'art-as-reflection': {
    en: {
      id: 'post-1',
      slug: 'art-as-reflection',
      type: 'post' as const,
      title: 'Art as a Reflection of Society',
      date: '01 December 2025',
      categories: ['Contemporary Art', 'Culture', 'Insights'],
      content: `
    <p>Art has always served as a mirror to society, reflecting its triumphs, struggles, and evolving identity. In the contemporary landscape, this relationship has become even more intricate. Artists are not merely observers but active participants in the cultural dialogue, challenging norms and envisioning new futures.</p>
    <p>The role of public institutions like the Bangkok Kunsthalle is to facilitate this conversation. By providing a space where diverse voices can be heard, we foster a community that values creativity and critical thinking. Our upcoming exhibitions aim to explore these themes deeply, inviting visitors to engage with art that speaks directly to the human condition in the 21st century.</p>
    <p>From the streets of Bangkok to the global stage, Thai artists are making waves with their unique perspectives. They blend traditional techniques with modern mediums, creating works that are both rooted in heritage and forward-looking. This synthesis of old and new is a testament to the resilience and adaptability of Thai culture.</p>
  `,
      featuredImage: {
        sourceUrl: ASSETS.BLOG_1,
        altText: 'Blog Detail Hero'
      },
      acf: {
        keyThemes: [
          { title: "Identity & Belonging", desc: "Exploring how personal and collective identities are shaped in a globalized world." },
          { title: "Urban Transformation", desc: "Documenting the changing face of our cities and the impact on local communities." },
          { title: "Digital Horizons", desc: "Investigating the intersection of technology and traditional artistic practices." }
        ]
      }
    },
    th: {
      id: 'post-1',
      slug: 'art-as-reflection',
      type: 'post' as const,
      title: 'ศิลปะเป็นภาพสะท้อนของสังคม',
      date: '01 ธันวาคม 2568',
      categories: ['ศิลปะร่วมสมัย', 'วัฒนธรรม', 'ความเข้าใจเชิงลึก'],
      content: `
    <p>ศิลปะเป็นกระจกสะท้อนสังคมมาโดยตลอด สะท้อนความสำเร็จ การต่อสู้ และอัตลักษณ์ที่พัฒนาไป ในภูมิทัศน์ร่วมสมัย ความสัมพันธ์นี้กลายเป็นเรื่องที่ซับซ้อนยิ่งขึ้น ศิลปินไม่ได้เป็นเพียงผู้สังเกตการณ์ แต่เป็นผู้มีส่วนร่วมอย่างแข็งขันในบทสนทนาทางวัฒนธรรม ท้าทายบรรทัดฐานและจินตนาการถึงอนาคตใหม่</p>
    <p>บทบาทของสถาบันสาธารณะเช่นบางกอก คุนสท์ฮัลเล่คือการอำนวยความสะดวกในการสนทนานี้ ด้วยการจัดหาพื้นที่ที่เสียงที่หลากหลายสามารถได้ยิน เราส่งเสริมชุมชนที่ให้คุณค่ากับความคิดสร้างสรรค์และการคิดเชิงวิพากษ์ นิทรรศการที่จะมาถึงของเรามีเป้าหมายที่จะสำรวจประเด็นเหล่านี้อย่างลึกซึ้ง เชิญชวนผู้เยี่ยมชมให้มีส่วนร่วมกับศิลปะที่พูดโดยตรงกับภาวะของมนุษย์ในศตวรรษที่ 21</p>
    <p>จากถนนในกรุงเทพฯ สู่เวทีระดับโลก ศิลปินไทยกำลังสร้างกระ莎ด้วยมุมมองที่เป็นเอกลักษณ์ พวกเขาผสมผสานเทคนิคดั้งเดิมกับสื่อสมัยใหม่ สร้างผลงานที่มีรากฐานมาจากมรดกแต่มองไปข้างหน้า การสังเคราะห์ระหว่างของเก่าและของใหม่นี้เป็นเครื่องพิสูจน์ถึงความยืดหยุ่นและความสามารถในการปรับตัวของวัฒนธรรมไทย</p>
  `,
      featuredImage: {
        sourceUrl: ASSETS.BLOG_1,
        altText: 'ฮีโร่รายละเอียดบล็อก'
      },
      acf: {
        keyThemes: [
          { title: "อัตลักษณ์และความเป็นเจ้าของ", desc: "สำรวจว่าอัตลักษณ์ส่วนบุคคลและส่วนรวมถูกหล่อหลอมในโลกที่โลกาภิวัตน์อย่างไร" },
          { title: "การเปลี่ยนแปลงในเมือง", desc: "บันทึกการเปลี่ยนแปลงใบหน้าของเมืองของเราและผลกระทบต่อชุมชนท้องถิ่น" },
          { title: "ขอบฟ้าดิจิทัล", desc: "ตรวจสอบจุดตัดของเทคโนโลยีและการปฏิบัติศิลปะแบบดั้งเดิม" }
        ]
      }
    }
  },

  'future-visions': createBilingualMockPost('future-visions', 'post', 'Future Visions', 'วิสัยทัศน์แห่งอนาคต', '15 January 2026', '15 มกราคม 2569', ASSETS.BLOG_1, undefined, undefined, ['Insight', 'Future', 'Technology'], ['บทความเชิงลึก', 'อนาคต', 'เทคโนโลยี']),
  'evolution-of-light': createBilingualMockPost('evolution-of-light', 'post', 'The Evolution of Light Installations', 'วิวัฒนาการของการติดตั้งแสง', '15 November 2025', '15 พฤศจิกายน 2568', ASSETS.BLOG_2, undefined, undefined, ['Review', 'Light Art', 'History'], ['รีวิว', 'ศิลปะแสง', 'ประวัติศาสตร์']),
  'digital-frontiers': createBilingualMockPost('digital-frontiers', 'post', 'Digital Frontiers in Art', 'พรมแดนดิจิทัลในศิลปะ', '20 October 2025', '20 ตุลาคม 2568', ASSETS.BLOG_3, undefined, undefined, ['News', 'Digital', 'Trends'], ['ข่าวสาร', 'ดิจิทัล', 'แนวโน้ม']),
  'sustainable-sculpture': createBilingualMockPost('sustainable-sculpture', 'post', 'Sustainable Sculpture', 'ประติมากรรมที่ยั่งยืน', '05 September 2025', '05 กันยายน 2568', ASSETS.BLOG_4, undefined, undefined, ['Insight', 'Sustainability', 'Sculpture'], ['บทความเชิงลึก', 'ความยั่งยืน', 'ประติมากรรม']),
  'shadows-and-silhouettes': createBilingualMockPost('shadows-and-silhouettes', 'post', 'Shadows and Silhouettes', 'เงาและเงาดำ', '15 December 2024', '15 ธันวาคม 2567', ASSETS.BLOG_3, undefined, undefined, ['Review', 'Photography', 'Aesthetics'], ['รีวิว', 'การถ่ายภาพ', 'สุนทรียศาสตร์']),
  'neon-cities': createBilingualMockPost('neon-cities', 'post', 'Neon Cities: Urban Aesthetics', 'เมืองนีออน: สุนทรียภาพของเมือง', '10 November 2024', '10 พฤศจิกายน 2567', ASSETS.BLOG_4, undefined, undefined, ['Insight', 'Urban', 'Culture'], ['บทความเชิงลึก', 'เมือง', 'วัฒนธรรม']),
  'abstract-expressionism': createBilingualMockPost('abstract-expressionism', 'post', 'Abstract Expressionism Today', 'ศิลปะแสดงออกแบบนามธรรมวันนี้', '22 September 2024', '22 กันยายน 2567', ASSETS.BLOG_5, undefined, undefined, ['Review', 'Painting', 'Modern'], ['รีวิว', 'จิตรกรรม', 'สมัยใหม่']),
  'minimalist-architecture': createBilingualMockPost('minimalist-architecture', 'post', 'Minimalist Architecture', 'สถาปัตยกรรมมินิมัลลิสต์', '14 August 2024', '14 สิงหาคม 2567', ASSETS.BLOG_6, undefined, undefined, ['Insight', 'Architecture', 'Design'], ['บทความเชิงลึก', 'สถาปัตยกรรม', 'การออกแบบ']),
  'sound-of-art': createBilingualMockPost('sound-of-art', 'post', 'The Sound of Art', 'เสียงของศิลปะ', '30 June 2024', '30 มิถุนายน 2567', ASSETS.BLOG_1, undefined, undefined, ['Review', 'Sound Art', 'Music'], ['รีวิว', 'ศิลปะเสียง', 'ดนตรี']),
  'traditional-dance-blog': createBilingualMockPost('traditional-dance-blog', 'post', 'Traditional Dance in Modern Times', 'การเต้นรำแบบดั้งเดิมในยุคสมัยใหม่', '05 December 2023', '05 ธันวาคม 2566', ASSETS.BLOG_5, undefined, undefined, ['Culture', 'Dance', 'Tradition'], ['วัฒนธรรม', 'การเต้นรำ', 'ประเพณี']),
  'ceramics-and-culture': createBilingualMockPost('ceramics-and-culture', 'post', 'Ceramics and Culture', 'เซรามิกและวัฒนธรรม', '12 October 2023', '12 ตุลาคม 2566', ASSETS.BLOG_2, undefined, undefined, ['Culture', 'Craft', 'Ceramics'], ['วัฒนธรรม', 'งานฝีมือ', 'เซรามิก']),
  'street-art': createBilingualMockPost('street-art', 'post', 'Street Art Revolution', 'การปฏิวัติศิลปะบนถนน', '18 August 2023', '18 สิงหาคม 2566', ASSETS.BLOG_3, undefined, undefined, ['News', 'Street Art', 'Urban'], ['ข่าวสาร', 'สตรีทอาร์ต', 'เมือง']),
  'textile-narratives': createBilingualMockPost('textile-narratives', 'post', 'Textile Narratives', 'เรื่องเล่าจากสิ่งทอ', '05 June 2023', '05 มิถุนายน 2566', ASSETS.BLOG_4, undefined, undefined, ['Insight', 'Textile', 'Storytelling'], ['บทความเชิงลึก', 'สิ่งทอ', 'การเล่าเรื่อง']),
  'performance-art-retro': createBilingualMockPost('performance-art-retro', 'post', 'Performance Art Retrospective', 'ศิลปะการแสดงย้อนหลัง', '22 April 2023', '22 เมษายน 2566', ASSETS.BLOG_6, undefined, undefined, ['Review', 'Performance', 'History'], ['รีวิว', 'การแสดง', 'ประวัติศาสตร์']),
  'industrial-spaces': createBilingualMockPost('industrial-spaces', 'post', 'Industrial Spaces Reimagined', 'พื้นที่อุตสาหกรรมที่จินตนาการใหม่', '01 December 2022', '01 ธันวาคม 2565', ASSETS.BLOG_6, undefined, undefined, ['Architecture', 'Urban', 'Design'], ['สถาปัตยกรรม', 'เมือง', 'การออกแบบ']),
  'photography-digital': createBilingualMockPost('photography-digital', 'post', 'Photography in the Digital Age', 'การถ่ายภาพในยุคดิจิทัล', '15 October 2022', '15 ตุลาคม 2565', ASSETS.BLOG_1, undefined, undefined, ['Insight', 'Photography', 'Technology'], ['บทความเชิงลึก', 'การถ่ายภาพ', 'เทคโนโลยี']),
  'installation-basics': createBilingualMockPost('installation-basics', 'post', 'Installation Art Basics', 'พื้นฐานศิลปะการติดตั้ง', '20 August 2022', '20 สิงหาคม 2565', ASSETS.BLOG_2, undefined, undefined, ['Education', 'Installation', 'Art Theory'], ['การศึกษา', 'ศิลปะจัดวาง', 'ทฤษฎีศิลปะ']),
  'color-theory': createBilingualMockPost('color-theory', 'post', 'Color Theory in Practice', 'ทฤษฎีสีในการปฏิบัติ', '10 June 2022', '10 มิถุนายน 2565', ASSETS.BLOG_3, undefined, undefined, ['Education', 'Color', 'Painting'], ['การศึกษา', 'สี', 'จิตรกรรม']),
  'contemporary-spaces': createBilingualMockPost('contemporary-spaces', 'post', 'Contemporary Art Spaces', 'พื้นที่ศิลปะร่วมสมัย', '10 March 2026', '10 มีนาคม 2569', ASSETS.BLOG_6, undefined, undefined, ['Insight', 'Contemporary', 'Space'], ['บทความเชิงลึก', 'ร่วมสมัย', 'พื้นที่']),
};

// Helper function to get post by slug and language
export function getMockPost(slug: string, language: 'en' | 'th' = 'en'): WPPost | undefined {
  const postData = MOCK_POSTS_BILINGUAL[slug as keyof typeof MOCK_POSTS_BILINGUAL];
  if (!postData) return undefined;
  return postData[language];
}

// Get all posts of a specific type in a specific language
export function getMockPostsByType(type: 'exhibition' | 'activity' | 'post', language: 'en' | 'th' = 'en'): WPPost[] {
  return Object.values(MOCK_POSTS_BILINGUAL)
    .map(postData => postData[language])
    .filter(post => post.type === type);
}

// For backward compatibility
export const MOCK_POSTS: Record<string, WPPost> = Object.keys(MOCK_POSTS_BILINGUAL).reduce((acc, key) => {
  acc[key] = MOCK_POSTS_BILINGUAL[key as keyof typeof MOCK_POSTS_BILINGUAL].en;
  return acc;
}, {} as Record<string, WPPost>);

export const MOCK_ACTIVITY = MOCK_POSTS_BILINGUAL['liminal-signals'].en;
export const MOCK_EXHIBITION = MOCK_POSTS_BILINGUAL['unwinding-architecture'].en;
export const MOCK_POST = MOCK_POSTS_BILINGUAL['art-as-reflection'].en;