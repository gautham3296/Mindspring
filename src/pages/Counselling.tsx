import { motion } from 'motion/react';
import { Heart, Users, Sparkles, MessageCircle, Calendar, Smile, ArrowRight, BrainCircuit } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Counselling() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative px-6 py-20 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 rainbow-bg opacity-10"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-tertiary/20 organic-blob animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-secondary/20 organic-blob animate-bounce [animation-duration:5000ms]"></div>
        
        <div className="max-w-screen-xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full font-bold text-sm uppercase tracking-wider">
              <Heart size={16} fill="currentColor" />
              Joyful Wellness
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
              Nurturing Growth, <br /><span className="text-primary bg-gradient-to-r from-primary via-orange-400 to-tertiary bg-clip-text text-transparent">Supporting Hearts.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed font-medium">
              At The MindSpring, we celebrate the unique brilliance of every child. Providing professional <strong>counselling in Guduvancherry</strong>, our services help families blossom through playful, supportive care.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton 
                phoneNumber="7305142720"
                className="px-8 py-4 bg-primary text-white rounded-full font-extrabold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
                alt="Counselling session" 
                className="w-full h-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJYljDKWfMzP-LdsWijjlmOwPPqPlU7bM7GdsPHmqAebJtclJCZ3j0y9DTYE2BHaRcVjrL-99geCpuudnAG1jtKKNjUGkrbzmAqv6SeUtwfl6Aw8Fuc6xffNjWs7dsXM16ECGbFFZJW0PHpbfu1T8hGCB-KFeMArZwPZKQhzcE_z_iaa5PTEMnsMPLpzK2nJWfNP13xBn61oGf8TWQDK8yeGTLF9kY3oOKr0Fmqr31PrMsLiEi9Ur7P_Oi_R9vdhU6_dqDClOJOg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Bento Grid */}
      <section className="px-6 py-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Child Counseling */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 bg-blue-50/60 border-2 border-blue-200 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 rotate-3 group-hover:rotate-0 transition-transform">
                <Smile size={32} className="text-blue-500" />
              </div>
              <h2 className="text-3xl font-black text-blue-900 mb-4">Child Counseling</h2>
              <p className="text-blue-900/70 max-w-md leading-relaxed font-medium">
                Play-based therapy where magic meets healing. We offer specialized <strong>therapeutic support in Chennai</strong>, using games and art to help little ones express big feelings.
              </p>
            </div>
            <div className="mt-8 flex gap-4 relative z-10">
              <span className="px-5 py-2 bg-blue-500 text-white rounded-full text-xs font-bold uppercase tracking-wider">Ages 3-10</span>
              <span className="px-5 py-2 bg-white text-blue-500 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">Creative Play</span>
            </div>
          </motion.div>

          {/* Family Bonding */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-4 bg-primary/5 border-2 border-primary/20 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 -rotate-3 group-hover:rotate-0 transition-transform">
                <Users size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-black text-primary mb-4">Family Bonding</h2>
              <p className="text-primary/70 text-sm leading-relaxed font-medium">
                Strengthening heart-to-heart connections. We provide expert <strong>family guidance in Kandigai</strong> to help you build bridges of understanding and joy.
              </p>
            </div>
            <WhatsAppButton 
              phoneNumber="7305142720"
              className="mt-6 flex items-center text-primary font-bold gap-2 group"
            >
              Message on WhatsApp <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </WhatsAppButton>
          </motion.div>

          {/* Youth Guidance */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-5 bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 rotate-6 group-hover:rotate-0 transition-transform">
                <BrainCircuit size={32} className="text-indigo-500" />
              </div>
              <h2 className="text-2xl font-black text-indigo-900 mb-4">Youth Guidance</h2>
              <p className="text-indigo-900/70 text-sm leading-relaxed font-medium">
                A cool, safe space for teens to navigate identity, pressure, and the digital world with confidence.
              </p>
            </div>
            <div className="mt-6 flex -space-x-3">
              <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1xr8Rr0I1RX6w8vdQS2CvYs0F-lQ3i59zB5Nb6T7_NQorsxYn4JhdHS-34jDhGtEPClgXoecxQ_4J71JxB3DZI-HS3EClWI7HeMueriZCLgnva39GWPXDvvQ6iweLO9yHnqud4IbQukyLSHI2v7GR0A9V9NNbCeixMQkZ2JLHAW9SWmRNgKRjbd3R0iLczvANWKJoQugSd4B8SyThQy2B9K2vWGjdFZgW_zxej4X01Ef8mVVGZgbb5XoFaG3H9CmJ9jhwHZjRIDA" referrerPolicy="no-referrer" />
              </div>
              <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVI3glBIyO9GCIdzV8JsFZSLGd_-7H_8iByhWCnPa1uIhlacUa8ubNhlbhBehJ4ibNqRlCSmBzGsdfS1QR8WXWjFYgbf19u9xjS9jvxAS_mlLusR4ZI9vGkjVa2xYoSDS8IKB28eHgT04C7-caMTPJVXaJHJr12Z7B6WFt02up4JFz4h2TE2pJ09Es0uenyza2yPE8v3TDiFl5ldK5Top7Bx9n9Lccd0eRO4OBJbFcKzSNPIPjXGNFWCy8DPHvd4w5HbyjoT834ok" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>

          {/* Parenting Magic */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-7 bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center group"
          >
            <div className="flex-1">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={32} className="text-yellow-600" />
              </div>
              <h2 className="text-3xl font-black text-yellow-900 mb-4">Parenting Magic</h2>
              <p className="text-yellow-900/70 leading-relaxed font-medium">
                Empowering you with gentle tools and heartfelt insights to raise happy, resilient humans.
              </p>
            </div>
            <div className="w-full md:w-48 aspect-square rounded-3xl overflow-hidden flex-shrink-0 shadow-xl border-4 border-white rotate-2 group-hover:rotate-0 transition-all">
              <img 
                alt="Parenting" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhgJgabbmrMCCdkLLDj0wQi8mtPejIhnbX_iP2tZq-FT0Gp8-hOqfjcogPbJk4hDvfjGoO0Tv1uazwZHQ8MByB-zVuem2iZeSzCGuU3c7rnxcej_QinAZ5ed7eaHnONzGf64HoxMm4J_4EM36EQcPoyuO4ojMRuha3mVPESBj9i7gIItAhW-TlzdS058INXuEYqT3WGP1iIbPHpRSZEoGfsDaPzS9bhqByfFMpOBAqxZtawCS4_SnzsyemFwij80Xx1ga9OE8mWwE"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 rounded-xl overflow-hidden relative shadow-2xl rainbow-cta-bg">
        <div className="p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-white/20 organic-blob -z-10 animate-bounce"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-400/30 rounded-full -z-10"></div>
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-md">Ready for more joy?</h3>
          <p className="text-white text-lg font-bold max-w-xl mx-auto mb-10">
            Your family's happiness is our heartbeat. Schedule a friendly 15-minute chat to see how we can bloom together.
          </p>
          <WhatsAppButton 
            phoneNumber="7305142720"
            className="px-12 py-6 bg-[#25D366] text-white rounded-full font-black text-xl shadow-[0_10px_0_#128C7E] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
