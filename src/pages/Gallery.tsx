import { motion } from 'motion/react';
import { Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [

  "https://i.ibb.co/C5d59HPM/Whats-App-Image-2026-04-16-at-11-33-22-AM.jpg",
"https://i.ibb.co/d0DqBFG7/Whats-App-Image-2026-04-16-at-11-31-56-AM.jpg",
"https://i.ibb.co/d41nGtp0/Whats-App-Image-2026-04-16-at-11-31-45-AM.jpg",
"https://i.ibb.co/ktFbTxR/Whats-App-Image-2026-04-16-at-11-31-35-AM.jpg",
"https://i.ibb.co/zhn5wzft/Whats-App-Image-2026-04-16-at-11-25-09-AM.jpg",
"https://i.ibb.co/j9SJ6HR4/Whats-App-Image-2026-04-16-at-11-24-48-AM.jpg",

];

export default function Gallery() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8 relative">
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold hover:underline">
          <ArrowLeft size={20} /> Back to Home
        </Link>
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 flex items-center gap-3">
          <ImageIcon className="text-primary" /> Our Gallery
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-3xl overflow-hidden shadow-xl border-4 border-white hover:scale-[1.02] transition-transform cursor-pointer"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
