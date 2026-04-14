import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion as Motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Menu,
  Trophy,
  Twitter,
  Wrench,
  X,
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [pageReady, setPageReady] = useState(false);

  const nav = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills & Tools' },
      { id: 'education-experience', label: 'Journey' },
      { id: 'certifications', label: 'Certifications' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const projects = [
    {
      title: 'Recipe Corner',
      tag: 'Full Stack Product',
      summary: 'Recipe discovery app with saved collections and smart ingredient filters.',
      problem:
        'Users needed a fast way to find recipes by ingredients and time without deep navigation paths.',
      approach:
        'Built structured filtering pipelines and collection workflows with reusable card modules.',
      architecture:
        'Modular frontend components + REST API layer + indexed MongoDB collections.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      features: ['Ingredient search', 'Saved recipes', 'Category sort', 'Responsive layout'],
      impact: 'Reduced time-to-recipe and improved return usage for exploration sessions.',
      github: '#',
      live: '#',
    },
    {
      title: 'College Placement Insights',
      tag: 'Data Dashboard',
      summary: 'Placement trend dashboard with role-wise, company-wise and skill-wise insights.',
      problem: 'Placement data was fragmented and difficult for students to convert into planning actions.',
      approach: 'Created visual dashboards with flexible filters and clear information hierarchy.',
      architecture: 'Frontend analytics UI + API aggregation + SQL data slices for reporting.',
      stack: ['React', 'Express', 'MySQL', 'Chart.js'],
      features: ['Trend visualizations', 'Role filters', 'Skill mapping', 'Insight cards'],
      impact: 'Helped users make better data-driven preparation decisions for placement cycles.',
      github: '#',
      live: '#',
    },
    {
      title: 'Background Remover',
      tag: 'AI Utility',
      summary: 'Single-purpose utility for one-click background removal and export.',
      problem: 'Most editing tools felt heavy for quick social/profile image cleanup.',
      approach: 'Designed a short upload-preview-export flow with clear status handling.',
      architecture: 'Lightweight React front-end + processing API bridge + output transformations.',
      stack: ['React', 'Node.js', 'AI API'],
      features: ['Upload preview', 'One-click remove', 'Export presets', 'Error handling'],
      impact: 'Reduced editing friction and improved output speed for end users.',
      github: '#',
      live: '#',
    },
    {
      title: 'RoadGuard',
      tag: 'Safety Platform',
      summary: 'Road safety reporting and awareness concept with quick incident flow.',
      problem: 'Incident reporting often has too many steps and unclear urgency handling.',
      approach: 'Built quick-action reporting paths with map context and severity labels.',
      architecture: 'React action UI + API service routes + geo metadata integrations.',
      stack: ['React', 'Node.js', 'Geo APIs', 'Express'],
      features: ['Incident submit', 'Map context', 'Alert states', 'Status updates'],
      impact: 'Improved clarity and response readiness in safety communication scenarios.',
      github: '#',
      live: '#',
    },
  ];

  const skills = [
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      tone: 'bg-[#fef3a6] border-[#f59e0b]/30',
    },
    {
      name: 'TypeScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      tone: 'bg-[#dbeafe] border-[#2563eb]/30',
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      tone: 'bg-[#dff7ff] border-[#06b6d4]/30',
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      tone: 'bg-[#dcfce7] border-[#16a34a]/30',
    },
    {
      name: 'Express',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      tone: 'bg-[#f1f5f9] border-black/20',
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      tone: 'bg-[#dcfce7] border-[#15803d]/30',
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      tone: 'bg-[#e0f2fe] border-[#0ea5e9]/30',
    },
    {
      name: 'REST API',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      tone: 'bg-[#d1fae5] border-[#059669]/30',
    },
  ];

  const tools = [
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      tone: 'bg-[#ffedd5] border-[#ea580c]/30',
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      tone: 'bg-[#e5e7eb] border-black/20',
    },
    {
      name: 'VS Code',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      tone: 'bg-[#dbeafe] border-[#2563eb]/30',
    },
    {
      name: 'Postman',
      logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
      tone: 'bg-[#ffedd5] border-[#f97316]/30',
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      tone: 'bg-[#e0f2fe] border-[#0284c7]/30',
    },
    {
      name: 'MongoDB Compass',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      tone: 'bg-[#dcfce7] border-[#16a34a]/30',
    },
    {
      name: 'Figma',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      tone: 'bg-[#fae8ff] border-[#c026d3]/30',
    },
    {
      name: 'Vite',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
      tone: 'bg-[#ede9fe] border-[#7c3aed]/30',
    },
  ];

  const education = [
    {
      year: '2023 - 2027',
      title: 'B.Tech Computer Science Engineering',
      org: 'Charusat University, Changa',
      points: [
        'Focused on end-to-end full stack systems from UI to deployment.',
        'Built production-style projects with modular architecture principles.',
        'Applied analytics and system design concepts in practical implementations.',
      ],
    },
    {
      year: '2023',
      title: 'HSC (PCM)',
      org: 'Alpha Vidhya Sankul, Junagadh',
      points: [
        'Strengthened analytical thinking through mathematics and physics.',
        'Developed structured reasoning approach for technical problem-solving.',
      ],
    },
    {
      year: '2021',
      title: 'SSC',
      org: 'Alpha Vidhya Sankul, Junagadh',
      points: ['Built strong academic fundamentals and consistency in learning.'],
    },
  ];

  const experiences = [
    {
      year: '2024',
      title: 'Data Analyst',
      org: 'CODEALPHA',
      points: [
        'Designed clean dashboard views for data clarity and interpretation.',
        'Optimized analytics workflows for performance and insight extraction.',
        'Communicated findings as actionable recommendations for teams.',
      ],
    },
  ];

  const certsAndAchievements = [
    {
      title: 'Red Hat Linux Certification',
      type: 'Certification',
      subtitle: 'RHL-449',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Software Project Management',
      type: 'Certification',
      subtitle: 'SPM-202',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Top Project Showcase Award',
      type: 'Achievement',
      subtitle: 'Department Level',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Hackathon Finalist',
      type: 'Achievement',
      subtitle: 'University Hack Event',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const [certIndex, setCertIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setPageReady(true), 550);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) setActiveTab(entry.target.id);
        });
      },
      { threshold: 0.28 }
    );

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const lock = mobileMenuOpen || expandedProject !== null;
    document.body.style.overflow = lock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, expandedProject]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCertIndex((p) => (p + 1) % certsAndAchievements.length);
    }, 4300);
    return () => clearInterval(timer);
  }, [certsAndAchievements.length]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const openProjectExpand = (idx) => {
    setExpandedProject(idx);
  };

  const closeProjectExpand = () => {
    setExpandedProject(null);
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mkovqlpb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _subject: `Portfolio Message from ${formData.name}` }),
      });
      if (!response.ok) throw new Error('send-failed');
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3500);
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3500);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-neo-bg text-neo-black selection:bg-neo-green selection:text-neo-black">
      <nav className="fixed left-1/2 top-6 z-50 w-[94%] max-w-6xl -translate-x-1/2">
        <div className="dock-glass rounded-2xl px-5 py-4 md:px-8 md:py-5">
          <div className="flex items-center justify-between">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-neo-black bg-neo-green text-xs font-bold">DP</span>
              <span className="text-xl font-bold md:text-2xl">Dhyey.</span>
            </button>

            <div className="hidden items-center gap-7 md:flex">
              {nav.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm font-semibold transition-all duration-300 ${activeTab === item.id ? 'text-neo-black underline decoration-2 underline-offset-8' : 'text-black/70 hover:text-neo-black'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden rounded-xl border border-neo-black px-5 py-2 text-sm font-semibold transition hover:bg-neo-black hover:text-white md:block"
            >
              Let&apos;s Talk
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-neo-black/60 bg-white/70 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="dock-overlay fixed inset-0 z-[70] md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Motion.div
              initial={{ opacity: 0, y: -26, scale: 0.56, rotate: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -18, scale: 0.64, rotate: 0.5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24, mass: 0.7 }}
              className="dock-glass absolute left-1/2 top-20 w-[88vw] max-w-[340px] -translate-x-1/2 rounded-3xl p-5"
              style={{ transformOrigin: 'top center' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.08, duration: 0.2 }}
                className="pointer-events-none absolute -top-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-black/20 bg-white/80"
              />
              <div className="mb-5 flex items-center justify-between">
                <p className="text-sm font-bold uppercase tracking-widest text-black/65">Quick Links</p>
                <button onClick={() => setMobileMenuOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg border border-black/20">
                  <X size={18} />
                </button>
              </div>
              <div className="space-y-2">
                {nav.map((item) => (
                  <button
                    key={`mobile-${item.id}`}
                    onClick={() => scrollTo(item.id)}
                    className="flex w-full items-center justify-between rounded-xl border border-black/15 bg-white px-4 py-3 text-left text-sm font-semibold"
                  >
                    {item.label}
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!pageReady && (
          <Motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.48 }}
            className="fixed inset-0 z-[85] grid place-items-center overflow-hidden bg-white"
          >
            <Motion.div
              animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.06, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(185,255,102,0.28),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(25,26,35,0.14),transparent_38%),radial-gradient(circle_at_50%_80%,rgba(185,255,102,0.2),transparent_44%)]"
            />

            {[0, 1, 2, 3].map((i) => (
              <Motion.div
                key={`loader-orbit-${i}`}
                animate={{
                  rotate: [0, i % 2 === 0 ? 360 : -360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 4.8 - i * 0.6, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 2.2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="absolute h-[220px] w-[220px] rounded-full border border-black/10"
                style={{
                  width: `${220 - i * 34}px`,
                  height: `${220 - i * 34}px`,
                  borderTopColor: i % 2 === 0 ? 'rgba(25,26,35,0.7)' : 'rgba(185,255,102,0.95)',
                  borderBottomColor: i % 2 === 0 ? 'rgba(185,255,102,0.9)' : 'rgba(25,26,35,0.45)',
                }}
              />
            ))}

            <div className="relative flex flex-col items-center">
              <Motion.div
                animate={{ y: [0, -7, 0], scale: [0.95, 1.03, 0.95] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 rounded-2xl border border-neo-black bg-neo-green px-7 py-3 text-sm font-bold shadow-[0_8px_26px_rgba(0,0,0,0.22)]"
              >
                Dhyey Portfolio
              </Motion.div>

              <Motion.p
                animate={{ opacity: [0.45, 1, 0.45], letterSpacing: ['0.18em', '0.28em', '0.18em'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-4 text-[11px] font-semibold uppercase text-black/60"
              >
                Loading Experience
              </Motion.p>

              <Motion.div
                initial={{ width: 0 }}
                animate={{ width: 220 }}
                transition={{ duration: 1.35, repeat: Infinity, repeatType: 'reverse', ease: [0.4, 0, 0.2, 1] }}
                className="mt-5 h-1.5 rounded-full bg-neo-black/80"
              />

              <div className="mt-4 flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <Motion.span
                    key={`loader-dot-${i}`}
                    animate={{ y: [0, -6, 0], opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 0.8, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                    className="h-2 w-2 rounded-full bg-black/70"
                  />
                ))}
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      <LayoutGroup id="project-expand-group">
      <Motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: pageReady ? 1 : 0, y: pageReady ? 0 : 10 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-4 pb-12 pt-36 md:px-8 md:pt-40"
      >
        <Motion.section
          id="home"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="py-10 md:py-16"
        >
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-7">
              <p className="inline-block rounded-md bg-neo-green px-3 py-1 text-sm font-bold">Full Stack Developer</p>
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">Building clean digital products with MERN architecture.</h1>
              <p className="max-w-xl text-lg text-black/75 md:text-xl">
                I design and engineer product-grade web experiences, from intuitive UI to scalable backend architecture.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo('projects')}
                  className="rounded-2xl bg-neo-black px-7 py-4 text-base font-semibold text-white transition hover:translate-y-[-2px]"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="rounded-2xl border border-neo-black px-7 py-4 text-base font-semibold transition hover:bg-black/5"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <Motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="dock-glass relative overflow-hidden rounded-[2rem] p-8"
            >
              <div className="float-slow absolute -left-12 top-8 h-32 w-32 rounded-full border border-black/20" />
              <div className="float-fast absolute right-8 top-4 h-20 w-20 rounded-full border border-black/20" />
              <div className="float-slow absolute bottom-8 left-20 h-16 w-16 rounded-full border border-black/20" />
              <h3 className="text-2xl font-bold md:text-3xl">Product Mindset</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/75 md:text-base">
                Full stack execution with clear architecture, reusable systems, and user-focused interfaces.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl border border-black/15 bg-white/80 p-3 text-center">
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-[10px] uppercase tracking-widest text-black/60">Projects</p>
                </div>
                <div className="rounded-xl border border-black/15 bg-white/80 p-3 text-center">
                  <p className="text-2xl font-bold">1+</p>
                  <p className="text-[10px] uppercase tracking-widest text-black/60">Role</p>
                </div>
                <div className="rounded-xl border border-black/15 bg-white/80 p-3 text-center">
                  <p className="text-2xl font-bold">MERN</p>
                  <p className="text-[10px] uppercase tracking-widest text-black/60">Core Stack</p>
                </div>
              </div>
            </Motion.div>
          </div>
        </Motion.section>

        <Motion.section
          id="projects"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="py-16"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Project Showcase</h2>
            <p className="max-w-xl text-black/70">Cards open in-place with complete project details while keeping the same visual style.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, idx) => {
              const mobileDark = idx % 2 === 1;
              const desktopDark = (Math.floor(idx / 2) + (idx % 2)) % 2 === 1;

              const toneClass = `${
                mobileDark
                  ? 'bg-neo-black text-white border-white/20'
                  : 'bg-neo-green text-neo-black border-black/20'
              } ${
                desktopDark
                  ? 'md:bg-neo-black md:text-white md:border-white/20'
                  : 'md:bg-neo-green md:text-neo-black md:border-black/20'
              }`;

              const tagClass = `${
                mobileDark ? 'bg-neo-green text-black' : 'bg-black text-white'
              } ${desktopDark ? 'md:bg-neo-green md:text-black' : 'md:bg-black md:text-white'}`;

              const caseStudyClass = `${
                mobileDark ? 'border-neo-green text-neo-green' : 'border-black/30 text-black/70'
              } ${
                desktopDark ? 'md:border-neo-green md:text-neo-green' : 'md:border-black/30 md:text-black/70'
              }`;

              const summaryClass = `${mobileDark ? 'text-white/80' : 'text-black/75'} ${
                desktopDark ? 'md:text-white/80' : 'md:text-black/75'
              }`;

              const detailLineClass = `${mobileDark ? 'text-white/75' : 'text-black/70'} ${
                desktopDark ? 'md:text-white/75' : 'md:text-black/70'
              }`;

              const linkClass = `${mobileDark ? 'text-neo-green' : 'text-black'} ${
                desktopDark ? 'md:text-neo-green' : 'md:text-black'
              }`;

              return (
                <Motion.article
                  key={project.title}
                  layoutId={`project-card-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  whileHover={{ y: -10, scale: 1.015 }}
                  onClick={() => openProjectExpand(idx)}
                  className={`${toneClass} ${expandedProject === idx ? 'pointer-events-none opacity-0' : ''} dock-project-card interactive-card group flex h-full min-h-[300px] cursor-pointer flex-col rounded-[2rem] border p-6 text-left`}
                >
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <p className={`inline-block rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${tagClass}`}>
                      {project.tag}
                    </p>
                    <span className={`rounded-lg border px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${caseStudyClass}`}>
                      Case Study
                    </span>
                  </div>
                  <h3 className="mb-2 text-3xl font-bold">{project.title}</h3>
                  <p className={`${summaryClass} mb-3 text-sm leading-relaxed`}>{project.summary}</p>
                  <div className="mb-4 grid gap-1 text-xs">
                    <p className={detailLineClass}>Depth: architecture, modules, challenges, impact</p>
                    <p className={detailLineClass}>Tap to open full implementation details</p>
                  </div>
                  <span className={`mt-auto inline-flex items-center gap-2 pt-4 text-xs font-semibold ${linkClass}`}>
                    Open project details <ArrowUpRight size={14} />
                  </span>
                </Motion.article>
              );
            })}
          </div>
        </Motion.section>

        <Motion.section
          id="skills"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="py-16"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Skills & Tools</h2>
            <p className="max-w-xl text-black/70">Color-rich interactive skill and tooling cards.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="dock-glass rounded-[2rem] p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-neo-green px-3 py-1 text-sm font-bold">
                <Code2 size={16} /> Skills
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {skills.map((item) => (
                  <Motion.div key={item.name} whileHover={{ y: -6, rotate: -0.8, scale: 1.02 }} whileTap={{ scale: 0.96 }} className={`${item.tone} interactive-card rounded-2xl border p-3`}>
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/70">
                      <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" loading="lazy" />
                    </div>
                    <p className="text-xs font-semibold">{item.name}</p>
                  </Motion.div>
                ))}
              </div>
            </article>

            <article className="dock-glass rounded-[2rem] p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-neo-green px-3 py-1 text-sm font-bold text-black">
                <Wrench size={16} /> Tools
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {tools.map((item) => (
                  <Motion.div key={item.name} whileHover={{ y: -6, rotate: 0.8, scale: 1.02 }} whileTap={{ scale: 0.96 }} className={`${item.tone} interactive-card rounded-2xl border p-3`}>
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/70">
                      <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" loading="lazy" />
                    </div>
                    <p className="text-xs font-semibold">{item.name}</p>
                  </Motion.div>
                ))}
              </div>
            </article>
          </div>
        </Motion.section>

        <Motion.section
          id="education-experience"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="py-16"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Education & Experience</h2>
            <p className="max-w-xl text-black/70">Detailed timeline cards with clean structure and highlights.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="dock-glass rounded-[2rem] p-6">
              <h3 className="mb-5 inline-flex items-center gap-2 text-2xl font-bold"><GraduationCap size={22} /> Education</h3>
              <div className="space-y-4">
                {education.map((item, idx) => (
                  <Motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`${idx % 2 === 0 ? 'bg-neo-green/70' : 'bg-white'} interactive-card rounded-2xl border border-black/15 p-4`}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-black/55">{item.year}</p>
                    <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                    <p className="text-sm font-semibold text-black/70">{item.org}</p>
                    <ul className="mt-2 space-y-1 text-sm text-black/75">
                      {item.points.map((p) => (
                        <li key={p}>- {p}</li>
                      ))}
                    </ul>
                  </Motion.div>
                ))}
              </div>
            </article>

            <article className="dock-glass rounded-[2rem] p-6">
              <h3 className="mb-5 inline-flex items-center gap-2 text-2xl font-bold"><Briefcase size={22} /> Experience</h3>
              <div className="space-y-4">
                {experiences.map((item, idx) => (
                  <Motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    className={`${idx % 2 === 0 ? 'bg-neo-black text-white' : 'bg-neo-green'} interactive-card rounded-2xl border border-black/15 p-4`}
                  >
                    <p className={`text-xs font-bold uppercase tracking-widest ${idx % 2 === 0 ? 'text-white/70' : 'text-black/55'}`}>{item.year}</p>
                    <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                    <p className={`text-sm font-semibold ${idx % 2 === 0 ? 'text-white/80' : 'text-black/70'}`}>{item.org}</p>
                    <ul className={`mt-2 space-y-1 text-sm ${idx % 2 === 0 ? 'text-white/85' : 'text-black/75'}`}>
                      {item.points.map((p) => (
                        <li key={p}>- {p}</li>
                      ))}
                    </ul>
                  </Motion.div>
                ))}
              </div>
            </article>
          </div>
        </Motion.section>

        <Motion.section
          id="certifications"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="py-16"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Certifications & Achievements</h2>
            <p className="max-w-xl text-black/70">Spotlight panel with animated milestone cards for a cleaner and richer format.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="dock-glass rounded-[2rem] p-4 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-widest text-black/55">Milestone Spotlight</p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCertIndex((p) => (p - 1 + certsAndAchievements.length) % certsAndAchievements.length)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/20 bg-white"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={() => setCertIndex((p) => (p + 1) % certsAndAchievements.length)}
                    className="grid h-10 w-10 place-items-center rounded-full border border-black/20 bg-white"
                  >
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <Motion.article
                  key={certIndex}
                  initial={{ opacity: 0, y: 18, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.985 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="interactive-card grid gap-5 rounded-3xl border border-black/15 bg-white/80 p-4 md:grid-cols-[1.1fr_1fr] md:p-5"
                >
                  <img
                    src={certsAndAchievements[certIndex].image}
                    alt={certsAndAchievements[certIndex].title}
                    className="h-64 w-full rounded-2xl object-cover md:h-[280px]"
                  />
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="mb-2 inline-block rounded-md bg-neo-green px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                        {certsAndAchievements[certIndex].type}
                      </p>
                      <h3 className="text-2xl font-bold md:text-3xl">{certsAndAchievements[certIndex].title}</h3>
                      <p className="mt-2 text-sm font-semibold text-black/65">{certsAndAchievements[certIndex].subtitle}</p>
                    </div>
                    <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-2 text-xs font-semibold text-black/70">
                      <Trophy size={14} /> Highlighted Milestone
                    </div>
                  </div>
                </Motion.article>
              </AnimatePresence>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {certsAndAchievements.map((item, idx) => (
                <Motion.button
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  onClick={() => setCertIndex(idx)}
                  className={`dock-glass interactive-card overflow-hidden rounded-3xl border p-0 text-left ${certIndex === idx ? 'border-neo-black/55 ring-2 ring-neo-green/60' : 'border-black/10'}`}
                >
                  <div className="grid grid-cols-[96px_1fr] items-center">
                    <img src={item.image} alt={item.title} className="h-full min-h-[96px] w-full object-cover" />
                    <div className="p-3">
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-black/55">{item.type}</p>
                      <h3 className="text-sm font-bold leading-tight">{item.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-black/60">{item.subtitle}</p>
                    </div>
                  </div>
                </Motion.button>
              ))}
            </div>
          </div>
        </Motion.section>

        <Motion.section
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="py-16"
        >
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Contact</h2>
            <p className="max-w-xl text-black/70">Let&apos;s discuss full stack development, product features, or collaboration opportunities.</p>
          </div>

          <div className="dock-glass relative overflow-hidden rounded-[2rem] p-6 md:p-10">
            {formStatus === 'success' && (
              <div className="absolute inset-0 z-20 grid place-items-center bg-neo-black/85 text-white">
                <div className="text-center">
                  <CheckCircle size={64} className="mx-auto mb-3 text-neo-green" />
                  <h3 className="text-2xl font-bold">Message Sent</h3>
                  <p className="text-white/80">Thanks. I will get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleContactSubmit} className="grid gap-4 md:max-w-2xl">
              <input
                value={formData.name}
                name="name"
                onChange={(e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))}
                type="text"
                placeholder="Name"
                className="rounded-xl border border-neo-black bg-white/80 px-5 py-4 outline-none transition focus:ring-2 focus:ring-neo-green"
                required
              />
              <input
                value={formData.email}
                name="email"
                onChange={(e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))}
                type="email"
                placeholder="Email"
                className="rounded-xl border border-neo-black bg-white/80 px-5 py-4 outline-none transition focus:ring-2 focus:ring-neo-green"
                required
              />
              <textarea
                value={formData.message}
                name="message"
                onChange={(e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))}
                rows={5}
                placeholder="Message"
                className="rounded-xl border border-neo-black bg-white/80 px-5 py-4 outline-none transition focus:ring-2 focus:ring-neo-green"
                required
              />
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full rounded-xl bg-neo-black px-6 py-4 text-base font-semibold text-white transition hover:bg-black/85 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </Motion.section>
      </Motion.main>

      <footer className="mx-auto mt-10 max-w-6xl px-4 pb-10 md:px-8">
        <div className="rounded-[2rem] bg-neo-black px-6 py-10 text-white md:px-10">
          <div className="mb-8 flex flex-col items-start justify-between gap-6 border-b border-white/20 pb-8 md:flex-row md:items-center">
            <h3 className="text-2xl font-bold">Dhyey Thummar</h3>
            <div className="flex gap-3">
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-neo-green hover:text-black"><Github size={18} /></a>
              <a href="https://www.linkedin.com/in/dhyey-thummar-41b978286?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-neo-green hover:text-black"><Linkedin size={18} /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-neo-green hover:text-black"><Instagram size={18} /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-neo-green hover:text-black"><Twitter size={18} /></a>
            </div>
          </div>

          <p className="text-sm text-white/80">Email: dhyey@example.com</p>
          <p className="mt-2 text-xs uppercase tracking-widest text-white/60">© 2026 crafted by Dhyey Thummar</p>
        </div>
      </footer>

      <AnimatePresence>
        {expandedProject !== null && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="dock-overlay fixed inset-0 z-[90] p-2 sm:p-3 md:p-7"
            onClick={closeProjectExpand}
          >
            {(() => {
              const idx = expandedProject;
              const project = projects[idx];
              const mobileDark = idx % 2 === 1;
              const desktopDark = (Math.floor(idx / 2) + (idx % 2)) % 2 === 1;

              const toneClass = `${
                mobileDark
                  ? 'bg-neo-black text-white border-white/20'
                  : 'bg-neo-green text-neo-black border-black/20'
              } ${
                desktopDark
                  ? 'md:bg-neo-black md:text-white md:border-white/20'
                  : 'md:bg-neo-green md:text-neo-black md:border-black/20'
              }`;

              const tagClass = `${
                mobileDark ? 'bg-neo-green text-black' : 'bg-black text-white'
              } ${desktopDark ? 'md:bg-neo-green md:text-black' : 'md:bg-black md:text-white'}`;

              return (
            <Motion.article
              layoutId={`project-card-${idx}`}
              layout
              transition={{ layout: { duration: 0.58, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } }}
              className={`${toneClass} mx-auto flex h-[calc(100dvh-1rem)] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border p-4 md:h-[calc(100vh-3.5rem)] md:p-6`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-current/20 bg-inherit/95 pb-4 backdrop-blur-xl">
                <div>
                  <p className={`mb-2 inline-block rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-widest ${tagClass}`}>
                    {project.tag}
                  </p>
                  <h3 className="text-3xl font-bold md:text-4xl">{project.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={project.github}
                      className="inline-flex items-center gap-2 rounded-full border border-current/45 px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white"
                    >
                      <Github size={14} /> Code
                    </a>
                    <a
                      href={project.live}
                      className="inline-flex items-center gap-2 rounded-full bg-neo-green px-4 py-2 text-xs font-semibold text-black hover:bg-[#a8ea59]"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  </div>
                </div>
                <button
                  onClick={closeProjectExpand}
                  className="inline-flex items-center gap-2 rounded-xl border border-current/30 px-3 py-2 text-xs font-semibold"
                >
                  <X size={14} /> Close
                </button>
              </div>

              <div
                className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1"
                style={{ paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
              >
                <p className="mb-5 text-sm leading-relaxed opacity-90">{project.summary}</p>

                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-current/20 bg-white/15 p-4 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Problem</p>
                    <p className="mt-2 text-sm opacity-95">{project.problem}</p>
                  </div>
                  <div className="rounded-2xl border border-current/20 bg-white/15 p-4 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Approach</p>
                    <p className="mt-2 text-sm opacity-95">{project.approach}</p>
                  </div>
                  <div className="rounded-2xl border border-current/20 bg-white/15 p-4 backdrop-blur-sm md:col-span-2">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Architecture</p>
                    <p className="mt-2 text-sm opacity-95">{project.architecture}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest opacity-70">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-current/35 px-3 py-1 text-xs font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest opacity-70">Key Features</p>
                  <ul className="grid gap-2 text-sm opacity-95 md:grid-cols-2">
                    {project.features.map((item) => (
                      <li key={item} className="rounded-xl border border-current/20 bg-white/15 px-3 py-2 backdrop-blur-sm">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 rounded-2xl border border-current/20 bg-white/15 p-4 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Impact</p>
                  <p className="mt-2 text-sm opacity-95">{project.impact}</p>
                </div>
              </div>
            </Motion.article>
              );
            })()}
          </Motion.div>
        )}
      </AnimatePresence>

      </LayoutGroup>
    </div>
  );
};

export default App;
