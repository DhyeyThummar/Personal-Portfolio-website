import React, { useEffect, useMemo, useState } from 'react';
import {
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
  ShieldCheck,
  Twitter,
  Wrench,
  X,
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeTool, setActiveTool] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectSheetOpen, setProjectSheetOpen] = useState(false);
  const [journeySheetOpen, setJourneySheetOpen] = useState(false);

  const nav = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'education-experience', label: 'Journey' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );

  const services = [
    { title: 'MERN Stack\nDevelopment', tone: 'light' },
    { title: 'REST API &\nBackend Systems', tone: 'green' },
    { title: 'React UI\nEngineering', tone: 'dark' },
    { title: 'Database Design\n(MongoDB/SQL)', tone: 'light' },
    { title: 'Performance\nOptimization', tone: 'green' },
    { title: 'Deployment &\nDev Workflow', tone: 'dark' },
  ];

  const projects = [
    {
      title: 'Recipe Corner',
      tag: 'Full Stack Food Platform',
      summary: 'Recipe discovery app with structured categories, saved collections, and fast filtering.',
      challenge: 'Users struggled to discover recipes quickly across many tags and ingredients.',
      solution: 'Built an indexed recipe browsing flow with dynamic filtering, collection save states, and optimized query routes.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      highlights: ['Smart filter system', 'Saved recipes module', 'Responsive UI architecture'],
      outcome: 'Improved recipe discovery speed and gave users a clear, scalable browsing experience.',
      github: '#',
      live: '#',
    },
    {
      title: 'College Placement Insights',
      tag: 'Data + Dashboard App',
      summary: 'Analytics dashboard for placement trends with visual reporting for students and mentors.',
      challenge: 'Placement data was scattered and difficult to interpret for decision making.',
      solution: 'Designed dashboard modules with category-based metrics, trend charts, and role-focused filters.',
      stack: ['React', 'Express', 'SQL', 'Charting'],
      highlights: ['Trend visualizations', 'Role-wise filtering', 'Dashboard-first UX'],
      outcome: 'Enabled faster insight extraction for skill planning and placement strategy.',
      github: '#',
      live: '#',
    },
    {
      title: 'Background Remover',
      tag: 'AI Utility Tool',
      summary: 'Single-purpose utility app for quick background removal with polished upload flow.',
      challenge: 'Users needed one-click background removal without confusing multi-step editing.',
      solution: 'Created a compact flow from upload to export with clear states and lightweight previews.',
      stack: ['React', 'Node.js', 'Image Processing API'],
      highlights: ['One-click UX', 'Lightweight pipeline', 'Export-ready output'],
      outcome: 'Reduced manual editing effort and made social-ready image output faster.',
      github: '#',
      live: '#',
    },
    {
      title: 'RoadGuard',
      tag: 'Safety Product Concept',
      summary: 'Road safety app concept with clean incident reporting and awareness-focused modules.',
      challenge: 'Safety reporting flows are often cluttered and hard to complete quickly.',
      solution: 'Prototyped clear reporting actions, map-oriented context, and streamlined alert interfaces.',
      stack: ['React', 'Node.js', 'Geo APIs'],
      highlights: ['Incident reporting flow', 'Alert-focused UI', 'Map context support'],
      outcome: 'Improved usability for fast reporting and structured road safety tracking.',
      github: '#',
      live: '#',
    },
  ];

  const journey = [
    {
      num: '01',
      title: 'Education',
      text: 'Academic foundation from SSC and HSC (PCM), currently pursuing B.Tech CSE at Charusat University with focus on full stack development.',
    },
    {
      num: '02',
      title: 'Experience',
      text: 'Worked as Data Analyst at CODEALPHA (2024), delivering analytics systems optimized for clarity and performance.',
    },
    {
      num: '03',
      title: 'Certifications',
      text: 'Red Hat Linux (RHL-449) and Software Project Management (SPM-202).',
    },
    {
      num: '04',
      title: 'Full Stack Focus',
      text: 'Building production-ready products using React, Node.js, Express, MongoDB, SQL, and deployment workflows.',
    },
  ];

  const skills = [
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'REST APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  ];

  const tools = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'MongoDB Compass', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  const education = [
    {
      year: '2021',
      title: 'SSC',
      org: 'Alpha Vidhya Sankul, Junagadh',
      desc: 'Completed secondary education with a strong academic foundation.',
    },
    {
      year: '2023',
      title: 'HSC (PCM)',
      org: 'Alpha Vidhya Sankul, Junagadh',
      desc: 'Focused on Physics, Chemistry, and Mathematics with strong analytical training.',
    },
    {
      year: '2023 - 2027',
      title: 'B.Tech Computer Science Engineering',
      org: 'Charusat University, Changa',
      desc: 'Focused on full stack development, UI engineering, and data analytics.',
    },
  ];

  const experiences = [
    {
      year: '2024',
      title: 'Data Analyst',
      org: 'CODEALPHA',
      desc: 'Built efficient analytics systems focused on data clarity, performance, and scalable intelligence.',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in');
            if (entry.target.id) setActiveTab(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shouldLock = mobileMenuOpen || projectSheetOpen || journeySheetOpen;
    document.body.style.overflow = shouldLock ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, projectSheetOpen, journeySheetOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  const openProjectDetails = (idx) => {
    setActiveProject(idx);
    setProjectSheetOpen(true);
  };

  const openJourneyDetails = (idx) => {
    setActiveJourney(idx);
    setJourneySheetOpen(true);
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
    <div className="min-h-screen bg-neo-bg text-neo-black selection:bg-neo-green selection:text-neo-black">
      <nav className="fixed top-6 left-1/2 z-50 w-[94%] max-w-6xl -translate-x-1/2">
        <div className="liquid-glass rounded-2xl px-5 py-4 md:px-8 md:py-5">
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

            <button onClick={() => scrollTo('contact')} className="hidden rounded-xl border border-neo-black px-5 py-2 text-sm font-semibold transition hover:bg-neo-black hover:text-white md:block">
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

      {mobileMenuOpen && (
        <div className="ios-sheet-backdrop fixed inset-0 z-[70] md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div
            className="ios-sheet-panel absolute right-3 top-3 w-[78vw] max-w-xs rounded-2xl border border-white/70 bg-white/80 p-5 backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
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
          </div>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 pb-12 pt-36 md:px-8 md:pt-40">
        <section id="home" className="reveal grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">
          <div className="space-y-7">
            <p className="inline-block rounded-md bg-neo-green px-3 py-1 text-sm font-bold">Full Stack Developer</p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">Building clean digital products with MERN architecture.</h1>
            <p className="max-w-xl text-lg text-black/75 md:text-xl">
              I am Dhyey Thummar. I build intuitive interfaces and scalable backend systems with React, Node.js, Express, MongoDB, and SQL.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => scrollTo('projects')} className="rounded-2xl bg-neo-black px-7 py-4 text-base font-semibold text-white transition hover:translate-y-[-2px]">View Projects</button>
              <button onClick={() => scrollTo('contact')} className="rounded-2xl border border-neo-black px-7 py-4 text-base font-semibold transition hover:bg-black/5">Contact Me</button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-[340px] w-[340px] rounded-full border border-neo-black/30" />
            <div className="absolute h-[260px] w-[260px] rounded-full border border-neo-black/20" />
            <img
              src="/WhatsApp_Image_2026-02-22_at_22.33.20__1_-removebg-preview.png"
              alt="Dhyey Thummar"
              className="hero-float relative z-10 w-[320px] max-w-full"
            />
          </div>
        </section>

        <section id="services" className="reveal py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Services</h2>
            <p className="max-w-xl text-black/70">Core areas where I deliver full-stack product value from UI architecture to API and database design.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((item, idx) => {
              const tone =
                item.tone === 'dark'
                  ? 'bg-neo-black text-white'
                  : item.tone === 'green'
                  ? 'bg-neo-green text-neo-black'
                  : 'bg-neo-gray text-neo-black';

              return (
                <article key={item.title} className={`reveal group rounded-[2rem] border border-neo-black p-8 shadow-neo transition duration-500 hover:-translate-y-1 ${tone}`} style={{ transitionDelay: `${idx * 70}ms` }}>
                  <div className="mb-14 flex items-start justify-between">
                    <h3 className={`whitespace-pre-line rounded-lg px-2 py-1 text-3xl font-bold ${item.tone === 'dark' ? 'bg-white text-black' : 'bg-white/80 text-black'}`}>{item.title}</h3>
                    <span className={`grid h-11 w-11 place-items-center rounded-full transition group-hover:rotate-45 ${item.tone === 'dark' ? 'bg-white text-black' : 'bg-neo-black text-neo-green'}`}>
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    Learn more <ArrowUpRight size={16} />
                  </span>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="reveal py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Projects</h2>
            <p className="max-w-xl text-black/70">Click a project card to open complete project details in the panel.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-[2rem] bg-neo-black p-4 md:p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {projects.map((project, idx) => (
                  <button
                    key={project.title}
                    onClick={() => openProjectDetails(idx)}
                    className={`project-card interactive-card text-left rounded-3xl border p-5 transition duration-500 ${activeProject === idx ? 'border-neo-green bg-white/18 text-white' : 'border-white/20 bg-white/5 text-white hover:bg-white/10'}`}
                    style={{ transitionDelay: `${idx * 90}ms` }}
                  >
                    <p className="mb-3 inline-block rounded-md bg-neo-green px-2 py-1 text-[10px] font-bold text-neo-black">{project.tag}</p>
                    <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                    <p className="text-sm text-white/75">{project.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-neo-green">
                      Open details <ArrowUpRight size={14} />
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <aside className="hidden detail-enter rounded-[2rem] border border-neo-black bg-white p-6 shadow-neo md:p-7 lg:block">
              <p className="mb-2 inline-block rounded-md bg-neo-green px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-neo-black">
                {projects[activeProject].tag}
              </p>
              <h3 className="mb-3 text-3xl font-bold">{projects[activeProject].title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-black/75">{projects[activeProject].summary}</p>

              <div className="mb-5 space-y-3 text-sm text-black/80">
                <p><span className="font-semibold text-black">Challenge:</span> {projects[activeProject].challenge}</p>
                <p><span className="font-semibold text-black">Solution:</span> {projects[activeProject].solution}</p>
                <p><span className="font-semibold text-black">Outcome:</span> {projects[activeProject].outcome}</p>
              </div>

              <div className="mb-5">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black/60">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].stack.map((item) => (
                    <span key={item} className="rounded-full border border-neo-black px-3 py-1 text-xs font-semibold">{item}</span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black/60">Highlights</p>
                <ul className="space-y-1 text-sm text-black/80">
                  {projects[activeProject].highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={projects[activeProject].github} className="inline-flex items-center gap-2 rounded-full border border-neo-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white">
                  <Github size={14} /> Repo
                </a>
                <a href={projects[activeProject].live} className="inline-flex items-center gap-2 rounded-full bg-neo-green px-4 py-2 text-xs font-semibold text-black hover:bg-[#a8ea59]">
                  <ExternalLink size={14} /> Live
                </a>
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="reveal py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Skills & Tools</h2>
            <p className="max-w-xl text-black/70">Core stack and workflow tools used in development projects.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="reveal rounded-[2rem] border border-neo-black bg-neo-gray p-6 shadow-neo">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-neo-green px-3 py-1 text-sm font-bold">
                <Code2 size={16} /> Skills
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map((item, idx) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveSkill(idx)}
                    className={`skill-tile rounded-2xl border bg-white p-3 text-left ${activeSkill === idx ? 'border-neo-black shadow-neo' : 'border-neo-black/20'}`}
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-black/5">
                      <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" loading="lazy" />
                    </div>
                    <p className="text-xs font-semibold text-black/80">{item.name}</p>
                  </button>
                ))}
              </div>
            </article>

            <article className="reveal rounded-[2rem] border border-neo-black bg-neo-black p-6 text-white shadow-neo">
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-neo-green px-3 py-1 text-sm font-bold text-black">
                <Wrench size={16} /> Tools
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
                {tools.map((item, idx) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTool(idx)}
                    className={`tool-tile rounded-2xl border bg-white/5 p-3 text-left ${activeTool === idx ? 'border-neo-green' : 'border-white/20'}`}
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
                      <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" loading="lazy" />
                    </div>
                    <p className="text-xs font-semibold text-white/90">{item.name}</p>
                  </button>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="education-experience" className="reveal py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Education & Experience</h2>
            <p className="max-w-xl text-black/70">Presented as timeline cards for quick scanning and depth.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="reveal rounded-[2rem] border border-neo-black bg-white p-6 shadow-neo">
              <h3 className="mb-5 inline-flex items-center gap-2 text-2xl font-bold"><GraduationCap size={22} /> Education</h3>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-neo-black/15 bg-neo-gray p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-black/55">{item.year}</p>
                    <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                    <p className="text-sm font-semibold text-black/70">{item.org}</p>
                    <p className="mt-2 text-sm text-black/75">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="reveal rounded-[2rem] border border-neo-black bg-white p-6 shadow-neo">
              <h3 className="mb-5 inline-flex items-center gap-2 text-2xl font-bold"><Briefcase size={22} /> Experience</h3>
              <div className="space-y-4">
                {experiences.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-neo-black/15 bg-neo-gray p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-black/55">{item.year}</p>
                    <h4 className="mt-1 text-lg font-bold">{item.title}</h4>
                    <p className="text-sm font-semibold text-black/70">{item.org}</p>
                    <p className="mt-2 text-sm text-black/75">{item.desc}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="journey" className="reveal py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Journey Highlights</h2>
            <p className="max-w-xl text-black/70">New click-format: cards never collapse away, details switch in a fixed panel.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {journey.map((item, idx) => (
                <button
                  key={item.title}
                  onClick={() => openJourneyDetails(idx)}
                  className={`interactive-card rounded-3xl border border-neo-black p-6 text-left transition duration-300 ${activeJourney === idx ? 'bg-neo-green shadow-neo' : 'bg-neo-gray hover:bg-white'}`}
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-black/60">{item.num}</p>
                  <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm text-black/70">Tap to view full detail</p>
                </button>
              ))}
            </div>

            <article className="hidden detail-enter rounded-[2rem] border border-neo-black bg-white p-7 shadow-neo lg:block">
              <p className="mb-2 inline-block rounded-md bg-neo-green px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                Step {journey[activeJourney].num}
              </p>
              <h3 className="text-3xl font-bold">{journey[activeJourney].title}</h3>
              <p className="mt-4 text-base leading-relaxed text-black/80">{journey[activeJourney].text}</p>
            </article>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="reveal rounded-2xl border border-neo-black bg-white p-5 shadow-neo">
              <div className="mb-3 inline-flex rounded-full bg-neo-green p-2"><GraduationCap size={18} /></div>
              <h4 className="font-bold">Education Track</h4>
              <p className="mt-2 text-sm text-black/70">B.Tech CSE at Charusat University with practical full-stack implementation focus.</p>
            </article>
            <article className="reveal rounded-2xl border border-neo-black bg-white p-5 shadow-neo">
              <div className="mb-3 inline-flex rounded-full bg-neo-green p-2"><Briefcase size={18} /></div>
              <h4 className="font-bold">Professional Exposure</h4>
              <p className="mt-2 text-sm text-black/70">Data Analyst experience at CODEALPHA with performance and data clarity focus.</p>
            </article>
            <article className="reveal rounded-2xl border border-neo-black bg-white p-5 shadow-neo">
              <div className="mb-3 inline-flex rounded-full bg-neo-green p-2"><ShieldCheck size={18} /></div>
              <h4 className="font-bold">Certifications</h4>
              <p className="mt-2 text-sm text-black/70">Red Hat Linux and Software Project Management credentials included in profile.</p>
            </article>
          </div>
        </section>

        {projectSheetOpen && (
          <div className="ios-sheet-backdrop fixed inset-0 z-[85] p-3 md:p-8" onClick={() => setProjectSheetOpen(false)}>
            <article className="ios-sheet-panel mx-auto flex h-[calc(100vh-1.5rem)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-black/20 bg-white md:h-[calc(100vh-4rem)]" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/90 px-5 py-4 backdrop-blur-xl md:px-7">
                <p className="text-xs font-bold uppercase tracking-widest text-black/55">Project Details</p>
                <button onClick={() => setProjectSheetOpen(false)} className="grid h-9 w-9 place-items-center rounded-xl border border-black/20">
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-y-auto px-5 py-5 md:px-7 md:py-6">
                <p className="mb-2 inline-block rounded-md bg-neo-green px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  {projects[activeProject].tag}
                </p>
                <h3 className="text-3xl font-bold md:text-4xl">{projects[activeProject].title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/75 md:text-base">{projects[activeProject].summary}</p>

                <div className="mt-6 space-y-4 text-sm text-black/80 md:text-base">
                  <p><span className="font-semibold text-black">Challenge:</span> {projects[activeProject].challenge}</p>
                  <p><span className="font-semibold text-black">Solution:</span> {projects[activeProject].solution}</p>
                  <p><span className="font-semibold text-black">Outcome:</span> {projects[activeProject].outcome}</p>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black/60">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].stack.map((item) => (
                      <span key={item} className="rounded-full border border-neo-black px-3 py-1 text-xs font-semibold md:text-sm">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-black/60">Highlights</p>
                  <ul className="space-y-1 text-sm text-black/80 md:text-base">
                    {projects[activeProject].highlights.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={projects[activeProject].github} className="inline-flex items-center gap-2 rounded-full border border-neo-black px-4 py-2 text-xs font-semibold hover:bg-black hover:text-white">
                    <Github size={14} /> Repo
                  </a>
                  <a href={projects[activeProject].live} className="inline-flex items-center gap-2 rounded-full bg-neo-green px-4 py-2 text-xs font-semibold text-black hover:bg-[#a8ea59]">
                    <ExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
            </article>
          </div>
        )}

        {journeySheetOpen && (
          <div className="ios-sheet-backdrop fixed inset-0 z-[85] p-3 md:p-8" onClick={() => setJourneySheetOpen(false)}>
            <article className="ios-sheet-panel mx-auto flex h-[calc(100vh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-black/20 bg-white md:h-[calc(100vh-4rem)]" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/90 px-5 py-4 backdrop-blur-xl md:px-7">
                <p className="text-xs font-bold uppercase tracking-widest text-black/55">Journey Detail</p>
                <button onClick={() => setJourneySheetOpen(false)} className="grid h-9 w-9 place-items-center rounded-xl border border-black/20">
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-y-auto px-5 py-5 md:px-7 md:py-6">
                <p className="mb-2 inline-block rounded-md bg-neo-green px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                  Step {journey[activeJourney].num}
                </p>
                <h3 className="text-3xl font-bold md:text-4xl">{journey[activeJourney].title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/80 md:text-lg">{journey[activeJourney].text}</p>
              </div>
            </article>
          </div>
        )}

        <section id="contact" className="reveal py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="inline-block w-fit rounded-md bg-neo-green px-3 py-1 text-3xl font-bold md:text-4xl">Contact</h2>
            <p className="max-w-xl text-black/70">Let&apos;s discuss full-stack development, product features, or collaboration opportunities.</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-neo-black bg-neo-gray p-6 md:p-10">
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
                className="rounded-xl border border-neo-black bg-white px-5 py-4 outline-none transition focus:ring-2 focus:ring-neo-green"
                required
              />
              <input
                value={formData.email}
                name="email"
                onChange={(e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))}
                type="email"
                placeholder="Email"
                className="rounded-xl border border-neo-black bg-white px-5 py-4 outline-none transition focus:ring-2 focus:ring-neo-green"
                required
              />
              <textarea
                value={formData.message}
                name="message"
                onChange={(e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }))}
                rows={5}
                placeholder="Message"
                className="rounded-xl border border-neo-black bg-white px-5 py-4 outline-none transition focus:ring-2 focus:ring-neo-green"
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
        </section>
      </main>

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
    </div>
  );
};

export default App;