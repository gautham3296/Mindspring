import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 py-8 border-t-4 border-orange-100 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 rainbow-bg opacity-50"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              alt="MindSpring Logo" 
              className="object-contain h-12" 
              src="https://i.ibb.co/dJWLYMgR/Screenshot-2026-04-14-123524-removebg-preview.png" 
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-black bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
              The Mindspring
            </span>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900">Swetha Jayakumar</h4>
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
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm max-w-md mx-auto">
              <MapPin size={18} className="text-orange-400 flex-shrink-0" />
              <p>No. 232/4, Ambedkar Nagar, 4th Street, Vengadamangalam, Chennai 600127</p>
            </div>
          </div>
          
          <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mt-4">
            © 2026 THE MINDSPRING. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
