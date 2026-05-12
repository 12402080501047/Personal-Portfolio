import { useState, useEffect } from 'react';
import { 
  Code, ExternalLink, Mail, ArrowRight, Code2, 
  Database, Layout, Download, Briefcase, GraduationCap, 
  MapPin, Phone, User
} from 'lucide-react';
import './index.css';

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
              title: 'E-commerce Dashboard',
              description: 'A comprehensive admin dashboard for e-commerce platforms. Features real-time sales tracking, inventory management, and beautiful data visualizations.',
              imageUrl: '/project1.webp',
              technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
              githubLink: '#',
              liveLink: '#'
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
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#experience" className="nav-link">Experience</a></li>
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
                <a href="#contact" className="btn btn-primary">
                  Hire Me
                </a>
                <a href="#" className="btn btn-secondary">
                  <Download size={18} /> Download CV
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper delay-300 animate-fade-in-up">
              <div className="hero-image-circle">
                <img src="/profile.jpg" alt="Prince Desai" className="hero-image" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="hero-subtitle">WHAT I DO</span>
            <h2 className="section-title">My Services</h2>
            <p className="section-subtitle">
              Delivering high-quality solutions across the full stack of web development.
            </p>
          </div>
          
          <div className="services-grid delay-100 animate-fade-in-up">
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

      {/* Experience Section */}
      <section className="section" id="experience" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-header animate-fade-in-up">
            <span className="hero-subtitle">MY JOURNEY</span>
            <h2 className="section-title">Experience & Education</h2>
          </div>

          <div className="timeline delay-100 animate-fade-in-up">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2021 - Present</div>
              <div className="card" style={{ padding: '1.5rem 2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Briefcase size={20} className="text-gradient" /> Senior Full-Stack Developer
                </h3>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>Tech Solutions Inc.</h4>
                <p style={{ fontSize: '0.95rem' }}>Led a team of 5 developers in rebuilding the core e-commerce platform, improving performance by 40% and increasing conversion rates.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018 - 2021</div>
              <div className="card" style={{ padding: '1.5rem 2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Briefcase size={20} className="text-gradient" /> Web Developer
                </h3>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>Creative Agency</h4>
                <p style={{ fontSize: '0.95rem' }}>Developed responsive websites for various clients. Integrated third-party APIs and managed databases for seamless data flow.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2014 - 2018</div>
              <div className="card" style={{ padding: '1.5rem 2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <GraduationCap size={20} className="text-gradient" /> Bachelor of Computer Science
                </h3>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>University of Technology</h4>
                <p style={{ fontSize: '0.95rem' }}>Graduated with honors. Specialized in software engineering and database architectures.</p>
              </div>
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
