import { Link, useLocation } from 'react-router-dom';
import { Home, Baby, BrainCircuit } from 'lucide-react';

export default function MobileNav() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 md:hidden bg-white/70 backdrop-blur-xl rounded-t-[3rem] shadow-2xl border-t border-white/50">
      <Link 
        to="/" 
        className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${isActive('/') ? 'bg-primary-container text-on-primary-container scale-110' : 'text-on-surface-variant'}`}
      >
        <Home size={24} />
        <span className="text-[11px] font-bold uppercase tracking-widest mt-1">Home</span>
      </Link>
      
      <Link 
        to="/child-care" 
        className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${isActive('/child-care') ? 'bg-primary-container text-on-primary-container scale-110' : 'text-on-surface-variant'}`}
      >
        <Baby size={24} />
        <span className="text-[11px] font-bold uppercase tracking-widest mt-1">Child Care</span>
      </Link>
      
      <Link 
        to="/counselling" 
        className={`flex flex-col items-center justify-center px-6 py-2 rounded-full transition-all duration-300 ${isActive('/counselling') ? 'bg-primary-container text-on-primary-container scale-110' : 'text-on-surface-variant'}`}
      >
        <BrainCircuit size={24} />
        <span className="text-[11px] font-bold uppercase tracking-widest mt-1">Counselling</span>
      </Link>
    </nav>
  );
}
