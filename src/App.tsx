import { SkillBar } from './components/SkillBar';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { useState, useEffect } from 'react';

function App() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  useEffect(() => {
    // Detect user's preferred language
    const browserLang = navigator.language.toLowerCase();
    const savedLang = localStorage.getItem('cv-language') as 'id' | 'en';
    
    if (savedLang) {
      setLanguage(savedLang);
    } else if (browserLang.startsWith('en')) {
      setLanguage('en');
    } else {
      setLanguage('id');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'id' ? 'en' : 'id';
    setLanguage(newLang);
    localStorage.setItem('cv-language', newLang);
  };

  const content = {
    id: {
      name: 'Muhammad Fachri Rasyidi',
      title: 'Full Stack Developer & Tech Enthusiast',
      about: {
        title: 'Tentang Saya',
        description: 'Fullstack Developer dengan pengalaman luas dalam membangun aplikasi lintas platform, mencakup sistem keuangan, solusi berbasis AI, hingga teknologi Web3. Menguasai 8 bahasa pemrograman (5 di antaranya tingkat mahir), dengan keahlian utama pada TypeScript, ekosistem JavaScript (React, Next.js, dan framework modern lainnya), serta backend Node.js. Berpengalaman merancang arsitektur sistem berskala besar, mengintegrasikan API, dan mengoptimalkan performa aplikasi menggunakan MySQL, MongoDB, Redis, Kafka, dan Vector Database. Terampil dalam pengembangan aplikasi mobile berbasis Expo, containerization menggunakan Docker, serta orkestrasi layanan dengan Kubernetes. Terbiasa mengelola seluruh siklus pengembangan perangkat lunak, mulai dari analisis kebutuhan, implementasi, hingga deployment dan scaling di lingkungan produksi.'
      },
      skills: {
        title: 'Keahlian & Teknologi'
      },
      experience: {
        title: 'Pengalaman Kerja'
      },
      projects: {
        title: 'Proyek Unggulan'
      },
      download: {
        title: 'Download CV',
        cvTitle: 'CV Saya',
        cvDesc: 'Curriculum Vitae dalam bahasa Indonesia',
        downloadBtn: 'Download'
      },
      contact: {
        title: 'Mari Terhubung',
        description: 'Tertarik untuk berkolaborasi atau membahas peluang? Mari terhubung dan membangun sesuatu yang luar biasa bersama.'
      },
      footer: {
        copyright: 'Dibuat dengan passion dan dedikasi.',
        quote: '"Kode yang bersih selalu terlihat seperti ditulis oleh seseorang yang peduli"'
      }
    },
    en: {
      name: 'Muhammad Fachri Rasyidi',
      title: 'Full Stack Developer & Tech Enthusiast',
      about: {
        title: 'About Me',
        description: 'Fullstack Developer with extensive experience in building cross-platform applications, covering financial systems, AI-based solutions, to Web3 technologies. Proficient in 8 programming languages (5 at advanced level), with core expertise in TypeScript, JavaScript ecosystem (React, Next.js, and modern frameworks), and Node.js backend. Experienced in designing large-scale system architecture, API integration, and optimizing application performance using MySQL, MongoDB, Redis, Kafka, and Vector Database. Skilled in Expo-based mobile app development, containerization using Docker, and service orchestration with Kubernetes. Accustomed to managing the entire software development lifecycle, from requirement analysis, implementation, to deployment and scaling in production environments.'
      },
      skills: {
        title: 'Skills & Technologies'
      },
      experience: {
        title: 'Work Experience'
      },
      projects: {
        title: 'Featured Projects'
      },
      download: {
        title: 'Download CV',
        cvTitle: 'My CV',
        cvDesc: 'Curriculum Vitae in English language',
        downloadBtn: 'Download'
      },
      contact: {
        title: 'Let\'s Connect',
        description: 'Interested in collaborating or discussing opportunities? Let\'s connect and build something amazing together.'
      },
      footer: {
        copyright: 'Made with passion and dedication.',
        quote: '"Clean code always looks like it was written by someone who cares"'
      }
    }
  };
  const skills = [
    { name: 'TypeScript', level: 95, delay: 0 },
    { name: 'JavaScript', level: 92, delay: 100 },
    { name: 'React', level: 90, delay: 200 },
    { name: 'Node.js', level: 88, delay: 300 },
    { name: 'MySQL', level: 85, delay: 400 },
    { name: 'MongoDB', level: 82, delay: 500 },
    { name: 'Git', level: 80, delay: 600 },
    { name: 'Postman', level: 78, delay: 700 },
  ];

  const experiences = {
    id: [
      {
        title: 'Backend Developer',
        company: 'Chatbot AI – AutoCS',
        period: '2025',
        description: [
          'Membangun chatbot berbasis AI untuk mengotomatisasi layanan pelanggan dengan respons cepat, natural, dan kontekstual',
          'Menerapkan fine-tuning model bahasa dan teknik Retrieval-Augmented Generation (RAG) untuk meningkatkan akurasi dan relevansi jawaban',
          'Mengintegrasikan NLP dengan sistem CRM, menghasilkan chatbot yang sangat cerdas, mampu menjawab pertanyaan kompleks, serta menghemat biaya operasional dukungan pelanggan secara signifikan'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: '17s Club',
        period: '2025',
        description: [
          'Mengembangkan aplikasi yang berfokus pada komunitas supplier untuk membangun jaringan bisnis dan kolaborasi',
          'Menyediakan fitur counseling, di mana pengguna dapat mendaftar sesi konsultasi pada tanggal dan jam tertentu, dengan jadwal yang direset setiap minggu',
          'Mengimplementasikan sistem referral code dengan mekanisme komisi, mendorong pertumbuhan anggota dan interaksi komunitas'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Lab App',
        period: '2025',
        description: [
          'Menciptakan aplikasi berbasis AI untuk memeriksa jawaban tugas dan mendeteksi tingkat plagiasi antar jawaban',
          'Digunakan aktif di Laboratorium Informatika Universitas Muhammadiyah Makassar dengan sistem pelaporan otomatis'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Kamus Bahasa Bugis',
        period: '2023',
        description: [
          'Membangun aplikasi kamus digital bahasa Bugis bekerja sama dengan Balai Bahasa Provinsi Sulawesi Selatan',
          'Bagian dari program resmi Pemerintah Daerah untuk pelestarian bahasa daerah, dengan fitur pencarian kata, terjemahan Bugis–Indonesia'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Saku Sultan',
        period: '2023 - 2025',
        description: [
          'Mengembangkan aplikasi dompet digital serupa GoPay dengan fitur pembelian pulsa, pembayaran tagihan, dan transaksi saldo real-time',
          'Bertanggung jawab penuh pada frontend dan backend, termasuk integrasi API pembayaran dan optimasi performa transaksi'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Be Rich',
        period: '2023',
        description: [
          'Membangun platform komunitas berbasis MLM untuk diskusi bisnis, interaksi anggota, dan pengelolaan jaringan',
          'Mengimplementasikan autentikasi multi-level, forum diskusi, dan sistem pelacakan jaringan penjualan'
        ]
      }
    ],
    en: [
      {
        title: 'Backend Developer',
        company: 'Chatbot AI – AutoCS',
        period: '2025',
        description: [
          'Built AI-based chatbot to automate customer service with fast, natural, and contextual responses',
          'Implemented language model fine-tuning and Retrieval-Augmented Generation (RAG) techniques to improve answer accuracy and relevance',
          'Integrated NLP with CRM systems, resulting in highly intelligent chatbot capable of answering complex questions and significantly reducing customer support operational costs'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: '17s Club',
        period: '2025',
        description: [
          'Developed supplier community-focused application to build business networks and collaboration',
          'Provided counseling features where users can register consultation sessions at specific dates and times, with schedules reset weekly',
          'Implemented referral code system with commission mechanism, driving member growth and community interaction'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Lab App',
        period: '2025',
        description: [
          'Created AI-based application to check assignment answers and detect plagiarism levels between answers',
          'Actively used at the Informatics Laboratory of Universitas Muhammadiyah Makassar with automated reporting system'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Bugis Language Dictionary',
        period: '2023',
        description: [
          'Built digital Bugis language dictionary application in collaboration with the Language Center of South Sulawesi Province',
          'Part of official Regional Government program for regional language preservation, featuring word search and Bugis-Indonesian translation'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Saku Sultan',
        period: '2023 - 2025',
        description: [
          'Developed digital wallet application similar to GoPay with features for purchasing credit, bill payments, and real-time balance transactions',
          'Full responsibility for frontend and backend, including payment API integration and transaction performance optimization'
        ]
      },
      {
        title: 'Fullstack Developer',
        company: 'Be Rich',
        period: '2023',
        description: [
          'Built MLM-based community platform for business discussions, member interactions, and network management',
          'Implemented multi-level authentication, discussion forums, and sales network tracking system'
        ]
      }
    ]
  };

  const projects = {
    id: [
      {
        title: 'AutoCS - AI Chatbot',
        description: 'Chatbot AI untuk otomasi layanan pelanggan dengan natural language processing dan response time yang optimal.',
        technologies: ['Nest JS', "PostgreSQL", 'TypeScript'],
        githubUrl: undefined,
        demoUrl: undefined
      },
      {
        title: 'Tugas Sekolah AI',
        description: 'Aplikasi AI untuk membuat soal dari dokumen PDF dengan pengaturan jumlah pilihan ganda dan essay. Dilengkapi sistem penilaian otomatis dan deteksi plagiasi untuk mencegah menyontek.',
        technologies: ['React', 'Nest JS', 'PDF.js', 'OpenAI API', 'MongoDB'],
        githubUrl: undefined,
        demoUrl: 'https://sekolah.frasydi.site'
      },
      {
        title : "Absensi Bluetooth",
        description: 'Aplikasi absensi berbasis Bluetooth untuk memudahkan pencatatan kehadiran. Digunakan aktif di Lab Informatika Unismuh Makassar.',
        technologies: ['React Native', 'Nest JS', 'Bluetooth API', 'MongoDB', 'Express'],
        githubUrl: undefined,
        demoUrl: undefined
      },
      {
        title: '17s Club - Supplier Community',
        description: 'Aplikasi komunitas supplier dengan fitur diskusi, katalog produk, dan notifikasi peluang kerjasama otomatis.',
        technologies: ['Next JS', "Drizzle", "Supabase"],
        githubUrl: undefined,
        demoUrl: undefined
      },
      {
        title: 'Lab App - AI Assignment Checker',
        description: 'Aplikasi AI untuk mengecek jawaban tugas dan deteksi plagiasi, digunakan aktif di Lab Informatika Unismuh Makassar.',
        technologies: ["React", "Nest JS"],
        githubUrl: undefined,
        demoUrl: 'https://lab.frasydi.site'
      },
      {
        title: "Kamus Bahasa Bugis",
        description: 'Aplikasi kamus bahasa Bugis dengan fitur pencarian cepat dan antarmuka yang intuitif.',
        technologies: ['React'],
        githubUrl: undefined,
        demoUrl: 'https://kamusbahasabugis.kemdikbud.go.id'
      }
    ],
    en: [
      {
        title: 'AutoCS - AI Chatbot',
        description: 'AI chatbot for customer service automation with natural language processing and optimal response time.',
        technologies: ['Nest JS', "PostgreSQL", 'TypeScript'],
        githubUrl: undefined,
        demoUrl: undefined
      },
      {
        title: 'School Assignment AI',
        description: 'AI application to create questions from PDF documents with multiple choice and essay settings. Features automatic grading system and plagiarism detection to prevent cheating.',
        technologies: ['React', 'Nest JS', 'PDF.js', 'OpenAI API', 'MongoDB'],
        githubUrl: undefined,
        demoUrl: 'https://sekolah.frasydi.site'
      },
      {
        title : "Bluetooth Attendance",
        description: 'Bluetooth-based attendance application to facilitate attendance recording. Actively used at Unismuh Makassar Informatics Lab.',
        technologies: ['React Native', 'Nest JS', 'Bluetooth API', 'MongoDB', 'Express'],
        githubUrl: undefined,
        demoUrl: undefined
      },
      {
        title: '17s Club - Supplier Community',
        description: 'Supplier community application with discussion features, product catalog, and automatic collaboration opportunity notifications.',
        technologies: ['Next JS', "Drizzle", "Supabase"],
        githubUrl: undefined,
        demoUrl: undefined
      },
      {
        title: 'Lab App - AI Assignment Checker',
        description: 'AI application for checking assignment answers and plagiarism detection, actively used at Unismuh Makassar Informatics Lab.',
        technologies: ["React", "Nest JS"],
        githubUrl: undefined,
        demoUrl: 'https://lab.frasydi.site'
      },
      {
        title: "Bugis Language Dictionary",
        description: 'Bugis language dictionary application with fast search features and intuitive interface.',
        technologies: ['React'],
        githubUrl: undefined,
        demoUrl: 'https://kamusbahasabugis.kemdikbud.go.id'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-slate-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="relative bg-slate-800/90 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1"></div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
              </svg>
              {language === 'id' ? 'ID' : 'EN'}
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl border-4 border-slate-600">
                <img 
                  src="/profile.png" 
                  alt={content[language].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-gray-700 rounded-full blur-lg opacity-30"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 animate-fadeIn">
                {content[language].name}
              </h1>
              <p className="text-lg text-gray-300 font-medium mb-3">
                {content[language].title}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>frasydi137@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Makassar, Sulawesi Selatan</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>082239437989</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            {content[language].about.title}
          </h2>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-2xl blur-lg"></div>
            <p className="relative text-gray-300 text-lg leading-relaxed">
             {content[language].about.description}
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            {content[language].skills.title}
          </h2>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-2xl blur-lg"></div>
            <div className="relative grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} delay={skill.delay} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            {content[language].experience.title}
          </h2>
          <div className="space-y-6">
            {experiences[language].map((exp, index) => (
              <ExperienceCard 
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            {content[language].projects.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects[language].map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
              />
            ))}
          </div>
        </section>

        {/* CV Download Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            {content[language].download.title}
          </h2>
          <div className="flex justify-center">
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center border border-slate-700 hover:border-slate-600 transition-all duration-500 group max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-6">📄</div>
                <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                  {content[language].download.cvTitle}
                </h3>
                <p className="text-gray-400 mb-6 text-base">
                  {content[language].download.cvDesc}
                </p>
                <a 
                  href={language === 'id' ? "/CV_Muhammad Fachri Rasyidi.pdf" : "/CV_Muhammad Fachri Rasyidi_English.pdf"}
                  download={language === 'id' ? "CV_Muhammad_Fachri_Rasyidi.pdf" : "CV_Muhammad_Fachri_Rasyidi_English.pdf"}
                  className="inline-flex items-center gap-3 bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 font-medium text-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  {content[language].download.downloadBtn}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-200">
            {content[language].contact.title}
          </h2>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-2xl blur-lg"></div>
            <div className="relative">
              <p className="text-gray-300 mb-6 text-lg">
                {content[language].contact.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:frasydi137@gmail.com" 
                  className="group bg-slate-700 text-white px-6 py-3 rounded-xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
                <a 
                  href="https://linkedin.com/in/frasydi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-slate-700 text-white px-6 py-3 rounded-xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/frasydi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-slate-700 text-white px-6 py-3 rounded-xl hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-slate-800/90 backdrop-blur-sm border-t border-slate-700 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 {content[language].name}. {content[language].footer.copyright}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {content[language].footer.quote}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
