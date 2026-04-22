/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { useLocation, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Brain, Microscope, Menu, X, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

// --- Helpers ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-clinic-paper/80 backdrop-blur-md border-b border-clinic-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-clinic-primary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <Activity size={20} />
          </div>
          <span className="font-serif text-2xl font-medium tracking-tight">Aarogya</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-sm uppercase tracking-widest font-medium hover:text-clinic-accent transition-colors">Home</Link>
          <Link to="/services" className="text-sm uppercase tracking-widest font-medium hover:text-clinic-accent transition-colors">Services</Link>
          <Link to="/about" className="text-sm uppercase tracking-widest font-medium hover:text-clinic-accent transition-colors">About</Link>
          <Link to="/contact" className="px-6 py-3 bg-clinic-primary text-white text-sm uppercase tracking-widest font-medium rounded-full hover:bg-clinic-accent transition-colors">Book Appointment</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-clinic-paper border-b border-clinic-ink/5 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-serif">Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-serif">Services</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-serif">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-serif">Appointment</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HomePage = () => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 w-full py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 z-10"
        >
          <h1 className="text-7xl md:text-[9rem] font-serif font-light leading-[0.8] mb-12 tracking-tighter text-shadow-sm">
            Aarogya <br />
            <span className="italic text-clinic-accent font-normal">Medical Clinic</span>
          </h1>
          <p className="text-xl text-clinic-muted max-w-lg mb-12 leading-relaxed">
            A boutique clinical experience where rigorous diagnostics meet architectural empathy. Decoding your biological complexity through personalized metabolic and neurological care.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <Link to="/contact" className="px-10 py-5 bg-clinic-primary text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-clinic-accent transition-all hover:clinical-shadow">
              Start Your Private Journey
            </Link>
            <Link to="/about" className="text-xs uppercase tracking-[0.2em] font-semibold border-b border-clinic-ink/20 pb-1 hover:border-clinic-accent transition-colors">
              Our Philosophy
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-1 w-full max-w-2xl"
        >
          <div className="aspect-[4/5] relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Aarogya Clinic Interior" 
              className="w-full h-full object-cover mask-oval shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-clinic-accent/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-clinic-paper border border-clinic-ink/5 rounded-full flex items-center justify-center clinical-shadow">
               <div className="text-center">
                  <span className="block text-3xl font-serif italic text-clinic-accent">98%</span>
                  <span className="text-[8px] uppercase tracking-widest opacity-50">Success Rate</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] h-[50vw] bg-clinic-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
    </section>

    {/* Values Section */}
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-3 gap-24">
          {[
            { icon: <Microscope size={40} />, title: "Predictive Labs", desc: "Advanced biomarker screening to identify latent risks long before traditional detection." },
            { icon: <Activity size={40} />, title: "Endocrine Tuning", desc: "Optimizing your metabolic throughput through precision hormonal and biological synthesis." },
            { icon: <Brain size={40} />, title: "Neuro-Protocols", desc: "Regenerative pathways and cognitive optimization designed for lifetime brain health." }
          ].map((val, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="space-y-8"
            >
              <div className="text-clinic-accent opacity-80">{val.icon}</div>
              <h3 className="text-4xl font-serif leading-tight">{val.title}</h3>
              <p className="text-clinic-muted leading-relaxed text-lg">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Vision Section */}
    <section className="py-40 bg-clinic-primary text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] opacity-60 mb-8 block">Our Philosophy</span>
        <h2 className="text-4xl md:text-6xl font-light leading-snug mb-12 italic">
          "True healing happens at the intersection of rigorous science and deep human connection."
        </h2>
        <div className="w-20 h-px bg-white/20 mx-auto" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-white rounded-full blur-[200px] -top-96 -left-96" />
      </div>
    </section>
  </div>
);

const Footer = () => (
  <footer className="bg-clinic-paper pt-32 pb-12 border-t border-clinic-ink/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-clinic-primary rounded-full flex items-center justify-center text-white">
              <Activity size={20} />
            </div>
            <span className="font-serif text-2xl font-medium tracking-tight">Aarogya</span>
          </Link>
          <p className="text-clinic-ink/50 max-w-sm mb-10 leading-relaxed">
            A sanctuary for those seeking precision medicine and holistic wellness. Committed to scientific excellence and empathetic care.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-clinic-ink/10 flex items-center justify-center hover:bg-clinic-primary hover:text-white transition-all">
              <Mail size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-clinic-ink/10 flex items-center justify-center hover:bg-clinic-primary hover:text-white transition-all">
              <Phone size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-clinic-ink/10 flex items-center justify-center hover:bg-clinic-primary hover:text-white transition-all">
              <MapPin size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-8">Quick Links</h4>
          <ul className="space-y-4 text-clinic-ink/50">
            <li><Link to="/services" className="hover:text-clinic-accent transition-colors">Diagnostics</Link></li>
            <li><Link to="/services" className="hover:text-clinic-accent transition-colors">Metabolic Health</Link></li>
            <li><Link to="/services" className="hover:text-clinic-accent transition-colors">Neurology</Link></li>
            <li><Link to="/contact" className="hover:text-clinic-accent transition-colors">Appointments</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest font-semibold mb-8">Clinic Hours</h4>
          <ul className="space-y-4 text-clinic-ink/50">
            <li>Mon - Fri: 8:00 - 20:00</li>
            <li>Sat: 9:00 - 15:00</li>
            <li>Sun: Closed</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-clinic-ink/5 text-xs uppercase tracking-widest opacity-40 gap-4">
        <span>© 2024 Aarogya Medical Clinic. All rights reserved.</span>
        <div className="flex gap-8">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const ServicesPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <span className="text-xs uppercase tracking-widest text-clinic-accent font-semibold mb-4 block">Our Expertise</span>
        <h1 className="text-5xl md:text-7xl font-light mb-8">Medical <span className="italic">Specialties</span></h1>
        <p className="text-xl text-clinic-ink/60 max-w-2xl leading-relaxed">
          We combine cutting-edge diagnostic technology with deep clinical expertise across metabolic, neurological, and overall wellness domains.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
    {[
          {
            title: "Cellular Diagnostics",
            icon: <Microscope size={32} />,
            desc: "Genomic screening and high-resolution biomarker analysis to identify health risks years before manifestation.",
            image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200"
          },
          {
            title: "Metabolic Synthesis",
            icon: <Activity size={32} />,
            desc: "Comprehensive metabolic paneling and precision hormonal work to optimize your biological performance.",
            image: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=1200"
          },
          {
            title: "Neural Optimization",
            icon: <Brain size={32} />,
            desc: "Advanced neuro-regenerative protocols and cognitive assessments designed for high-performance longevity.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200"
          },
          {
            title: "Longevity Medicine",
            icon: <ArrowRight size={32} />,
            desc: "Evidence-based interventions tailored to extend healthspan through proactive biological management.",
            image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200"
          }
        ].map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[60px] aspect-video md:aspect-auto md:h-[500px] clinical-shadow"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-clinic-primary via-clinic-primary/20 to-transparent p-12 flex flex-col justify-end text-white">
              <div className="mb-6 text-clinic-accent border border-white/20 w-fit p-3 rounded-full backdrop-blur-sm">{service.icon}</div>
              <h3 className="text-4xl font-serif mb-6">{service.title}</h3>
              <p className="text-white/60 max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-lg leading-relaxed">{service.desc}</p>
              <Link to="/contact" className="text-[10px] uppercase tracking-[0.3em] font-semibold flex items-center gap-4 hover:text-clinic-accent transition-colors">
                Apply for Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-widest text-clinic-accent font-semibold mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-light mb-8">A Sanctuary for <span className="italic">Healing</span></h1>
          <p className="text-xl text-clinic-ink/60 leading-relaxed mb-6">
            Founded with a vision to bridge the gap between high-science medicine and deeply personalized care, Aarogya Clinical Sanctuary was born from the belief that health is not merely the absence of disease.
          </p>
          <p className="text-clinic-ink/50 leading-relaxed">
            In an era of impersonalized healthcare, we offer a dedicated space where your data is analyzed with clinical rigor, and your well-being is held with profound architectural empathy. Our multidisciplinary team works in concert to provide a unified approach to your health journey.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200" 
            alt="Our Clinic Sanctuary" 
            className="rounded-[80px] clinical-shadow mask-oval lg:rotate-2 hover:rotate-0 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-4 gap-12 py-20 border-y border-clinic-ink/5">
        {[
          { label: "Founded", value: "2018" },
          { label: "Board Certified", value: "24+" },
          { label: "Success Rate", value: "98%" },
          { label: "Precision Tests", value: "150+" }
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <span className="text-xs uppercase tracking-widest opacity-40 mb-4 block">{stat.label}</span>
            <span className="text-5xl font-serif text-clinic-accent">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-8">Begin Your <br /><span className="italic">Consultation</span></h1>
          <p className="text-xl text-clinic-ink/60 mb-12">
            Schedule a private assessment with our specialist team. We respond to all inquiries within 24 hours.
          </p>
          <div className="space-y-8">
             <div className="flex items-center gap-6 p-6 border border-clinic-ink/5 rounded-3xl">
                <div className="w-12 h-12 bg-clinic-accent/10 text-clinic-accent rounded-full flex items-center justify-center">
                    <MapPin />
                </div>
                <div>
                   <h4 className="font-semibold text-sm uppercase tracking-widest mb-1">Our Sanctuary</h4>
                   <p className="text-clinic-ink/50 text-sm">124 Precision Way, Medical District, NY 10012</p>
                </div>
             </div>
             <div className="flex items-center gap-6 p-6 border border-clinic-ink/5 rounded-3xl">
                <div className="w-12 h-12 bg-clinic-accent/10 text-clinic-accent rounded-full flex items-center justify-center">
                    <Phone />
                </div>
                <div>
                   <h4 className="font-semibold text-sm uppercase tracking-widest mb-1">Direct Line</h4>
                   <p className="text-clinic-ink/50 text-sm">+1 (800) 245-AAROGYA</p>
                </div>
             </div>
             <div className="flex items-center gap-6 p-6 border border-clinic-ink/5 rounded-3xl">
                <div className="w-12 h-12 bg-clinic-accent/10 text-clinic-accent rounded-full flex items-center justify-center">
                    <Mail />
                </div>
                <div>
                   <h4 className="font-semibold text-sm uppercase tracking-widest mb-1">Inquiries</h4>
                   <p className="text-clinic-ink/50 text-sm">care@aarogyaclinic.com</p>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="bg-white p-12 rounded-[50px] shadow-sm border border-clinic-ink/5"
        >
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                    <label className="text-xs uppercase tracking-widest font-semibold mb-2 block">First Name</label>
                    <input type="text" className="w-full bg-clinic-paper border-none rounded-2xl p-4 focus:ring-2 focus:ring-clinic-accent/20 outline-none" placeholder="John" />
                 </div>
                 <div>
                    <label className="text-xs uppercase tracking-widest font-semibold mb-2 block">Last Name</label>
                    <input type="text" className="w-full bg-clinic-paper border-none rounded-2xl p-4 focus:ring-2 focus:ring-clinic-accent/20 outline-none" placeholder="Doe" />
                 </div>
              </div>
              <div>
                 <label className="text-xs uppercase tracking-widest font-semibold mb-2 block">Email Address</label>
                 <input type="email" className="w-full bg-clinic-paper border-none rounded-2xl p-4 focus:ring-2 focus:ring-clinic-accent/20 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                 <label className="text-xs uppercase tracking-widest font-semibold mb-2 block">Inquiry Type</label>
                 <select className="w-full bg-clinic-paper border-none rounded-2xl p-4 focus:ring-2 focus:ring-clinic-accent/20 outline-none appearance-none">
                    <option>Metabolic Consultation</option>
                    <option>Neurological Assessment</option>
                    <option>Executive Diagnostics</option>
                    <option>General Inquiry</option>
                 </select>
              </div>
              <div>
                 <label className="text-xs uppercase tracking-widest font-semibold mb-2 block">Message</label>
                 <textarea className="w-full bg-clinic-paper border-none rounded-2xl p-4 focus:ring-2 focus:ring-clinic-accent/20 outline-none h-32" placeholder="Tell us about your health goals..."></textarea>
              </div>
              <button className="w-full py-5 bg-clinic-primary text-white rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-clinic-accent transition-all shadow-lg hover:shadow-clinic-accent/20">
                 Request Appointment
              </button>
           </form>
        </motion.div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <Router basename="/Arogya-Medical-Clinic">
      <ScrollToTop />
      <div className="min-h-screen bg-clinic-paper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
