import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Baby, BrainCircuit, Heart, Sprout, MessageCircle } from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative pt-8 pb-12 md:py-20 rounded-3xl bg-white/40 backdrop-blur-sm border border-white/40 shadow-xl overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,1000 C300,800 400,200 1000,0" fill="none" stroke="url(#rainbow-grad)" strokeWidth="100" />
            <defs>
              <linearGradient id="rainbow-grad" x1="0%" x2="100%" y1="0%">
                <stop offset="0%" style={{ stopColor: '#FF0000' }} />
                <stop offset="20%" style={{ stopColor: '#FF7F00' }} />
                <stop offset="40%" style={{ stopColor: '#FFFF00' }} />
                <stop offset="60%" style={{ stopColor: '#00FF00' }} />
                <stop offset="80%" style={{ stopColor: '#0000FF' }} />
                <stop offset="100%" style={{ stopColor: '#8B00FF' }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Where Minds Begin To <span className="rainbow-text">Bloom</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-md leading-relaxed font-medium">
              Welcome to a world of wonder. We empower children through playful learning and vibrant supportive care, offering expert <strong>counselling in Chennai</strong> tailored for every unique rainbow journey.
            </p>
            <WhatsAppButton 
              phoneNumber="7305142720"
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-lg rounded-full shadow-[0_20px_40px_rgba(37,99,235,0.3)] hover:scale-105 hover:rotate-1 transition-all duration-300 active:scale-95"
            >
              Book via WhatsApp
            </WhatsAppButton>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
              <img 
                alt="Child development illustration" 
                className="w-full h-auto aspect-square object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVJYljDKWfMzP-LdsWijjlmOwPPqPlU7bM7GdsPHmqAebJtclJCZ3j0y9DTYE2BHaRcVjrL-99geCpuudnAG1jtKKNjUGkrbzmAqv6SeUtwfl6Aw8Fuc6xffNjWs7dsXM16ECGbFFZJW0PHpbfu1T8hGCB-KFeMArZwPZKQhzcE_z_iaa5PTEMnsMPLpzK2nJWfNP13xBn61oGf8TWQDK8yeGTLF9kY3oOKr0Fmqr31PrMsLiEi9Ur7P_Oi_R9vdhU6_dqDClOJOg" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob [animation-delay:2s]"></div>
            <Heart className="absolute -top-4 -left-4 text-red-500 opacity-50 w-12 h-12" />
            <Sprout className="absolute -bottom-4 -right-4 text-blue-500 opacity-50 w-12 h-12" />
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="space-y-12 pb-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">A Spectrum of Support</h2>
          <div className="h-2 w-32 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
            Magical interventions designed to spark joy and foster progress in every brilliant color of development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Child Care Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 rounded-[2.5rem] space-y-6 shadow-xl border-b-8 border-orange-400 group flex flex-col"
          >
            <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center group-hover:bg-orange-400 group-hover:rotate-12 transition-all">
              <Baby size={40} className="text-orange-500 group-hover:text-white" />
            </div>
            <div className="space-y-4 flex-grow">
              <h3 className="text-2xl font-black text-slate-900">Child Care</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Nurturing growth with the best <strong>child care in Vengadamangalam</strong>, providing personalized attention and holistic development strategies.
              </p>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/child-care" 
                className="px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-black text-sm hover:bg-slate-200 transition-colors uppercase tracking-wider text-center"
              >
                Explore More
              </Link>
              <WhatsAppButton 
                phoneNumber="7305142720"
                className="px-6 py-3 bg-green-500 text-white rounded-full font-black text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors uppercase tracking-wider"
              >
                <MessageCircle size={18} /> Message
              </WhatsAppButton>
            </div>
          </motion.div>

          {/* Counselling Card */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-white p-10 rounded-[2.5rem] space-y-6 shadow-xl border-b-8 border-blue-500 group flex flex-col"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center group-hover:bg-blue-500 group-hover:-rotate-12 transition-all">
              <BrainCircuit size={40} className="text-blue-500 group-hover:text-white" />
            </div>
            <div className="space-y-4 flex-grow">
              <h3 className="text-2xl font-black text-slate-900">Counselling</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Compassionate guidance for families, building deep bonds and a harmonious home sanctuary for mental wellness.
              </p>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/counselling" 
                className="px-6 py-3 bg-slate-100 text-slate-900 rounded-full font-black text-sm hover:bg-slate-200 transition-colors uppercase tracking-wider text-center"
              >
                Explore More
              </Link>
              <WhatsAppButton 
                phoneNumber="7305142720"
                className="px-6 py-3 bg-green-500 text-white rounded-full font-black text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors uppercase tracking-wider"
              >
                <MessageCircle size={18} /> Message
              </WhatsAppButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gradient-to-br from-white to-blue-50/30 rounded-[3rem] p-8 md:p-16 mb-12 relative overflow-hidden shadow-xl border border-white">
        <div className="relative z-10 space-y-12">
          <div className="text-center md:text-left space-y-4">
            <span className="text-blue-600 font-black uppercase tracking-widest text-sm">About Our Center</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Empowering Communities</h2>
            <div className="h-2 w-32 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full md:mx-0 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-slate-600 text-lg font-medium leading-relaxed">
            <div className="space-y-6">
              <p>
                MindSpring is the region's preferred destination for <strong>premier child care in Tambaram</strong> and holistic developmental support. Our mission is to bridge the gap in specialized pediatric services across Chennai's growing hubs.
              </p>
              <p>
                Whether you are seeking <strong>trusted counselling in Kelambakkam</strong> or developmental therapy in Guduvancherry, our multidisciplinary team is dedicated to providing evidence-based, compassionate care for every child.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                We extend our expert services to families in Chrompet and Sholinganallur, ensuring that high-quality mental health and educational support are accessible close to home. 
              </p>
              <p>
                From our base in Vengadamangalam to serving the community in Kandigai, we are committed to fostering an environment where every child's potential is recognized and nurtured through innovation and empathy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white rounded-[3rem] p-8 md:p-16 mb-20 relative overflow-hidden shadow-2xl border border-slate-100">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2.5rem] rotate-3 -z-10 opacity-20"></div>
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] bg-orange-500 flex items-center justify-center">
                <span className="text-8xl font-black text-slate-900">SJ</span>
              </div>
            </div>
          </div>
          <div className="flex-grow space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-primary font-black uppercase tracking-widest text-sm">Founder & Lead Therapist</span>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Swetha Jayakumar & <br className="hidden md:block" /> Our Mission</h3>
            </div>
            <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              Led by Swetha Jayakumar, MindSpring is dedicated to nurturing the unique potential within every child. Our mission is to provide a vibrant, safe space where children and families find the support they need to navigate development with joy and resilience. 
            </p>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic">
              "We believe in a holistic approach that honors every rainbow journey, ensuring no child feels left behind in their developmental milestone."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
