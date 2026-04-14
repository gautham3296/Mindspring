import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Baby, 
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
  ArrowRight
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const carouselImages = [


  "https://i.ibb.co/gZyztbgL/Create-image-of-202604141207-1.jpg",
"https://i.ibb.co/SwzjsTHH/Create-image-of-202604141207.jpg",
"https://i.ibb.co/zHVpHycC/Create-a-image-202604141205.jpg",
"https://i.ibb.co/LXjdKWwf/Create-image-of-202604141201-1.jpg",
"https://i.ibb.co/TBsnfm6m/Create-image-of-202604141201.jpg",

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
    <div className="relative w-full aspect-video overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={carouselImages[index]}
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
  return (
    <div className="space-y-12 md:space-y-20 pb-20 overflow-x-hidden">
      {/* Carousel Section */}
      <section className="relative w-full">
        <Carousel />
      </section>

      {/* About Us Section */}
      <section id="about" className="px-4 md:px-8 max-w-screen-xl mx-auto pt-8">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">About Us</h2>
              <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                Holistic Child Development Centre in Chennai
              </p>
              <div className="h-2 w-24 bg-primary rounded-full"></div>
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                <p>
                  The MindSpring Holistic Child Development Centre in Chennai is a leading therapy center serving families in <strong>Tambaram, Urapakkam, Vandalur, Selaiyur, and Camp Road</strong>, offering expert services in occupational therapy, speech therapy, behavioral therapy, special education, and psychological counseling for children.
                </p>
                <p>
                  We specialize in early intervention and management of autism (ASD), ADHD, developmental delay, speech and language disorders, sensory processing issues, and learning disabilities through individualized, evidence-based therapy programs.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-sm md:text-base">
              <p>
                Our multidisciplinary team follows a holistic and child-centered approach, focusing on improving communication, behavior, sensory regulation, academic skills, and daily living independence.
              </p>
              <p>
                At The MindSpring, we provide a safe, structured, and child-friendly environment, ensuring every child achieves their best developmental outcomes and builds confidence for a successful future.
              </p>
              <div className="pt-4">
                <WhatsAppButton phoneNumber="7305142720" className="bg-green-500 text-white px-6 md:px-8 py-3 rounded-full font-bold shadow-lg hover:bg-green-600 transition-all text-sm md:text-base" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section id="services" className="px-4 md:px-8 max-w-screen-xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <BrainCircuit className="text-primary w-10 h-10 md:w-12 md:h-12" /> Our Specialized Services
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg font-medium">
            At The MindSpring Holistic Child Development Centre, we deliver comprehensive, multidisciplinary therapeutic services to children across <strong>Mambakkam, Ponmar, Rathinamangalam, Medavakkam, and Perumbakkam</strong>, designed to support developmental, behavioral, communication, and learning challenges.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Our interventions are evidence-based, goal-oriented, and individually tailored, ensuring measurable progress and long-term outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Occupational Therapy */}
          <ServiceCard 
            icon={<Puzzle className="text-orange-500" />}
            title="Occupational Therapy"
            subtitle="Enhancing Functional Independence & Sensory Integration"
            description="Our Occupational Therapy program is focused on developing a child’s ability to perform age-appropriate daily activities by addressing sensory processing, motor coordination, and self-regulation challenges."
            points={[
              "Sensory Processing & Integration Dysfunction",
              "Fine & Gross Motor Skill Development",
              "Attention, Regulation & Adaptive Behavior",
              "Activities of Daily Living (ADL) Training",
              "Feeding & Oral Sensory Intervention",
              "Enuresis (Bladder Control) Management"
            ]}
            outcome="Improved independence, sensory regulation, and functional performance."
            color="orange"
          />

          {/* Speech Therapy */}
          <ServiceCard 
            icon={<MessageCircle className="text-blue-500" />}
            title="Speech & Language Therapy"
            subtitle="Advancing Communication & Language Development"
            description="Our Speech & Language Therapy services are designed to support children in developing clear speech, functional communication, and language comprehension."
            points={[
              "Speech Sound & Articulation Disorders",
              "Fluency Disorders (Stuttering)",
              "Speech & Language Delay",
              "Receptive & Expressive Language Disorders",
              "Social Communication (Pragmatic) Difficulties",
              "Voice & Oral-Motor Disorders"
            ]}
            outcome="Effective communication, improved speech clarity, and language proficiency."
            color="blue"
          />

          {/* Academic Support */}
          <ServiceCard 
            icon={<BookOpen className="text-green-500" />}
            title="Academic & Learning Support"
            subtitle="Strengthening Cognitive & Academic Skills"
            description="We provide structured interventions to support children with learning differences and academic challenges, enabling them to achieve their full educational potential."
            points={[
              "Pre-Academic Readiness Programs",
              "Specific Learning Disorders (Dyslexia, Dysgraphia, Dyscalculia)",
              "Developmental Coordination Disorder (Dyspraxia)",
              "Nonverbal Learning Difficulties"
            ]}
            outcome="Enhanced learning ability, academic performance, and cognitive skills."
            color="green"
          />

          {/* Daycare & Early Intervention */}
          <ServiceCard 
            icon={<Baby className="text-pink-500" />}
            title="Daycare & Early Intervention Program"
            subtitle="A Safe, Structured & Development-Focused Environment"
            description="Our Daycare & Early Intervention Program provides a nurturing and stimulating environment where children receive both care and structured developmental support during their early years."
            points={[
              "Developmental Screening & Early Assessment",
              "Individualized Early Intervention Plans",
              "Structured Daily Routine",
              "Play-Based Learning & Therapy Activities",
              "Speech & Language Stimulation",
              "Sensory Integration & Motor Development",
              "Social Interaction & Group Engagement",
              "School Readiness Skills",
              "Parent Guidance & Support"
            ]}
            outcome="Improved developmental milestones, communication, social skills, and overall holistic development."
            color="pink"
            extraInfo={{
              label: "Ideal For:",
              text: "Children with developmental delays, children needing early intervention, and working parents seeking structured daycare."
            }}
          />

          {/* Behavioral Services */}
          <ServiceCard 
            icon={<Smile className="text-purple-500" />}
            title="Behavioral & Psychological Services"
            subtitle="Supporting Emotional Well-being & Behavioral Regulation"
            description="Our psychological services are aimed at promoting mental health, emotional stability, and positive behavioral outcomes through structured therapeutic approaches."
            points={[
              "Individual Psychotherapy",
              "Child & Adolescent Counseling",
              "Parent Counseling & Psychoeducation",
              "Family & Marital Counseling",
              "Behavioral Therapy & Modification",
              "Stress, Anxiety & Emotional Regulation",
              "Social Skills Training"
            ]}
            outcome="Emotional resilience, behavioral improvement, and healthy relationships."
            color="purple"
          />

          {/* Our Approach */}
          <div id="approach" className="bg-slate-900 text-white p-8 rounded-[2.5rem] space-y-6 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-black flex items-center gap-2">
                <Sprout className="text-primary" /> Our Approach
              </h3>
              <p className="text-slate-400 text-sm font-medium">
                We adopt a holistic, child-centered, and interdisciplinary approach:
              </p>
              <ul className="space-y-2">
                {[
                  "Individualized Education Plans (IEP)",
                  "Evidence-Based Clinical Practices",
                  "Multidisciplinary Team Collaboration",
                  "Play-Based & Functional Therapy Models",
                  "Continuous Assessment & Outcome Tracking",
                  "Active Parent Involvement & Training"
                ].map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 size={16} className="text-primary flex-shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <WhatsAppButton phoneNumber="7305142720" className="w-full bg-primary py-3 rounded-full font-black text-center" />
          </div>
        </div>
      </section>

      {/* Why MindSpring Section */}
      <section id="why-mindspring" className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-4xl font-black text-slate-900 flex items-center gap-3">
                <Star className="text-yellow-500 fill-yellow-500" /> Why MindSpring
              </h2>
              <p className="text-slate-500 font-bold text-sm md:text-base mb-4">
                The trusted choice for parents in <strong>Sholinganallur, Navalur, Kelambakkam, Guduvanchery, and Potheri</strong> seeking clinical excellence.
              </p>
              <ul className="grid gap-3 md:gap-4">
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
            <div className="space-y-6 md:space-y-8">
              <div id="vision" className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 space-y-4">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Eye className="text-blue-500" /> Our Vision
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                  To be a leading child development center recognized for excellence in delivering holistic, evidence-based interventions, empowering children to achieve their highest level of independence, confidence, and quality of life.
                </p>
              </div>
              <div id="mission" className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-100 space-y-4">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Target className="text-red-500" /> Our Mission
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                  To provide comprehensive, individualized, and multidisciplinary therapy services through a child-centered approach, focusing on enhancing developmental, behavioral, communication, and functional outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[2rem] md:rounded-[2.5rem] rotate-3 -z-10 opacity-20"></div>
                <div className="rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl aspect-[4/5] bg-orange-500 flex items-center justify-center">
                  <span className="text-6xl md:text-8xl font-black text-slate-900">SJ</span>
                </div>
              </div>
            </div>
            <div className="flex-grow space-y-6 text-left">
              <div className="space-y-2">
                <h2 className="text-primary font-black uppercase tracking-widest text-xs md:text-sm">Founder & Consultant Child Psychologist</h2>
                <p className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Swetha Jayakumar</p>
                <p className="text-base md:text-lg font-bold text-slate-500">Holistic Child Development Specialist</p>
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
                  As the Founder of The MindSpring Child Development Centre, she follows a holistic, multidisciplinary approach, working closely with parents to guide, support, and empower families throughout their child’s developmental journey in <strong>Maraimalai Nagar, Chromepet, Kovilancheri, Ottiyambakkam, and Sithalapakkam</strong>.
                </p>
                <p>
                  She is deeply committed to creating a safe, nurturing, and positive environment, where every child feels understood, supported, and encouraged to grow with confidence and reach their fullest potential.
                </p>
              </div>
              <WhatsAppButton phoneNumber="7305142720" className="bg-primary text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-black shadow-lg hover:scale-105 transition-all text-sm md:text-base" />
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
            Providing specialized care for children in <strong>Madambakkam, Nedungundram, Velachery, Pallikaranai, and Thalambur</strong>. Let's bloom together!
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

function ServiceCard({ icon, title, subtitle, description, points, outcome, color, extraInfo }: any) {
  const colorClasses: any = {
    orange: "bg-orange-50 border-orange-200 text-orange-900",
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    green: "bg-green-50 border-green-200 text-green-900",
    pink: "bg-pink-50 border-pink-200 text-pink-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`${colorClasses[color]} p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border-2 shadow-xl space-y-4 md:space-y-6 flex flex-col group`}
    >
      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:rotate-6 transition-transform">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-black leading-tight">{title}</h3>
        <p className="text-[10px] md:text-xs font-bold opacity-70 uppercase tracking-wider">{subtitle}</p>
        {description && <p className="text-xs md:text-sm font-medium opacity-80 leading-relaxed pt-2">{description}</p>}
      </div>
      <ul className="space-y-2 flex-grow">
        {points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-xs md:text-sm font-semibold leading-snug">
            <ArrowRight size={14} className="mt-1 flex-shrink-0" /> {p}
          </li>
        ))}
      </ul>
      {extraInfo && (
        <div className="pt-2 border-t border-current/10">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">{extraInfo.label}</p>
          <p className="text-xs md:text-sm font-bold leading-relaxed">{extraInfo.text}</p>
        </div>
      )}
      <div className="pt-4 border-t border-current/10">
        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Outcome Focus:</p>
        <p className="text-xs md:text-sm font-bold leading-relaxed">{outcome}</p>
      </div>
    </motion.div>
  );
}
