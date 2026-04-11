import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <img 
            alt="MindSpring Logo" 
            className="h-10 w-10 object-contain" 
            src="https://lh3.googleusercontent.com/aida/ADBb0uhwyggCKOlszy1eC8GNLM6yXimni2cJU_iO7Tljz_S4RQYVFHQblIGFsbjDQdiYbZp_hXnrIpg36aXbKeIcqc6D-gUel_ms-_RyrqudWkVMRv7FzkEGIpVFsBjSbxX-3ZD1drHdxMRBT7KKvbHNgoMtENcrjn8Gp5yLXkM4J_zSWRP43fF4DOpLBIjQUQtFezCtI7SYIwJUSAKFOviAyc_7rvDkDWiVpHRfz2XSFIP_TeeMG7xD46yKTv4m54o6PQPTxCi6fdSBew" 
          />
          <span className="text-2xl font-black bg-gradient-to-r from-primary via-tertiary to-secondary bg-clip-text text-transparent tracking-tight">
            MindSpring
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`font-bold tracking-tight transition-all hover:text-primary ${isActive('/') ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
          >
            Home
          </Link>
          <Link 
            to="/child-care" 
            className={`font-bold tracking-tight transition-all hover:text-primary ${isActive('/child-care') ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
          >
            Child Care
          </Link>
          <Link 
            to="/counselling" 
            className={`font-bold tracking-tight transition-all hover:text-primary ${isActive('/counselling') ? 'text-primary border-b-2 border-primary' : 'text-on-surface-variant'}`}
          >
            Counselling
          </Link>
        </div>

        <div className="hidden md:block">
          <Link 
            to="/counselling"
            className="px-6 py-2.5 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
