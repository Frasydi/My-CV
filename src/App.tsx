import { SkillBar } from './components/SkillBar';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';

function App() {
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

  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'Saku Sultan',
      period: '2023 - 2025',
      description: [
        'Mengembangkan aplikasi dompet digital mirip GoPay dengan fitur lengkap',
        'Implementasi sistem pembelian pulsa dan pembayaran tagihan',
        'Mengelola transaksi saldo dengan keamanan tinggi',
        'Menggunakan TypeScript dan Node.js untuk development'
      ]
    },
    {
      title: 'Fullstack Developer',
      company: 'Be Rich Platform',
      period: '2023',
      description: [
        'Mengembangkan platform komunitas berbasis MLM',
        'Membangun sistem diskusi bisnis dan interaksi anggota',
        'Implementasi manajemen jaringan yang kompleks',
        'Menggunakan React untuk frontend dan Node.js untuk backend'
      ]
    },
    {
      title: 'Asisten Lab',
      company: 'Unismuh Makassar',
      period: '2025',
      description: [
        "Mengembangkan aplikasi AI untuk checking jawaban tugas",
        "Implementasi sistem deteksi plagiasi antar jawaban",
        "Pembuatan aplikasi absensi berbasis bluetooth",
        "Aktif mengajar dan membimbing mahasiswa dalam bidang Informatika",
        
      ]
    }
  ];

  const projects : {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
  }[] = [
    {
      title: 'AutoCS - AI Chatbot',
      description: 'Chatbot AI untuk otomasi layanan pelanggan dengan natural language processing dan response time yang optimal.',
      technologies: ['Nest JS', "PostgreSQL", 'TypeScript', ],
      // githubUrl: 'https://github.com/fachri-rasyidi/autocs-chatbot'
    },
    {
      title : "Absensi Bluetooth",
      description: 'Aplikasi absensi berbasis Bluetooth untuk memudahkan pencatatan kehadiran. Digunakan aktif di Lab Informatika Unismuh Makassar.',
      technologies: ['React Native', 'Nest JS', 'Bluetooth API', 'MongoDB', 'Express'],
    },
    {
      title: '17s Club - Supplier Community',
      description: 'Aplikasi komunitas supplier dengan fitur diskusi, katalog produk, dan notifikasi peluang kerjasama otomatis.',
      technologies: ['Next JS', "Drizzle", "Supabase"],
      // githubUrl: 'https://github.com/fachri-rasyidi/17s-club'
    },
    {
      title: 'Lab App - AI Assignment Checker',
      description: 'Aplikasi AI untuk mengecek jawaban tugas dan deteksi plagiasi, digunakan aktif di Lab Informatika Unismuh Makassar.',
      technologies: ["React", "Nest JS"],
      demoUrl: 'https://lab.frasydi.site'
    },
    {
      title: "Kamus Bahasa Bugis",
      description: 'Aplikasi kamus bahasa Bugis dengan fitur pencarian cepat dan antarmuka yang intuitif.',
      technologies: ['React'],
      demoUrl: 'https://kamusbahasabugis.kemdikbud.go.id'
    },
    
  ];

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
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden shadow-2xl border-4 border-slate-600">
                <img 
                  src="/profile.png" 
                  alt="Muhammad Fachri Rasyidi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-gray-700 rounded-full blur-lg opacity-30"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 animate-fadeIn">
                Muhammad Fachri Rasyidi
              </h1>
              <p className="text-lg text-gray-300 font-medium mb-3">
                Full Stack Developer & Tech Enthusiast
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
            Tentang Saya
          </h2>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-2xl blur-lg"></div>
            <p className="relative text-gray-300 text-lg leading-relaxed">
             Saya adalah seorang Fullstack Developer yang memiliki ketertarikan mendalam pada pengembangan teknologi modern. Berpengalaman mengerjakan berbagai proyek mulai dari platform fintech, chatbot berbasis AI, hingga sistem komunitas digital. Terbiasa bekerja menggunakan TypeScript dan JavaScript, serta teknologi terkait dalam pengembangan aplikasi end-to-end. Saya selalu antusias dalam mempelajari hal baru dan berkomitmen untuk memberikan solusi yang efisien dan inovatif di setiap tantangan pengembangan.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            Keahlian & Teknologi
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
            Pengalaman Kerja
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
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
            Proyek Unggulan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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

        {/* Statistics Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-200">
            Statistik
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '6+', label: 'Proyek Selesai', icon: '📊' },
              { number: '3+', label: 'Tahun Pengalaman', icon: '⏳' },
              { number: '8+', label: 'Teknologi Dikuasai', icon: '💻' },
              { number: '∞', label: 'Semangat Belajar', icon: '🎓' }
            ].map((stat, index) => (
              <div key={index} className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700 hover:border-slate-600 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-200 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-200">
            Mari Terhubung
          </h2>
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 to-gray-700/10 rounded-2xl blur-lg"></div>
            <div className="relative">
              <p className="text-gray-300 mb-6 text-lg">
                Tertarik untuk berkolaborasi atau membahas peluang? Mari terhubung dan membangun sesuatu yang luar biasa bersama.
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
            &copy; 2025 Muhammad Fachri Rasyidi. Dibuat dengan passion dan dedikasi.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "Kode yang bersih selalu terlihat seperti ditulis oleh seseorang yang peduli"
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
