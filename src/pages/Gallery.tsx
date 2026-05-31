import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  "https://i.ibb.co/mrqksVYY/Whats-App-Image-2026-05-11-at-2-02-06-PM-1.jpg",
  "https://i.ibb.co/W17fx1R/Whats-App-Image-2026-05-11-at-2-02-06-PM-2.jpg",
  "https://i.ibb.co/dJKBhnh7/Whats-App-Image-2026-05-11-at-2-02-06-PM.jpg",
  "https://i.ibb.co/TxDrbmgg/Whats-App-Image-2026-05-11-at-2-02-07-PM.jpg",
  "https://i.ibb.co/Ftp6qKQ/Whats-App-Image-2026-05-11-at-2-01-47-PM.jpg",
  "https://i.ibb.co/GvHbFwPg/Whats-App-Image-2026-05-11-at-1-56-17-PM.jpg"
];

export default function Gallery() {
  useEffect(() => {
    document.title = "Our Gallery | The MindSpring Child Development Centre";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore our facility and see our therapeutic activities in action at The MindSpring Child Development Centre Chennai.");
    }
  }, []);

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
