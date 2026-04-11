import { motion } from 'motion/react';
import { Baby, Backpack, BrainCircuit, Users, Sun, MessageCircle, Puzzle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ChildCare() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative text-center md:text-left pt-12">
        <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-200/30 organic-blob -z-10 rotate-12"></div>
        
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]"
          >
            Nurturing every <span className="text-orange-500 underline decoration-yellow-400 decoration-wavy">breakthrough</span> moment.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl leading-relaxed font-medium"
          >
            Our colorful, evidence-based programs celebrate every child's unique spark! 🌈
          </motion.p>
        </div>
      </section>

      {/* Early Development */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Puzzle className="text-red-500 w-8 h-8" />
          <h2 className="text-3xl font-black text-slate-900">Early Development</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Early Intervention Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group bg-orange-50 p-8 rounded-xl border-4 border-orange-200 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-200/50 rounded-full"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                <Baby size={32} className="text-orange-600" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-orange-900">Early Intervention in Chennai</h3>
              <p className="text-orange-950/70 mb-6 leading-relaxed font-semibold">
                Fun play-based sessions designed for the littlest ones to hit their exciting milestones! Discover expert early intervention in Chennai today.
              </p>
              <WhatsAppButton phoneNumber="7305142720" />
            </div>
          </motion.div>

          {/* School Readiness Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group bg-yellow-50 p-8 rounded-xl border-4 border-yellow-200 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200/50 rounded-full"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                <Backpack size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-2xl font-black mb-3 text-yellow-900">Child Care in Sholinganallur</h3>
              <p className="text-yellow-950/70 mb-6 leading-relaxed font-semibold">
                Getting ready for the big classroom adventure with structure, focus, and tons of fun! The premier child care in Sholinganallur for early learners.
              </p>
              <WhatsAppButton phoneNumber="7305142720" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Development */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <BrainCircuit className="text-green-500 w-8 h-8" />
          <h2 className="text-3xl font-black text-slate-900">Skill Development</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brain Power */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col bg-green-50 p-8 rounded-lg border-b-8 border-green-400 hover:shadow-lg transition-all"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:rotate-6 transition-transform">
              <BrainCircuit size={28} className="text-green-600" />
            </div>
            <h3 className="text-xl font-black mb-2 text-green-900">Brain Power</h3>
            <p className="text-green-900/60 text-sm font-bold flex-grow">
              Super-charging memory and problem-solving through awesome mental puzzles. Top-tier skill development in Chrompet!
            </p>
            <div className="mt-6 pt-4 border-t border-green-200">
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white bg-green-500 px-4 py-1.5 rounded-full">Ages 4-12</span>
            </div>
          </motion.div>

          {/* Friendship Lab */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col bg-blue-50 p-8 rounded-lg border-b-8 border-blue-400 hover:shadow-lg transition-all"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:rotate-6 transition-transform">
              <Users size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-black mb-2 text-blue-900">Friendship Lab</h3>
            <p className="text-blue-900/60 text-sm font-bold flex-grow">
              Learning the magic of teamwork, empathy, and making forever friends in a supportive group setting.
            </p>
            <div className="mt-6 pt-4 border-t border-blue-200">
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white bg-blue-500 px-4 py-1.5 rounded-full">Group Setting</span>
            </div>
          </motion.div>

          {/* Life Stars */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col bg-purple-50 p-8 rounded-lg border-b-8 border-purple-400 hover:shadow-lg transition-all"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm group-hover:rotate-6 transition-transform">
              <Sun size={28} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-black mb-2 text-purple-900">Life Stars</h3>
            <p className="text-purple-900/60 text-sm font-bold flex-grow">
              Building confidence and independence for every day's big adventures through tailored skill development in Chrompet.
            </p>
            <div className="mt-6 pt-4 border-t border-purple-200">
              <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-white bg-purple-500 px-4 py-1.5 rounded-full">Independence</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rainbow CTA */}
      <section className="mt-20 rounded-xl overflow-hidden relative shadow-2xl rainbow-cta-bg">
        <div className="p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/20 organic-blob -z-10 animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/30 rounded-full -z-10"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
            Not sure where to start?
          </h2>
          <p className="text-white text-xl font-bold max-w-xl mx-auto mb-10">
            Let's have a quick 15-minute chat to find the perfect rainbow path for your child! ✨
          </p>
          <WhatsAppButton 
            phoneNumber="7305142720"
            className="bg-[#25D366] text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_10px_0_#128C7E] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
