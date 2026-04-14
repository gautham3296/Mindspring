import { motion } from 'motion/react';
import { Heart, Users, Sparkles, MessageCircle, Calendar, Smile, ArrowRight, BrainCircuit } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Counseling() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-8">
      <div className="space-y-12 md:space-y-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-4 md:px-6 py-12 md:py-20 overflow-hidden rounded-[2rem] md:rounded-3xl">
        <div className="absolute inset-0 rainbow-bg opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-tertiary/20 organic-blob animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/20 organic-blob animate-bounce [animation-duration:5000ms]"></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-primary/10 text-primary rounded-full font-bold text-xs md:text-sm uppercase tracking-wider">
              <Heart size={16} fill="currentColor" />
              Joyful Wellness
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Nurturing Growth, <br /><span className="text-primary bg-gradient-to-r from-primary via-orange-400 to-tertiary bg-clip-text text-transparent">Supporting Hearts.</span>
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
              At The MindSpring, we celebrate the unique brilliance of every child. Providing professional <strong>counseling in Guduvanchery</strong>, our services help families in <strong>Potheri and Maraimalai Nagar</strong> blossom through playful, supportive care.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton 
                phoneNumber="7305142720"
                className="px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-full font-extrabold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              />
            </div>
          </div>
          <div className="relative hidden md:block">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-tertiary rounded-full flex items-center justify-center shadow-xl"
            >
              <Sparkles className="text-white w-10 h-10" />
            </motion.div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-3">
              <img 
                alt="Counseling session" 
                className="w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJYljDKWfMzP-LdsWijjlmOwPPqPlU7bM7GdsPHmqAebJtclJCZ3j0y9DTYE2BHaRcVjrL-99geCpuudnAG1jtKKNjUGkrbzmAqv6SeUtwfl6Aw8Fuc6xffNjWs7dsXM16ECGbFFZJW0PHpbfu1T8hGCB-KFeMArZwPZKQhzcE_z_iaa5PTEMnsMPLpzK2nJWfNP13xBn61oGf8TWQDK8yeGTLF9kY3oOKr0Fmqr31PrMsLiEi9Ur7P_Oi_R9vdhU6_dqDClOJOg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Bento Grid */}
      <section className="px-4 md:px-6 py-8 md:py-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Child Counseling */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 bg-blue-50/60 border-2 border-blue-200 rounded-[2rem] md:rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 transition-transform">
                <Smile size={28} className="text-blue-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-blue-900 mb-4">Child Counseling</h2>
              <p className="text-blue-900/70 max-w-md leading-relaxed font-medium text-sm md:text-base">
                Play-based therapy where magic meets healing. We offer specialized <strong>therapeutic support in Chennai</strong>, serving <strong>Chromepet and Kovilancheri</strong>, using games and art to help little ones express big feelings.
              </p>
            </div>
            <div className="mt-8 flex gap-3 md:gap-4 relative z-10">
              <span className="px-4 md:px-5 py-2 bg-blue-500 text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider">Ages 3-10</span>
              <span className="px-4 md:px-5 py-2 bg-white text-blue-500 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-sm">Creative Play</span>
            </div>
          </motion.div>

          {/* Family Bonding */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 bg-primary/5 border-2 border-primary/20 rounded-[2rem] md:rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 -rotate-3 group-hover:rotate-0 transition-transform">
                <Users size={28} className="text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-primary mb-4">Family Bonding</h2>
              <p className="text-primary/70 text-xs md:text-sm leading-relaxed font-medium">
                Strengthening heart-to-heart connections. We provide expert <strong>family guidance in Ottiyambakkam and Sithalapakkam</strong> to help you build bridges of understanding and joy.
              </p>
            </div>
            <WhatsAppButton 
              phoneNumber="7305142720"
              className="mt-6 flex items-center text-primary font-bold gap-2 group text-sm md:text-base"
            >
              Message on WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </WhatsAppButton>
          </motion.div>

          {/* Adolescent Counseling */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-5 bg-indigo-50 border-2 border-indigo-200 rounded-[2rem] md:rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 rotate-6 group-hover:rotate-0 transition-transform">
                <BrainCircuit size={28} className="text-indigo-500" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-indigo-900 mb-4">Adolescent Counseling</h2>
              <p className="text-indigo-900/70 text-xs md:text-sm leading-relaxed font-medium">
                A safe, non-judgmental space for teens to navigate identity, peer pressure, and emotional challenges with confidence in <strong>Madambakkam and Nedungundram</strong>.
              </p>
            </div>
            <div className="mt-6 flex -space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white overflow-hidden shadow-md bg-indigo-200 flex items-center justify-center text-white font-bold">Y</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white overflow-hidden shadow-md bg-indigo-300 flex items-center justify-center text-white font-bold">G</div>
            </div>
          </motion.div>

          {/* Marital & Family Counseling */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-7 bg-yellow-50 border-2 border-yellow-200 rounded-[2rem] md:rounded-3xl p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-center group"
          >
            <div className="flex-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={28} className="text-yellow-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-yellow-900 mb-4">Marital & Family</h2>
              <p className="text-yellow-900/70 leading-relaxed font-medium text-sm md:text-base">
                Supporting couples and families in building healthy communication, resolving conflicts, and strengthening emotional bonds for families in <strong>Velachery, Pallikaranai, and Thalambur</strong>.
              </p>
            </div>
            <div className="w-full md:w-48 aspect-square rounded-[2rem] md:rounded-3xl overflow-hidden flex-shrink-0 shadow-xl border-4 border-white rotate-2 group-hover:rotate-0 transition-all">
              <img 
                alt="Family Counseling" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhgJgabbmrMCCdkLLDj0wQi8mtPejIhnbX_iP2tZq-FT0Gp8-hOqfjcogPbJk4hDvfjGoO0Tv1uazwZHQ8MByB-zVuem2iZeSzCGuU3c7rnxcej_QinAZ5ed7eaHnONzGf64HoxMm4J_4EM36EQcPoyuO4ojMRuha3mVPESBj9i7gIItAhW-TlzdS058INXuEYqT3WGP1iIbPHpRSZEoGfsDaPzS9bhqByfFMpOBAqxZtawCS4_SnzsyemFwij80Xx1ga9OE8mWwE"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stress Management Section */}
      <section className="px-4 md:px-6 py-8 md:py-12 max-w-screen-xl mx-auto">
        <div className="bg-red-50 border-2 border-red-100 rounded-[2rem] md:rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
              <Calendar size={32} className="text-red-500" />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-red-900">Stress & Anxiety Management</h2>
              <p className="text-red-900/70 font-medium leading-relaxed">
                Specialized counseling for managing stress, anxiety, and emotional regulation. We provide evidence-based strategies to help you and your child find calm and resilience in daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 rounded-xl overflow-hidden relative shadow-2xl rainbow-cta-bg mx-4 md:mx-0">
        <div className="p-8 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/20 organic-blob -z-10 animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/30 rounded-full -z-10"></div>
          <h2 className="text-2xl md:text-5xl font-black text-white mb-6 drop-shadow-md">Ready for more joy?</h2>
          <p className="text-white text-base md:text-lg font-bold max-w-xl mx-auto mb-10">
            Your family's happiness is our heartbeat. Schedule a friendly 15-minute chat to see how we can bloom together.
          </p>
          <WhatsAppButton 
            phoneNumber="7305142720"
            className="px-8 md:px-12 py-4 md:py-6 bg-white !text-primary rounded-full font-black text-lg md:text-xl shadow-2xl hover:scale-110 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            <MessageCircle size={24} />
            Book Appointment
          </WhatsAppButton>
        </div>
      </section>
      </div>
    </div>
  );
}
