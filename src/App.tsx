import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Terminal, 
  Cpu, 
  Layers, 
  Zap, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  ShieldCheck,
  Activity,
  Code2,
  Database,
  Cloud,
  Box
} from 'lucide-react';

export default function App() {
  const [deployTime, setDeployTime] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);
  const timerRef = useRef<number | null>(null);

  const startDeploy = () => {
    if (isDeploying) return;
    setIsDeploying(true);
    setDeployTime(0);
    const startTime = Date.now();
    
    timerRef.current = window.setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setDeployTime(elapsed);
      if (elapsed >= 1.842) { // Simulate a fast deploy
        if (timerRef.current) clearInterval(timerRef.current);
        setIsDeploying(false);
        setDeployTime(1.842);
      }
    }, 10);
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }} />

      {/* Header / System Status */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-industrial-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-industrial-orange flex items-center justify-center font-display text-black font-black italic">A</div>
          <span className="font-display text-xl tracking-tighter">AAF // 2025</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-70">System Status: Online</span>
          </div>
          <div className="text-[10px] font-mono opacity-50">UTC: {new Date().toISOString().split('T')[1].slice(0, 8)}</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-6xl md:text-[12vw] leading-[0.85] mb-4">
              ABIYYU AMEERI <br />
              <span className="text-industrial-orange">FAIZ / SYSTEMS</span>
            </h1>
            <div className="flex flex-wrap gap-4 items-center mt-8">
              <span className="px-4 py-2 border border-white/20 font-mono text-xs uppercase tracking-widest bg-white/5">Full-Stack Engineer</span>
              <span className="px-4 py-2 border border-white/20 font-mono text-xs uppercase tracking-widest bg-white/5">Akademi Militer</span>
              <span className="px-4 py-2 border border-white/20 font-mono text-xs uppercase tracking-widest bg-white/5">High-Octane Execution</span>
            </div>
          </motion.div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none">
            <Terminal size={600} strokeWidth={0.5} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-6 flex items-center gap-3">
              <ShieldCheck className="text-industrial-orange" /> 
              SHORT DESKRIPTION (itulah pokonya)
            </h2>
            <p className="text-lg text-industrial-silver leading-relaxed font-light">
              Born into a military family as the son of <span className="text-white font-bold italic">Bapak Eko</span>, 
              discipline and precision are hardcoded into my DNA. My approach to Military is defined by 
              <span className="text-white font-bold italic"> "High Tactical Execution"</span>—a relentless focus on 
              performance, Tactical, and speed. Smartest Intelligent over MI6, Maybe like Agent  Ethan Hunt.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bento-card flex flex-col justify-between h-40">
              <Activity className="text-industrial-orange" />
              <div>
                <div className="text-2xl font-display italic">1000%</div>
                <div className="text-[10px] uppercase font-mono opacity-50">WINRATE ASBOSCH</div>
              </div>
            </div>
            <div className="bento-card flex flex-col justify-between h-40">
              <Zap className="text-industrial-orange" />
              <div>
                <div className="text-2xl font-display italic">&lt;100ms</div>
                <div className="text-[10px] uppercase font-mono opacity-50">Intel gacor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">Project Showcase // 01-04</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Project 1 - Large */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 md:row-span-2 bento-card flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-industrial-orange">01 / CLOUD ARCHITECTURE</span>
                  <ExternalLink size={16} />
                </div>
                <h3 className="text-3xl mb-4">OK25 / Lizard Operation</h3>
                <p className="text-sm text-industrial-silver mb-6">Operasi Intelijen Super Rahasia dari Batalyon 312/kiro hideung yang menargetkan salah satu target intelijen berbahaya dalam pemerintahan rezim politik asipa, mulai dari perencanaan taktis, cyber dan operasi lapangan dapat dijalankan dengan mulus dan tak terdeteksi.</p>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">GO</span>
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">K8S</span>
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">REDIS</span>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div whileHover={{ scale: 1.01 }} className="md:col-span-2 bento-card flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-industrial-orange">02 / INTERFACE DESIGN</span>
                  <ExternalLink size={16} />
                </div>
                <h3 className="text-2xl mb-2">Tactical Dashboard</h3>
                <p className="text-xs text-industrial-silver">Real-time data visualization for logistics operations.</p>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">REACT</span>
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">D3.JS</span>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div whileHover={{ scale: 1.01 }} className="bento-card flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-industrial-orange">03 / MOBILE</span>
                  <ExternalLink size={16} />
                </div>
                <h3 className="text-xl mb-2">Field Ops App</h3>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">EXPO</span>
              </div>
            </motion.div>

            {/* Project 4 */}
            <motion.div whileHover={{ scale: 1.01 }} className="bento-card flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-industrial-orange">04 / CORE</span>
                  <ExternalLink size={16} />
                </div>
                <h3 className="text-xl mb-2">Neural Engine</h3>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/10 text-[10px] font-mono">PYTHON</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Grid */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12">Experience Log</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              { year: '2023-2025', role: 'Lead Systems Architect', company: 'TechCommand Solutions', desc: 'Orchestrating high-load infrastructures and defining deployment standards.' },
              { year: '2021-2023', role: 'Senior Full-Stack Dev', company: 'Nexus Engineering', desc: 'Developed core banking modules with zero-downtime requirements.' },
              { year: '2019-2021', role: 'Software Engineer', company: 'Delta Systems', desc: 'Built real-time tracking systems for logistics and supply chain.' },
              { year: '2018-2019', role: 'Junior Developer', company: 'InnoTech', desc: 'Focused on UI performance and frontend optimization.' },
            ].map((exp, i) => (
              <div key={i} className="bg-industrial-black p-8 hover:bg-white/[0.03] transition-colors">
                <div className="text-industrial-orange font-mono text-xs mb-2">{exp.year}</div>
                <h3 className="text-2xl mb-1">{exp.role}</h3>
                <div className="text-sm font-bold opacity-70 mb-4 uppercase">{exp.company}</div>
                <p className="text-sm text-industrial-silver">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10 bg-industrial-orange text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl mb-12 border-b border-black/20 pb-4">Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Code2 size={40} className="mb-4" />
              <h3 className="text-2xl mb-2">Full-Stack Dev</h3>
              <p className="text-sm font-medium opacity-80">Building robust, scalable applications from database schema to pixel-perfect UI.</p>
            </div>
            <div>
              <Activity size={40} className="mb-4" />
              <h3 className="text-2xl mb-2">Performance Audit</h3>
              <p className="text-sm font-medium opacity-80">Identifying bottlenecks and optimizing for sub-second response times.</p>
            </div>
            <div>
              <Layers size={40} className="mb-4" />
              <h3 className="text-2xl mb-2">UI/UX Engineering</h3>
              <p className="text-sm font-medium opacity-80">Crafting brutalist, high-performance interfaces that prioritize utility and speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl mb-8">Education</h2>
            <div className="border-l-2 border-industrial-orange pl-6 py-2">
              <h3 className="text-2xl">Akademi Militer</h3>
              <p className="text-industrial-orange font-mono text-xs">Bachelor of Defense Technology</p>
              <p className="text-sm text-industrial-silver mt-2">Focused on strategic systems and engineering discipline.</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl mb-8">Certifications</h2>
            <ul className="space-y-4">
              {['AWS Certified Solutions Architect', 'Google Professional Cloud Developer', 'Kubernetes Administrator (CKA)'].map((cert, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-mono border-b border-white/10 pb-2">
                  <ChevronRight size={14} className="text-industrial-orange" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl mb-12">GET IN TOUCH</h2>
          <div className="flex justify-center gap-8 mb-12">
            <motion.a whileHover={{ y: -5 }} href="#" className="p-4 border border-white/10 rounded-full hover:border-industrial-orange transition-colors">
              <Github size={32} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="p-4 border border-white/10 rounded-full hover:border-industrial-orange transition-colors">
              <Linkedin size={32} />
            </motion.a>
            <motion.a whileHover={{ y: -5 }} href="#" className="p-4 border border-white/10 rounded-full hover:border-industrial-orange transition-colors">
              <Mail size={32} />
            </motion.a>
          </div>
          <p className="font-mono text-xs opacity-50 uppercase tracking-widest">Available for high-impact collaborations</p>
        </div>
      </section>

      {/* Deployment Speed Test Widget (Fixed Bottom Left) */}
      <div className="fixed bottom-12 left-6 z-50 hidden md:block">
        <div className="bento-card bg-industrial-black/90 backdrop-blur-md border-industrial-orange/30 w-64">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">Deployment Test</span>
            <div className={`w-2 h-2 rounded-full ${isDeploying ? 'bg-orange-500 animate-ping' : 'bg-green-500'}`} />
          </div>
          <div className="text-4xl font-display italic mb-4 text-industrial-orange">
            {deployTime.toFixed(3)}s
          </div>
          <button 
            onClick={startDeploy}
            disabled={isDeploying}
            className="w-full py-2 bg-industrial-orange text-black font-display font-black italic uppercase text-sm hover:bg-white transition-colors disabled:opacity-50"
          >
            {isDeploying ? 'DEPLOYING...' : 'START DEPLOY'}
          </button>
        </div>
      </div>

      {/* Footer Marquee */}
      <footer className="py-8 border-t border-white/10 overflow-hidden bg-industrial-black">
        <div className="animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4">
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default">REACT</span>
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default text-industrial-orange">NEXT.JS</span>
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default">TAILWIND</span>
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default text-industrial-orange">TYPESCRIPT</span>
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default">GO</span>
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default text-industrial-orange">AWS</span>
              <span className="text-4xl font-display italic opacity-20 hover:opacity-100 transition-opacity cursor-default">DOCKER</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
