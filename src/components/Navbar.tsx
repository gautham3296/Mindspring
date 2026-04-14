import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'About Us', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Our Approach', href: '/#approach' },
    { name: 'Why MindSpring', href: '/#why-mindspring' },
    { name: 'Vision', href: '/#vision' },
    { name: 'Mission', href: '/#mission' },
    { name: 'About Founder', href: '/#founder' },
    { name: 'Book Now', href: '/#book-now' },
    { name: 'Contact Us', href: '/#contact' },
    { name: 'Child Care', href: '/child-care' },
    { name: 'Counseling', href: '/counseling' },
  ];

  return (
    <header className="w-full top-0 sticky z-50 bg-surface/95 backdrop-blur-md border-b border-white/20 shadow-sm">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-6 h-16 md:h-20 overflow-visible">
        <Link to="/" className="flex items-center gap-3 shrink-0 py-0">
          <img 
            alt="MindSpring Logo" 
            className="h-12 w-12 md:h-16 md:w-16 object-contain block" 
            src="https://i.ibb.co/dJWLYMgR/Screenshot-2026-04-14-123524-removebg-preview.png" 
            referrerPolicy="no-referrer"
          />
          <span className="text-xl md:text-2xl font-black text-primary tracking-tight leading-normal py-0">
            The Mindspring
          </span>
        </Link>

        {/* Desktop Nav - Removed as per request to use hamburger for all */}
        
        {/* Hamburger Toggle - Always visible now */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Overlay - Works for all screen sizes */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed top-0 right-0 h-screen w-full md:w-[400px] bg-white shadow-2xl z-[60] overflow-y-auto"
            >
              <div className="flex flex-col p-8 h-full">
                <div className="flex justify-end mb-8">
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-colors"
                  >
                    <X size={32} />
                  </button>
                </div>
                
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    link.href.startsWith('/#') ? (
                      <a 
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xl font-black text-slate-800 hover:text-primary py-4 border-b border-slate-50 transition-all hover:pl-2"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link 
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-xl font-black py-4 border-b border-slate-50 transition-all hover:pl-2 ${isActive(link.href) ? 'text-primary' : 'text-slate-800'}`}
                      >
                        {link.name}
                      </Link>
                    )
                  ))}
                </div>

                <div className="mt-auto pt-12">
                  <a 
                    href="https://wa.me/7305142720"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-primary text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all"
                  >
                    <MessageCircle size={24} />
                    Book Appointment
                  </a>
                  <p className="text-center text-slate-400 font-bold mt-6 text-sm">
                    © 2024 The Mindspring
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55]"
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
