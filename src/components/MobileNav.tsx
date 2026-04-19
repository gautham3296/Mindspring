import { Link, useLocation } from 'react-router-dom';
import { Home, Baby, Heart, Brain, Puzzle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MobileNav() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 h-10 md:hidden bg-white/90 backdrop-blur-md border-t border-slate-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <Link 
        to="/" 
        className={`flex flex-row items-center justify-center gap-1.5 flex-1 h-full transition-all duration-300 relative ${isActive('/') ? 'text-primary' : 'text-slate-400'}`}
      >
        <Home size={14} className={isActive('/') ? 'scale-110' : ''} />
        <span className="text-[10px] font-black uppercase tracking-tight">Home</span>
        {isActive('/') && <motion.div layoutId="activeTab" className="absolute bottom-0.5 w-4 h-0.5 bg-primary rounded-full" />}
      </Link>
      
      <Link 
        to="/child-care" 
        className={`flex flex-row items-center justify-center gap-1.5 flex-1 h-full transition-all duration-300 relative ${isActive('/child-care') ? 'text-primary' : 'text-slate-400'}`}
      >
        <Baby size={14} className={isActive('/child-care') ? 'scale-110' : ''} />
        <span className="text-[10px] font-black uppercase tracking-tight">Child Care</span>
        {isActive('/child-care') && <motion.div layoutId="activeTab" className="absolute bottom-0.5 w-4 h-0.5 bg-primary rounded-full" />}
      </Link>
      
      <Link 
        to="/counseling" 
        className={`flex flex-row items-center justify-center gap-1.5 flex-1 h-full transition-all duration-300 relative ${isActive('/counseling') ? 'text-primary' : 'text-slate-400'}`}
      >
        <Puzzle size={14} className={isActive('/counseling') ? 'scale-110' : ''} />
        <span className="text-[10px] font-black uppercase tracking-tight">Counseling</span>
        {isActive('/counseling') && <motion.div layoutId="activeTab" className="absolute bottom-0.5 w-4 h-0.5 bg-primary rounded-full" />}
      </Link>
    </nav>
  );
}
