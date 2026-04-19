import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'About Us', href: '/#about', desktop: true },
    { name: 'Child Care', href: '/child-care', desktop: true },
    { name: 'Services', href: '/#services', desktop: true },
    { name: 'Counseling', href: '/counseling', desktop: true },
    { name: 'Gallery', href: '/gallery', desktop: true },
    { name: 'Book Now', href: '/#book-now', desktop: true },
  ];

  return (
    <header className="w-full top-0 sticky z-50 bg-white/95 backdrop-blur-md border-b-4 border-orange-100 shadow-lg">
      <nav className="max-w-screen-xl mx-auto px-4 relative flex flex-col items-center py-4 md:py-8 gap-4 md:gap-6">
        {/* Centered Brand */}
        <Link to="/" className="flex flex-col md:flex-row items-center gap-3 md:gap-5 group relative z-10">
          <img 
            alt="The MindSpring - Child Development and Counseling Centre Logo" 
            className="h-16 md:h-24 object-contain transition-transform duration-500 group-hover:scale-110" 
            src="https://i.ibb.co/dJWLYMgR/Screenshot-2026-04-14-123524-removebg-preview.png" 
            referrerPolicy="no-referrer"
          />
          <span className="text-2xl md:text-5xl font-black bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent tracking-tighter transition-all duration-500 group-hover:tracking-normal py-2 leading-tight">
            The Mindspring
          </span>
        </Link>

        {/* Desktop Navigation Below Brand */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 relative z-10">
          {navLinks.filter(l => l.desktop).map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-black uppercase tracking-[0.2em] text-slate-600 hover:text-primary transition-all duration-300 hover:scale-110"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                to={link.href}
                className={`text-xs lg:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-110 ${isActive(link.href) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
        
        {/* Mobile Toggle Button - Absolute Right */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-primary/5 text-primary rounded-2xl border border-primary/10 shadow-sm transition-all active:scale-95"
          aria-label="Toggle menu"
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
