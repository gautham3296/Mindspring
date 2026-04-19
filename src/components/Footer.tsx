import { Mail, Phone, MapPin, Instagram, Map } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 py-8 border-t-4 border-orange-100 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 rainbow-bg opacity-50"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              alt="The MindSpring - Chennai Child Therapy Center Logo" 
              className="object-contain h-12" 
              src="https://i.ibb.co/dJWLYMgR/Screenshot-2026-04-14-123524-removebg-preview.png" 
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-black bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent py-1 leading-normal">
              The Mindspring
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest border-y border-slate-100 py-6 w-full max-w-4xl mx-auto">
            <a href="/#services" className="hover:text-primary transition-colors">Occupational Therapy</a>
            <a href="/#services" className="hover:text-primary transition-colors">Speech Therapy</a>
            <a href="/child-care" className="hover:text-primary transition-colors">Child Care</a>
            <a href="/#services" className="hover:text-primary transition-colors">Special Education</a>
            <a href="/counseling" className="hover:text-primary transition-colors">Family Counseling</a>
            <a href="/#services" className="hover:text-primary transition-colors">Psychology Services</a>
            <a href="/#services" className="hover:text-primary transition-colors">Early Intervention</a>
            <a href="/gallery" className="hover:text-primary transition-colors">Our Gallery</a>
          </div>
          
          <div className="space-y-4 w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 font-bold">
              <a href="mailto:themindspring.sec@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                <Mail size={18} className="text-blue-500" />
                themindspring.sec@gmail.com
              </a>
              <div className="flex flex-col items-center md:items-start gap-1">
                <a href="https://wa.me/917305142720" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors">
                  <Phone size={18} className="text-green-500" />
                  +91 73051 42720
                </a>
                <a href="tel:+917305387664" className="flex items-center gap-2 hover:text-green-500 transition-colors pl-6">
                  +91 73053 87664
                </a>
              </div>
              <a href="https://www.instagram.com/themindspring.sec" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                <Instagram size={18} className="text-pink-500" />
                @themindspring.sec
              </a>
              <a href="https://www.google.com/maps?q=12.8655123,80.1513201&z=17&hl=en" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Map size={18} className="text-red-500" />
                Find Us on Map
              </a>
            </div>
            <a 
              href="https://www.google.com/maps?q=12.8655123,80.1513201&z=17&hl=en" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 text-slate-500 text-sm max-w-md mx-auto hover:text-primary transition-colors group font-semibold"
            >
              <MapPin size={18} className="text-orange-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p>No. 232/4, Ambedkar Nagar, 4th Street, Vengadamangalam, Chennai 600127</p>
            </a>
          </div>
          
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-4">
            © 2026 THE MINDSPRING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
