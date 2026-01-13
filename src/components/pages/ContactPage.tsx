import { Reveal } from '../ui/Reveal';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useLanguage } from '../../utils/languageContext';

export function ContactPage() {
  const { language } = useLanguage();
  
  return (
    <div className="bg-white min-h-screen pb-24 font-sans text-black">
      {/* Hero Map */}
       <div className="w-full h-[60vh] md:h-[80vh] bg-[#D9D9D9] relative overflow-hidden">
          <img 
              src="https://images.unsplash.com/photo-1676144844767-b25cb5e6c896?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwY29uY3JldGUlMjBhcmNoaXRlY3R1cmUlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Njc5ODI1NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Bangkok Kunsthalle"
              className="w-full h-full object-cover grayscale"
          />
      </div>

      <div className="w-full px-6 pt-24">
        
        {/* Contact Content */}
        <div className="flex flex-col md:flex-row mb-32 md:mb-40">
             {/* Left Column */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <Reveal>
                    <h1 className={`text-xl md:text-2xl font-normal sticky top-32 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                      {language === 'th' ? 'ติดต่อเรา' : 'Contact Us'}
                    </h1>
                </Reveal>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
                <Reveal delay={0.1}>
                    <div className="flex flex-col gap-4">
                        <p className={`text-xl md:text-2xl font-normal ${language === 'th' ? 'leading-[1.82em]' : 'leading-tight'}`}>
                            {language === 'th' ? (
                              <>
                                ติดต่อบางกอก คุนซ์ฮาลเล่<br />
                                สำหรับข้อสอบถามเกี่ยวกับนิทรรศการ<br />
                                สื่อมวลชน การเยี่ยมชมส่วนตัว<br />
                                หรือวัตถุประสงค์ทางการศึกษา
                              </>
                            ) : (
                              <>
                                Connect with Bangkok Kunsthalle.<br />
                                For inquiries regarding exhibitions,<br />
                                press, private visits, or educational<br />
                                purpose.
                              </>
                            )}
                        </p>
                        <p className={`text-xl md:text-2xl font-normal leading-tight mt-4 ${language === 'th' ? 'leading-[1.82em]' : ''}`}>
                            {language === 'th' ? 'กรุณาฝากข้อความด้านล่าง' : 'Please leave a message below.'}
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <form className="flex flex-col gap-6 w-full max-w-lg" onSubmit={(e) => e.preventDefault()}>
                        <Input 
                            placeholder={language === 'th' ? 'อีเมล' : 'Email'}
                            className="rounded-none border-gray-300 h-12 text-lg placeholder:text-gray-400 font-sans"
                        />
                        <Textarea 
                            placeholder={language === 'th' ? 'ข้อความสอบถาม' : 'Inquiry Box'}
                            className={`rounded-none border-gray-300 min-h-[200px] text-lg placeholder:text-gray-400 resize-none font-sans ${language === 'th' ? 'leading-[1.82em]' : ''}`}
                        />
                        <Button 
                            type="submit"
                            className="rounded-none bg-[#1A1A1A] hover:bg-black text-white px-8 py-6 text-lg w-fit font-sans"
                        >
                            {language === 'th' ? 'ส่ง' : 'Submit'}
                        </Button>
                    </form>
                </Reveal>
            </div>
        </div>

      </div>
    </div>
  );
}