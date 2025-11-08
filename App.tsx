import React from 'react';
import ScrollReveal from './components/ScrollReveal';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const skills = [
    'UI/UX Design', 'Branding', 'Web Development', 'React', 'Tailwind CSS', 'Financial Content'
  ];

  const projects = [
    {
      title: "Luxefiz - Brand Identity & Web Platform",
      description: "A comprehensive digital presence for a modern marketing agency, featuring a bold brand identity and a performant client-facing website built with React and Tailwind CSS.",
      imageUrl: "https://picsum.photos/seed/luxefiz/600/400",
      link: "https://www.luxefiz.com/"
    },
    {
      title: "FinSights - Financial Content Hub",
      description: "An editorial platform designed to demystify stock market concepts for beginners. The UI/UX focuses on readability and clear data visualization to enhance learning.",
      imageUrl: "https://picsum.photos/seed/finsights/600/400",
      link: "#"
    },
    {
      title: "SaasKit - UI/UX for a Development Kit",
      description: "A clean and developer-friendly interface for a SaaS boilerplate. The design system prioritizes scalability, consistency, and ease of use for rapid application development.",
      imageUrl: "https://picsum.photos/seed/saaskit/600/400",
      link: "#"
    }
  ];
  
  const badges = ['Web Design', 'UI/UX', 'Branding', 'Marketing', 'Saas Development', 'Web Development', 'Financial Content'];

  return (
    <div className="bg-white text-[#111111] overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-6">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          <ScrollReveal>
            <img 
              src="/palani-durai-founder-of-luxefiz.png" 
              alt="Palani Durai" 
              className="w-24 h-24 md:w-32 md:h-40 rounded-full object-cover mx-auto mb-8 shadow-md"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight">
              Palani Durai
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto text-gray-700">
              Digital Branding, Web Design & Financial Content
              <br />
              <span className="text-[#9f009f]">Founder of Luxefiz</span>
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-8 max-w-5xl">
              {badges.map((badge, index) => (
                <span key={index} className="text-xs md:text-sm text-gray-600 border border-gray-300 rounded-full px-4 py-1.5 transition-colors hover:bg-gray-100">
                  {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <a 
              href="https://www.luxefiz.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-block mt-10 px-8 py-3 rounded-full border border-[#9f009f] text-[#9f009f] font-medium text-base transition-all duration-300 ease-in-out hover:bg-[#9f009f] hover:text-white"
            >
              Visit Luxefiz
            </a>
          </ScrollReveal>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 ">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
              The Intersection of Code, Creativity, and Capital.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed text-center">
              I am Palani Durai, a B.Tech IT student from Coimbatore with a distinct passion for building exceptional digital identities. As the founder of Luxefiz, I specialize in transforming ideas into tangible realities through strategic branding, intuitive web design, and robust SaaS development. My work is driven by a minimalist philosophy and an obsession with detail. Beyond the digital canvas, I dedicate my time to demystifying the Indian stock market, creating accessible financial content for aspiring investors.
            </p>
          </ScrollReveal>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-12">
              Selected Works
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.1}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Let's Create Together.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a 
              href="mailto:rpd.palani.durai@gmail.com" 
              className="text-xl md:text-2xl text-[#9f009f] inline-block relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-[#9f009f] after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              palaniduraiir@gmail.com
            </a>
          </ScrollReveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Palani Durai (RPD). All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;