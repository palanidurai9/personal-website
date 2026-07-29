import React from 'react';
import Navbar from './components/Navbar';
import ScrollReveal from './components/ScrollReveal';
import ProjectCard from './components/ProjectCard';
import ServiceCard from './components/ServiceCard';

const App: React.FC = () => {
  const services = [
    { title: "Brand Identity", description: "Creating memorable brands with strategy, visual consistency, and a strong digital presence." },
    { title: "Websites", description: "Fast, responsive, SEO-friendly websites built with modern technologies and exceptional user experience." },
    { title: "SaaS Products", description: "Scalable software platforms designed to solve real business problems with clean architecture and intuitive workflows." },
    { title: "AI Solutions", description: "Integrating artificial intelligence into products to automate workflows, improve productivity, and deliver smarter user experiences." },
    { title: "UI / UX Design", description: "Designing interfaces that balance aesthetics, usability, accessibility, and performance." },
    { title: "Product Development", description: "From idea validation to deployment, building complete digital products that are ready for real-world users." }
  ];

  const projects = [
    { title: "Luxefiz", tags: "Branding • Web Development • Strategy", description: "A digital agency focused on branding, websites, digital marketing, SaaS development, and business growth solutions.", imageUrl: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop" },
    { title: "ParkVoid", tags: "Marketplace • SaaS • Mobile First", description: "A smart parking marketplace connecting vehicle owners with people who have unused parking spaces.", imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" },
    { title: "DealPicks AI", tags: "AI • Automation • E-commerce", description: "An AI-powered platform that discovers, filters, and shares the best online deals through intelligent automation.", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
    { title: "Personal Portfolio", tags: "Portfolio • UI/UX • Development", description: "My digital space where I document projects, experiments, ideas, and the journey of building products.", imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" }
  ];

  const frontendTech = ["React", "Next.js", "HTML", "CSS", "JavaScript", "Tailwind CSS"];
  const backendTech = ["Node.js", "Express", "Firebase", "Supabase", "REST APIs"];
  const databaseTech = ["Firestore", "Supabase PostgreSQL", "MySQL"];
  const designTech = ["Figma", "Canva", "Brand Identity", "UI Design"];
  const devTech = ["Git", "GitHub", "Vercel", "Netlify", "FlutterFlow", "AI Integration"];

  return (
    <>
      <Navbar />

      <main>
        {/* 1. Hero */}
        <section className="hero">
          <div className="container text-center">
            <ScrollReveal>
              <div className="section-label">Palani Durai</div>
              <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: 500 }}>Founder of Luxefiz • Product Builder • Full-Stack Developer</p>
              <h1 className="hero-title text-gradient" style={{ margin: '0 auto 1.5rem auto' }}>Building Digital Products That Make Businesses Grow.</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="hero-subtitle">
                I help startups, creators, and businesses transform ideas into modern digital products through branding, websites, SaaS platforms, and AI-powered solutions. Every project is crafted with simplicity, performance, and long-term scalability at its core.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Let's Work Together</a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 2. About */}
        <section id="about" style={{ background: 'var(--bg-accent)' }}>
          <div className="container">
            <ScrollReveal>
              <div className="section-label text-center">About Me</div>
              <h2 className="section-title text-center">About Me</h2>
            </ScrollReveal>
            <div className="grid-2" style={{ alignItems: 'center', marginTop: '3rem' }}>
              <ScrollReveal>
                <div className="glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <img 
                    src="/palani-durai-founder-of-luxefiz.png" 
                    alt="Palani Durai" 
                    style={{ 
                      width: '100%', 
                      maxWidth: '300px', 
                      borderRadius: 'var(--radius-md)',
                      filter: 'grayscale(20%)'
                    }} 
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div style={{ padding: '1rem 0' }}>
                  <p>I'm Palani Durai, founder of Luxefiz, where I build digital experiences that combine design, technology, and business strategy.</p>
                  <p>I enjoy taking ideas from concept to launch—designing intuitive interfaces, developing scalable applications, and creating brands that leave a lasting impression.</p>
                  <p>Whether it's a startup website, SaaS platform, AI solution, or complete digital identity, I focus on building products that are clean, fast, reliable, and built for real users.</p>
                  <p>Every project is approached with attention to detail, thoughtful problem-solving, and a commitment to delivering meaningful results.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3. Philosophy */}
        <section>
          <div className="container text-center" style={{ maxWidth: '800px' }}>
            <ScrollReveal>
              <div className="section-label">My Philosophy</div>
              <h2 className="section-title text-gradient" style={{ marginBottom: '2rem' }}>Great products aren't created by adding more. <br/><span style={{color: 'var(--text-secondary)'}}>They're created by removing distractions.</span></h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>I believe every interface should be clear, every interaction should feel natural, and every feature should exist for a reason.</p>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>Good design attracts attention.<br/>Great products earn trust.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* 4. Services */}
        <section id="services" style={{ background: 'var(--bg-accent)' }}>
          <div className="container text-center">
            <ScrollReveal>
              <div className="section-label">What I Do</div>
              <h2 className="section-title">What I Build</h2>
            </ScrollReveal>
            <div className="grid-2" style={{ textAlign: 'left', marginTop: '4rem' }}>
              {services.map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <ServiceCard title={service.title} description={service.description} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Featured Projects */}
        <section id="projects">
          <div className="container text-center">
            <ScrollReveal>
              <div className="section-label">Featured Projects</div>
              <h2 className="section-title">Featured Projects</h2>
            </ScrollReveal>
            <div className="grid-2" style={{ textAlign: 'left', marginTop: '4rem' }}>
              {projects.map((project, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <ProjectCard 
                    title={project.title} 
                    tags={project.tags} 
                    description={project.description} 
                    imageUrl={project.imageUrl}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Technologies */}
        <section style={{ background: 'var(--bg-accent)' }}>
          <div className="container text-center">
            <ScrollReveal>
              <div className="section-label">Skills</div>
              <h2 className="section-title">Technologies & Tools</h2>
            </ScrollReveal>
            <div className="grid-2" style={{ textAlign: 'left', marginTop: '4rem' }}>
              <ScrollReveal delay={0.1}>
                <h3 style={{ marginBottom: '1rem' }}>Frontend</h3>
                <div className="tech-container" style={{ marginBottom: '2rem' }}>
                  {frontendTech.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Backend</h3>
                <div className="tech-container">
                  {backendTech.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h3 style={{ marginBottom: '1rem' }}>Databases</h3>
                <div className="tech-container" style={{ marginBottom: '2rem' }}>
                  {databaseTech.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Design</h3>
                <div className="tech-container" style={{ marginBottom: '2rem' }}>
                  {designTech.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Development</h3>
                <div className="tech-container">
                  {devTech.map(tech => <span key={tech} className="tech-pill">{tech}</span>)}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 7. Why Work With Me */}
        <section>
          <div className="container text-center" style={{ maxWidth: '800px' }}>
            <ScrollReveal>
              <div className="section-label">Why Choose Me</div>
              <h2 className="section-title">I don't just build websites.<br /><span className="text-gradient">I build complete digital products.</span></h2>
              <p>From branding and user experience to development and deployment, I focus on delivering solutions that are modern, scalable, and aligned with business goals.</p>
              <p>Every project is built with performance, maintainability, and long-term growth in mind.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* 8. Contact */}
        <section id="contact" style={{ background: 'var(--bg-accent)' }}>
          <div className="container text-center">
            <ScrollReveal>
              <div className="section-label">Contact</div>
              <h2 className="section-title text-gradient">Let's Build Something Great Together.</h2>
              <p style={{ maxWidth: '600px', fontSize: '1.25rem', margin: '0 auto 1.5rem auto' }}>Whether you're launching a startup, growing your business, or turning an idea into reality, I'd love to hear your story.</p>
              <p style={{ maxWidth: '600px', fontSize: '1.25rem', margin: '0 auto 3rem auto' }}>Let's create something meaningful.</p>
              <a href="mailto:palaniduraiir@gmail.com" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '16px 32px' }}>
                📧 palaniduraiir@gmail.com
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="footer">
        <div className="container">
          <ScrollReveal>
            <div className="footer-title" style={{ marginBottom: '0.5rem' }}>Palani Durai</div>
            <div className="footer-text" style={{ marginBottom: '1rem' }}>Founder of Luxefiz</div>
            <div className="footer-text" style={{ maxWidth: '400px', margin: '0 auto 2rem auto' }}>Building modern digital products with design, technology, and purpose.</div>
            <div className="footer-text">© 2026 Palani Durai. All Rights Reserved.</div>
          </ScrollReveal>
        </div>
      </footer>
    </>
  );
};

export default App;