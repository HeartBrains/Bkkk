import { WPPost } from './types';

// Real exhibition data from Bangkok Kunsthalle CSV
const createExhibitionData = (
  slug: string,
  titleEN: string,
  titleTH: string,
  dateEN: string,
  dateTH: string,
  year: string,
  image: string,
  artistEN: string,
  artistTH: string,
  biographyEN: string,
  biographyTH: string,
  statementEN: string,
  statementTH: string,
  credits: string
): { en: WPPost; th: WPPost } => ({
  en: {
    id: slug,
    slug,
    type: 'exhibition',
    title: titleEN,
    date: dateEN,
    content: statementEN,
    featuredImage: { sourceUrl: image, altText: titleEN },
    categories: ['Exhibition'],
    acf: { artist: artistEN, curator: 'Bangkok Kunsthalle', imageCredits: credits, biography: biographyEN },
    gallery: [image]
  },
  th: {
    id: slug,
    slug,
    type: 'exhibition',
    title: titleTH,
    date: dateTH,
    content: statementTH,
    featuredImage: { sourceUrl: image, altText: titleTH },
    categories: ['นิทรรศการ'],
    acf: { artist: artistTH, curator: 'บางกอก คุนสท์ฮัลเล่', imageCredits: credits, biography: biographyTH },
    gallery: [image]
  }
});

export const EXHIBITIONS_DATA_BILINGUAL = {
  'nine-plus-five-works': createExhibitionData(
    'nine-plus-five-works',
    'Nine Plus Five Works',
    'Nine Plus Five Works',
    '12 January - 10 March 2024',
    '12 มกราคม - 10 มีนาคม 2567',
    '2024',
    'https://images.unsplash.com/photo-1616894755054-894029ca5c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBlcmltZW50YWwlMjB2aWRlbyUyMGFydCUyMGZpbG0lMjBpbnN0YWxsYXRpb24lMjBnYWxsZXJ5fGVufDF8fHx8MTc3Mjk3MDEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'Michel Auder',
    'มิเชล โอเดอร์',
    `<p>Michel Auder (b. 1945, France) is a filmmaker who has been creating experimental movies and video art since the late 1960s. Auder is a poet of visual observation—his films bear an affinity to literary forms and can best be described as filmic poetry. He is known for his non-linear and non-narrative style, capturing his life and the lives of those around him in an intimate and fragmented manner.</p><p>Auder's work often blurs the lines between art, documentation, and personal narrative, the diaristic and oneiric. Throughout his career, he has produced a significant body of work ranging from fictional narratives to personal documentaries. Auder's early adoption of the portable video camera allowed him to document the everyday phenomena of his own private experiences, with a directness that was revolutionary at the time and that is still radical after many decades.</p>`,
    `<p>มิเชล โอเดอร์ (เกิด ค.ศ. 1945 ประเทศฝรั่งเศส) เป็นผู้สร้างภาพยนตร์ที่สร้างสรรค์ภาพยนตร์ทดลองและวิดีโออาร์ตตั้งแต่ปลายทศวรรษ 1960 โอเดอร์เป็นกวีแห่งการสังเกตด้วยภาพ ภาพยนตร์ของเขามีความใกล้เคียงกับรูปแบบวรรณกรรมและสามารถอธิบายได้ว่าเป็นบทกวีภาพยนตร์ เขาเป็นที่รู้จักจากสไตล์ที่ไม่เป็นเชิงเส้นและไม่มีการเล่าเรื่อง จับภาพชีวิตของเขาและคนรอบข้างในลักษณะที่ใกล้ชิดและแยกส่วน</p><p>ผลงานของโอเดอร์มักจะเบลอเส้นแบ่งระหว่างศิลปะ เอกสาร และเรื่องเล่าส่วนตัว ทั้งบันทึกประจำวันและความฝัน ตลอดอาชีพของเขา เขาได้สร้างผลงานจำนวนม��กตั้งแต่การเล่าเรื่องแบบสมมติไปจนถึงสารคดีส่วนตัว การใช้กล้องวิดีโอพกพาในช่วงแรกของโอเดอร์ทำให้เขาสามารถบันทึกปรากฏการณ์ในชีวิตประจำวันของประสบการณ์ส่วนตัวของเขาได้อย่างตรงไปตรงมา ซึ่งเป็นการปฏิวัติในขณะนั้นและยังคงรุนแรงหลังจากหลายทศวรรษ</p>`,
    `<p>"Nine Plus Five Works" (2024) inaugurated Bangkok Kunsthalle through two interwoven trajectories: five works engaging nature and nine tracing the evolution of Michel Auder across genres. The exhibition unfolded as both a promenade through the building and a parcours through Auder's life.</p><p>In the first group, Auder frames his relationship to nature through time. Representing natural phenomena required a specific editing technique capable of accommodating their nuanced temporality.</p><p>In "Voyage to the Centre of the Phone Lines" (52 min, 1993), he juxtaposes covert recordings of anonymous mobile phone conversations with a seascape of sand, water, sun, moon, and birds. The images evoke timeless nature, while the audio reveals mundane human drama, anxieties, and mortality.</p><p>"Domaine de la Nature" (51 min, 2023), originally conceived for Domaine des Etangs in France, collages natural scenery through long pans and slow rhythm. Dissatisfied with his archive, Auder filmed new footage over four years to properly document natural phenomena.</p><p>"I am So Jealous of Birds II" (2011) becomes a video haiku of New York birds, while "Flowers of Thailand" (2023), produced in Bangkok, is a two-screen installation evoking an epistolary exchange between form and color.</p><p>The second trajectory presents chronicles, travelogues, diaries, portraits, and poems that reveal Auder's distinctive editing, allowing multiple narratives to emerge.</p><p>"Bangkok Yaowarat" (13 min, 2024) captures Bangkok street life in Chinatown, focusing on the seamless choreography of a postal service where boxes arrive and depart in orderly flow without instruction.</p><p>Video portraits such as "Cindy Sherman" (42 min, 1988), "Florence" (59 min, 1979), and "Alice Neel Painting Margaret" (41 min, 1978/2009) offer poetic documentations of artists at work.</p><p>Other works adopt intimate or musical forms: "Heads of Town" (3 min, 2009), "Van Gogh" (2023), "Gemälde" (2011/2019), and "Bangkok City" (2023).</p><p>Finally, "DAUGHTERS" (2023) combines "Talking Head" (1976) with a recent inversion of foreground and background, layered with words by Natalie Brück, creating a simultaneously menacing and seductive sonic presence.</p>`,
    `<p>"Nine Plus Five Works" (2024) เปิดตัวบางกอก คุนสท์ฮัลเล่ผ่านสองเส้นทางที่พันกัน: ผลงานห้าชิ้นที่เกี่ยวข้องกับธรรมชาติและเก้าชิ้นที่สืบย้อนวิวัฒนาการของมิเชล โอเดอร์ข้ามแนว นิทรรศการคลี่คลายเป็นทั้งการเดินเล่นผ่านอาคารและเส้นทางผ่านชีวิตของโอเดอร์</p><p>ในกลุ่มแรก โอเดอร์กำหนดกรอบความสัมพันธ์ของเขากับธรรมชาติผ่านเวลา การแสดงปรากฏการณ์ธรรมชาติต้องการเทคนิคการตัดต่อเฉพาะที่สามารถรองรับความละเอียดอ่อนของกาลเวลา</p>`,
    'Michel Auder, Nine Plus Five Works, 2024. Installation view, Bangkok Kunsthalle. Courtesy of the artist and Bangkok Kunsthalle. Photo by Preecha Pattara / Samatcha Apaisuwan.'
  ),

  'nostalgia-for-unity': createExhibitionData(
    'nostalgia-for-unity',
    'nostalgia for unity',
    'nostalgia for unity',
    '31 May - 31 October 2024',
    '31 พฤษภาคม - 31 ตุลาคม 2567',
    '2024',
    'https://images.unsplash.com/photo-1755407520475-6bf00b0f3de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2glMjBmbG9vciUyMG1pbmltYWwlMjBpbnN0YWxsYXRpb24lMjBkYXJrJTIwYXRtb3NwaGVyaWN8ZW58MXx8fHwxNzcyOTcwMTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'Korakrit Arunanondchai',
    'กรกฤช อรุณานนท์ชัย',
    `<p>Korakrit Arunanondchai (b. 1986, Thailand) is a visual artist and filmmaker currently based in New York and Bangkok. His recent solo exhibitions include those at Moderna Museet in Stockholm, Art Sonje Center in Seoul, and Singapore Art Museum in Singapore (2022), Migros Museum für Gegenwartskunst in Switzerland (2021), Serralves Museum in Porto (2020), and Vienna Secession (2019).</p><p>Arunanondchai's work has been presented at numerous biennials and festivals, with recent presentations at the Thailand Biennale, Chiang Rai (2023), Kathmandu Triennale (2022), Gwangju Biennial (2021), Yokohama Triennial (2020), the Venice Biennale, and the Whitney Biennial (2019). In early 2018, Arunanondchai co-founded "Ghost", a time-based media festival that happens every three years in Bangkok. He curated its inaugural series, "Ghost:2561" (2018), and organized the second edition, "Ghost:2565" (2022), and the third, "Ghost:2568" (2025).</p>`,
    `<p>กรกฤช อรุณานนท์ชัย (เกิด พ.ศ. 2529 ประเทศไทย) เป็นศิลปินภาพและผู้สร้างภาพยนตร์ที่อาศัยอยู่ในนิวยอร์กและกรุงเทพฯ ในปัจจุบัน นิทรรศการเดี่ยวล่าสุดของเขา ได้แก่ที่ Moderna Museet ในสตอกโฮล์ม Art Sonje Center ในโซล และพิพิธภัณฑ์ศิลปะสิงคโปร์ในสิงคโปร์ (2022), Migros Museum für Gegenwartskunst ในสวิตเซอร์แลนด์ (2021), พิพิธภัณฑ์ Serralves ในปอร์โต (2020) และ Vienna Secession (2019)</p>`,
    `<p>In "nostalgia for unity" (2024), a site-specific commission for the vast hall of Bangkok Kunsthalle, Korakrit Arunanondchai departs from visual accumulation in favor of a radically stripped-down expression. The exhibition unfolds as a minimalist gesture in which dreams and memories share a ritual structure within cyclical temporality.</p><p>For this work, he rebuilds the entire floor using ashes and burned residues of books salvaged from the fire that partially destroyed the former Thai Watana Panich publishing house in the early 2000s. The installation distills his spiritual inquiry to an elemental state: a continuous surface of compacted ashes functioning as ground and as a mode of inhabiting space, at once temple and liturgy. What remains is not an image to contemplate but a space to traverse. The sculptural floor becomes a metaphor for renewal, rising from remnants like a phoenix.</p>`,
    `<p>ใน "nostalgia for unity" (2024) โครงการเฉพาะพื้นที่สำหรับโถงใหญ่ของบางกอก คุนสท์ฮัลเล่ กรกฤช อรุณานนท์ชัยออกจากการสะสมภาพเพื่อแสดงออกที่ถูกปอกเปลือกอย่างรุนแรง นิทรรศการคลี่คลายเป็นท่าทางมินิมัลลิสต์ที่ความฝันและความทรงจำแบ่งปันโครงสร้างพิธีกรรมภายในกาลเวลาที่เป็นวงจร</p>`,
    'Korakrit Arunanondchai, nostalgia for unity, 2024. Installation view, Bangkok Kunsthalle. Courtesy of the artist and Bangkok Kunsthalle. Photo by Samatcha Apaisuwan / Artit Punyanutaruk.'
  ),

  'mend-piece': createExhibitionData(
    'mend-piece',
    'MEND PIECE',
    'MEND PIECE',
    '30 August - 22 December 2024',
    '30 สิงหาคม - 22 ธันวาคม 2567',
    '2024',
    'https://images.unsplash.com/photo-1637548580984-10c48d61b168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0aWNpcGF0b3J5JTIwYXJ0JTIwY2VyYW1pYyUyMGJyb2tlbiUyMG1lbmRpbmd8ZW58MXx8fHwxNzcyOTcwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'Yoko Ono',
    'โยโกะ โอโนะ',
    `<p>Since emerging onto the international art scene in the early 1960s, Yoko Ono (b. 1933, Japan) has made profound contributions to visual art, performance, filmmaking, and experimental music. Born in Tokyo in 1933, she moved with her family to New York in the mid-1950s and enrolled at Sarah Lawrence College. Over the next decade she lived in New York, Tokyo, and London, greatly influencing the international development of Fluxus and Conceptual art.</p><p>Ono's earliest works were often based on instructions that she communicated to the public in verbal or written form. "Painting to Be Stepped On" (1960 - 1961), for example, invited people to tread upon a piece of canvas placed directly on the floor, either physically or in their minds. Though easily overlooked, the work radically questioned the division between art and the everyday. In 1964, she compiled more than 150 of her instructions in her groundbreaking artist's book, "Grapefruit".</p>`,
    `<p>ตั้งแต่ปรากฏตัวบนเวทีศิลปะระดับนานาชาติในช่วงต้นทศวรรษ 1960 โยโกะ โอโนะ (เกิด ค.ศ. 1933 ประเทศญี่ปุ่น) ได้มีส่วนสนับสนุนอย่างลึกซึ้งต่อศิลปะภาพ การแสดง การสร้างภาพยนตร์ และดนตรีทดลอง เกิดในโตเกียวในปี ค.ศ. 1933 เธอย้ายไปนิวยอร์กกับครอบครัวในช่วงกลางทศวรรษ 1950 และลงทะเบียนเรียนที่ Sarah Lawrence College</p>`,
    `<p>The 1960s was a time of social change as well as the breaking of artistic conventions. From this wealth of intellectual and radical thought, Yoko Ono formed her early artistic practice. Conceived in 1966, "MEND PIECE" emerged as an early exploration of participatory art, challenging the very definition of what art can be.</p><p>In this work, Ono invites participants to take a seat and mend the ceramic shards using the materials provided. Fundamental to the work is the notion of healing through communal mending—a practice in collective meditation and mindfulness. The participants become an agent in the creation of art, but more than that, of healing. The mending of ceramic then becomes an analogue for the mending of all things, whether tangible or intangible, personal or universal.</p>`,
    `<p>ทศวรรษ 1960 เป็นช่วงเวลาของการเปลี่ยนแปลงทางสังคมเช่นเดียวกับการทำลายธรรมเนียมทางศิลปะ จากความมั่งคั่งของความคิดทางปัญญาและความคิดที่รุนแรง โยโกะ โอโนะได้ก่อตั้งการปฏิบัติทางศิลปะในช่วงแรกของเธอ ถูกคิดค้นในปี ค.ศ. 1966 "MEND PIECE" ปรากฏเป็นการสำรวจศิลปะแบบมีส่วนร่วมในช่วงแรก ท้าทายคำนิยามของศิลปะ</p>`,
    'Yoko Ono, MEND PIECE, A4 Arts Foundation, Cape Town version, 1966/2018. Installation view, Bangkok Kunsthalle. Courtesy of the artist and Bangkok Kunsthalle. Photo by Andrea Rossetti / Wison Tungthunya.'
  ),

  'like-nouns-slipping-into-verbs': createExhibitionData(
    'like-nouns-slipping-into-verbs',
    'Like Nouns Slipping Into Verbs',
    'Like Nouns Slipping Into Verbs',
    '10 January - 30 March 2025',
    '10 มกราคม - 30 มีนาคม 2568',
    '2025',
    'https://images.unsplash.com/photo-1648937743266-0dbb5380c49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3RlZWwlMjBzY3VscHR1cmUlMjBnYWxsZXJ5JTIwc3BhY2V8ZW58MXx8fHwxNzcyOTcwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'Richard Nonas',
    'ริชาร์ด โนนัส',
    `<p>Richard Nonas (1936–2021, USA) was born in New York and studied literature before turning to social anthropology. He spent a decade conducting fieldwork among American intelligence Indians, an experience that profoundly shaped his later sculptural practice and his understanding of spatial perception. In the mid-1960s, at age 30, he shifted to sculpture, developing a Minimalist vocabulary centered on the idea of place.</p><p>During the 1970s, Nonas was part of a group of artists and curators seeking alternative exhibition spaces. His works, using timbers, beams, granite curbstones, and steel planes, often rest directly on the ground. Less formal objects than spatial markers, they interrupt and activate space, revealing the interdependence of sculpture and site while generating philosophical and emotional resonance.</p>`,
    `<p>ริชาร์ด โนนัส (1936–2021 สหรัฐอเมริกา) เกิดในนิวยอร์กและศึกษาวรรณกรรมก่อนที่จะหันมาทำมานุษยวิทยาสังคม เขาใช้เวลาสิบปีทำการภาคสนามในหมู่ชาวอินเดียนอเมริกัน ประสบการณ์นี้หล่อหลอมการปฏิบัติประติมากรรมในภายหลังของเขาและความเข้าใจของเขาเกี่ยวกับการรับรู้เชิงพื้นที่อย่างลึกซึ้ง</p>`,
    `<p>During his decade-long career as an anthropologist, Richard Nonas conducted fieldwork among several Native American tribes, including the Tohono Oʼodham of Mexico. From them, he encountered a cultural framework for understanding space through "markers," objects whose meanings shift according to physical context and the individual engaging with them.</p><p>Nonas often invoked the analogy of a cactus in the desert. For one person, it might hold a private memory; for another, it serves as a landmark or navigational device; for others, it carries a folktale and becomes part of collective memory. The potency of his sculptures lies in this ambiguity and rejection of fixed semantics. Their meanings remain malleable, in flux.</p>`,
    `<p>ในช่วงอาชีพสิบปีของเขาในฐานะนักมานุษยวิทยา ริชาร์ด โนนัสทำการภาคสนามในหมู่ชนเผ่าพื้นเมืองอเมริกันหลายเผ่า รวมถึง Tohono Oʼodham ของเม็กซิโก จากพวกเขา เขาพบกรอบทางวัฒนธรรมสำหรับการทำความเข้าใจพื้นที่ผ่าน "เครื่องหมาย" วัตถุที่ความหมายเปลี่ยนไปตามบริบททางกายภาพและบุคคลที่เกี่ยวข้องกับพวกเขา</p>`,
    'Richard Nonas, Like Nouns Slipping Into Verbs, 2025. Installation view, Bangkok Kunsthalle. Courtesy of The Richard Nonas Estate and Bangkok Kunsthalle. Photo by Puttisin Choojesroom / Krittawat Atthsis.'
  ),

  'calligraphic-abstraction': createExhibitionData(
    'calligraphic-abstraction',
    'Calligraphic Abstraction',
    'Calligraphic Abstraction',
    '1 February - 13 July 2025',
    '1 กุมภาพันธ์ - 13 กรกฎาคม 2568',
    '2025',
    'https://images.unsplash.com/photo-1720702214757-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY2FsbGlncmFwaHklMjBhYnN0cmFjdCUyMGluayUyMHBhaW50aW5nfGVufDF8fHx8MTc3Mjk3MDEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    'Tang Chang',
    'ถัง ช้าง',
    `<p>Tang Chang (1934 - 1990, Thailand) was a Bangkok-born, Sino-Thai artist, painter, philosopher, poet, and scholar. Born into a modest Chinese merchant family, he was educated at a temple school until the outbreak of the Second World War ended his formal education. He began drawing and painting soon after. Although his early work was realist in nature, Chang later turned toward abstraction, initially encountering Western modernism.</p><p>Chang's mature artistic direction was shaped less by Western models than by his deep engagement with Theravada Buddhism and Chinese philosophies, particularly Daoism and Chan Buddhism. These traditions informed an artistic practice in which spiritual inquiry and visual form were inseparable.</p>`,
    `<p>ถัง ช้าง (1934 - 1990 ประเทศไทย) เป็นศิลปิน จิตรกร นักปรัชญา กวี และนักวิชาการชาวไทยเชื้อสายจีนที่เกิดที่กรุงเทพฯ เกิดในครอบครัวพ่อค้าจีนที่เรียบง่าย เขาได้รับการศึกษาที่โรงเรียนวัดจนกระทั่งสงครามโลกครั้งที่สองทำให้การศึกษาอย่างเป็นทางการของเขาสิ้นสุดลง เขาเริ่มวาดภาพและจิตรกรรมหลังจากนั้นไม่นาน</p>`,
    `<p>Tang Chang was a Bangkok born, Sino-Thai artist, painter, philosopher, poet and scholar. His life-long engagement with Chinese philosophies and spirituality informed his art to the point where there was no distinction between his spiritual and artistic practice. "Calligraphic Abstraction" (2025) presented at Bangkok Kunsthalle provides a typological excerpt of Chang's oeuvre, focusing on the ambiguity of calligraphy and abstraction.</p><p>The selected works on the ground floor were made in the span of two years, from 1971 to 1972, an incredibly prolific moment in Chang's career. Within this calligraphic mode, the exhibition presents two further typologies: the character refers to a singular unit, bordering on recognizability as a Chinese character, and the poem employs the aesthetic syntax of Chinese poetry as an artistic unit.</p>`,
    `<p>ถัง ช้างเป็นศิลปิน จิตรกร นักปรัชญา กวี และนักวิชาการชาวไทยเชื้อสายจีนที่เกิดที่กรุงเทพฯ การมีส่วนร่วมตลอดชีวิตของเขากับปรัชญาจีนและจิตวิญญาณแจ้งศิลปะของเขาถึงจุดที่ไม่มีความแตกต่างระหว่างการปฏิบัติทางจิตวิญญาณและทางศิลปะของเขา "Calligraphic Abstraction" (2025) ที่นำเสนอที่บางกอก คุนสท์ฮัลเล่ให้ข้อความตัดตอนแบบทางประเภทของผลงานของช้าง มุ่งเน้นไปที่ความคลุมเครือของการประดิษฐ์ตัวอักษรและนามธรรม</p>`,
    'Tang Chang, Calligraphic Abstraction, 2025. Installation view, Bangkok Kunsthalle. Courtesy of The Tang Chang Private Museum and Bangkok Kunsthalle. Photo by Puttisin Choojesroom.'
  ),

  'painting-as-event': createExhibitionData(
    'painting-as-event',
    'Painting as Event',
    'Painting as Event',
    '30 March - 4 May 2025',
    '30 มีนาคม - 4 พฤษภาคม 2568',
    '2025',
    'https://images.unsplash.com/photo-1694972945233-202eb17b95aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXJyYWNvdHRhJTIwY2VyYW1pYyUyMHBhaW50aW5nJTIwZWFydGglMjBwaWdtZW50fGVufDF8fHx8MTc3Mjk3MDEzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    'Xie Fan',
    'เซี่ย ฟาน',
    `<p>Xie Fan (b. 1983, China)'s work is rooted in the exploration of permeation, the way color seeps into and bonds with its ground. His early silk paintings investigated translucency and absorption, while his more recent engagement with terracotta highlights the porous, earthen qualities of the material. By layering mineral pigments and oxides onto raw clay before firing, he allows high kiln temperatures to trigger unpredictable chemical reactions, embedding a sense of chance and transformation into each piece. This process recalls both the alchemical nature of ceramics and the historical intersections between painting and sculpture.</p><p>Through these material investigations, Xie Fan challenges conventional notions of painting, expanding its boundaries beyond the canvas into the realms of objecthood and spatial experience. His works respond to shifts in light, atmosphere, and touch, emphasizing their impermanence and connection to the natural world. By bridging tradition and experimentation, Xie creates a practice that is at once deeply rooted in history and radically open to the contingencies of the present.</p>`,
    `<p>เซี่ย ฟาน (เกิด ค.ศ. 1983 ประเทศจีน) ผลงานของเขามีรากฐานในการสำรวจการซึมผ่าน วิธีที่สีซึมเข้าและผูกพันกับพื้นของมัน ภาพวาดผ้าไหมในช่วงแรกของเขาตรวจสอบความโปร่งใสและการดูดซึม ในขณะที่การมีส่วนร่วมล่าสุดของเขากับเทอร์ราคอตต้าเน้นคุณภาพที่มีรูพรุนและดินของวัสดุ</p>`,
    `<p>"Painting as Event" (2025) merges Xie Fan's painting practice with performative and communal elements, foregrounding its live dimension. During the day, limited servings of his signature mapo tofu are sold; each evening, he prepares and serves a full-course meal using ceramic vessels he has crafted. The exhibition situates his work within discourses of materiality, ritual, and impermanence.</p><p>At its core are thirty paintings on terracotta and six large sponge paintings installed across the stairwell and second floor of Bangkok Kunsthalle. Xie Fan's engagement with terracotta, historically linked to functional craft and sacred traditions, reflects his interest in surface and light.</p>`,
    `<p>"Painting as Event" (2025) ผสานการปฏิบัติการวาดภาพของเซี่ย ฟานกับองค์ประกอบการแสดงและชุมชน เน้นมิติที่มีชีวิตของมัน ในระหว่างวัน เสิร์ฟเต้าหู้มาโปะประจำของเขาจำนวนจำกัด ทุกเย็น เขาเตรียมและเสิร์ฟอาหารมื้อเต็มโดยใช้ภาชนะเซรามิกที่เขาได้สร้างขึ้น</p>`,
    'Xie Fan, Painting as Event, 2025. Installation view, Bangkok Kunsthalle. Courtesy of the artist, Marguo, and Bangkok Kunsthalle. Photo by Panusorn Lertvananont / Puttisin Choojesroom.'
  ),

  'poetics-of-horizontality': createExhibitionData(
    'poetics-of-horizontality',
    'Poetics of Horizontality',
    'Poetics of Horizontality',
    '9 May - 22 August 2025',
    '9 พฤษภาคม - 22 สิงหาคม 2568',
    '2025',
    'https://images.unsplash.com/photo-1713388911614-93a9b9ce3e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGdyaWQlMjBmbG9vciUyMGluc3RhbGxhdGlvbiUyMGZyYWdtZW50c3xlbnwxfHx8fDE3NzI5NzAxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'Nalattaphorn Nanta & Siriwan Simingam',
    'นลัทธพร นันทะ และ สิริวรรณ สิมิงาม',
    `<p>Nalattaphorn Nanta (b. 2000, Thailand) explores the perspectives and emotional states experienced at different stages of life. Her practice examines how behavior and thought are shaped by family as the smallest yet most formative social unit. Through an evolving understanding of human emotion, she reflects on its causes and possible resolutions, seeking deeper insight into life. Her work often centers on the interplay of happiness and suffering, interpreting life's complexities while offering an uplifting and encouraging presence to viewers.</p><p>Siriwan Simingam (b. 1998, Thailand) investigates the roles, mindsets, and complex relationships of women in contemporary society. She critiques the cultural expectations and pressures that persist despite increased intellectual freedom and self-determination. Initially combining sculptural and painterly techniques with doodle-like linework, her practice has developed into a distinctive Pop-Surrealist style, creating narrative characters that embody her reflections on female experience and social dynamics.</p>`,
    `<p>นลัทธพร นันทะ (เกิด พ.ศ. 2543 ประเทศไทย) สำรวจมุมมองและสถานะทางอารมณ์ที่ประสบในช่วงชีวิตที่แตกต่างกัน การปฏิบัติของเธอตรวจสอบว่าพฤติกรรมและความคิดถูกหล่อหลอมโดยครอบครัวเป็นหน่วยสังคมที่เล็กที่สุดแต่เป็นการก่อตัวมากที่สุด</p>`,
    `<p>The exhibition "Poetics of Horizontality" (2025) by Nalattaphorn Nanta and Siriwan Simingam presents delicate stone grids across the third floor of Bangkok Kunsthalle. The work engages the building's material memory, visibly marked by past fires. Through subtle spatial inscription, the artists map and interpret this altered architectural environment.</p><p>Fragments of cement and debris detached from ceilings and walls are retrieved from the site and repositioned along faint scorched shadows left by boxes that once occupied the floor. The configuration follows a loose yet resonant order, evoking the grid not as control but as a poetic framework for remembrance.</p>`,
    `<p>นิทรรศการ "Poetics of Horizontality" (2025) โดยนลัทธพร นันทะและสิริวรรณ สิมิงามนำเสนอตารางหินที่ละเอียดอ่อนทั่วชั้นสามของบางกอก คุนสท์ฮัลเล่ ผลงานมีส่วนร่วมกับความทรงจำของวัสดุของอาคาร ซึ่งถูกทำเครื่องหมายอย่างชัดเจนโดยไฟในอดีต</p>`,
    'Nalattaphorn Nanta and Siriwan Simingam, Poetics of Horizontality, 2025. Installation view, Bangkok Kunsthalle. Courtesy of the artists and Bangkok Kunsthalle. Photo by Puttisin Choojesroom / Krittapas Lersvananont.'
  ),

  'this-page-is-intentionally-left-blank': createExhibitionData(
    'this-page-is-intentionally-left-blank',
    'This page is intentionally left _____.',
    'This page is intentionally left _____.',
    '13 June - 17 August 2025',
    '13 มิถุนายน - 17 สิงหาคม 2568',
    '2025',
    'https://images.unsplash.com/photo-1733502038278-1f141f72d9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcHJpbnRpbmclMjBwcmVzcyUyMGJvb2tzJTIwcGFwZXJ8ZW58MXx8fHwxNzcyOTcwMTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'Yoonglai Collective',
    'ยูงลาย คอลเลคทีฟ',
    `<p>Yoonglai Collective (Thailand) brings together four Southeast Asian cultural practitioners—Nisa Jewcharoen, Rinrada Na Chiangmai, Awika Samukrsaman, and Parichat Tanapiwattanakul—on a shared journey to reflect on their cultural heritage and moments of departure from it. Rooted in a deep engagement with Southeast Asian narratives and shared origins, the collective explores the intersections of memory, identity, and regional belonging.</p><p>Named after a species native to Southeast Asia, Yoonglai symbolizes the collective's mission: to pierce through the layered histories and cultural textures of the region, extract overlooked reflections and embedded ideas, and disseminate them to foster dialogue and discovery. Through this process, the collective seeks to reimagine a future shaped by individual agency and collective consciousness within a global context.</p>`,
    `<p>ยูงลาย คอลเลคทีฟ (ประเทศไทย) รวมตัวผู้ปฏิบัติทางวัฒนธรรมเอเชียตะวันออกเฉียงใต้สี่คน ได้แก่ นิสา จิวเจริญ รินรดา ณ เชียงใหม่ อาวิกา สมุคราสมานต์ และปาริชาต ธนภิวัฒนากุล ในการเดินทางร่วมกันเพื่อสะท้อนมรดกทางวัฒนธรรมและช่วงเวลาของการออกจากมัน</p>`,
    `<p>Yoonglai Collective was selected through Open Call "Cultivating The Art of Working with Space" to create a site-specific exhibition in the former Thai Watana Panich publishing house. Once central to Thailand's knowledge production, this space printed textbooks, dictionaries, and official documents that shaped generations. Today, its burnt walls and quiet emptiness offer an invitation to reconsider the politics of publishing, authorship, and the making of centralized state knowledge.</p><p>As they explored the site's history, they created a timeline that unearthed connections between publishing, language, and power in Thailand and Indonesia. While the contexts differ, the trajectory was shared: dictionaries as tools of a nation's modernity, Cold War-era language control, and eventually, the internet's transformation of language from the top-down to the bottom-up.</p>`,
    `<p>ยูงลาย คอลเลคทีฟได้รับเลือกผ่านการเปิดรับสมัคร "Cultivating The Art of Working with Space" เพื่อสร้างนิทรรศการเฉพาะพื้นที่ในอดีตโรงพิมพ์ไทยวัฒนาพานิช เมื่อครั้งเป็นศูนย์กลางของการผลิตความรู้ของไทย พื้นที่นี้พิมพ์หนังสือเรียน พจนานุกรม และเอกสารราชการที่หล่อหลอมรุ่นต่อรุ่น</p>`,
    'Yoonglai Collective, This page is intentionally left _____, 2025. Installation view, Bangkok Kunsthalle. Courtesy of the curators, artists, and Bangkok Kunsthalle. Photo by Puttisin Choojesroom / Samatcha Apaisuwan.'
  ),

  'mitta-del-santi': createExhibitionData(
    'mitta-del-santi',
    'Mitta del Santi',
    'Mitta del Santi',
    '26 September 2025 - 8 February 2026',
    '26 กันยา��น 2568 - 8 กุมภาพันธ์ 2569',
    '2025-2026',
    'https://images.unsplash.com/photo-1569909115134-a0426936c879?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHRleHRpbGUlMjB3ZWF2aW5nJTIwZmliZXIlMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcyOTcwMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'Ploenchan Vinyaratn',
    'เปลื้อนชื่น วินยารัตน์',
    `<p>Ploenchan Vinyaratn (b. 1972, Thailand) is acclaimed for transforming fiber into a medium of environmental urgency. Long before sustainability became a global imperative, she pioneered a zero-waste practice, turning discarded materials—aluminium ribbons, plastics, fishing nets, cassette tapes—into large-scale installations that interrogate ecological fragility and humanity's troubled relationship with nature. Celebrated for her dual role as artist and environmental advocate, she received the Angela Award for Lifetime Achievement in 2024. Her works appear in major collections across Thailand and have been exhibited internationally, including Singapore, Korea, Greece, and the United States.</p>`,
    `<p>เปลื้อนชื่น วินยารัตน์ (เกิด พ.ศ. 2515 ประเทศไทย) ได้รับการยกย่องในการเปลี่ยนเส้นใยเป็นสื่อของความเร่งด่วนด้านสิ่งแวดล้อม นานก่อนที่ความยั่งยืนจะกลายเป็นความจำเป็นระดับโลก เธอเป็นผู้บุกเบิกการปฏิบัติที่ไม่มีของเสีย เปลี่ยนวัสดุที่ถูกทิ้ง ได้แก่ ริบบิ้นอลูมิเนียม พลาสติก แหข้าวปลา เทปคาสเซ็ท เป็นการติดตั้งขนาดใหญ่ที่สอบสวนความเปราะบางทางนิเวศวิทยาและความสัมพันธ์ที่มีปัญหาของมนุษย์กับธรรมชาติ</p>`,
    `<p>"Mitta del Santi" (2025), a site-specific textile installation by Ploenchan Vinyaratn, responds to the history of Bangkok Kunsthalle, formerly the Thai Watana Panich publishing house. Fabric remnants are cut into circular forms echoing the printing house's logo of three interlocking circles. A total of 399 circles are imprinted with words drawn from children's educational books once produced there. Reassembled, these textual fragments are rewoven into a new narrative, transforming the memory of the site into a living story.</p><p>Here, weaving becomes a method of world-making: threads, people, and histories interlaced into forms larger than themselves. The exhibition aligns with the Kunsthalle and Khao Yai Art Forest's ethos of site-specificity, ecological awareness, and community participation.</p>`,
    `<p>"Mitta del Santi" (2025) การติดตั้งสิ่งทอเฉพาะพื้นที่โดยเปลื้อนชื่น วินยารัตน์ ตอบสนองต่อประวัติศาสตร์ของบางกอก คุนสท์ฮัลเล่ ซึ่งเดิมเป็นโรงพิมพ์ไทยวัฒนาพานิช เศษผ้าถูกตัดเป็นรูปทรงกลมสะท้อนโลโก้ของโรงพิมพ์ซึ่งเป็นวงกลมสามวงที่เชื่อมต่อกัน</p>`,
    'Ploenchan Vinyaratn, Mitta del Santi, 2025-2026. Installation view, Bangkok Kunsthalle. Courtesy of the artist and Bangkok Kunsthalle.'
  ),

  'forever-love-soul-engine': createExhibitionData(
    'forever-love-soul-engine',
    'FOREVER LOVE SOUL ENGINE',
    'FOREVER LOVE SOUL ENGINE',
    '6 February - 15 March 2026',
    '6 กุมภาพันธ์ - 15 มีนาคม 2569',
    '2026',
    'https://images.unsplash.com/photo-1714434087915-27cfbdd3b048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjBjYXIlMjB0ZWNobm8lMjBhcnQlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzcyOTc3Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Pansan Klongdee',
    'พันธุ์สรร คล้องดี',
    `<p>Pansan Klongdee (b.1995, Thailand), also known as 1000100000, active since 2018, is a photographer, musician, producer, and songwriter. He fronted DOGWHINE, a pop-jazz-punk band that won NME Asia's Best Album in both 2022 and 2024. Now a presence you don't hear but feel on your skin. A signal drifting through space, finding shape in distortion, silence, and sudden clarity. Their sound feels intimate yet alien, like memories from a parallel life. Last time they played, the time stopped running. He's back with a new audio light performance. Expect fragile textures, pulsing noise and emotion encoded in binary.</p>`,
    `<p>พันธุ์สรร คล้องดี (เกิด พ.ศ. 2538 ประเทศไทย) หรือที่รู้จักในนาม 1000100000 ทำงานอย่างต่อเนื่องตั้งแต่ปี 2018 เป็นช่างภาพ นักดนตรี โปรดิวเซอร์ และนักแต่งเพลง เขาเป็นหน้าวง DOGWHINE วงป๊อป-แจ๊ส-พังค์ที่ชนะรางวัลอัลบั้มยอดเยี่ยมของ NME Asia ในปี 2022 และ 2024</p>`,
    `<p>"FOREVER LOVE SOUL ENGINE" (2026) is an installation by Pansan Klongdee, activated through sound and performance. It begins with a BMW E34 recovered from a junkyard in the Rama II area. Suspended in purgatory, the car is intact yet destined for dismantling. It exists in two states at once, no longer fully a vehicle, not yet scrap. This in-betweenness grounds the work's inquiry into the afterlife of non-human entities and the rituals through which they are acknowledged or released.</p><p>The installation unfolds as a techno-animistic ritual, a funeral for a machine in transition. The car becomes an analogue for the human body, retaining traces of use and memory. Verses engraved into its surface recount its history like an obituary. Like tattoos or scars, the inscriptions communicate identity and lived experience, bordering on incantation. Over the exhibition, the car is dismantled piece by piece, a process echoing bodily decay.</p><p>The work engages the site inversely. The space, once a garage for repairing delivery trucks, is redefined as a site of degeneration rather than rehabilitation. No longer a place of repair, it becomes a concrete coffin that challenges anthropocentric views of death and afterlife. What rituals are possible within a technological present?</p>`,
    `<p>"FOREVER LOVE SOUL ENGINE" (2026) เป็นการติดตั้งโดยพันธุ์สรร คล้องดี ซึ่งถูกกระตุ้นผ่านเสียงและการแสดง มันเริ่มต้นด้วยรถ BMW E34 ที่กู้คืนจากลานรถเก่าในพื้นที่พระราม 2 ถูกแขวนลอยในช่วงขัดสน รถยังคงสมบูรณ์แต่ถูกกำหนดให้ถูกรื้อถอน มันดำรงอยู่ในสองสถานะพร้อมกัน ไม่ใช่ยานพาหนะอีกต่อไป แต่ยังไม่ใช่เศษเหล็ก</p>`,
    'Pansan Klongdee, FOREVER LOVE SOUL ENGINE, 2026. Installation view, Bangkok Kunsthalle. Courtesy of the artist and Bangkok Kunsthalle. Photo by Samatcha Apaisuwan / Napat Roongrawewan.'
  ),

  'blind-spots-panels-paravents-and-screens': createExhibitionData(
    'blind-spots-panels-paravents-and-screens',
    'Blind Spots: Panels, Paravents and Screens',
    'Blind Spots: Panels, Paravents and Screens',
    '20 February - 31 May 2026',
    '20 กุมภาพันธ์ - 31 พฤษภาคม 2569',
    '2026',
    'https://images.unsplash.com/photo-1722436270747-db075fc6d4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2xkaW5nJTIwc2NyZWVuJTIwcGFyYXZlbnQlMjBwYWludGluZyUyMGV4aGliaXRpb258ZW58MXx8fHwxNzcyOTc3Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'Apichaya Wannakit',
    'อภิชญา วรรณกิจ',
    `<p>Apichaya Wannakit (b.2000, Thailand) graduated from the Faculty of Painting, Sculpture and Graphic Arts, Silpakorn University. Her paintings employ a range of techniques in color and texture to explore the relationship between her identity and her surroundings. These surroundings extend beyond physical objects or people to encompass cultural forms and social reflections that question and shape her sense of self as expressed through her art.</p><p>Wannakit seeks to convey the process of self-construction through the language of painting. She perceives all things as interconnected, transcending time and space. Even imaginary imagery emerges from fragments of diverse realities. Her methodology brings together experiences, memories, truths, and narratives, weaving them into a cohesive visual language. The forms in her work invite viewers to reflect on objects and events—past, present, and future—through the lens of life's interconnected experiences.</p>`,
    `<p>อภิชญา วรรณกิจ (เกิด พ.ศ. 2543 ประเทศไทย) สำเร็จการศึกษาจากคณะจิตรกรรม ประติมากรรมและภาพพิมพ์ มหาวิทยาลัยศิลปากร ภาพวาดของเธอใช้เทคนิคที่หลากหลายในด้านสีและพื้นผิวเพื่อสำรวจความสัมพันธ์ระหว่างอัตลักษณ์ของเธอและสภาพแวดล้อมของเธอ</p>`,
    `<p>"Painting is a blind man's profession." — Pablo Picasso</p><p>Apichaya Wannakit's paintings are, in a profound sense, self-portraits. Her practice is grounded in establishing distance between herself and what she represents. She does not paint what she sees directly, but what remains after seeing: impressions and memories left by events, people, and objects. For Wannakit, distance is a condition of vision. Painting is inseparable from remembering; vision emerges through deferral in time and space. Painting becomes a way of staring at absence, lingering with what is no longer there so the image can take shape.</p><p>Her paintings unfold as intimate fields of attention, where gestures, fragments, and chromatic atmospheres are filtered through memory and perception. She does not represent the world as it is, but registers how it is experienced, how reality leaves traces within an emotional landscape. Portraits appear as silhouettes, figures turn away, forms dissolve into haze. The external world surfaces only insofar as it leaves an impression within her sensibility.</p><p>This logic of distance structures "Blind Spots" (2026), her exhibition at Bangkok Kunsthalle, developed from residencies at Palazzo Monti in Italy and in Bangkok. The works are suspended between these geographies through an exchange between East and West. In Europe, she looks back to Bangkok; in Bangkok, she paints impressions of Europe. Painting becomes deferred vision, seeing through memory rather than presence.</p>`,
    `<p>"การวาดภาพเป็นอาชีพของคนตาบอด" — Pablo Picasso</p><p>ภาพวาดของอภิชญา วรรณกิจเป็นภาพเหมือนตนเองในความหมายที่ลึกซึ้ง การปฏิบัติของเธอมีพื้นฐานในการสร้างระยะห่างระหว่างตัวเธอเองและสิ่งที่เธอแสดง เธอไม่ได้วาดสิ่งที่เธอเห็นโดยตรง แต่สิ่งที่เหลืออยู่หลังจากการมองเห็น ความประทับใจและความทรงจำที่ทิ้งไว้โดยเหตุการณ์ ผู้คน และวัตถุ</p>`,
    'Apichaya Wannakit, Blind Spots: Panels, Paravents and Screens, 2026. Installation view, Bangkok Kunsthalle. Courtesy of the artist and Bangkok Kunsthalle. Photo by Ratsiree Rattanawan.'
  ),
};

// Helper function to get exhibition by slug and language
export function getExhibition(slug: string, language: 'en' | 'th' = 'en'): WPPost | undefined {
  const exhibitionData = EXHIBITIONS_DATA_BILINGUAL[slug as keyof typeof EXHIBITIONS_DATA_BILINGUAL];
  if (!exhibitionData) return undefined;
  return exhibitionData[language];
}

// Get all exhibitions in a specific language
export function getAllExhibitions(language: 'en' | 'th' = 'en'): WPPost[] {
  return Object.values(EXHIBITIONS_DATA_BILINGUAL)
    .map(exhibitionData => exhibitionData[language]);
}