import { Reveal } from '../ui/Reveal';
import { ParallaxHero } from '../ui/ParallaxHero';
import { useLanguage } from '../../utils/languageContext';

export type AboutPageType = 'about' | 'vision' | 'history';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  activePage?: AboutPageType;
}

export function AboutPage({ onNavigate, activePage = 'about' }: AboutPageProps) {
  const { language, t } = useLanguage();

  return (
    <div className="w-full min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <ParallaxHero 
        image="https://images.unsplash.com/photo-1764922168474-8048361bc764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwbWluaW1hbGlzdCUyMGludGVyaW9yfGVufDF8fHx8MTc3Mjk3NjY4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        height="h-[80vh]"
      >
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none md:hidden" />
      </ParallaxHero>

      <div id="about-content-area" className="w-full px-6 pt-[96px] pr-[24px] pb-[0px] md:pl-[48px]">
        <div className="flex flex-col md:flex-row">
        
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-1/2 shrink-0 h-fit mb-12 md:mb-0">
                <nav className="flex flex-col items-start gap-2">
                    <button
                        onClick={() => {
                            onNavigate('about');
                            setTimeout(() => {
                                const mainEl = document.getElementById('about-content-area');
                                if (mainEl) {
                                    const top = mainEl.getBoundingClientRect().top + window.scrollY - 120;
                                    window.scrollTo({ top, behavior: 'smooth' });
                                }
                            }, 50);
                        }}
                        className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            activePage === 'about' ? 'text-black font-medium' : 'text-gray-400 hover:text-black font-normal'
                        }`}
                    >
                        {language === 'th' ? 'เกี่ยวกับเรา' : 'About Us'}
                    </button>
                    <button
                        onClick={() => {
                            onNavigate('vision');
                            setTimeout(() => {
                                const mainEl = document.getElementById('about-content-area');
                                if (mainEl) {
                                    const top = mainEl.getBoundingClientRect().top + window.scrollY - 120;
                                    window.scrollTo({ top, behavior: 'smooth' });
                                }
                            }, 50);
                        }}
                        className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            activePage === 'vision' ? 'text-black font-medium' : 'text-gray-400 hover:text-black font-normal'
                        }`}
                    >
                        {language === 'th' ? 'วิสัยทัศน์และพันธกิจ' : 'Vision & Mission'}
                    </button>
                    <button
                        onClick={() => {
                            onNavigate('history');
                            setTimeout(() => {
                                const mainEl = document.getElementById('about-content-area');
                                if (mainEl) {
                                    const top = mainEl.getBoundingClientRect().top + window.scrollY - 120;
                                    window.scrollTo({ top, behavior: 'smooth' });
                                }
                            }, 50);
                        }}
                        className={`text-left text-xl md:text-2xl font-sans transition-all duration-300 ${language === 'th' ? 'leading-[1.82em]' : ''} ${
                            activePage === 'history' ? 'text-black font-medium' : 'text-gray-400 hover:text-black font-normal'
                        }`}
                    >
                        {language === 'th' ? 'ประวัติ' : 'History'}
                    </button>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className="w-full md:w-1/2 min-h-[50vh]">
                {/* About Us */}
                {activePage === 'about' && (
                  <section>
                      <Reveal delay={0.1}>
                          <div className="flex flex-col gap-6 text-xl md:text-2xl text-2xl font-normal leading-tight">
                              {language === 'th' ? (
                                <>
                                  <p className="leading-[1.82em]">
                                    บางกอก คุนซ์ฮาลเล่ เป็นสถาบันทางวัฒนธรรมที่มีพลวัต เข้มงวด และเข้าถึงได้ ที่อุทิศตนเพื่อศิลปะ ภาพยนตร์ ดนตรี การเต้นรำ วรรณกรรม สถาปัตยกรรม และภาษาสร้างสรรค์อื่นๆ บางกอก คุนซ์ฮาลเล่ เป็นตัวแทนของรูปแบบใหม่ของพิพิธภัณฑ์ศิลปะ สถาบันทางเลือกนี้ตั้งอยู่ในอาคารไทยวัฒนาพาณิชย์ที่ถูกทิ้งร้าง ซึ่งเป็นโรงพิมพ์ชั้นนำที่ถูกไฟไหม้ในปี พ.ศ. 2544 พื้นที่ดิบๆ สไตล์อุตสาหกรรมนำเสนอแพลตฟอร์มใหม่และเป็นผู้บุกเบิกที่สะท้อนคุณภาพของงานศิลปะที่ถูกเลือกมาจัดแสดงที่นั่น
                                  </p>
                                  <p className="leading-[1.82em]">
                                    บางกอก คุนซ์ฮาลเล่ เป็นสถาบันที่ขับเคลื่อนโดยศิลปิน ซึ่งการจัดแสดงนิทรรศการใหม่แต่ละครั้งจะเปิดใช้งานพื้นที่ใหม่ในอาคารสไตล์บรูทัลลิสต์ การแทรกแซงทางสถาปัตยกรรมได้รับข้อมูลจากศิลปิน วิสัยทัศน์ และงานศิลปะของพวกเขา ศิลปินที่ได้รบเชิญให้จัดแสดงที่บางกอก คุนซ์ฮาลเล่ ได้รับมอบหมายให้สร้างผลงานเฉพาะสถานที่ที่กล่าวถึงภาษาภาพและประวัติศาสตร์ทางวัฒนธรรมที่อุดมสมบูรณ์ของอาคารและพื้นที่โดยรอบ
                                  </p>
                                  <p className="leading-[1.82em]">
                                    สถาบันภูมิใจในลักษณะการทดลอง ขยายขอบเขตของศิลปะร่วมสมัยผ่านนิทรรศการและโปรแกรมสาธารณะใหม่ๆ โดยแก่นแท้แล้ว บางกอก คุนซ์ฮาลเล่ มุ่งมั่นที่จะเป็นจุดสำคัญของการสนทนาสร้างสรรค์ไม่เพียงแต่สำหรับประเทศไทยเท่านั้น แต่ยังรวมถึงเอเชียตะวันออกเฉียงใต้โดยรวม
                                  </p>
                                  <p className="leading-[1.82em]">
                                    สถาบันจัดนิทรรศการประมาณสี่ครั้งต่อปี โดยมีศิลปินนานาชาติและศิลปินไทย ตลอดทั้งปียังนำเสนอโปรแกรมสาธารณะที่มีพลวัตซึ่งรวมถึงการพูดคุยกับศิลปิน การบรรยาย เวิร์คช็อป การฉายภาพยนตร์ และการอ่าน เพื่อให้บริบทแก่แนวปฏิบัติของศิลปินที่นำเสนอและเพื่อกล่าวถึงหัวข้อทางวัฒนธรรมที่กว้างขวางซึ่งเกี่ยวข้องและทันเหตุการณ์
                                  </p>
                                </>
                              ) : (
                                <>
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
                                </>
                              )}
                          </div>
                      </Reveal>
                  </section>
                )}

                {/* Vision & Mission */}
                {activePage === 'vision' && (
                  <section>
                      <Reveal delay={0.1}>
                          <div className="flex flex-col gap-6 text-xl md:text-2xl text-black font-normal leading-tight">
                              <p className={language === 'th' ? 'leading-[1.82em]' : undefined}>
                                {language === 'th' 
                                  ? 'บางกอก คุนซ์ฮาลเล่ มีวิสัยทัศน์ในการเป็นศูนย์กลางแห่งการสนทนาสร้างสรรค์และการแลกเปลี่ยนทางวัฒนธรรม โดยมีพันธกิจในการนำเสนอศิลปะร่วมสมัยที่ท้าทาย กระตุ้นความคิด และเข้าถึงได้สำหรับทุกคน เรามุ่งมั่นที่จะสร้างสะพานเชื่อมระหว่างศิลปินท้องถิ่นและนานาชาติ และส่งเสริมความเข้าใจที่ลึกซึ้งยิ่งขึ้นเกี่ยวกับแนวปฏิบัติทางศิลปะร่วมสมัยในภูมิภาคเอเชียตะวันออกเฉียงใต้'
                                  : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.'}
                              </p>
                          </div>
                      </Reveal>
                  </section>
                )}

                {/* History */}
                {activePage === 'history' && (
                  <section>
                      <Reveal delay={0.1}>
                           <div className="flex flex-col gap-6 text-xl md:text-2xl text-black font-normal leading-tight">
                              <p className={language === 'th' ? 'leading-[1.82em]' : undefined}>
                                {language === 'th'
                                  ? 'สถาบันทางเลือกนี้ตั้งอยู่ในอาคารไทยวัฒนาพาณิชย์ที่ถูกทิ้งร้าง ซึ่งเป็นโรงพิมพ์ชั้นนำที่ถูกไฟไหม้ในปี พ.ศ. 2544 พื้นที่ดิบๆ สไตล์อุตสาหกรรมนำเสนอแพลตฟอร์มใหม่และเป็นผู้บุกเบิกที่สะท้อนคุณภาพของงานศิลปะที่ถูกเลือกมาจัดแสดงที่นั่น'
                                  : 'This alternative institution occupies the abandoned Thai Wattana Panich building, a leading printing house that was razed by fire in 2001. The raw, industrial space presents a novel and pioneering platform which mirrors the quality of artworks chosen to be exhibited there.'}
                              </p>
                          </div>
                      </Reveal>
                  </section>
                )}

            </main>
        </div>
      </div>
    </div>
  );
}