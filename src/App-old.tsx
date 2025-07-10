import { useEffect, useState } from 'react';
import { SkillBar } from './components/SkillBar';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';
import { AnimatedSection } from './components/AnimatedSection';
import { AnimatedCounter } from './components/AnimatedCounter';
import { FloatingElements } from './components/FloatingElements';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovation Ltd.',
      period: '2022 - Present',
      description: [
        'Memimpin tim pengembangan aplikasi web modern menggunakan React dan TypeScript',
        'Mengoptimalkan performa aplikasi dan meningkatkan user experience hingga 40%',
        'Implementasi design system dan best practices untuk maintainability',
        'Mentoring junior developers dan code review untuk kualitas kode'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Inc.',
      period: '2021 - 2022',
      description: [
        'Mengembangkan fitur-fitur baru untuk platform e-commerce dengan React',
        'Berkolaborasi dengan tim backend untuk integrasi API RESTful',
        'Mengimplementasikan responsive design untuk berbagai device',
        'Melakukan testing dan debugging untuk memastikan kualitas aplikasi'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartupHub',
      period: '2020 - 2021',
      description: [
        'Membuat komponen UI yang reusable dan responsive menggunakan HTML/CSS/JS',
        'Belajar dan mengadopsi teknologi modern seperti React dan Vue.js',
        'Berpartisipasi dalam agile development dan sprint planning',
        'Kontribusi dalam pembuatan documentation dan user guides'
      ]
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur lengkap seperti cart, payment gateway, admin dashboard, dan real-time notifications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
      githubUrl: 'https://github.com/username/ecommerce',
      demoUrl: 'https://demo-ecommerce.com'
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur real-time collaboration, notification, dan advanced analytics untuk team productivity.',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL', 'Redis'],
      githubUrl: 'https://github.com/username/taskapp',
      demoUrl: 'https://taskapp-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Dashboard cuaca interaktif dengan visualisasi data yang menarik, prediksi 7 hari, dan notifikasi cuaca ekstrem.',
      technologies: ['React', 'Chart.js', 'Weather API', 'Tailwind CSS', 'PWA'],
      githubUrl: 'https://github.com/username/weather-dashboard',
      demoUrl: 'https://weather-dashboard-demo.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Website portfolio personal dengan animasi modern, blog terintegrasi, dan optimisasi SEO yang sempurna.',
      technologies: ['Next.js', 'Framer Motion', 'MDX', 'Vercel'],
      githubUrl: 'https://github.com/username/portfolio',
      demoUrl: 'https://portfolio-demo.com'
    },
    {
      title: 'Learning Management System',
      description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, progress tracking, dan sertifikat digital.',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS S3', 'JWT'],
      githubUrl: 'https://github.com/username/lms'
    },
    {
      title: 'Social Media Analytics',
      description: 'Tool analytics untuk social media dengan data visualization, sentiment analysis, dan automated reporting.',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Celery'],
      githubUrl: 'https://github.com/username/social-analytics',
      demoUrl: 'https://analytics-demo.com'
    }
  ];

  const stats = [
    { number: 3, suffix: '+', label: 'Years Experience' },
    { number: 15, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Happy Clients' },
    { number: 99, suffix: '%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden">
      <FloatingElements />
      
      {/* Header */}
      <header className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="glass backdrop-blur-lg border-b border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className={`relative transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl animate-float">
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                    <span className="relative z-10">JD</span>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
                </div>
                
                <div className={`text-center lg:text-left transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                    <span className="gradient-text">John Doe</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-blue-600 font-semibold mb-6">Full Stack Developer</p>
                  <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
                    Passionate about creating innovative digital solutions that make a difference. 
                    Specialized in modern web technologies and user-centric design.
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-600">
                    <div className="flex items-center gap-3 group">
                      <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <span className="font-medium">john.doe@email.com</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium">Jakarta, Indonesia</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="p-2 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <span className="font-medium">+62 812-3456-7890</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      <AnimatedCounter end={stat.number} duration={2000} suffix={stat.suffix} />
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-12">
        {/* About Section */}
        <AnimatedSection delay={300}>
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Tentang Saya</span>
            </h2>
            <div className="glass rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam mengembangkan 
                aplikasi web modern yang inovatif dan user-friendly. Dengan passion yang tinggi untuk teknologi 
                dan design, saya selalu berusaha menciptakan solusi digital yang tidak hanya fungsional, 
                tetapi juga memberikan pengalaman yang luar biasa bagi pengguna. Saya memiliki keahlian dalam 
                JavaScript ecosystem, cloud technologies, dan modern development practices.
              </p>
            </div>
          </section>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={400}>
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Keahlian</span>
            </h2>
            <div className="glass rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={500}>
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Pengalaman Kerja</span>
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className={`transform transition-all duration-700 delay-${index * 200}`}>
                  <ExperienceCard 
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                  />
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection delay={600}>
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="gradient-text">Proyek Unggulan</span>
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className={`transform transition-all duration-700 delay-${index * 100}`}>
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                  />
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection delay={700}>
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-12">
              <span className="gradient-text">Mari Berkolaborasi</span>
            </h2>
            <div className="glass rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Tertarik untuk berkolaborasi atau memiliki proyek menarik? 
                Mari kita diskusikan bagaimana saya dapat membantu mewujudkan ide Anda!
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="mailto:john.doe@email.com" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Kirim Email
                </a>
                <a 
                  href="https://linkedin.com/in/johndoe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/johndoe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-3"
                >
                  <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12 mt-20 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-4">John Doe</h3>
            <p className="text-gray-300">Full Stack Developer & Digital Innovation Enthusiast</p>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; 2024 John Doe. Crafted with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
