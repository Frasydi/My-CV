import React from 'react';
import { SkillBar } from './components/SkillBar';
import { ExperienceCard } from './components/ExperienceCard';
import { ProjectCard } from './components/ProjectCard';

function App() {
  const skills = [
    { name: 'JavaScript', level: 92, delay: 0 },
    { name: 'React', level: 90, delay: 100 },
    { name: 'TypeScript', level: 85, delay: 200 },
    { name: 'Node.js', level: 88, delay: 300 },
    { name: 'Python', level: 82, delay: 400 },
    { name: 'PHP', level: 80, delay: 500 },
    { name: 'MySQL', level: 85, delay: 600 },
    { name: 'MongoDB', level: 78, delay: 700 },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Innovation Co.',
      period: '2022 - Present',
      description: [
        'Mengembangkan aplikasi web full-stack menggunakan React, Node.js, dan MongoDB',
        'Memimpin tim development untuk proyek e-commerce dengan volume transaksi tinggi',
        'Mengoptimalkan performa aplikasi dan mengurangi loading time hingga 40%',
        'Implementasi microservices architecture untuk skalabilitas yang lebih baik'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Digital Agency',
      period: '2021 - 2022',
      description: [
        'Membuat UI/UX yang responsive dan user-friendly untuk berbagai klien',
        'Berkolaborasi dengan designer untuk mengimplementasikan desain yang pixel-perfect',
        'Menggunakan modern JavaScript frameworks seperti React dan Vue.js',
        'Melakukan code review dan mentoring untuk junior developer'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'StartupHub Indonesia',
      period: '2020 - 2021',
      description: [
        'Belajar dan mengimplementasikan best practices dalam web development',
        'Mengembangkan fitur-fitur website menggunakan HTML, CSS, dan JavaScript',
        'Melakukan testing dan debugging untuk memastikan kualitas code'
      ]
    }
  ];

  const projects = [
    {
      title: 'Smart Inventory System',
      description: 'Sistem manajemen inventori cerdas dengan fitur prediksi stok, barcode scanning, dan reporting real-time.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Socket.io'],
      githubUrl: 'https://github.com/fachri/inventory-system',
      demoUrl: 'https://smart-inventory-demo.vercel.app'
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard analytics untuk social media dengan visualisasi data yang interaktif dan insights mendalam.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'Chart.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/fachri/social-analytics'
    },
    {
      title: 'E-Learning Platform',
      description: 'Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking.',
      technologies: ['React', 'Firebase', 'Video.js', 'Stripe', 'Material-UI'],
      githubUrl: 'https://github.com/fachri/elearning-platform',
      demoUrl: 'https://elearning-demo.vercel.app'
    },
    {
      title: 'Weather Prediction App',
      description: 'Aplikasi prediksi cuaca dengan machine learning dan visualisasi data cuaca yang menarik.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'OpenWeather API', 'D3.js'],
      githubUrl: 'https://github.com/fachri/weather-prediction'
    },
    {
      title: 'Task Management Pro',
      description: 'Aplikasi manajemen tugas advanced dengan fitur collaboration, time tracking, dan automation.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'WebSocket'],
      githubUrl: 'https://github.com/fachri/taskmanager-pro',
      demoUrl: 'https://taskpro-demo.netlify.app'
    },
    {
      title: 'Crypto Portfolio Tracker',
      description: 'Tracker portfolio cryptocurrency dengan real-time data, alerts, dan advanced analytics.',
      technologies: ['React', 'TypeScript', 'CoinGecko API', 'Chart.js', 'PWA'],
      githubUrl: 'https://github.com/fachri/crypto-tracker',
      demoUrl: 'https://crypto-portfolio-tracker.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="relative bg-gray-800/90 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl animate-pulse">
                MFR
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2 animate-fadeIn">
                Muhammad Fachri Rasyidi
              </h1>
              <p className="text-lg text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-medium mb-3">
                🚀 Full Stack Developer & Tech Enthusiast
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>fachri.rasyidi@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>+62 812-3456-7890</span>
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
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            ✨ Tentang Saya
          </h2>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg"></div>
            <p className="relative text-gray-300 text-lg leading-relaxed">
              Hai! Saya Fachri, seorang Full Stack Developer yang passionate dalam menciptakan solusi digital yang inovatif dan user-friendly. 
              Dengan pengalaman 3+ tahun di industri teknologi, saya selalu excited untuk mengeksplorasi teknologi terbaru dan menghadapi 
              tantangan coding yang menarik. Saya percaya bahwa good code is not just about functionality, but also about elegance and maintainability! 💻✨
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            🛠️ Tech Stack & Skills
          </h2>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg"></div>
            <div className="relative grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} delay={skill.delay} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            💼 Pengalaman Kerja
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
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            🚀 Featured Projects
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

        {/* Fun Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            📊 Fun Stats
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Projects Completed', icon: '🎯' },
              { number: '3+', label: 'Years Experience', icon: '⏱️' },
              { number: '15+', label: 'Technologies Mastered', icon: '🔧' },
              { number: '∞', label: 'Coffee Cups', icon: '☕' }
            ].map((stat, index) => (
              <div key={index} className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700 hover:border-purple-500/50 transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text mb-2">
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
          <h2 className="text-3xl font-bold mb-8 text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
            📬 Let's Connect!
          </h2>
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-lg"></div>
            <div className="relative">
              <p className="text-gray-300 mb-6 text-lg">
                Punya project menarik atau ingin berkolaborasi? Let's build something amazing together! 🚀
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:fachri.rasyidi@email.com" 
                  className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Me
                </a>
                <a 
                  href="https://linkedin.com/in/fachri-rasyidi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/fachri-rasyidi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 py-3 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 font-medium flex items-center gap-2"
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
      <footer className="relative bg-gray-800/90 backdrop-blur-sm border-t border-gray-700 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; 2024 Muhammad Fachri Rasyidi. Made with ❤️ and lots of ☕
          </p>
          <p className="text-gray-500 text-sm mt-2">
            "Code is poetry written in logic" 🎨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
