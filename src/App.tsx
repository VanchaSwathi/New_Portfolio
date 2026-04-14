import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Send, 
  Briefcase, 
  Code2, 
  Palette, 
  Globe,
  Instagram,
  Twitter,
  LayoutGrid,
  Smartphone,
  Cpu,
  ChevronRight,
  Brain,
  Database,
  Eye,
  Server
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "VidLingo",
    description: "Automated Android video subtitling system. Consumes Speech-to-Text APIs with local caching mechanisms to reduce playback latency by 30% on low-end devices.",
    tech: ["Java", "Android", "REST API"],
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    title: "Virtual Blackboard",
    description: "Touchless writing system using computer vision. Features real-time hand tracking and low-latency stroke mapping based on HCI principles.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    icon: <Cpu className="w-5 h-5" />,
  }
];

const techStack = [
  {
    title: "Programming & Frameworks",
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    skills: ["Java", "Spring Core", "Spring Boot", "Spring MVC", "Spring Data JPA", "Spring REST APIs"],
    className: "md:col-span-2 md:row-span-1",
    iconBg: "bg-cyan-400/10"
  },
  {
    title: "Core Concepts",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    skills: ["OOP", "SDLC", "Software Engineering", "System Design"],
    className: "md:col-span-1 md:row-span-2",
    iconBg: "bg-purple-400/10"
  },
  {
    title: "Web & Databases",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    skills: ["HTML", "CSS", "JavaScript", "Oracle SQL", "PL/SQL"],
    className: "md:col-span-1 md:row-span-1",
    iconBg: "bg-blue-400/10"
  },
  {
    title: "Tools",
    icon: <Code2 className="w-6 h-6 text-gray-400" />,
    skills: ["VS Code", "Eclipse", "GitHub", "Git"],
    className: "md:col-span-1 md:row-span-1",
    iconBg: "bg-gray-400/10"
  }
];

export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-bg-black selection:bg-accent-purple/30">
      {/* Navbar */}
      <div className="fixed top-8 w-full z-50 px-6 flex justify-center">
        <nav className="flex items-center gap-4 px-4 py-2 bg-card-dark/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <div className="flex items-center gap-3 pr-4 border-r border-white/10">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
              <img 
                src="https://picsum.photos/seed/swathi/100/100" 
                alt="Swathi" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-gray">Swathi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 px-4">
            <a href="#" className="nav-link">Home</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <a href="https://github.com/VanchaSwathi/" target="_blank" rel="noreferrer" className="p-1.5 text-text-gray hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/swathivancha/" target="_blank" rel="noreferrer" className="p-1.5 text-text-gray hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] hero-glow pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-border-subtle p-1"
          >
            <img 
              src="https://picsum.photos/seed/swathi/200/200" 
              alt="Swathi" 
              className="w-full h-full object-cover rounded-full"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Hey, I'm <span className="gradient-text">Swathi</span>✨<br />
              <span className="text-text-gray">A Java Full Stack Developer</span>
            </h1>
            <p className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto font-medium">
              A <span className="text-white">fullstack developer</span> with solid foundations in <span className="text-white">Spring Boot</span>. 
              Passionate about crafting seamless user experiences I thrive at the intersection of creativity and functionality.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button className="btn-primary">
              <Mail className="w-4 h-4" /> Contact Me
            </button>
            <a href="#projects" className="btn-secondary">
              <LayoutGrid className="w-4 h-4" /> View Projects
            </a>
            
            <div className="flex items-center gap-4 ml-0 sm:ml-4 pt-4 sm:pt-0">
              <a href="https://github.com/VanchaSwathi/" target="_blank" rel="noreferrer" className="text-text-gray hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/swathivancha/" target="_blank" rel="noreferrer" className="text-text-gray hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-gray hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-gray hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section id="tech-stack" className="py-20 px-6 max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Stack</h2>
          <p className="text-text-gray text-lg max-w-2xl mx-auto">Specialized toolsets for Java, Vision, and Full Stack Engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {techStack.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className={`service-card flex flex-col justify-between ${item.className} relative group`}
            >
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-white/10 rounded-full" />
              
              <div className="space-y-8">
                <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center`}>
                  {item.icon}
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-text-gray group-hover:border-white/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="text-text-gray text-sm">A showcase of my recent work in full-stack and mobile development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative bg-card-dark border border-border-subtle rounded-3xl overflow-hidden"
            >
              <div className="aspect-video relative overflow-hidden bg-black flex items-center justify-center">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/40 via-transparent to-accent-indigo/40" />
                  <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-accent-purple/20 blur-[100px] animate-pulse" />
                  <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-accent-indigo/20 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                
                {/* Floating Icon for visual interest */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative z-10 w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-accent-purple/50 transition-colors duration-500"
                >
                  {project.icon}
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-purple/10 rounded-xl flex items-center justify-center text-accent-purple">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-text-gray text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4">
                  <button className="flex items-center gap-2 text-sm font-bold text-accent-purple hover:text-white transition-colors">
                    View Case Study <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="card-gradient border border-border-subtle rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Bringing your ideas to life.<br />
              <span className="gradient-text">Let's turn your vision into reality</span>
            </h2>
            <p className="text-text-gray text-lg">Have a project in mind or just want to chat? Let's connect!</p>
          </div>

          <div className="w-full lg:w-[450px] bg-black/40 backdrop-blur-sm border border-border-subtle p-8 rounded-2xl space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-gray uppercase tracking-wider">Name</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-gray uppercase tracking-wider">Email</label>
              <input 
                type="email" 
                placeholder="swathivancha28@gmail.com" 
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-gray uppercase tracking-wider">Message</label>
              <textarea 
                placeholder="Your message here..." 
                rows={4} 
                className="input-field resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button className="w-full py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
              Send <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-border-subtle space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Vancha Swathi</h3>
            <p className="text-text-gray text-sm flex items-center gap-2">
              🇮🇳 Based in Telangana, India
            </p>
          </div>
          <div className="text-right space-y-2">
            <p className="text-text-gray text-sm">Website Designed in Figma. Built with React, TypeScript and Tailwind CSS.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border-subtle/50">
          <p className="text-text-gray text-xs">© 2024 Swathi. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/VanchaSwathi/" target="_blank" rel="noreferrer" className="text-text-gray hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/swathivancha/" target="_blank" rel="noreferrer" className="text-text-gray hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-gray hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-gray hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
