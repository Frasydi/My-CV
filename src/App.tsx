import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const [loading, setLoading] = useState(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const heroAnimatedRef = useRef(false);
  const ctxRef = useRef<ReturnType<typeof gsap.context>>(null);

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const savedLang = localStorage.getItem('cv-language') as 'id' | 'en';
    if (savedLang) setLanguage(savedLang);
    else if (browserLang.startsWith('en')) setLanguage('en');
    else setLanguage('id');
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id';
    setLanguage(newLang);
    localStorage.setItem('cv-language', newLang);
  };

  // Loading animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.loading-text', {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    });
    tl.to('.loading-line', {
      scaleX: 1,
      duration: 1.2,
      ease: 'power2.inOut',
    });
    tl.to('.loading-overlay', {
      yPercent: -100,
      duration: 0.8,
      ease: 'power3.inOut',
      onComplete: () => setLoading(false),
    });
  }, []);

  // Main GSAP animations
  useEffect(() => {
    if (loading) return;

    // Small delay to let React finish rendering new DOM
    const rafId = requestAnimationFrame(() => {

    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to('.hero-parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Hero content fade (only on first load)
      if (!heroAnimatedRef.current) {
        gsap.from('.hero-content', {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
        });
        heroAnimatedRef.current = true;
      }

      // Hero scroll indicator
      gsap.to('.scroll-indicator', {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut',
      });

      // Fade out hero on scroll
      gsap.to('.hero-fade', {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '60% top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Navigation bar show on scroll
      gsap.set('.nav-bar', { yPercent: -100 });
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top 80%',
        onEnter: () => gsap.to('.nav-bar', { yPercent: 0, duration: 0.5, ease: 'power2.out' }),
        onLeaveBack: () => gsap.to('.nav-bar', { yPercent: -100, duration: 0.5, ease: 'power2.in' }),
      });

      // About section
      const aboutElements = aboutRef.current?.querySelectorAll('.about-reveal');
      if (aboutElements) {
        aboutElements.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              delay: i * 0.2,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: aboutRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Skills section
      const skillBars = skillsRef.current?.querySelectorAll('.skill-fill');
      if (skillBars) {
        skillBars.forEach((bar) => {
          const target = bar.getAttribute('data-level');
          gsap.fromTo(bar,
            { scaleX: 0 },
            {
              scaleX: Number(target) / 100,
              duration: 1.5,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
      if (skillItems) {
        skillItems.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              delay: i * 0.1,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Experience section - timeline
      const expCards = expRef.current?.querySelectorAll('.exp-card');
      if (expCards) {
        expCards.forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, x: i % 2 === 0 ? -60 : 60, y: 30 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Timeline dots
      const timelineDots = expRef.current?.querySelectorAll('.timeline-dot');
      if (timelineDots) {
        timelineDots.forEach((dot) => {
          gsap.fromTo(dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.5,
              ease: 'back.out(2)',
              scrollTrigger: {
                trigger: dot,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Projects - stagger grid
      const projectCards = projectsRef.current?.querySelectorAll('.project-card');
      if (projectCards) {
        projectCards.forEach((card, i) => {
          gsap.fromTo(card,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              delay: i * 0.12,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: projectsRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Parallax floating elements
      gsap.utils.toArray<HTMLElement>('.parallax-float').forEach((el) => {
        const speed = Number(el.dataset.speed) || 0.5;
        gsap.to(el, {
          y: -100 * speed,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Section headings
      gsap.utils.toArray<HTMLElement>('.section-title-parallax').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Contact section
      const contactElements = contactRef.current?.querySelectorAll('.contact-reveal');
      if (contactElements) {
        contactElements.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              delay: i * 0.15,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: contactRef.current,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Refresh all ScrollTriggers after setup
      ScrollTrigger.refresh();

    }, mainRef);

    ctxRef.current = ctx;

    }); // end requestAnimationFrame

    return () => {
      cancelAnimationFrame(rafId);
      ctxRef.current?.revert();
    };
  }, [loading, language]);

  const content = {
    id: {
      name: 'Muhammad Fachri Rasyidi',
      title: 'Full Stack Developer & Tech Enthusiast',
      about: {
        title: 'Tentang Saya',
        description: 'Fullstack Developer dengan pengalaman luas dalam membangun aplikasi lintas platform, mencakup sistem keuangan, solusi berbasis AI, hingga teknologi Web3. Menguasai 8 bahasa pemrograman (5 di antaranya tingkat mahir), dengan keahlian utama pada TypeScript, ekosistem JavaScript (React, Next.js, dan framework modern lainnya), serta backend Node.js. Berpengalaman merancang arsitektur sistem berskala besar, mengintegrasikan API, dan mengoptimalkan performa aplikasi menggunakan MySQL, MongoDB, Redis, Kafka, dan Vector Database. Terampil dalam pengembangan aplikasi mobile berbasis Expo, containerization menggunakan Docker, serta orkestrasi layanan dengan Kubernetes. Terbiasa mengelola seluruh siklus pengembangan perangkat lunak, mulai dari analisis kebutuhan, implementasi, hingga deployment dan scaling di lingkungan produksi.'
      },
      skills: { title: 'Keahlian & Teknologi' },
      experience: { title: 'Pengalaman Kerja' },
      projects: { title: 'Proyek Unggulan' },
      download: { title: 'Download CV', cvTitle: 'CV Saya', cvDesc: 'Curriculum Vitae dalam bahasa Indonesia', downloadBtn: 'Download' },
      contact: { title: 'Mari Terhubung', description: 'Tertarik untuk berkolaborasi atau membahas peluang? Mari terhubung dan membangun sesuatu yang luar biasa bersama.' },
      footer: { copyright: 'Dibuat dengan passion dan dedikasi.', quote: '\u201CKode yang bersih selalu terlihat seperti ditulis oleh seseorang yang peduli\u201D' }
    },
    en: {
      name: 'Muhammad Fachri Rasyidi',
      title: 'Full Stack Developer & Tech Enthusiast',
      about: {
        title: 'About Me',
        description: 'Fullstack Developer with extensive experience in building cross-platform applications, covering financial systems, AI-based solutions, to Web3 technologies. Proficient in 8 programming languages (5 at advanced level), with core expertise in TypeScript, JavaScript ecosystem (React, Next.js, and modern frameworks), and Node.js backend. Experienced in designing large-scale system architecture, API integration, and optimizing application performance using MySQL, MongoDB, Redis, Kafka, and Vector Database. Skilled in Expo-based mobile app development, containerization using Docker, and service orchestration with Kubernetes. Accustomed to managing the entire software development lifecycle, from requirement analysis, implementation, to deployment and scaling in production environments.'
      },
      skills: { title: 'Skills & Technologies' },
      experience: { title: 'Work Experience' },
      projects: { title: 'Featured Projects' },
      download: { title: 'Download CV', cvTitle: 'My CV', cvDesc: 'Curriculum Vitae in English language', downloadBtn: 'Download' },
      contact: { title: "Let's Connect", description: "Interested in collaborating or discussing opportunities? Let's connect and build something amazing together." },
      footer: { copyright: 'Made with passion and dedication.', quote: '\u201CClean code always looks like it was written by someone who cares\u201D' }
    }
  };

  const skills = [
    { name: 'TypeScript', level: 95 },
    { name: 'JavaScript', level: 92 },
    { name: 'React / Next.js', level: 90 },
    { name: 'Node.js / NestJS', level: 88 },
    { name: 'MySQL / PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'Docker / K8s', level: 80 },
    { name: 'Git / DevOps', level: 78 },
  ];

  const experiences = {
    id: [
      { title: 'Fullstack Developer', company: 'PT Infokes Indonesia', period: '2025', description: ['Membangun aplikasi layanan kesehatan yang terintegrasi dengan BPJS'] },
      { title: 'Fullstack Developer', company: 'Lab App', period: '2025', description: ['Menciptakan aplikasi berbasis AI untuk memeriksa jawaban tugas dan mendeteksi tingkat plagiasi antar jawaban', 'Digunakan aktif di Laboratorium Informatika Universitas Muhammadiyah Makassar dengan sistem pelaporan otomatis'] },
      { title: 'Fullstack Developer', company: 'Kamus Bahasa Bugis', period: '2023', description: ['Membangun aplikasi kamus digital bahasa Bugis bekerja sama dengan Balai Bahasa Provinsi Sulawesi Selatan', 'Bagian dari program resmi Pemerintah Daerah untuk pelestarian bahasa daerah'] },
      { title: 'Fullstack Developer', company: 'Saku Sultan', period: '2023 \u2013 2025', description: ['Mengembangkan aplikasi dompet digital serupa GoPay dengan fitur pembelian pulsa, pembayaran tagihan, dan transaksi saldo real-time', 'Bertanggung jawab penuh pada frontend dan backend, termasuk integrasi API pembayaran'] },
      { title: 'Fullstack Developer', company: 'Be Rich', period: '2023', description: ['Membangun platform komunitas berbasis MLM untuk diskusi bisnis, interaksi anggota, dan pengelolaan jaringan', 'Mengimplementasikan autentikasi multi-level, forum diskusi, dan sistem pelacakan jaringan penjualan'] },
    ],
    en: [
      { title: 'Fullstack Developer', company: 'PT Infokes Indonesia', period: '2025', description: ['Building integrated healthcare service application with BPJS'] },
      { title: 'Fullstack Developer', company: '17s Club', period: '2025', description: ['Developed supplier community-focused application to build business networks and collaboration', 'Implemented referral code system with commission mechanism'] },
      { title: 'Fullstack Developer', company: 'Lab App', period: '2025', description: ['Created AI-based application to check assignment answers and detect plagiarism levels', 'Actively used at the Informatics Laboratory of Universitas Muhammadiyah Makassar'] },
      { title: 'Fullstack Developer', company: 'Bugis Language Dictionary', period: '2023', description: ['Built digital Bugis language dictionary in collaboration with the Language Center of South Sulawesi Province'] },
      { title: 'Fullstack Developer', company: 'Saku Sultan', period: '2023 \u2013 2025', description: ['Developed digital wallet application with features for purchasing credit, bill payments, and real-time balance transactions'] },
      { title: 'Fullstack Developer', company: 'Be Rich', period: '2023', description: ['Built MLM-based community platform for business discussions and network management', 'Implemented multi-level authentication and sales network tracking system'] },
    ]
  };

  const projects = {
    id: [
      { title: 'Blve Cashier', description: 'Aplikasi kasir digital dengan fitur pembayaran cepat dan manajemen transaksi yang efisien antar outlet.', technologies: ['Laravel', 'Filament', 'PHP'], demoUrl: undefined },
      { title: 'AutoCS \u2013 AI Chatbot', description: 'Chatbot AI untuk otomasi layanan pelanggan dengan natural language processing dan response time yang optimal.', technologies: ['Nest JS', 'PostgreSQL', 'TypeScript'], demoUrl: undefined },
      { title: 'Tugas Sekolah AI', description: 'Aplikasi AI untuk membuat soal dari dokumen PDF dengan pengaturan jumlah pilihan ganda dan essay.', technologies: ['React', 'Nest JS', 'OpenAI API', 'MongoDB'], demoUrl: 'https://sekolah.frasydi.site' },
      { title: 'Absensi Bluetooth', description: 'Aplikasi absensi berbasis Bluetooth untuk memudahkan pencatatan kehadiran.', technologies: ['React Native', 'Nest JS', 'Bluetooth API', 'MongoDB'], demoUrl: undefined },
      { title: '17s Club', description: 'Aplikasi komunitas supplier dengan fitur diskusi, katalog produk, dan notifikasi kerjasama.', technologies: ['Next JS', 'Drizzle', 'Supabase'], demoUrl: undefined },
      { title: 'Lab App', description: 'Aplikasi AI untuk mengecek jawaban tugas dan deteksi plagiasi.', technologies: ['React', 'Nest JS'], demoUrl: 'https://lab.frasydi.site' },
      { title: 'Kamus Bahasa Bugis', description: 'Aplikasi kamus bahasa Bugis dengan fitur pencarian cepat.', technologies: ['React'], demoUrl: 'https://kamusbahasabugis.kemdikbud.go.id' },
    ],
    en: [
      { title: 'Blve Cashier', description: 'Digital cashier application with fast payment features and efficient transaction management.', technologies: ['Laravel', 'Filament', 'PHP'], demoUrl: undefined },
      { title: 'AutoCS \u2013 AI Chatbot', description: 'AI chatbot for customer service automation with NLP and optimal response time.', technologies: ['Nest JS', 'PostgreSQL', 'TypeScript'], demoUrl: undefined },
      { title: 'School Assignment AI', description: 'AI app to create questions from PDF documents with automatic grading and plagiarism detection.', technologies: ['React', 'Nest JS', 'OpenAI API', 'MongoDB'], demoUrl: 'https://sekolah.frasydi.site' },
      { title: 'Bluetooth Attendance', description: 'Bluetooth-based attendance app used at Unismuh Makassar Informatics Lab.', technologies: ['React Native', 'Nest JS', 'Bluetooth API', 'MongoDB'], demoUrl: undefined },
      { title: '17s Club', description: 'Supplier community app with discussion features and collaboration notifications.', technologies: ['Next JS', 'Drizzle', 'Supabase'], demoUrl: undefined },
      { title: 'Lab App', description: 'AI application for checking assignment answers and plagiarism detection.', technologies: ['React', 'Nest JS'], demoUrl: 'https://lab.frasydi.site' },
      { title: 'Bugis Language Dictionary', description: 'Bugis language dictionary app with fast search and intuitive interface.', technologies: ['React'], demoUrl: 'https://kamusbahasabugis.kemdikbud.go.id' },
    ]
  };

  const stats = [
    { value: '8+', label: language === 'id' ? 'Bahasa Pemrograman' : 'Programming Languages' },
    { value: '10+', label: language === 'id' ? 'Proyek Selesai' : 'Completed Projects' },
    { value: '3+', label: language === 'id' ? 'Tahun Pengalaman' : 'Years Experience' },
  ];

  return (
    <div ref={mainRef}>
      {/* Loading Screen */}
      <div className="loading-overlay">
        <div className="text-center">
          <div className="loading-text opacity-0">Frasydi</div>
          <div className="loading-line mt-4 h-px w-24 bg-[var(--gold)] mx-auto origin-left scale-x-0"></div>
        </div>
      </div>

      {/* Fixed Navigation */}
      <nav className="nav-bar fixed top-0 left-0 right-0 z-50 bg-[var(--bg-dark)]/80 backdrop-blur-md border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-lg text-[var(--gold)]">Frasydi</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {['about', 'skills', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
            <button
              onClick={toggleLanguage}
              className="elegant-btn text-xs py-2 px-4"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
          </div>
        </div>
      </nav>

      {/* ======== HERO SECTION ======== */}
      <section ref={heroRef} className="hero-section">
        <div className="hero-grain"></div>
        
        {/* Parallax background elements */}
        <div className="hero-parallax-bg absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] rounded-full bg-[var(--gold)]/[0.02] blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/6 w-[300px] h-[300px] rounded-full bg-[var(--gold)]/[0.015] blur-[80px]"></div>
        </div>

        {/* Floating decorative elements */}
        <div className="parallax-float absolute top-20 right-[15%] w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent" data-speed="0.3"></div>
        <div className="parallax-float absolute bottom-32 left-[10%] w-px h-24 bg-gradient-to-b from-transparent via-[var(--gold)]/15 to-transparent" data-speed="0.6"></div>
        <div className="parallax-float absolute top-1/3 left-[80%] w-16 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" data-speed="0.4"></div>

        <div className="hero-fade relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Profile */}
          <div className="hero-content flex justify-center mb-10">
            <div className="profile-container">
              <div className="profile-ring-outer"></div>
              <div className="profile-ring"></div>
              <img src="/profile.png" alt={content[language].name} className="profile-image" />
            </div>
          </div>

          <div className="hero-content section-subheading mb-4">Full Stack Developer</div>
          
          <h1 className="hero-content font-display text-5xl md:text-7xl font-medium text-[var(--text-primary)] mb-6 glow-text leading-tight">
            {content[language].name}
          </h1>

          <div className="hero-content elegant-line-wide mx-auto mb-6"></div>

          <p className="hero-content text-[var(--text-secondary)] text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {content[language].title}
          </p>

          {/* Stats */}
          <div className="hero-content flex justify-center gap-12 md:gap-20 mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-1">{stat.value}</div>
                <div className="text-[var(--text-muted)] text-xs tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Contact links */}
          <div className="hero-content flex flex-wrap justify-center gap-6 text-[var(--text-muted)] text-sm">
            <a href="mailto:frasydi137@gmail.com" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              frasydi137@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              Makassar, Indonesia
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-[var(--text-muted)] text-[10px] tracking-[0.2em] uppercase">Scroll</div>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--gold)]/40 to-transparent"></div>
        </div>
      </section>

      {/* ======== ABOUT SECTION ======== */}
      <section ref={aboutRef} id="about" className="parallax-section">
        <div className="parallax-float absolute top-10 right-[10%] w-px h-40 bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent" data-speed="0.3"></div>
        
        <div className="max-w-4xl mx-auto px-6">
          <div className="about-reveal text-center mb-12">
            <div className="section-subheading mb-3">{language === 'id' ? 'Perkenalan' : 'Introduction'}</div>
            <h2 className="section-heading text-4xl md:text-5xl section-title-parallax">{content[language].about.title}</h2>
          </div>
          
          <div className="about-reveal elegant-card p-8 md:p-12">
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-[1.9] font-light">
              {content[language].about.description}
            </p>
          </div>
        </div>
      </section>

      {/* ======== SKILLS SECTION ======== */}
      <section ref={skillsRef} id="skills" className="parallax-section bg-[var(--bg-section)]">
        <div className="parallax-float absolute bottom-20 left-[5%] w-20 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent" data-speed="0.5"></div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-subheading mb-3">{language === 'id' ? 'Kemampuan' : 'Expertise'}</div>
            <h2 className="section-heading text-4xl md:text-5xl section-title-parallax">{content[language].skills.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-medium text-[var(--text-primary)]">{skill.name}</span>
                  <span className="font-mono text-xs text-[var(--gold)]">{skill.level}%</span>
                </div>
                <div className="skill-track">
                  <div className="skill-fill" data-level={skill.level}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== EXPERIENCE SECTION ======== */}
      <section ref={expRef} id="experience" className="parallax-section">
        <div className="parallax-float absolute top-1/4 right-[8%] w-px h-32 bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent" data-speed="0.4"></div>
        
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-subheading mb-3">{language === 'id' ? 'Perjalanan Karir' : 'Career Journey'}</div>
            <h2 className="section-heading text-4xl md:text-5xl section-title-parallax">{content[language].experience.title}</h2>
          </div>

          <div className="relative pl-12 md:pl-16">
            <div className="timeline-line"></div>
            
            <div className="space-y-10">
              {experiences[language].map((exp, i) => (
                <div key={i} className="exp-card relative">
                  <div className="timeline-dot"></div>
                  <div className="elegant-card p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-display text-xl text-[var(--text-primary)] mb-1">{exp.title}</h3>
                        <p className="text-[var(--gold)] text-sm font-medium">{exp.company}</p>
                      </div>
                      <span className="font-mono text-xs text-[var(--text-muted)] mt-2 md:mt-0 bg-[var(--bg-dark)] border border-[var(--border)] px-3 py-1.5 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className="text-[var(--text-secondary)] text-sm leading-relaxed flex items-start gap-3">
                          <span className="text-[var(--gold)] mt-1.5 text-[6px]">{'\u25CF'}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== PROJECTS SECTION ======== */}
      <section ref={projectsRef} id="projects" className="parallax-section bg-[var(--bg-section)]">
        <div className="parallax-float absolute top-16 left-[12%] w-16 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent" data-speed="0.3"></div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-subheading mb-3">{language === 'id' ? 'Portfolio' : 'Portfolio'}</div>
            <h2 className="section-heading text-4xl md:text-5xl section-title-parallax">{content[language].projects.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects[language].map((project, i) => (
              <div key={i} className="project-card elegant-card p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-lg text-[var(--text-primary)]">{project.title}</h3>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors ml-2 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  )}
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="elegant-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== CV DOWNLOAD ======== */}
      <section className="parallax-section">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="section-subheading mb-3 section-title-parallax">{content[language].download.title}</div>
          <h2 className="section-heading text-3xl md:text-4xl mb-8 section-title-parallax">{content[language].download.cvTitle}</h2>
          <p className="text-[var(--text-secondary)] mb-8">{content[language].download.cvDesc}</p>
          <a
            href={`${language === 'id' ? '/CV_Muhammad Fachri Rasyidi.pdf' : '/CV_Muhammad Fachri Rasyidi_English.pdf'}?t=${Date.now()}`}
            download={language === 'id' ? 'CV_Muhammad_Fachri_Rasyidi.pdf' : 'CV_Muhammad_Fachri_Rasyidi_English.pdf'}
            className="elegant-btn elegant-btn-primary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            {content[language].download.downloadBtn}
          </a>
        </div>
      </section>

      {/* ======== CONTACT SECTION ======== */}
      <section ref={contactRef} id="contact" className="parallax-section bg-[var(--bg-section)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="contact-reveal section-subheading mb-3">{language === 'id' ? 'Kontak' : 'Contact'}</div>
          <h2 className="contact-reveal section-heading text-4xl md:text-5xl mb-6">{content[language].contact.title}</h2>
          <div className="contact-reveal elegant-line-wide mx-auto mb-8"></div>
          <p className="contact-reveal text-[var(--text-secondary)] text-lg mb-12 leading-relaxed">
            {content[language].contact.description}
          </p>

          <div className="contact-reveal flex flex-wrap justify-center gap-4">
            <a href="mailto:frasydi137@gmail.com" className="elegant-btn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              Email
            </a>
            <a href="https://linkedin.com/in/frasydi" target="_blank" rel="noopener noreferrer" className="elegant-btn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" /></svg>
              LinkedIn
            </a>
            <a href="https://github.com/frasydi" target="_blank" rel="noopener noreferrer" className="elegant-btn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" /></svg>
              GitHub
            </a>
            <a href="tel:082239437989" className="elegant-btn">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              {language === 'id' ? 'Telepon' : 'Phone'}
            </a>
          </div>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="py-12 border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="elegant-line mx-auto mb-6"></div>
          <p className="text-[var(--text-muted)] text-sm mb-2">
            &copy; 2025 {content[language].name}. {content[language].footer.copyright}
          </p>
          <p className="text-[var(--text-muted)] text-xs font-light italic">
            {content[language].footer.quote}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;