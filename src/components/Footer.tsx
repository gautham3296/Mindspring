import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 py-12 border-t-4 border-orange-100 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 rainbow-bg opacity-50"></div>
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              alt="MindSpring Logo" 
              className="object-contain h-12" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uhwyggCKOlszy1eC8GNLM6yXimni2cJU_iO7Tljz_S4RQYVFHQblIGFsbjDQdiYbZp_hXnrIpg36aXbKeIcqc6D-gUel_ms-_RyrqudWkVMRv7FzkEGIpVFsBjSbxX-3ZD1drHdxMRBT7KKvbHNgoMtENcrjn8Gp5yLXkM4J_zSWRP43fF4DOpLBIjQUQtFezCtI7SYIwJUSAKFOviAyc_7rvDkDWiVpHRfz2XSFIP_TeeMG7xD46yKTv4m54o6PQPTxCi6fdSBew" 
            />
            <span className="text-xl font-black bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
              MindSpring
            </span>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-black text-slate-900">Swetha Jayakumar</h4>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-slate-600 font-bold">
              <a href="mailto:themindspring.sec@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                <Mail size={18} className="text-blue-500" />
                themindspring.sec@gmail.com
              </a>
              <a href="https://wa.me/917305142720" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-green-500 transition-colors">
                <Phone size={18} className="text-green-500" />
                7305142720
              </a>
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
