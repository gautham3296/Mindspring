import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Baby, Backpack, BrainCircuit, Users, Sun, MessageCircle, Puzzle, Smile, BookOpen } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function ChildCare() {
  useEffect(() => {
    document.title = "Child Care & Early Intervention | The MindSpring Chennai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Specialized Child Care and Early Intervention in Selaiyur & Sholinganallur. Play-based learning for Autism, ADHD, and Developmental Breakthroughs.");
    }
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8 relative">
      <div className="space-y-12 md:space-y-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-center md:text-left pt-12 px-4 md:px-0 bg-white/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <div className="absolute top-20 right-0 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute top-60 -left-20 w-80 h-80 bg-blue-200/30 organic-blob -z-10 rotate-12"></div>
        
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1]"
          >
            Nurturing every <span className="text-orange-500 underline decoration-yellow-400 decoration-wavy">breakthrough</span> moment.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium"
          >
            Our colorful, evidence-based programs celebrate every child's unique spark across <strong>Tambaram</strong>! 🌈
          </motion.p>
        </div>
      </section>

      {/* Early Development */}
      <section className="mb-16 px-4 md:px-0">
        <div className="flex items-center gap-3 mb-8">
          <Puzzle className="text-red-500 w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Early Development</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Early Intervention Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group bg-orange-50 p-6 md:p-8 rounded-3xl border-4 border-orange-200 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl h-full"
          >
            <div className="relative z-10 pr-12">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                <Baby size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-orange-900 leading-tight">Early Intervention</h3>
              <p className="text-orange-950/70 mb-6 leading-relaxed font-bold text-sm md:text-base">
                Fun play-based sessions designed for the littlest ones to hit their exciting milestones! serving families in <strong>Selaiyur</strong>.
              </p>
              <div className="pt-4 pr-24">
                <WhatsAppButton 
                  phoneNumber="7305142720" 
                  className="w-full md:w-auto text-[10px] font-black uppercase tracking-wider bg-white text-primary px-5 py-2.5 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all text-center border border-slate-100"
                >
                  Message
                </WhatsAppButton>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-32 h-32 md:w-40 md:h-40 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 translate-x-4 translate-y-4">
              <img 
                src="https://i.ibb.co/PzMkqf7H/Speech-Theraphy.png" 
                alt="Early Intervention" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* School Readiness Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="group bg-yellow-50 p-6 md:p-8 rounded-3xl border-4 border-yellow-200 relative overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl h-full"
          >
            <div className="relative z-10 pr-12">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:rotate-6 transition-transform">
                <Backpack size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 text-yellow-900 leading-tight">School Readiness</h3>
              <p className="text-yellow-950/70 mb-6 leading-relaxed font-bold text-sm md:text-base">
                Getting ready for the big classroom adventure with structure, focus, and tons of fun! The premier child care in <strong>Sholinganallur</strong>.
              </p>
              <div className="pt-4 pr-24">
                <WhatsAppButton 
                  phoneNumber="7305142720" 
                  className="w-full md:w-auto text-[10px] font-black uppercase tracking-wider bg-white text-primary px-5 py-2.5 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all text-center border border-slate-100"
                >
                  Message
                </WhatsAppButton>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-32 h-32 md:w-40 md:h-40 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 translate-x-4 translate-y-4">
              <img 
                src="https://i.ibb.co/ycxgG5zB/School-Readiness.png" 
                alt="School Readiness" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skill Development */}
      <section className="px-4 md:px-0">
        <div className="flex items-center gap-3 mb-8">
          <BrainCircuit className="text-green-500 w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">Skill Development & Therapy</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Behavioral Therapy */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col bg-red-50 p-6 md:p-8 rounded-2xl border-b-8 border-red-400 hover:shadow-lg transition-all relative overflow-hidden group"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm relative z-10">
              <Smile size={28} className="text-red-600" />
            </div>
            <h3 className="text-xl font-black mb-2 text-red-900 relative z-10">Behavioral Therapy</h3>
            <p className="text-red-900/60 text-xs md:text-sm font-bold flex-grow relative z-10 pr-16">
              Expert behavioral modification programs focusing on positive reinforcement, emotional regulation, and social skill building in <strong>Medavakkam</strong>.
            </p>
            <div className="mt-6 pt-4 border-t border-red-200 relative z-10 pr-20">
              <span className="inline-flex items-center gap-1 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white bg-red-500 px-4 py-1.5 rounded-full">Behavioral Support</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 opacity-80 group-hover:opacity-100 transition-all duration-700 translate-x-2 translate-y-2">
              <img 
                src="https://i.ibb.co/mV4JDFJh/Child-Counseling.png" 
                alt="Child playing and engaging in behavioral therapy session" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* Special Education */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col bg-blue-50 p-6 md:p-8 rounded-2xl border-b-8 border-blue-400 hover:shadow-lg transition-all relative overflow-hidden group"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm relative z-10">
              <BookOpen size={28} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-black mb-2 text-blue-900 relative z-10">Special Education</h3>
            <p className="text-blue-900/60 text-xs md:text-sm font-bold flex-grow relative z-10 pr-16">
              Individualized Education Plans (IEP) tailored to each child's learning style, focusing on academic readiness and cognitive growth.
            </p>
            <div className="mt-6 pt-4 border-t border-blue-200 relative z-10 pr-20">
              <span className="inline-flex items-center gap-1 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white bg-blue-500 px-4 py-1.5 rounded-full">Academic Focus</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 opacity-40 group-hover:opacity-100 transition-all duration-700 translate-x-2 translate-y-2">
              <img 
                src="https://i.ibb.co/tPxqhwK7/Special-Education.png" 
                alt="Special Education" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>

          {/* Sensory Integration */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="flex flex-col bg-yellow-50 p-6 md:p-8 rounded-2xl border-b-8 border-yellow-400 hover:shadow-lg transition-all relative overflow-hidden group"
          >
            <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-sm relative z-10">
              <Puzzle size={28} className="text-yellow-600" />
            </div>
            <h3 className="text-xl font-black mb-2 text-yellow-900 relative z-10">Sensory Integration</h3>
            <p className="text-yellow-900/60 text-xs md:text-sm font-bold flex-grow relative z-10 pr-16">
              Specialized occupational therapy sessions to help children process sensory information and improve motor coordination in <strong>Navalur</strong>.
            </p>
            <div className="mt-6 pt-4 border-t border-yellow-200 relative z-10 pr-20">
              <span className="inline-flex items-center gap-1 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white bg-yellow-500 px-4 py-1.5 rounded-full">Sensory Support</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-24 h-24 opacity-40 group-hover:opacity-100 transition-all duration-700 translate-x-2 translate-y-2">
              <img 
                src="https://i.ibb.co/tp4yJ9JC/Sensory-Integration.png" 
                alt="Sensory Integration" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rainbow CTA */}
      <section className="mt-20 rounded-xl overflow-hidden relative shadow-2xl rainbow-cta-bg mx-4 md:mx-0">
        <div className="p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/20 organic-blob -z-10 animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/30 rounded-full -z-10"></div>
          <h2 className="text-2xl md:text-5xl font-black text-white mb-6 drop-shadow-md">
            Not sure where to start?
          </h2>
          <p className="text-white text-lg md:text-xl font-bold max-w-xl mx-auto mb-10">
            Let's have a quick 15-minute chat to find the perfect rainbow path for your child! ✨
          </p>
          <WhatsAppButton 
            phoneNumber="7305142720"
            className="bg-white !text-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-base md:text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <MessageCircle size={20} />
            Book Appointment
          </WhatsAppButton>
        </div>
      </section>
      </div>
    </div>
  );
}
