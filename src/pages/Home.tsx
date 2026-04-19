import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Baby, 
  Brain,
  BrainCircuit, 
  Heart, 
  Sprout, 
  MessageCircle, 
  Puzzle, 
  BookOpen, 
  Star, 
  Eye, 
  Target, 
  CheckCircle2,
  Users,
  Smile,
  ArrowRight,
  Activity,
  HandHelping,
  Sparkle,
  FlameKindling
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const carouselImages = [


  "https://i.ibb.co/C5d59HPM/Whats-App-Image-2026-04-16-at-11-33-22-AM.jpg",
  "https://i.ibb.co/d0DqBFG7/Whats-App-Image-2026-04-16-at-11-31-56-AM.jpg",
  "https://i.ibb.co/d41nGtp0/Whats-App-Image-2026-04-16-at-11-31-45-AM.jpg",
  "https://i.ibb.co/ktFbTxR/Whats-App-Image-2026-04-16-at-11-31-35-AM.jpg",
  "https://i.ibb.co/j9SJ6HR4/Whats-App-Image-2026-04-16-at-11-24-48-AM.jpg",


];

function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={carouselImages[index]}
          alt="Happy children engaging in therapeutic activities at The MindSpring"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${i === index ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "The MindSpring | Premier Child Development Centre Chennai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Welcome to The MindSpring Child Development Centre. Expert Speech Therapy, Occupational Therapy, and Counseling for children in Sholinganallur, Chennai.");
    }
  }, []);

  return (
    <div className="space-y-12 md:space-y-20 pb-20 overflow-x-hidden relative">
      {/* Floating Child-themed decorations */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[15%] left-[5%] w-24 h-24 md:w-40 md:h-40 opacity-10 animate-float">
          <img src="https://i.ibb.co/ySJWXmD/baby-block.png" alt="" className="w-full h-full object-contain rotate-12" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute top-[40%] right-[5%] w-20 h-20 md:w-32 md:h-32 opacity-15 animate-float [animation-delay:-5s]">
          <img src="https://i.ibb.co/7XvM2S8/child-drawing.png" alt="" className="w-full h-full object-contain -rotate-6" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute bottom-[30%] left-[10%] w-16 h-16 md:w-28 md:h-28 opacity-10 animate-float [animation-delay:-10s]">
          <img src="https://i.ibb.co/LkyD68x/child-care.png" alt="" className="w-full h-full object-contain rotate-45" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute bottom-[10%] right-[15%] w-24 h-24 md:w-40 md:h-40 opacity-15 animate-float [animation-delay:-15s]">
          <img src="https://i.ibb.co/ySJWXmD/baby-block.png" alt="" className="w-full h-full object-contain -rotate-12" referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Carousel Section */}
      <section className="relative w-full">
        <Carousel />
      </section>

      {/* About Us Section */}
      <section id="about" className="px-4 md:px-8 max-w-screen-xl mx-auto pt-8 text-center md:text-left">
        <div className="bg-white/40 backdrop-blur-lg rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">About Us</h2>
              <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                Holistic Child Development Centre in Chennai
              </h1>
              <div className="h-2 w-24 bg-primary rounded-full mx-auto md:mx-0"></div>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                <p>
                  The MindSpring Holistic Child Development Centre in Chennai is a leading therapy center serving families in <strong>Tambaram</strong>, offering expert services in occupational therapy, speech therapy, behavioral therapy, special education, and psychological counseling for children.
                </p>
                <p>
                  We specialize in early intervention and management of autism (ASD), ADHD, developmental delay, speech and language disorders, sensory processing issues, and learning disabilities.
                </p>
                <div className="pt-4">
                  <WhatsAppButton phoneNumber="7305142720" className="bg-green-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all text-sm md:text-base mx-auto md:mx-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section id="services" className="px-4 md:px-8 max-w-screen-xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-primary font-black uppercase tracking-widest text-[10px] md:text-xs">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            Our Specialized Services
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            At The MindSpring Holistic Child Development Centre, we deliver comprehensive, multidisciplinary therapeutic services across <strong>Medavakkam</strong>, designed to support developmental, behavioral, communication, and learning challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Occupational Therapy */}
          <MinimalServiceCard 
            title="Occupational Therapy"
            icon={<Activity size={20} />}
            mainImage="https://i.ibb.co/KpPSY7BC/Occupation-Theraphy.png"
            points={[
              "Sensory Processing & Integration",
              "Fine & Gross Motor Skills",
              "Attention & Regulation",
              "Feeding & Oral Sensory",
              "Daily Living Independence"
            ]}
            color="orange"
          />

          {/* Speech Therapy */}
          <MinimalServiceCard 
            title="Speech Therapy"
            icon={<MessageCircle size={20} />}
            mainImage="https://i.ibb.co/PzMkqf7H/Speech-Theraphy.png"
            points={[
              "Articulation & Phonology",
              "Fluency & Stuttering",
              "Speech & Language Delay",
              "Social Communication",
              "Receptive Disorders"
            ]}
            color="blue"
          />

          {/* Academic Support */}
          <MinimalServiceCard 
            title="Academic Support"
            icon={<BookOpen size={20} />}
            mainImage="https://i.ibb.co/tPxqhwK7/Special-Education.png"
            points={[
              "Pre-Academic Readiness",
              "Dyslexia & Dysgraphia",
              "Cognitive Development",
              "Learning Disability",
              "School Readiness"
            ]}
            color="green"
          />

          {/* Behavioral/Psy */}
          <MinimalServiceCard 
            title="Psychology Services"
            icon={<Puzzle size={20} />}
            mainImage="https://i.ibb.co/TDCZ47W0/Stress-Anxiety.png"
            points={[
              "Child & Adolescent Counseling",
              "Behavior Modification",
              "Stress & Anxiety Support",
              "Parent Guidance",
              "Social Skills Training"
            ]}
            color="purple"
          />
        </div>

        {/* Early Intervention Highlight */}
        <div className="bg-slate-50/50 border border-slate-200 rounded-[2.5rem] p-8 md:p-16 text-center space-y-8 relative overflow-hidden group shadow-sm backdrop-blur-md">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
          
          <div className="flex flex-col items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="https://i.ibb.co/j9SJ6HR4/Whats-App-Image-2026-04-16-at-11-24-48-AM.jpg" 
                alt="Happy children participating in early intervention therapy session at The MindSpring" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-6">
              <p className="text-primary font-black text-xs uppercase tracking-widest">Premium Program</p>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">Daycare & Early Intervention</h3>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base font-bold leading-relaxed">
                A safe, structured & development-focused environment for children with developmental delays, autism (ASD), or ADHD. We focus on play-based learning and multi-disciplinary stimulation.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            {["Developmental Screening", "Individualized Plans", "Sensory Stimulation", "Social Interaction"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-xs font-black uppercase tracking-tight shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="pt-6 flex justify-center">
            <WhatsAppButton phoneNumber="7305142720" className="border-2 border-primary text-primary px-10 py-3 rounded-full font-black text-sm md:text-base hover:bg-primary hover:text-white transition-all shadow-sm" />
          </div>
        </div>
      </section>

      {/* Why MindSpring Section */}
      <section id="why-mindspring" className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white shadow-xl">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 flex items-center gap-3">
              <Star className="text-yellow-500 fill-yellow-500" /> Why MindSpring
            </h2>
            <p className="text-slate-500 font-bold text-sm md:text-base mb-4">
              The trusted choice for parents in <strong>Sholinganallur</strong> seeking clinical excellence.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {[
                "Comprehensive Multidisciplinary Care under one roof",
                "Personalized, Child-Centric Interventions",
                "Evidence-Based Clinical Excellence",
                "Experienced & Compassionate Professionals",
                "Safe, Structured & Child-Friendly Environment",
                "Strong Parent Collaboration & Guidance",
                "Outcome-Driven Therapeutic Programs"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-white/50 p-3 md:p-4 rounded-2xl border border-white font-bold text-slate-700 text-sm md:text-base">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="bg-white/40 backdrop-blur-lg rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl border border-white/20 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="flex-grow space-y-6 text-left">
              <div className="space-y-2">
                <p className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Swetha Jayakumar</p>
                <h2 className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">Founder & Consultant Child Psychologist</h2>
                <h3 className="text-base md:text-lg font-bold text-slate-500">Holistic Child Development Specialist</h3>
              </div>
              <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
              <div className="space-y-4 text-slate-600 text-base md:text-lg font-medium leading-relaxed">
                <p>
                  Swetha Jayakumar is a compassionate child psychologist dedicated to supporting children and families through understanding, care, and evidence-based intervention.
                </p>
                <p>
                  She specializes in early intervention, behavioral therapy, and individualized developmental support, helping each child build communication, confidence, social connection, and independence in their own unique way.
                </p>
                
                <p>
                  With experience in working with children with Autism (ASD), ADHD, developmental delays, sensory challenges, and learning difficulties, she focuses on seeing beyond the diagnosis—understanding every child’s strengths, needs, and potential.
                </p>
                <p>
                  As the Founder of The MindSpring Child Development Centre, she follows a holistic, multidisciplinary approach, working closely with parents to guide, support, and empower families throughout their child’s developmental journey in <strong>Chromepet</strong>.
                </p>
                <p>
                  She is deeply committed to creating a safe, nurturing, and positive environment, where every child feels understood, supported, and encouraged to grow with confidence and reach their fullest potential.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div id="vision" className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-3">
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <Eye className="text-blue-500" size={20} /> Our Vision
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 font-bold leading-relaxed">
                      To be a leading child development center recognized for excellence in delivering holistic, evidence-based interventions, empowering children to achieve their highest quality of life.
                    </p>
                  </div>
                  <div id="mission" className="bg-primary/5 p-6 rounded-2xl border border-primary/10 space-y-3">
                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      <Target className="text-red-500" size={20} /> Our Mission
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 font-bold leading-relaxed">
                      To provide comprehensive, individualized, and multidisciplinary therapy services through a child-centered approach, focusing on enhancing developmental and communication outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8 flex justify-center">
                <WhatsAppButton phoneNumber="7305142720" className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black shadow-lg hover:scale-105 transition-all text-sm md:text-base" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book-now" className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="rainbow-cta-bg rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-center text-white space-y-6 md:space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 organic-blob -z-10 animate-pulse"></div>
          <h2 className="text-3xl md:text-6xl font-black drop-shadow-lg">Book an Appointment Today</h2>
          <p className="text-lg md:text-2xl font-bold max-w-2xl mx-auto opacity-90">
            Providing specialized care for children in <strong>Velachery</strong>. Let's bloom together!
          </p>
          <WhatsAppButton 
            phoneNumber="7305142720"
            className="bg-white !text-primary px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-lg md:text-2xl shadow-2xl hover:scale-110 transition-all inline-flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Message on WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}

function MinimalServiceCard({ icon, title, points, color, mainImage }: any) {
  const colorClasses: any = {
    orange: "border-orange-100 bg-orange-50/40",
    blue: "border-blue-100 bg-blue-50/40",
    green: "border-green-100 bg-green-50/40",
    purple: "border-purple-100 bg-purple-50/40",
  };

  const iconColors: any = {
    orange: "text-orange-500",
    blue: "text-blue-500",
    green: "text-green-500",
    purple: "text-purple-500",
  };

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className={`p-6 md:p-8 rounded-[3rem] border-[3px] ${colorClasses[color]} flex flex-col gap-6 group transition-all duration-500 hover:shadow-2xl hover:border-primary/40 backdrop-blur-md relative overflow-hidden h-full`}
    >
      <div className="space-y-4 relative z-10 pr-12">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-white shadow-sm ${iconColors[color]}`}>
            {icon}
          </div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-tight">{title}</h3>
        </div>
        
        <ul className="space-y-3">
          {points.map((p: string, i: number) => (
            <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm font-bold text-slate-700 leading-snug">
              <Sparkle size={16} className={`${iconColors[color]} mt-0.5 flex-shrink-0 animate-pulse`} />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-2 -right-2 w-32 h-32 md:w-36 md:h-36 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
        <img 
          src={mainImage} 
          alt={`Illustration of ${title} services for children at The MindSpring Centre`} 
          className="w-full h-full object-contain relative z-0"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="mt-auto w-full pt-4 relative z-10 pr-24">
        <WhatsAppButton 
          phoneNumber="7305142720" 
          className="w-full md:w-auto text-[10px] font-black uppercase tracking-wider bg-white text-primary px-5 py-2.5 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all text-center border border-slate-100"
        >
          Message
        </WhatsAppButton>
      </div>
    </motion.div>
  );
}
