import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import Home from './pages/Home';
import ChildCare from './pages/ChildCare';
import Counseling from './pages/Counseling';
import Gallery from './pages/Gallery';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative overflow-x-hidden rainbow-bg">
        {/* Abstract Background Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-200/30 rounded-full blur-[100px] -z-10 animate-float"></div>
        <div className="fixed top-[20%] right-[-5%] w-[35%] h-[35%] bg-blue-200/30 rounded-full blur-[100px] -z-10 animate-float [animation-delay:-5s]"></div>
        <div className="fixed bottom-[10%] left-[20%] w-[30%] h-[30%] bg-yellow-200/30 rounded-full blur-[100px] -z-10 animate-float [animation-delay:-10s]"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[100px] -z-10 animate-float [animation-delay:-15s]"></div>

        <Navbar />
        
        <main className="flex-grow pb-32 md:pb-12 w-full relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/child-care" element={<ChildCare />} />
            <Route path="/counseling" element={<Counseling />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>

        <Footer />
        <MobileNav />
      </div>
    </Router>
  );
}
