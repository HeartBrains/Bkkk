import { Reveal } from '../../ui/Reveal';

export function VisitInfo() {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* Location */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
            <div className="md:col-span-6">
                <span className="text-xl md:text-2xl font-sans text-black">Location</span>
            </div>
            <div className="md:col-span-6 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-sans text-black">Bangkok Kunsthalle</p>
                    <p className="text-xl md:text-2xl font-sans text-black">599 Pantachit Alley,</p>
                    <p className="text-xl md:text-2xl font-sans text-black">Pom Prap, Bangkok</p>
                </div>
                
                <div className="flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-sans text-black">Opening Hours</p>
                    <p className="text-xl md:text-2xl font-sans text-black">Wednesday - Sunday</p>
                    <p className="text-xl md:text-2xl font-sans text-black">14:00 - 20:00</p>
                </div>
                
                <div className="w-full aspect-square md:aspect-[4/3] bg-[#D9D9D9] relative overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.590763634063!2d100.511872!3d13.743292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e299004545c9d9%3A0x6e6f7f8a9b0c1d2e!2sBangkok%20Kunsthalle!5e0!3m2!1sen!2sth!4v1710000000000!5m2!1sen!2sth"
                        title="Bangkok Kunsthalle Map"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
        </div>
      </Reveal>

      {/* Admission */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
            <div className="md:col-span-6">
                <span className="text-xl md:text-2xl font-sans text-black">Admission</span>
            </div>
            <div className="md:col-span-6">
                <p className="text-xl md:text-2xl font-sans text-black">Entry to exhibitions is free, except for</p>
                <p className="text-xl md:text-2xl font-sans text-black">special events, charges will vary.</p>
            </div>
        </div>
      </Reveal>

      {/* Getting Here */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
            <div className="md:col-span-6">
                <span className="text-xl md:text-2xl font-sans text-black">Getting Here</span>
            </div>
            <div className="md:col-span-6 flex flex-col gap-8">
                {/* MRT */}
                <div className="flex flex-col gap-4">
                    <p className="text-xl md:text-2xl font-sans text-black">MRT</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-sans text-black">Hua Lamphong Station</p>
                            <p className="text-xl md:text-2xl font-sans text-gray-500">6-7 minute walk.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-sans text-black">Wat Mangkon Station</p>
                            <p className="text-xl md:text-2xl font-sans text-gray-500">10-12 minute walk.</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xl md:text-2xl font-sans text-black">Sam Yot Station</p>
                            <p className="text-xl md:text-2xl font-sans text-gray-500">12-15 minute walk.</p>
                        </div>
                    </div>
                </div>

                {/* Taxi or Grab */}
                <div className="flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-sans text-black">Taxi or Grab</p>
                    <p className="text-xl md:text-2xl font-sans text-black mt-2">Search for "Bangkok Kunsthalle"</p>
                    <p className="text-xl md:text-2xl font-sans text-black">or show the driver this address in Thai:</p>
                    <p className="text-xl md:text-2xl font-sans text-black mt-2">599 ซอย พันธจิตต์ แขวงป้อมปราบ</p>
                    <p className="text-xl md:text-2xl font-sans text-black">เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร</p>
                </div>

                {/* Boat */}
                <div className="flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-sans text-black">Boat</p>
                    <p className="text-xl md:text-2xl font-sans text-black mt-2">For a more scenic route:</p>
                    <p className="text-xl md:text-2xl font-sans text-black">Take the Chao Phraya Express Boat</p>
                    <p className="text-xl md:text-2xl font-sans text-black">to Ratchawong Pier (N5)</p>
                    <p className="text-xl md:text-2xl font-sans text-gray-500">20 minute walk.</p>
                </div>

                {/* Car & Parking */}
                <div className="flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-sans text-black">Car & Parking</p>
                    <p className="text-xl md:text-2xl font-sans text-black mt-2">On-site parking is extremely limited</p>
                    <p className="text-xl md:text-2xl font-sans text-black">due to our location in a narrow alley.</p>
                    <p className="text-xl md:text-2xl font-sans text-black mt-4">It is highly recommended to park</p>
                    <p className="text-xl md:text-2xl font-sans text-black">at nearby commercial lots in Chinatown</p>
                </div>
            </div>
        </div>
      </Reveal>

      {/* Directory */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
            <div className="md:col-span-6">
                <span className="text-xl md:text-2xl font-sans text-black">Directory</span>
            </div>
            <div className="md:col-span-6">
                {/* Empty content as per screenshot */}
            </div>
        </div>
      </Reveal>

      {/* Accessibility */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
            <div className="md:col-span-6">
                <span className="text-xl md:text-2xl font-sans text-black">Accessibility</span>
            </div>
            <div className="md:col-span-6">
                {/* Empty content as per screenshot */}
            </div>
        </div>
      </Reveal>

      {/* Group Visit */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-8">
            <div className="md:col-span-6">
                <span className="text-xl md:text-2xl font-sans text-black">Group Visit</span>
            </div>
            <div className="md:col-span-6">
                {/* Empty content as per screenshot */}
            </div>
        </div>
      </Reveal>
    </div>
  );
}
