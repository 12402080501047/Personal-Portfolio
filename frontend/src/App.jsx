import { useState, useEffect } from 'react';
import { 
  Code, ExternalLink, Mail, ArrowRight, Code2, 
  Database, Layout, Download, Briefcase, GraduationCap, 
  MapPin, Phone, User
} from 'lucide-react';
import './index.css';

const GithubIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const projectsRes = await fetch('http://localhost:5000/api/projects').catch(() => null);

        if (projectsRes && projectsRes.ok) {
          setProjects(await projectsRes.json());
        } else {
          // Fallback data if backend is not running
          setProjects([
            {
              _id: '1',
              title: 'Niral Creation',
              description: 'A premium textiles website for Niral Creation. Features an elegant UI, smooth animations, and a beautifully crafted digital storefront for premium textile designs.',
              imageUrl: '/niral.jpeg',
              technologies: ['HTML', 'CSS', 'JavaScript'],
              githubLink: 'https://github.com/12402080501047/niral-creation',
              liveLink: 'https://niral-creation.vercel.app/'
            },
            {
              _id: '2',
              title: 'Task Management System',
              description: 'A collaborative kanban board application. Allows teams to organize tasks, set deadlines, and track progress with drag-and-drop functionality.',
              imageUrl: '/project2.webp',
              technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
              githubLink: '#',
              liveLink: '#'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-wrapper">
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo text-gradient">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link active">Home</a></li>
            <li><a href="#services" className="nav-link">About Me</a></li>

            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fade-in-up">
              <span className="hero-subtitle">HELLO, I'M</span>
              <h1 className="hero-title">
                Prince Desai<br />
                <span className="text-gradient">Software Engineer</span>
              </h1>
              <p className="hero-desc delay-100 animate-fade-in-up">
                I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products and scalable backend systems.
              </p>
              <div className="hero-actions delay-200 animate-fade-in-up">
                <a href="#projects" className="btn btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn btn-secondary">
                  <Mail size={18} /> Contact Me
                </a>
                <a href="https://github.com/12402080501047" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.8rem', borderRadius: '50%' }} aria-label="GitHub">
                  <GithubIcon size={20} />
                </a>
                <a href="https://www.linkedin.com/in/prince-desai-007a37318/" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.8rem', borderRadius: '50%' }} aria-label="LinkedIn">
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper delay-300 animate-fade-in-up">
              <div className="hero-image-circle">
                <img src="/photo2.jpeg" alt="Prince Desai" className="hero-image" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="hero-subtitle">WHO I AM</span>
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="card delay-100 animate-fade-in-up" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              I am an Information Technology student with a profound passion for coding and exploring new technologies. My journey in tech is driven by an endless curiosity and a deep-seated desire to build meaningful, user-centric applications. Whether I am architecting a robust backend database or crafting a pixel-perfect, interactive frontend, I am always eager to tackle complex challenges. I am constantly building new projects, learning industry best practices, and pushing myself to evolve as a modern software engineer.
            </p>
          </div>
          
          <div className="services-grid delay-200 animate-fade-in-up">
            <div className="card service-card">
              <div className="service-icon"><Layout size={28} /></div>
              <h3>Frontend Dev</h3>
              <p>Creating pixel-perfect, responsive, and engaging user interfaces using modern frameworks like React and Vue.</p>
            </div>
            <div className="card service-card">
              <div className="service-icon"><Code2 size={28} /></div>
              <h3>Backend Dev</h3>
              <p>Building robust, scalable, and secure server-side applications and APIs using Node.js and Express.</p>
            </div>
            <div className="card service-card">
              <div className="service-icon"><Database size={28} /></div>
              <h3>Database Design</h3>
              <p>Designing efficient database schemas and managing data with MongoDB, PostgreSQL, and MySQL.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="hero-subtitle">PORTFOLIO</span>
            <h2 className="section-title">Featured Works</h2>
            <p className="section-subtitle">A collection of my recent projects demonstrating my technical expertise.</p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center' }}>Loading projects...</div>
          ) : (
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project._id} className={`project-row delay-${(index % 3) * 100} animate-fade-in-up`}>
                  <div className="project-image-container">
                    <img 
                      src={project.imageUrl || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'} 
                      alt={project.title} 
                      className="project-image"
                      onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'}
                    />
                  </div>
                  <div className="project-info">
                    <h3 className="text-gradient">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href={project.githubLink} className="btn btn-secondary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} target="_blank" rel="noreferrer">
                        <Code size={16} /> Source Code
                      </a>
                      <a href={project.liveLink} className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }} target="_blank" rel="noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="hero-subtitle">GET IN TOUCH</span>
            <h2 className="section-title">Contact Me</h2>
          </div>

          <div className="contact-grid delay-100 animate-fade-in-up">
            <div className="contact-info">
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Let's discuss your next project!</h3>
              
              <div className="contact-info-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Email</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>hello@johndoe.com</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Phone</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Location</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '3rem 0', backgroundColor: 'var(--bg-main)', textAlign: 'center', color: 'var(--text-secondary)', borderTop: '1px solid var(--card-border)' }}>
        <div className="container">
          <div className="logo text-gradient" style={{ marginBottom: '1rem', display: 'inline-block' }}>Portfolio</div>
          <p>© {new Date().getFullYear()} Prince Desai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
