import { useState, useEffect } from 'react';
import { Github, ExternalLink, Mail, ArrowRight, Code2, Database, Layout } from 'lucide-react';
import './index.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const [projectsRes, skillsRes] = await Promise.all([
          fetch('http://localhost:5000/api/projects').catch(() => null),
          fetch('http://localhost:5000/api/skills').catch(() => null)
        ]);

        if (projectsRes && projectsRes.ok) {
          setProjects(await projectsRes.json());
        } else {
          // Fallback data if backend is not running
          setProjects([
            {
              _id: '1',
              title: 'E-commerce Platform',
              description: 'A full-stack e-commerce solution with payment integration.',
              imageUrl: '/project1.webp',
              technologies: ['React', 'Node.js', 'MongoDB'],
              githubLink: '#',
              liveLink: '#'
            },
            {
              _id: '2',
              title: 'Task Management App',
              description: 'A productivity app for managing tasks and team collaboration.',
              imageUrl: '/project2.webp',
              technologies: ['Vue.js', 'Express', 'PostgreSQL'],
              githubLink: '#',
              liveLink: '#'
            }
          ]);
        }

        if (skillsRes && skillsRes.ok) {
          setSkills(await skillsRes.json());
        } else {
          setSkills([
            { _id: '1', name: 'React', category: 'Frontend' },
            { _id: '2', name: 'JavaScript', category: 'Frontend' },
            { _id: '3', name: 'CSS', category: 'Frontend' },
            { _id: '4', name: 'Node.js', category: 'Backend' },
            { _id: '5', name: 'Express.js', category: 'Backend' },
            { _id: '6', name: 'MongoDB', category: 'Database' }
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

  const getCategoryIcon = (category) => {
    switch(category.toLowerCase()) {
      case 'frontend': return <Layout size={18} />;
      case 'backend': return <Code2 size={18} />;
      case 'database': return <Database size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo text-gradient">JD.</div>
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#skills" className="nav-link">Skills</a></li>
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
              <span className="hero-subtitle">Full-Stack Developer</span>
              <h1 className="hero-title">
                Crafting <span className="text-gradient">digital</span><br /> experiences.
              </h1>
              <p className="hero-desc delay-100 animate-fade-in-up">
                I specialize in building exceptional websites, applications, and everything in between. Passionate about beautiful UI and robust backend architecture.
              </p>
              <div className="hero-actions delay-200 animate-fade-in-up">
                <a href="#projects" className="btn btn-primary">
                  View Work <ArrowRight size={18} />
                </a>
                <a href="#contact" className="btn btn-secondary">
                  Contact Me
                </a>
              </div>
            </div>
            <div className="hero-image-wrapper delay-300 animate-fade-in-up">
              <img src="/avatar.webp" alt="Profile" className="hero-image" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80'} />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="container">
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>My Toolbox</h2>
          <p className="text-secondary" style={{ marginBottom: '2rem' }}>The technologies I work with to bring ideas to life.</p>
          
          {loading ? (
            <p>Loading skills...</p>
          ) : (
            <div className="skills-container">
              {skills.map(skill => (
                <div key={skill._id} className="skill-item glass-panel">
                  {getCategoryIcon(skill.category)}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="container">
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured Projects</h2>
          <p className="text-secondary" style={{ marginBottom: '2rem' }}>A selection of my recent work across frontend and backend.</p>

          {loading ? (
            <p>Loading projects...</p>
          ) : (
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project._id} className={`project-card glass-panel delay-${(index % 3) * 100} animate-fade-in-up`}>
                  <img 
                    src={project.imageUrl || 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80'} 
                    alt={project.title} 
                    className="project-image"
                    onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80'}
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.githubLink} className="project-link" target="_blank" rel="noreferrer">
                        <Github size={18} /> Code
                      </a>
                      <a href={project.liveLink} className="project-link" target="_blank" rel="noreferrer">
                        <ExternalLink size={18} /> Live Demo
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
      <section className="section" id="contact" style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's work together</h2>
            <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              I'm currently available for freelance work and full-time opportunities. If you have a project that needs some creative magic, I'd love to hear about it.
            </p>
            <a href="mailto:hello@example.com" className="btn btn-primary">
              <Mail size={18} /> Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} John Doe. Built with React & Node.js.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
