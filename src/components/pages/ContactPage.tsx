import { ASSETS } from '../../utils/assets';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Section */}
      <div className="h-[50vh] md:h-[60vh] w-full relative overflow-hidden">
        <ImageWithFallback 
          src={ASSETS.BUILDING} 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 font-sans">
              We'd love to hear from you. Whether you have questions about our exhibitions, programs, or would like to collaborate, please don't hesitate to reach out.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p className="text-gray-600">
                    Bangkok Kunsthalle<br />
                    123 Art Street<br />
                    Bangkok, Thailand 10110
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a href="mailto:info@bangkokkunsthalle.org" className="text-gray-600 hover:text-black transition-colors">
                    info@bangkokkunsthalle.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a href="tel:+6621234567" className="text-gray-600 hover:text-black transition-colors">
                    +66 2 123 4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif mb-6">Opening Hours</h3>
            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span>Tuesday - Friday</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span>Saturday - Sunday</span>
                <span>11:00 - 19:00</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span>Monday</span>
                <span className="text-gray-400">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
