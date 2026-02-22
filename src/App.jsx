import React, { useState, useEffect } from 'react';
import {
  Home, User, Briefcase, Mail, Sun, Moon, Github, Twitter, Linkedin,
  ExternalLink, ChevronRight, Code, Layers, Cpu, GraduationCap,
  Award, Send, Zap, Terminal, Database, Globe, Smartphone, Trophy, Star,
  ShieldCheck, Rocket, Palette, Box, Command, GitBranch,
  Music, Film, Plane, Play, CheckCircle, AlertCircle,
  Instagram, Heart
} from 'lucide-react';

/**
 * ARCHITECTURAL BLOCK PORTFOLIO v9.0
 * Changes:
 * - High-visibility sidebars: Increased shape opacity to 100%.
 * - Blueprint Elements: Sharpened stroke weights for full-opacity visibility.
 * - Theme Refinement: Adjusted color balances for bold geometric elements.
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const navItems = [
    { id: 'home', icon: <Home size={18} />, label: 'Home' },
    { id: 'experience', icon: <Briefcase size={18} />, label: 'Exp.' },
    { id: 'work', icon: <Code size={18} />, label: 'Work' },
    { id: 'contact', icon: <Mail size={18} />, label: 'Contact' },
  ];

  const technologies = [
    {
      name: 'HTML',
      color: '#E34F26',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <polygon fill="currentColor" points="10,5 90,5 82,90 50,98 18,90" />
        </svg>
      ),
    },
    {
      name: 'CSS',
      color: '#1572B6',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <polygon fill="currentColor" points="10,5 90,5 82,90 50,98 18,90" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      color: '#F7DF1E',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <rect width="100" height="100" fill="currentColor" rx="10" />
          <text x="50" y="70" fontSize="45" fontWeight="bold" textAnchor="middle" fill="#000">
            JS
          </text>
        </svg>
      ),
    },
    {
      name: 'React',
      color: '#61DAFB',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <circle cx="50" cy="50" r="8" fill="currentColor" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(120 50 50)" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      color: '#68A063',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <path fill="currentColor" d="M50 5l38 21.5v43L50 91 12 69.5v-43L50 5z" />
        </svg>
      ),
    },
    {
      name: 'Express',
      color: isDark ? '#ffffff' : '#000000',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <text x="50" y="65" fontSize="28" fontWeight="bold" textAnchor="middle" fill="currentColor">
            EX
          </text>
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      color: '#47A248',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <path fill="currentColor" d="M50 10C40 25 40 45 50 90C60 45 60 25 50 10Z" />
        </svg>
      ),
    },
    {
      name: 'SQL',
      color: '#336791',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <ellipse cx="50" cy="25" rx="30" ry="12" fill="currentColor" />
          <rect x="20" y="25" width="60" height="40" fill="currentColor" />
          <ellipse cx="50" cy="65" rx="30" ry="12" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      color: '#3178C6',
      icon: (p) => (
        <svg viewBox="0 0 100 100" {...p}>
          <rect width="100" height="100" fill="currentColor" rx="10" />
          <text x="50" y="75" fill="white" fontSize="50" fontWeight="bold" textAnchor="middle">
            TS
          </text>
        </svg>
      ),
    },
  ];

  const toolsList = [
    { name: 'Git', color: '#F05032', icon: GitBranch },
    { name: 'GitHub', color: isDark ? '#ffffff' : '#000000', icon: Github },
    { name: 'Figma', color: '#F24E1E', icon: Palette },
    { name: 'Postman', color: '#FF6C37', icon: Send },

    // 🔥 MERN-relevant tools
    { name: 'VS Code', color: '#007ACC', icon: Command },
    { name: 'MongoDB Compass', color: '#47A248', icon: Database },
    { name: 'Docker', color: '#2496ED', icon: Box },
  ];

  const scrollToSection = (id) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => entry.isIntersecting && setActiveTab(entry.target.id));
    }, { threshold: 0.3 });
    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setFormStatus('sending');

    try {
      // Using Formspree as an example - Easy to setup for any email
      const response = await fetch("https://formspree.io/f/mkovqlpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const theme = {
    bg: isDark ? 'bg-[#050505]' : 'bg-[#f8f9fa]',
    text: isDark ? 'text-white' : 'text-[#0f172a]',
    muted: isDark ? 'text-gray-400' : 'text-slate-500',
    border: isDark ? 'border-white/10' : 'border-slate-300', // Increased brightness for light mode
    shapeBorder: isDark ? 'border-white/[0.25]' : 'border-slate-400', // Stronger shape borders for light mode
    glass: isDark ? 'bg-white/[0.02] backdrop-blur-3xl' : 'bg-white/70 backdrop-blur-2xl',
    card: isDark ? 'bg-[#0c0c0c]' : 'bg-white',
    accent: isDark ? 'text-blue-400' : 'text-blue-600',
    navActive: isDark ? 'bg-blue-500/20 text-blue-400 border-blue-500/20' : 'bg-blue-600/10 text-blue-600 border-blue-600/10',
    shapeOpacity: isDark ? 'opacity-40' : 'opacity-70', // Significantly increased for light theme
    stripeOpacity: isDark ? 'opacity-20' : 'opacity-40', // Doubled for light theme visibility
  };

  const ActionButton = ({ children, primary, onClick, className = "" }) => (
    <button
      onClick={onClick}
      className={`relative px-6 py-2.5 font-black uppercase tracking-widest text-[10px] overflow-hidden group transition-all duration-300 ${className} ${primary
        ? `border ${isDark ? 'border-blue-500/30 text-blue-400 bg-blue-500/5' : 'border-blue-600/30 text-blue-600 bg-blue-600/5'} hover:scale-[1.02] active:scale-95`
        : `border ${theme.border} ${theme.text} hover:bg-gray-500/10`
        } rounded-full`}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden relative text-[14px]`}>

      {/* --- BACKGROUND GRADIENT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className={`absolute inset-0 ${isDark ? 'opacity-[0.15]' : 'opacity-[0.08]'}`}>
          <div className="absolute top-0 left-0 w-full h-full"
            style={{ background: 'radial-gradient(circle at 10% 20%, #4c0519 0%, transparent 40%), radial-gradient(circle at 90% 80%, #1e3a8a 0%, transparent 40%), radial-gradient(circle at 50% 50%, #7f1d1d 0%, transparent 50%)' }}></div>
        </div>
      </div>

      {/* --- ARCHITECTURAL SIDEBARS (LEFT) --- */}
      <div className={`fixed left-0 top-0 w-12 md:w-48 h-full border-r ${theme.border} z-0 pointer-events-none transition-all`}>
        {/* Strip Pattern (Top) */}
        <div className={`h-40 border-b ${theme.border} relative overflow-hidden`}>
          <div className={`absolute inset-0 ${theme.stripeOpacity} ${isDark ? 'text-blue-400' : 'text-blue-600'}`} style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 4px, currentColor 4px, currentColor 5px)', backgroundSize: '10px 10px' }}></div>
        </div>

        {/* Rounded Arc Shape */}
        <div className={`h-64 border-b ${theme.border} relative overflow-hidden`}>
          <div className={`absolute -bottom-16 -left-16 w-64 h-64 border-2 ${theme.shapeBorder} rounded-full ${theme.shapeOpacity}`}></div>
          <div className={`absolute top-12 right-12 w-6 h-6 border-2 ${theme.shapeBorder} rounded-none rotate-12 ${theme.shapeOpacity}`}></div>
        </div>

        {/* Rectangles & Triangles */}
        <div className={`h-80 border-b ${theme.border} relative overflow-hidden`}>
          <div className={`absolute top-1/2 -translate-y-1/2 left-8 w-16 h-16 border-2 ${theme.shapeBorder} rounded-none ${theme.shapeOpacity}`}></div>
          <svg className={`absolute bottom-12 right-10 w-16 h-16 ${theme.shapeOpacity} text-gray-500/20`} viewBox="0 0 100 100">
            <path d="M50 15 L85 85 L15 85 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        {/* Continuous Strip Pattern (Bottom) */}
        <div className={`h-full relative overflow-hidden`}>
          <div className={`absolute inset-0 ${theme.stripeOpacity} ${isDark ? 'text-blue-400' : 'text-blue-600'}`} style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)', backgroundSize: '20px 20px' }}></div>
          <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-px h-64 ${theme.shapeBorder} border-dashed border-l-2 ${theme.shapeOpacity}`}></div>
        </div>
      </div>

      {/* --- ARCHITECTURAL SIDEBARS (RIGHT) --- */}
      <div className={`fixed right-0 top-0 w-12 md:w-48 h-full border-l ${theme.border} z-0 pointer-events-none transition-all`}>
        {/* Rounded Arc Shape (Top) */}
        <div className={`h-72 border-b ${theme.border} relative overflow-hidden`}>
          <div className={`absolute -top-16 -right-16 w-80 h-80 border-2 ${theme.shapeBorder} rounded-full ${theme.shapeOpacity}`}></div>
          <div className={`absolute bottom-10 left-10 w-4 h-4 rounded-full border-2 ${theme.shapeBorder} ${theme.shapeOpacity}`}></div>
        </div>

        {/* Strip Pattern (Middle) */}
        <div className={`h-96 border-b ${theme.border} relative overflow-hidden`}>
          <div className={`absolute inset-0 ${theme.stripeOpacity} ${isDark ? 'text-blue-400' : 'text-blue-600'}`} style={{ background: 'repeating-linear-gradient(135deg, transparent, transparent 8px, currentColor 8px, currentColor 9px)', backgroundSize: '16px 16px' }}></div>
          <div className={`absolute top-1/2 left-12 w-10 h-10 border-2 ${theme.shapeBorder} rotate-45 rounded-none ${theme.shapeOpacity}`}></div>
        </div>

        {/* Large Rectangle and Triangle */}
        <div className={`h-64 border-b ${theme.border} relative overflow-hidden`}>
          <div className={`absolute top-12 right-12 w-24 h-24 border-2 ${theme.shapeBorder} rounded-none ${theme.shapeOpacity}`}></div>
          <svg className={`absolute bottom-12 left-12 w-20 h-20 ${theme.shapeOpacity} text-gray-500/20`} viewBox="0 0 100 100">
            <path d="M15 15 L85 50 L15 85 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
      </div>

      {/* --- BLUR ACCENT NAVIGATION --- */}
      <nav className="fixed left-1/2 -translate-x-1/2 z-50 bottom-8 sm:bottom-auto sm:top-8 transition-all duration-300 scale-90 md:scale-100">
        <div className={`flex items-center gap-1 p-1 rounded-full border shadow-2xl ${isDark ? 'bg-black/80 border-white/10' : 'bg-white/80 border-black/10'} backdrop-blur-3xl`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border border-transparent ${activeTab === item.id
                ? `${theme.navActive} backdrop-blur-md shadow-sm`
                : `${theme.muted} hover:${theme.text}`
                }`}
            >
              {item.icon}
              <span className={`text-[9px] font-black uppercase tracking-widest ${activeTab === item.id ? 'block' : 'hidden md:block'}`}>{item.label}</span>
            </button>
          ))}
          <div className={`w-px h-4 mx-1 ${theme.border}`}></div>
          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full ${theme.muted} hover:${theme.text} transition-colors`}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-24">

        {/* --- HERO SECTION --- */}
        <section id="home" className="min-h-[75vh] flex flex-col items-center justify-center mb-24 pt-12">
          {/* STATIC PHOTO STICKER */}
          <div className="relative mb-12">
            <div className={`absolute inset-0 ${isDark ? 'bg-blue-500/20' : 'bg-blue-600/10'} blur-3xl rounded-full scale-110 opacity-50`}></div>
            <img
              src="/WhatsApp_Image_2026-02-22_at_22.33.20__1_-removebg-preview.png"
              alt="Profile"
              className="relative z-10 w-48 md:w-56 h-auto transform scale-135 grayscale-0 brightness-110 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
            />

          </div>

          <div className={`w-full p-8 md:p-16 rounded-[3rem] border ${theme.border} ${theme.glass} relative overflow-hidden`}>
            <div className={`absolute inset-0 ${theme.stripeOpacity} ${isDark ? 'text-blue-400/5' : 'text-blue-600/5'}`} style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-l border-b border-white/5 rounded-bl-[3rem]"></div>
            <div className="relative z-10 text-center">
              <span className={`${theme.accent} font-black tracking-[0.4em] text-[9px] uppercase mb-6 block`}>Full Stack Developer</span>
              <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                Dhyey Thummar <br />
                {/* <span className="opacity-20 italic">weekend.|</span> */}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <ActionButton primary onClick={() => scrollToSection('contact')}>
                  Initiate Sequence
                </ActionButton>
                <ActionButton onClick={() => scrollToSection('work')}>
                  Archives
                </ActionButton>
                <div className={`p-10 md:p-14 rounded-[2.5rem] border ${theme.border} ${theme.glass} relative overflow-hidden`}>
                  <div className={`absolute inset-0 ${theme.stripeOpacity} ${isDark ? 'text-blue-400/5' : 'text-blue-600/5'}`} style={{ background: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)', backgroundSize: '40px 40px' }}></div>
                  <h2 className="text-3xl font-black uppercase mb-8 relative z-10">The Philosophy</h2>
                  <p className={`text-lg leading-relaxed ${theme.muted} mb-12 max-w-3xl relative z-10`}>
                    I build intuitive user interfaces powered by scalable MERN stack architecture, focusing on performance, usability, and clean system design.                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-black/5 dark:border-white/5 relative z-10">
                    {[{ v: "01+", l: "Years" }, { v: "5+", l: "Projects" }, { v: "100%", l: "Precision" }].map((s, i) => (
                      <div key={i}>
                        <div className={`text-2xl font-black ${theme.accent}`}>{s.v}</div>
                        <div className="text-[9px] uppercase font-black tracking-widest opacity-30">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- DUAL MARQUEE --- */}
        <div className="mb-32 space-y-8">
          <div className={`w-full py-6 border-y ${theme.border} overflow-hidden relative`}>
            <div className="flex animate-marquee-fast gap-20 whitespace-nowrap">
              {[...technologies, ...technologies, ...technologies].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 flex items-center justify-center" style={{ color: tech.color }}>
                    <tech.icon className="w-full h-full" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-40">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={`w-full py-6 border-b ${theme.border} overflow-hidden relative`}>
            <div className="flex animate-marquee-fast-reverse gap-20 whitespace-nowrap">
              {[...toolsList, ...toolsList, ...toolsList].map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center" style={{ color: tool.color }}>
                    <tool.icon size={26} />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-40">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- ABOUT --- */}

        {/* --- EDUCATION (VERTICAL CARDS) --- */}
        <section id="education" className="py-20 border-t border-black/5 dark:border-white/5 mb-20">
          <div className="flex items-center gap-4 mb-16">
            <GraduationCap className={theme.accent} size={28} />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Education</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "SSC",
                institute: "Alpha Vidhya Sankul, Junagadh",
                span: "2021",
                desc: "Completed secondary education with a strong academic foundation.",
              },
              {
                title: "HSC (PCM)",
                institute: "Alpha Vidhya Sankul, Junagadh",
                span: "2023",
                desc: "Focused on Physics, Chemistry, and Mathematics, building analytical and problem-solving skills.",
              },
              {
                title: "B.Tech Computer Science Engineering",
                institute: "Charusat University, Changa",
                span: "2023 - 2027",
                desc: "Pursuing a degree in Computer Science with focus on MERN stack development, UI engineering, and data analytics.",
              },
            ].map((edu, i) => (
              <div
                key={i}
                className={`p-8 rounded-[2rem] border ${theme.border} ${theme.glass} flex flex-col md:flex-row gap-8 hover:bg-blue-500/[0.02] transition-colors`}
              >
                <div className="md:w-1/4">
                  <span className="text-[10px] font-black text-blue-500 tracking-widest">
                    {edu.span}
                  </span>
                </div>

                <div className="md:w-3/4">
                  <h4 className="text-xl font-black mb-1">{edu.title}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">
                    {edu.institute}
                  </p>
                  <p className={`text-sm leading-relaxed ${theme.muted}`}>
                    {edu.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE (VERTICAL CARDS) --- */}
        <section id="experience" className="py-20 border-t border-black/5 dark:border-white/5 mb-20">
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className={theme.accent} size={28} />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Experience</h2>
          </div>
          <div className="space-y-6">
            {[
              { role: "Data Analyst", co: "CODEALPHA", span: "2024", desc: "Created efficient analytics systems focused on data clarity, performance, and scalable intelligence." },
            ].map((exp, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border ${theme.border} ${theme.glass} flex flex-col md:flex-row gap-8 hover:bg-blue-500/[0.02] transition-colors`}>
                <div className="md:w-1/4">
                  <span className="text-[10px] font-black text-blue-500 tracking-widest">{exp.span}</span>
                </div>
                <div className="md:w-3/4">
                  <h4 className="text-xl font-black mb-1">{exp.role}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4">{exp.co}</p>
                  <p className={`text-sm leading-relaxed ${theme.muted}`}>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CERTIFICATES --- */}
        <section className="py-20 border-t border-black/5 dark:border-white/5 mb-20">
          <div className="flex items-center gap-4 mb-16">
            <Award className={theme.accent} size={28} />
            <h2 className="text-3xl font-black uppercase tracking-tighter">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Red Hat Linux", org: "Red Hat", id: "RHL-449" },
              { title: "Software project management", org: "Coursera", id: "SPM-202" },
            ].map((cert, i) => (
              <div key={i} className={`p-6 rounded-2xl border ${theme.border} ${theme.glass} flex justify-between items-center group`}>
                <div>
                  <h4 className="font-bold text-sm">{cert.title}</h4>
                  <p className="text-[10px] opacity-40 font-black uppercase tracking-widest">{cert.org}</p>
                </div>
                <span className="text-[9px] font-mono opacity-20 group-hover:opacity-100 transition-opacity">#{cert.id}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="work" className="py-20 border-t border-black/5 dark:border-white/5 mb-20">
          <h2 className="text-4xl font-black uppercase mb-16 italic">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Recipe Corner", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
              },
              { title: "College Placement Insights", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
              { title: "Background Remover", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
              { title: "RoadGuard", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },


            ].map((p, i) => (
              <div key={i} className={`group relative aspect-square md:aspect-[16/10] rounded-[3rem] overflow-hidden border ${theme.border} cursor-pointer shadow-sm`}>
                <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                  <div className="translate-y-0 transition-transform duration-700">
                    <span className="text-blue-500 font-black text-[9px] uppercase tracking-[0.3em] mb-3 block">{p.cat}</span>
                    <h3 className="text-3xl font-black text-white mb-8">{p.title}</h3>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full text-[10px] font-bold uppercase transition-all backdrop-blur-md">
                        <Github size={14} /> Repo
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase transition-all backdrop-blur-md border border-blue-500/20">
                        <Play size={14} /> Live
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- HOBBIES --- */}
        <section className="py-20 border-t border-black/5 dark:border-white/5 mb-20">
          <h2 className="text-3xl font-black uppercase mb-12 tracking-tighter">Beyond The Code</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Film Making", icon: <Film size={32} />, color: "bg-red-500/10 text-red-500" },
              { label: "Music", icon: <Music size={32} />, color: "bg-purple-500/10 text-purple-500" },
              { label: "Traveling", icon: <Plane size={32} />, color: "bg-emerald-500/10 text-emerald-500" }
            ].map((h, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] border ${theme.border} ${theme.glass} flex flex-col items-center justify-center text-center group`}>
                <div className={`w-20 h-20 rounded-3xl ${h.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {h.icon}
                </div>
                <span className="font-black uppercase tracking-widest text-xs opacity-50">{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-20 border-t border-black/5 dark:border-white/5">
          <div className={`p-10 md:p-20 rounded-[3rem] border ${theme.border} ${theme.glass} text-center relative overflow-hidden`}>
            {/* Success/Error Overlay */}
            {formStatus === 'success' && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-blue-600/90 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
                <CheckCircle size={80} className="text-white mb-6" />
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Signal Received</h3>
                <p className="text-white/80 font-bold mt-2">I'll get back to you soon.</p>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-red-600/90 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
                <AlertCircle size={80} className="text-white mb-6" />
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Transmission Failed</h3>
                <p className="text-white/80 font-bold mt-2">Please try again or contact via social.</p>
              </div>
            )}

            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Connect With Me</h2>
            <form className="max-w-2xl mx-auto grid gap-4" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Identity"
                  required
                  className={`px-6 py-4 rounded-2xl border ${theme.border} focus:outline-none focus:border-blue-500 ${isDark ? 'bg-white/5 text-white' : 'bg-black/[0.02] text-black'}`}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className={`px-6 py-4 rounded-2xl border ${theme.border} focus:outline-none focus:border-blue-500 ${isDark ? 'bg-white/5 text-white' : 'bg-black/[0.02] text-black'}`}
                />
              </div>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Brief Your Message"
                required
                className={`px-6 py-4 rounded-2xl border ${theme.border} focus:outline-none focus:border-blue-500 resize-none ${isDark ? 'bg-white/5 text-white' : 'bg-black/[0.02] text-black'}`}
              ></textarea>
              <ActionButton
                primary
                className={`w-full !py-4 ${formStatus === 'sending' ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'sending' ? 'Transmitting...' : 'Transmitting Signal'}
              </ActionButton>
            </form>
          </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className={`py-16 border-t ${theme.border} text-center`}>
        {/* <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`w-10 h-10 border ${isDark ? 'border-blue-500' : 'border-blue-600'} rotate-45 flex items-center justify-center`}>
            <div className={`w-2 h-2 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          </div>
        </div> */}
        <div className="flex justify-center gap-8 items-center">
          <a href="#" className="p-3 bg-gray-500/10 rounded-full hover:bg-blue-500 hover:text-white transition-all"><Github size={20} /></a>
          <a href="#" className="p-3 bg-gray-500/10 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
          <a href="#" className="p-3 bg-gray-500/10 rounded-full hover:bg-blue-400 hover:text-white transition-all"><Instagram size={20} /></a>
        </div>
        <div className="mt-8 text-[9px] font-black uppercase tracking-widest opacity-80 italic">© 2026 crafted with ❤️ & ☕️ by Dhyey patel </div>
      </footer>

      {/* --- ANIMATIONS & GLOBAL OVERRIDES --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee-fast { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        @keyframes marquee-fast-reverse { 0% { transform: translateX(-33.33%); } 100% { transform: translateX(0); } }
        .animate-marquee-fast { animation: marquee-fast 10s linear infinite; }
        .animate-marquee-fast-reverse { animation: marquee-fast-reverse 13s linear infinite; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
};

export default App;
